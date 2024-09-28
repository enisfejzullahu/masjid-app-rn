import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import styles from "../../assets/styles/DonateScreenStyles";
import { CircularProgress } from "react-native-svg-circular-progress";


import BackIconGreen from "../../assets/SVG/BackIconGreen";
import ShapesTop from "../../assets/SVG/ShapesTop";
import ShareIcon from "../../assets/SVG/ShareIcon";

const DonateScreen2 = ({ route, navigation }) => {
  const { title, goal, currentAmount, description } = route.params || {};
  const progress = (currentAmount / goal) * 100;


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableOpacity
        style={styles.backIconContainer}
        onPress={() => navigation.goBack()}
      >
        <BackIconGreen style={styles.backIcon} />
      </TouchableOpacity>
      <View style={styles.header}>
        <ShapesTop width="100%" height={150} />
        <Text style={styles.title}>Donacione</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.topPart}>
          <View style={styles.topLeftPart}>
            <Text style={styles.cardTitle}>{title || "No Title"}</Text>
            <TouchableOpacity style={styles.shareButton}>
              <ShareIcon width={30} height={30} />
              <Text style={styles.shareText}>Shpërndaje</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.progressCircleContainer}>
            <CircularProgress
              percentage={progress}
              fillColor="#fff"
              tintColor="#06A85D"
              backgroundColor="#2CC484"
              radius={100}
              strokeWidth={37}
            />
            <View style={styles.centeredTextContainer}>
              <Text style={styles.amountText}>${currentAmount || "0"}</Text>
              <View style={styles.smalldivider} />
              <Text style={styles.amountText}>${goal || "0"}</Text>
            </View>
          </View>
        </View>
        <View style={styles.middlePart}>
          <Text style={styles.text}>{description}</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default DonateScreen2;
