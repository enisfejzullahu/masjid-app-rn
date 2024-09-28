import React from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";
import styles from "../../assets/styles/InfoCardStyles";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import LocationIcon from "../../assets/SVG/LocationIcon";
import ContactIcon from "../../assets/SVG/ContactIcon";
import AvailabilityIcon from "../../assets/SVG/AvailabilityIcon";

const InfoCard = ({ mosqueDetails, settingsButton }) => {
  const navigation = useNavigation();

  const handleLocationPress = () => {
    const locationUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      mosqueDetails.adresa
    )}`;
    const appleMapsUrl = `maps://?q=${encodeURIComponent(
      mosqueDetails.adresa
    )}`;

    Linking.canOpenURL("comgooglemaps://").then((supported) => {
      if (supported) {
        Linking.openURL(locationUrl);
      } else {
        // Fallback to Apple Maps if Google Maps is not installed
        Linking.openURL(appleMapsUrl);
      }
    });
  };

  const handlePhonePress = () => {
    const phoneUrl = `tel:${mosqueDetails.kontakti}`;
    Linking.openURL(phoneUrl);
  };

  if (!mosqueDetails) {
    return (
      <View style={styles.card}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{mosqueDetails.emri}</Text>
        {settingsButton && (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("DetailsScreen", {
                mosqueId: mosqueDetails.id,
              })
            }
          >
            <MaterialIcons
              name="more-horiz"
              size={32}
              color="black"
              style={styles.moreIcon}
            />
          </TouchableOpacity>
        )}
      </View>
      {mosqueDetails.adresa && (
        <TouchableOpacity style={styles.infoItem} onPress={handleLocationPress}>
          <LocationIcon width={14} height={14} style={styles.icon} />
          <Text style={styles.infoText}>{mosqueDetails.adresa}</Text>
        </TouchableOpacity>
      )}
      {mosqueDetails.kontakti && (
        <TouchableOpacity style={styles.infoItem} onPress={handlePhonePress}>
          <ContactIcon width={14} height={14} style={styles.icon} />
          <Text style={styles.infoText}>{mosqueDetails.kontakti}</Text>
        </TouchableOpacity>
      )}
      <View style={styles.infoItem}>
        <AvailabilityIcon width={14} height={14} style={styles.icon} />
        <Text style={styles.infoText}>Hapur 24/7</Text>
      </View>
    </View>
  );
};

export default InfoCard;
