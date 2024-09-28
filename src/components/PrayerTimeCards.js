import React from "react";
import { View, Text, StyleSheet } from "react-native";
import moment from "moment";
import styles from "../../assets/styles/PrayerTimeCardsStyles";

const PrayerTimeCards = ({
  icon: Icon,
  iconFilled: IconFilled,
  name,
  time,
  isCurrent,
  nextPrayerTime, // Added prop for the next prayer time
}) => {
  const now = moment(); // Current time
  const prayerTime = moment(time, "HH:mm"); // Prayer time parsed from string

  // Determine if this is the next prayer
  const isNextPrayer = nextPrayerTime && name === nextPrayerTime.name;

  // Calculate the countdown only if it's the next prayer time
  const countdown = isNextPrayer
    ? moment.duration(prayerTime.diff(now)).humanize()
    : null;

  return (
    <View style={[styles.box, isCurrent && styles.currentBox]}>
      <View style={styles.iconContainer}>
        {isCurrent ? (
          <IconFilled style={styles.icon} />
        ) : (
          <Icon style={styles.icon} />
        )}
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.name, isCurrent && styles.currentText]}>{name}</Text>
        <Text style={[styles.time, isCurrent && styles.currentText]}>{time}</Text>
        {countdown && !isCurrent && (
          <Text style={styles.countdown}>{countdown}</Text>
        )}
      </View>
    </View>
  );
};

export default PrayerTimeCards;
