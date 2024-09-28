import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import moment from "moment-hijri";
import CustomCountdown from "./CustomCountdown";
import styles from "../../assets/styles/DateCardStyles";

const DateCard = ({
  currentPrayerTime,
  nextPrayerTime,
  onNextPrayerTime,
  countdown,
}) => {
  const [activePrayerTime, setActivePrayerTime] = useState(nextPrayerTime);

  useEffect(() => {
    setActivePrayerTime(nextPrayerTime);
  }, [nextPrayerTime]);

  const now = moment().toDate();
  moment.locale('en');


  const albanianDate = now.toLocaleDateString("sq-AL", {
    weekday: "short",
    month: "long",
    day: "numeric",
  });
  const hijriDate = moment().format('iMMMM iD, iYYYY');



  const getPrayerTimePhrase = (name) => {
    switch (name) {
      case "Imsaku":
        return "deri në Imsak";
      case "Agimi":
        return "deri në Agim";
      case "Dreka":
        return "deri në Drekë";
      case "Ikindia":
        return "deri në Ikindi";
      case "Akshami":
        return "deri në Aksham";
      case "Jacia":
        return "deri në Jaci";
      default:
        return "deri në namaz";
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.leftPart}>
          <CustomCountdown
            hours={countdown.hours}
            minutes={countdown.minutes}
            seconds={countdown.seconds}
          />
          <Text style={styles.infoText}>
            {getPrayerTimePhrase(activePrayerTime?.name || "Imsaku")}
          </Text>
        </View>
        <View style={styles.rightPart}>
          <Text style={styles.dateText}>{albanianDate}</Text>
          <Text style={styles.hijriDateText}>{hijriDate} AH</Text>
        </View>
      </View>
    </View>
  );
};

export default DateCard;
