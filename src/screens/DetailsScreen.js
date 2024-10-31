import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../../assets/styles/DetailsScreenStyles";
import { MaterialIcons } from "@expo/vector-icons";
import * as Notifications from "expo-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage

import prayerTimeData from "../database/PrayerTimesKS.json";

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
  const [notificationSettings, setNotificationSettings] = useState({
    imsaku: "doNotNotify",
    agimi: "notify",
    dreka: "notify",
    ikindia: "notify",
    akshami: "notify",
    jacia: "notify",
  });

  const [minutesBefore, setMinutesBefore] = useState({
    imsaku: 0,
    agimi: 5,
    dreka: 5,
    ikindia: 5,
    akshami: 5,
    jacia: 5,
  });
  const [settings, setSettings] = useState({});

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    const storedSettings = await AsyncStorage.getItem("notificationSettings");
    if (storedSettings) {
      setSettings(JSON.parse(storedSettings));
    } else {
      const initialSettings = {};
      Object.keys(prayerTimesData).forEach((prayer) => {
        initialSettings[prayer] = { enabled: false, minutes: 0 }; // Default values
      });
      setSettings(initialSettings);
    }
  };

  const saveSettings = async () => {
    await AsyncStorage.setItem(
      "notificationSettings",
      JSON.stringify(settings)
    );
    console.log("Saving settings:", settings);
    scheduleNotifications();
  };

  const toggleRow = (rowId) => {
    setExpandedRow(expandedRow === rowId ? null : rowId);
  };

  useEffect(() => {
    const requestNotificationPermissions = async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== "granted") {
        alert("You need to enable notifications for this app.");
      }
    };

    requestNotificationPermissions();
  }, []);

  const scheduleNotifications = async () => {
    const currentTime = new Date();

    // Cancel all previous notifications
    await Notifications.cancelAllScheduledNotificationsAsync();

    for (const prayer in settings) {
      if (settings[prayer].enabled) {
        const prayerTime = new Date();
        const [hours, minutes] = prayerTimesData[prayer].split(":").map(Number);
        prayerTime.setHours(hours, minutes, 0, 0);

        // Calculate the notification time
        const notificationTime = new Date(
          prayerTime.getTime() - settings[prayer].minutes * 60000
        );

        console.log(`Scheduling notification for ${prayer}`);
        console.log(`Prayer Time: ${prayerTime}`);
        console.log(`Notification Time: ${notificationTime}`);

        // Only schedule if the notification time is in the future
        if (notificationTime > currentTime) {
          await Notifications.scheduleNotificationAsync({
            content: {
              title: `Koha për namaz: ${prayer}`,
              body: `Njoftim: ${prayer} do të fillojë në ${settings[prayer].minutes} minuta.`,
            },
            trigger: {
              date: notificationTime,
            },
          });
          console.log(
            `Notification scheduled for ${prayer} at ${notificationTime}`
          );
        } else {
          console.log(
            `Notification time for ${prayer} is in the past, skipping.`
          );
        }
      } else {
        console.log(`${prayer} notifications are disabled.`);
      }
    }
  };

  const handleNotificationSelect = (rowId, type) => {
    setNotificationSettings((prev) => ({
      ...prev,
      [rowId]: type,
    }));
  };

  const toggleNotification = (prayer) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [prayer]: {
        ...prevSettings[prayer],
        enabled: !prevSettings[prayer]?.enabled,
      },
    }));
  };

  const handleMinutesChange = (prayer, value) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [prayer]: {
        ...prevSettings[prayer],
        minutes: Number(value),
      },
    }));
  };

  const handleSaveSettings = async () => {
    // Save settings to AsyncStorage
    try {
      const settingsToSave = { notificationSettings, minutesBefore };
      await AsyncStorage.setItem(
        "notificationSettings",
        JSON.stringify(settingsToSave)
      );
      console.log("Settings saved:", settingsToSave);

      // Schedule notifications after saving settings
      await scheduleNotifications();
    } catch (error) {
      console.error("Error saving settings:", error);
    }
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
        <TouchableOpacity
          style={styles.saveButton}
          onPress={handleSaveSettings}
        >
          <Text style={styles.saveButtonText}>Ruaj Preferencat</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailsScreen;
