import React, { useState } from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import styles from "../../assets/styles/DisplayScreenStyles";

import BackIconGreen from "../../assets/SVG/BackIconGreen";
import ShapesTop from "../../assets/SVG/ShapesTop";
import LightIcon from "../../assets/SVG/LightIcon";
import DarkIcon from "../../assets/SVG/DarkIcon";
import AutomaticIcon from "../../assets/SVG/AutomaticIcon";

const { width } = Dimensions.get("window");

const DisplayScreen = ({ route, navigation }) => {
  const [selectedMode, setSelectedMode] = useState("Automatic"); // Default to "Automatic"

  const handleSelect = (mode) => {
    setSelectedMode(mode);
    // You can also save the selected mode to async storage or update your app's theme here
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backIconContainer}
        onPress={() => navigation.goBack()}
      >
        <BackIconGreen style={styles.backIcon} />
      </TouchableOpacity>
      <View style={styles.header}>
        <ShapesTop width="100%" height={150} />
        <Text style={styles.title}>Pamja</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.subtitle}>Zgjidh pamjen vizuale</Text>

        {/* Light Mode Option */}
        <TouchableOpacity
          style={styles.radioButton}
          onPress={() => handleSelect("Light")}
        >
          <View style={styles.iconContainer}>
            <LightIcon style={styles.icon} />
          </View>
          <Text style={styles.radioText}>E ndritshme</Text>
          <View style={styles.radioCircle}>
            {selectedMode === "Light" && <View style={styles.selectedRb} />}
          </View>
        </TouchableOpacity>

        {/* Dark Mode Option */}
        <TouchableOpacity
          style={styles.radioButton}
          onPress={() => handleSelect("Dark")}
        >
          <View style={styles.iconContainer}>
            <DarkIcon style={styles.icon} />
          </View>
          <Text style={styles.radioText}>E errët</Text>
          <View style={styles.radioCircle}>
            {selectedMode === "Dark" && <View style={styles.selectedRb} />}
          </View>
        </TouchableOpacity>

        {/* Automatic Mode Option */}
        <TouchableOpacity
          style={styles.radioButton}
          onPress={() => handleSelect("Automatic")}
        >
          <View style={styles.iconContainer}>
            <AutomaticIcon style={styles.icon} />
          </View>
          <Text style={styles.radioText}>Automatike</Text>
          <View style={styles.radioCircle}>
            {selectedMode === "Automatic" && <View style={styles.selectedRb} />}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DisplayScreen;
