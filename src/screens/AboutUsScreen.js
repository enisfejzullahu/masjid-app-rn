import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../../assets/styles/AboutUsScreenStyles";

import BackIconGreen from "../../assets/SVG/BackIconGreen";
import ShapesTop from "../../assets/SVG/ShapesTop";

const AboutUsScreen = ({ navigation }) => {
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
        <Text style={styles.title}>Rreth Nesh</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.subtitle}>Kush jemi ne?</Text>
        <Text style={styles.description}>
          Aplikacioni është dizajnuar dhe zhvilluar nga Enis Fejzullahu me
          qëllim që të përfshihen të gjitha xhamitë e territoreve shqiptare, dhe
          pse jo të zgjerohet edhe më tej. Misioni ynë është të ofrojmë një
          platformë të besueshme dhe të lehtë për t'u përdorur për të gjithë
          besimtarët muslimanë në mbarë botën.
        </Text>
      </View>
    </View>
  );
};

export default AboutUsScreen;
