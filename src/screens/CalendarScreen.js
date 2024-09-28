import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import prayerTimesData from "../database/PrayerTimesKS.json";
import styles from "../../assets/styles/CalendarScreenStyles";
import BackIconGreen from "../../assets/SVG/BackIconGreen";
import ShapesTop from "../../assets/SVG/ShapesTop";

// Month names array (in Albanian)
const monthNames = [
  "Janar",
  "Shkurt",
  "Mars",
  "Prill",
  "Maj",
  "Qershor",
  "Korrik",
  "Gusht",
  "Shtator",
  "Tetor",
  "Nentor",
  "Dhjetor",
];

const importantDates = [
  { date: "1 Janar", event: "Viti i Ri" },
  { date: "28 Nëntor", event: "Dita e Pavarësisë" },
  { date: "12 Korrik", event: "Fitër Bajrami" },
  { date: "19 Korrik", event: "Kurban Bajrami" },
  // Add more important dates as needed
];

const CalendarScreen = ({ route, navigation }) => {
  // Set the current month and year
  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth() + 1); // Months are 0-based in JavaScript
  const [currentYear] = useState(currentDate.getFullYear());

  // Get today's date
  const today = currentDate.getDate();

  // Filter prayer times for the selected month
  const filteredPrayerTimes = prayerTimesData.filter(
    (day) => day.Muaji === currentMonth
  );

  // Function to navigate months
  const handleMonthChange = (direction) => {
    setCurrentMonth((prevMonth) => {
      if (direction === "left") {
        return prevMonth === 1 ? 12 : prevMonth - 1;
      } else {
        return prevMonth === 12 ? 1 : prevMonth + 1;
      }
    });
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
      </View>

      {/* Navigation Arrows */}
      <View style={styles.navigationContainer}>
        <TouchableOpacity onPress={() => handleMonthChange("left")}>
          <MaterialIcons name="arrow-left" size={30} color="green" />
        </TouchableOpacity>

        {/* Display month name and year */}
        <Text style={styles.monthText}>
          {monthNames[currentMonth - 1]} {currentYear}
        </Text>

        <TouchableOpacity onPress={() => handleMonthChange("right")}>
          <MaterialIcons name="arrow-right" size={30} color="green" />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.scrollView}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.card}>
          <View style={styles.tableHeader}>
            <Text style={styles.headerText}>Data</Text>
            <Text style={styles.headerText}>Imsaku</Text>
            <Text style={styles.headerText}>Agimi</Text>
            <Text style={styles.headerText}>Dreka</Text>
            <Text style={styles.headerText}>Ikindia</Text>
            <Text style={styles.headerText}>Akshami</Text>
            <Text style={styles.headerText}>Jacia</Text>
          </View>
          <ScrollView
            style={styles.scrollView}
            bounces={false}
            showsVerticalScrollIndicator={false}
          >
            {/* Table Rows */}
            {filteredPrayerTimes.map((day, index) => (
              <View
                key={index}
                style={[
                  styles.tableRow,
                  // Check if the current row's day, month, and year match today's date
                  parseInt(day.Data) === today &&
                  day.Muaji === currentDate.getMonth() + 1
                    ? { backgroundColor: "#2CC484", borderRadius: 10 } // Highlight today's date
                    : {},
                ]}
              >
                <Text style={styles.cellText}>{day.Data}</Text>
                <Text style={styles.cellText}>{day.Imsaku}</Text>
                <Text style={styles.cellText}>{day.Agimi}</Text>
                <Text style={styles.cellText}>{day.Dreka}</Text>
                <Text style={styles.cellText}>{day.Ikindia}</Text>
                <Text style={styles.cellText}>{day.Akshami}</Text>
                <Text style={styles.cellText}>{day.Jacia}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Ditët dhe Netët e Mëdha Në Vitin 2024 (1445-1446 H.)</Text>

          {/* Mapping through important dates */}
          {importantDates.map((item, index) => (
            <View key={index} style={styles.dateRow}>
              <Text style={styles.dateText}>{item.date}</Text>
              <Text style={styles.eventText}>{item.event}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default CalendarScreen;
