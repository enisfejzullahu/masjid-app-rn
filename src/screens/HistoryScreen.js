import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  Modal,
  StyleSheet,
  Dimensions,
} from "react-native";
import ImageViewer from "react-native-image-viewing";
import styles from "../../assets/styles/HistoryScreenStyles";
import { getHistoriku } from "../database/Api";

import BackIconGreen from "../../assets/SVG/BackIconGreen";
import ShapesTop from "../../assets/SVG/ShapesTop";

const { width } = Dimensions.get("window");

const HistoryScreen = ({ route, navigation }) => {
  const { mosqueId } = route.params;
  const [historiku, setHistoriku] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    const fetchHistoriku = async () => {
      const historikuData = await getHistoriku(mosqueId);
      if (historikuData.message) {
        setError(historikuData.message);
      } else {
        setHistoriku(historikuData);
      }
      setLoading(false);
    };

    fetchHistoriku();
  }, [mosqueId]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#06A85D" />
      </View>
    );
  }

  if (error) {
    return <Text style={styles.errorText}>{error}</Text>;
  }

  const photos = historiku.photos || []; // Array of photo URLs
  const topPhoto = photos[0]; // The top image
  const additionalPhotos = photos.slice(1); // The rest of the images

  const handleImagePress = (index) => {
    setSelectedImageIndex(index);
    setModalVisible(true);
  };

  return (
    <ScrollView style={styles.container} bounces={false}>
      <TouchableOpacity
        style={styles.backIconContainer}
        onPress={() => navigation.goBack()}
      >
        <BackIconGreen style={styles.backIcon} />
      </TouchableOpacity>
      <View style={styles.header}>
        <ShapesTop width="100%" height={150} />
        <Text style={styles.title}>Historiku</Text>
      </View>
      <View style={styles.card}>
        <TouchableOpacity onPress={() => handleImagePress(0)}>
          <Image source={{ uri: topPhoto }} style={styles.topImage} />
        </TouchableOpacity>
        <View style={styles.insideCard}>
          <Text style={styles.historikuTitle}>{historiku.title}</Text>
          <Text style={styles.historikuText}>{historiku.text}</Text>
        </View>
      </View>
      <View style={styles.card2}>
        <Text style={styles.fotoTitle}>Foto të xhamisë</Text>
        <TouchableOpacity onPress={() => handleImagePress(0)}>
          <Image source={{ uri: topPhoto }} style={styles.topImage} />
        </TouchableOpacity>
        <View style={styles.imagesRow}>
          {additionalPhotos.slice(0, 2).map((image, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleImagePress(index + 1)}
            >
              <Image source={{ uri: image }} style={styles.thumbnailImage} />
            </TouchableOpacity>
          ))}
          {additionalPhotos.length > 3 && (
            <TouchableOpacity
              onPress={() => handleImagePress(3)}
              style={styles.moreImagesOverlay}
            >
              <Image
                source={{ uri: additionalPhotos[3] }}
                style={styles.thumbnailImageWithOpacity}
              />
              <View style={styles.moreImagesTextContainer}>
                <Text style={styles.moreImagesText}>
                  +{additionalPhotos.length - 3}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Full-Screen Modal with Swipe and Zoom */}
      <ImageViewer
        images={photos.map((uri) => ({ uri }))}
        imageIndex={selectedImageIndex}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      />
    </ScrollView>
  );
};

export default HistoryScreen;
