import React, { useCallback, useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFocusEffect } from "@react-navigation/native";
import storage from "../database/Storage.js";
import { getMosqueInfo } from "../database/Api.js";

import styles from "../../assets/styles/MenuScreenStyles.js";

import BackIconGreen from "../../assets/SVG/BackIconGreen";
import ShapesTop from "../../assets/SVG/ShapesTop";
import LocationIconWhite from "../../assets/SVG/LocationIconWhite";
import Dots from "../../assets/SVG/Dots.js";

const MenuScreen = ({ route, navigation }) => {
  const [favorites, setFavorites] = useState([]);
  const [favoriteMosques, setFavoriteMosques] = useState([]);

  useFocusEffect(
    useCallback(() => {
      const fetchFavorites = async () => {
        try {
          const storedFavorites = await storage.load({ key: "favorites" });
          setFavorites(storedFavorites);
        } catch (error) {
          console.error("Error loading favorites:", error);
          setFavorites([]);
        }
      };

      fetchFavorites();
    }, [])
  );

  useEffect(() => {
    if (favorites.length > 0) {
      const fetchFavoriteMosques = async () => {
        const mosqueDetails = await Promise.all(
          favorites.map(async (mosqueId) => {
            try {
              const mosqueInfo = await getMosqueInfo(mosqueId);
              return mosqueInfo;
            } catch (error) {
              console.error(error);
              return null;
            }
          })
        );
        setFavoriteMosques(mosqueDetails.filter((mosque) => mosque !== null));
      };

      fetchFavoriteMosques();
    }
  }, [favorites]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backIconContainer}
          onPress={() => navigation.goBack()}
        >
          <BackIconGreen style={styles.backIcon} />
        </TouchableOpacity>
        <ShapesTop width="100%" height={150} />
        <Text style={styles.title}>Rradhit</Text>
      </View>

      <View style={styles.listContainer}>
        {favoriteMosques.length === 0 ? (
          <Text style={styles.noFavoritesText}>No favorites found</Text>
        ) : (
          favoriteMosques.map((mosque) => (
            <View key={mosque.id} style={styles.cardContainer}>
              <View style={styles.card}>
                <Image
                  source={{ uri: mosque.imageUrl }} // Use uri for remote images
                  style={styles.cardImage}
                />
                <LinearGradient
                  colors={["transparent", "rgba(0, 0, 0, 0.8)"]}
                  style={styles.gradient}
                >
                  <View style={styles.cardContent}>
                    <Text style={styles.cardTitle}>{mosque.emri}</Text>
                    <View style={styles.cardInfo}>
                      <LocationIconWhite style={styles.locationIcon} />
                      <Text style={styles.locationText}>{mosque.adresa}</Text>
                    </View>
                  </View>
                </LinearGradient>
              </View>
              <View style={styles.dotsContainer}>
                <Dots />
              </View>
            </View>
          ))
        )}
      </View>
    </View>
  );
};

export default MenuScreen;
