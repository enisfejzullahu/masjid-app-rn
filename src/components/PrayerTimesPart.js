import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import PrayerTimeCards from "../components/PrayerTimeCards";
import styles from "../../assets/styles/HomeScreenStyles";

// Import JSON data
import prayerTimesData from "../database/PrayerTimesKS.json";

// Icons
import ImsakuIcon from "../../assets/SVG/ImsakuIcon";
import AgimiIcon from "../../assets/SVG/AgimiIcon";
import DrekaIcon from "../../assets/SVG/DrekaIcon";
import IkindiaIcon from "../../assets/SVG/IkindiaIcon";
import AkshamiIcon from "../../assets/SVG/AkshamiIcon";
import JaciaIcon from "../../assets/SVG/JaciaIcon";

// Filled Icons
import ImsakuFilled from "../../assets/SVG/ImsakuFilled";
import AgimiFilled from "../../assets/SVG/AgimiFilled";
import DrekaFilled from "../../assets/SVG/DrekaFilled";
import IkindiaFilled from "../../assets/SVG/IkindiaFilled";
import AkshamiFilled from "../../assets/SVG/AkshamiFilled";
import JaciaFilled from "../../assets/SVG/JaciaFilled";

const PrayerTimesPart = ({ currentPrayerTime }) => {
  const [prayerTimes, setPrayerTimes] = useState({});

  useEffect(() => {
    // Get today's date
    const today = new Date();
    const currentMonth = today.getMonth() + 1; // Months are 0-indexed
    const currentDate = today.getDate();

    // Find the prayer times for today
    const todayPrayerTimes = prayerTimesData.find(
      (entry) => entry.Muaji === currentMonth && entry.Data === currentDate
    );

    // If prayer times for today are found, update the state
    if (todayPrayerTimes) {
      setPrayerTimes(todayPrayerTimes);
    }
  }, []);

  return (
    <View style={styles.prayerTimesContainer}>
      <View style={styles.prayerTimeRow}>
        <PrayerTimeCards
          icon={ImsakuIcon}
          iconFilled={ImsakuFilled}
          name="Imsaku"
          time={prayerTimes.Imsaku || "N/A"}
          isCurrent={currentPrayerTime.name === "Imsaku"}
        />
        <PrayerTimeCards
          icon={AgimiIcon}
          iconFilled={AgimiFilled}
          name="Agimi"
          time={prayerTimes.Agimi || "N/A"}
          isCurrent={currentPrayerTime.name === "Agimi"}
        />
        <PrayerTimeCards
          icon={DrekaIcon}
          iconFilled={DrekaFilled}
          name="Dreka"
          time={prayerTimes.Dreka || "N/A"}
          isCurrent={currentPrayerTime.name === "Dreka"}
        />
      </View>
      <View style={styles.prayerTimeRow}>
        <PrayerTimeCards
          icon={IkindiaIcon}
          iconFilled={IkindiaFilled}
          name="Ikindia"
          time={prayerTimes.Ikindia || "N/A"}
          isCurrent={currentPrayerTime.name === "Ikindia"}
        />
        <PrayerTimeCards
          icon={AkshamiIcon}
          iconFilled={AkshamiFilled}
          name="Akshami"
          time={prayerTimes.Akshami || "N/A"}
          isCurrent={currentPrayerTime.name === "Akshami"}
        />
        <PrayerTimeCards
          icon={JaciaIcon}
          iconFilled={JaciaFilled}
          name="Jacia"
          time={prayerTimes.Jacia || "N/A"}
          isCurrent={currentPrayerTime.name === "Jacia"}
        />
      </View>
    </View>
  );
};

export default PrayerTimesPart;
