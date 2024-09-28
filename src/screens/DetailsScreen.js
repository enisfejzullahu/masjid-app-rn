import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../../assets/styles/DetailsScreenStyles";
import { MaterialIcons } from "@expo/vector-icons";

import BackIconGreen from "../../assets/SVG/BackIconGreen";
import ShapesTop from "../../assets/SVG/ShapesTop";
import ImsakuSmall from "../../assets/SVG/ImsakuSmall";
import AgimiSmall from "../../assets/SVG/AgimiSmall";
import DrekaSmall from "../../assets/SVG/DrekaSmall";
import IkindiaSmall from "../../assets/SVG/IkindiaSmall";
import AkshamiSmall from "../../assets/SVG/AkshamiSmall";
import JaciaSmall from "../../assets/SVG/JaciaSmall";

const prayerTimes = [
  { id: "imsaku", name: "Imsaku", icon: <ImsakuSmall width={28} /> },
  { id: "agimi", name: "Agimi", icon: <AgimiSmall width={28} /> },
  { id: "dreka", name: "Dreka", icon: <DrekaSmall width={28} /> },
  { id: "ikindia", name: "Ikindia", icon: <IkindiaSmall width={28} /> },
  { id: "akshami", name: "Akshami", icon: <AkshamiSmall width={28} /> },
  { id: "jacia", name: "Jacia", icon: <JaciaSmall width={28} /> },
];

const DetailsScreen = ({ route, navigation }) => {
  const [expandedRow, setExpandedRow] = useState(null);
  const [notificationSettings, setNotificationSettings] = useState({});
  const [minutesBefore, setMinutesBefore] = useState({});

  const toggleRow = (rowId) => {
    setExpandedRow(expandedRow === rowId ? null : rowId);
  };

  const handleNotificationSelect = (rowId, type) => {
    setNotificationSettings((prev) => ({
      ...prev,
      [rowId]: type,
    }));
  };

  const handleTimeAdjustment = (rowId, adjustment) => {
    setMinutesBefore((prev) => ({
      ...prev,
      [rowId]: Math.max((prev[rowId] || 5) + adjustment, 0),
    }));
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
        <Text style={styles.title}>Preferencat</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.subtitle}>Njoftimet</Text>
        <Text style={styles.subtitle2}>Njofto për kohët e Namazit</Text>

        {prayerTimes.map((prayer) => (
          <View key={prayer.id}>
            <TouchableOpacity
              style={styles.row}
              onPress={() => toggleRow(prayer.id)}
            >
              <View style={styles.rowLeft}>
                {prayer.icon}
                <Text style={styles.sectionText}>{prayer.name}</Text>
              </View>
              <MaterialIcons
                name={
                  expandedRow === prayer.id
                    ? "keyboard-arrow-up"
                    : "keyboard-arrow-down"
                }
                size={30}
                color="#06A85D"
              />
            </TouchableOpacity>
            {expandedRow === prayer.id && (
              <View style={styles.dropdown}>
                <View style={styles.dropdownContent}>
                  {/* Left Side: Notification Options */}
                  <View>
                    <TouchableOpacity
                      style={[
                        styles.optionRow,
                        notificationSettings[prayer.id] === "notify"
                          ? styles.selectedOption
                          : null,
                      ]}
                      onPress={() =>
                        handleNotificationSelect(prayer.id, "notify")
                      }
                    >
                      <MaterialIcons
                        name="notifications"
                        size={24}
                        color="#06A85D"
                      />
                      <Text style={styles.optionText}>Njofto</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        styles.optionRow,
                        notificationSettings[prayer.id] === "doNotNotify"
                          ? styles.selectedOption
                          : null,
                      ]}
                      onPress={() =>
                        handleNotificationSelect(prayer.id, "doNotNotify")
                      }
                    >
                      <MaterialIcons
                        name="notifications-off"
                        size={24}
                        color="#06A85D"
                      />
                      <Text style={styles.optionText}>Mos Njofto</Text>
                    </TouchableOpacity>
                  </View>

                  {/* Right Side: Time Adjustment */}
                  {notificationSettings[prayer.id] === "notify" && (
                    <View style={styles.timeAdjustment}>
                      <Text style={styles.timeAdjustmentText}>
                        Njofto para kohës
                      </Text>
                      <View style={styles.timeAdjustmentControls}>
                        <TouchableOpacity
                          onPress={() => handleTimeAdjustment(prayer.id, -1)}
                        >
                          <MaterialIcons
                            name="remove"
                            size={24}
                            color="#06A85D"
                          />
                        </TouchableOpacity>
                        <Text style={styles.minutesText}>
                          {minutesBefore[prayer.id] || 5}
                        </Text>
                        <TouchableOpacity
                          onPress={() => handleTimeAdjustment(prayer.id, 1)}
                        >
                          <MaterialIcons name="add" size={24} color="#06A85D" />
                        </TouchableOpacity>
                      </View>
                      <Text style={styles.minutesLabel}>Minuta</Text>
                    </View>
                  )}
                </View>
              </View>
            )}
          </View>
        ))}
      </View>
    </View>
  );
};

export default DetailsScreen;
