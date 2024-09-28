import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../../assets/styles/HomeScreenStyles"; // Ensure the correct path to your styles file

const DonationsCard = ({ navigation, mosqueId }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle2}>Donacione</Text>
      <TouchableOpacity
        style={styles.donationsButton}
        onPress={() => navigation.navigate("DonationsScreen", { mosqueId })}
      >
        <Text style={styles.donationsButtonText}>Dhuro për xhaminë</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DonationsCard;
