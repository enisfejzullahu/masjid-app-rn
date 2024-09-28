import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import moment from "moment";
import styles from "../../assets/styles/CustomCountdownStyles";

const CustomCountdown = ({ hours, minutes, seconds }) => {
  const paddedHours = String(hours).padStart(2, "0");
  const paddedMinutes = String(minutes).padStart(2, "0");
  const paddedSeconds = String(seconds).padStart(2, "0");

  return (
    <View style={styles.countdownContainer}>
      <Text style={styles.hoursText}>{paddedHours}</Text>
      <Text style={styles.colonText}>:</Text>
      <Text style={styles.minutesText}>{paddedMinutes}</Text>
      <Text style={styles.colonText}>:</Text>
      <Text style={styles.secondsText}>{paddedSeconds}</Text>
    </View>
  );
};

export default CustomCountdown;
