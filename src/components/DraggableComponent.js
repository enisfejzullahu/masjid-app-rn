import React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import Draggable from "react-native-draggable";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../../assets/styles/MenuScreenStyles.js";
import LocationIconWhite from "../../assets/SVG/LocationIconWhite";

const { width } = Dimensions.get("window");

const DraggableComponent = ({mosque}) => {
  return (
    <Draggable
      minY={0}
      minX={0}
      maxY={Dimensions.get("window").height}
      maxX={Dimensions.get("window").width}
      onDragRelease={(e, gestureState, bounds) => {
        console.log("Drag released at:", gestureState.moveY);
      }}
    >
      <View style={styles.card}>
        <Image source={{ uri: mosque.imageUrl }} style={styles.cardImage} />
        <LinearGradient
          colors={["transparent", "rgba(0, 0, 0, 0.7)"]}
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
    </Draggable>
  );
};

export default DraggableComponent;
