import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  Button,
  ScrollView,
  Alert,
} from "react-native";
import Slider from "@react-native-community/slider";
import axios from "axios";
// import { API_URL } from "../database/config";

import styles from "../../assets/styles/DetailsScreenStyles";
import { MaterialIcons } from "@expo/vector-icons";
import * as Notifications from "expo-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";

import BackIconGreen from "../../assets/SVG/BackIconGreen";
import ShapesTop from "../../assets/SVG/ShapesTop";
import ImsakuSmall from "../../assets/SVG/ImsakuSmall";
import AgimiSmall from "../../assets/SVG/AgimiSmall";
import DrekaSmall from "../../assets/SVG/DrekaSmall";
import IkindiaSmall from "../../assets/SVG/IkindiaSmall";
import AkshamiSmall from "../../assets/SVG/AkshamiSmall";
import JaciaSmall from "../../assets/SVG/JaciaSmall";

// Define prayer times with corresponding icons
const prayerTimes = [
  { id: "imsaku", name: "Imsaku", icon: <ImsakuSmall width={28} /> },
  { id: "agimi", name: "Agimi", icon: <AgimiSmall width={28} /> },
  { id: "dreka", name: "Dreka", icon: <DrekaSmall width={28} /> },
  { id: "ikindia", name: "Ikindia", icon: <IkindiaSmall width={28} /> },
  { id: "akshami", name: "Akshami", icon: <AkshamiSmall width={28} /> },
  { id: "jacia", name: "Jacia", icon: <JaciaSmall width={28} /> },
];

// const API_URL = "http://192.168.100.33:3000"; //SHPI
const API_URL = "https://masjid-app-7f88783a8532.herokuapp.com"; //FINAL
// const API_URL = "http://192.168.100.7:3000"; // Banese

const DetailsScreen = ({ route, navigation }) => {
  const { mosqueId } = route.params;

  // State for global notification toggle
  const [receivePrayerNotifications, setReceivePrayerNotifications] =
    useState(true);
  // State for individual prayer preferences
  const [prayerPreferences, setPrayerPreferences] = useState(
    prayerTimes.reduce((prefs, prayer) => {
      prefs[prayer.id] = { receive: true, offset: 0 }; // Default: no notifications for each prayer
      return prefs;
    }, {})
  );
  const [receiveMosqueAnnouncements, setReceiveMosqueAnnouncements] =
    useState(true);
  const [receiveMosqueEvents, setReceiveMosqueEvents] = useState(true);

  const [isModified, setIsModified] = useState(false);

  // Fetch preferences from AsyncStorage using mosqueId
  const loadPreferences = async () => {
    try {
      // Retrieve preferences for the current mosqueId
      const savedPreferences = await AsyncStorage.getItem(
        `prayerPreferences_${mosqueId}`
      );

      if (savedPreferences) {
        const parsedPreferences = JSON.parse(savedPreferences);

        // Set state from saved preferences
        setReceivePrayerNotifications(
          parsedPreferences.receivePrayerTimeReminders ?? true
        );
        setPrayerPreferences(
          parsedPreferences.prayerTimesOffsets || {
            imsaku: { offsetMinutes: 0, receive: false },
            agimi: { offsetMinutes: 0, receive: false },
            dreka: { offsetMinutes: 0, receive: false },
            ikindia: { offsetMinutes: 0, receive: false },
            akshami: { offsetMinutes: 0, receive: false },
            jacia: { offsetMinutes: 0, receive: false },
          }
        );

        setReceiveMosqueAnnouncements(
          parsedPreferences.receiveAnnouncements ?? true
        );
        setReceiveMosqueEvents(parsedPreferences.receiveEvents ?? true);
      }
    } catch (error) {
      console.error("Error loading preferences:", error);
    }
  };

  // const getUserPreferences = async (expoPushToken, mosqueId) => {
  //   try {
  //     const response = await axios.post(`${API_URL}/getUserPrayerPreferences`, {
  //       expoPushToken,
  //       mosqueId,
  //     });
  //     const preferences = response.data;
  //     // console.log("User Preferences:", preferences);

  //     // Update state with fetched preferences
  //     setReceivePrayerNotifications(preferences.receivePrayerTimeReminders);
  //     setPrayerPreferences(preferences.prayerTimesOffsets);
  //     setReceiveMosqueAnnouncements(preferences.receiveAnnouncements);
  //     setReceiveMosqueEvents(preferences.receiveEvents);
  //   } catch (error) {
  //     console.error("Error fetching user preferences:", error);
  //   }
  // };

  // Call loadPreferences on component mount
  useEffect(() => {
    loadPreferences();

    // // Fetch Expo push token and call getUserPreferences
    // const fetchUserPreferences = async () => {
    //   const tokenData = await Notifications.getExpoPushTokenAsync();
    //   const expoPushToken = tokenData.data;
    //   await getUserPreferences(expoPushToken, mosqueId);
    // };

    // fetchUserPreferences();
  }, [mosqueId]);

  // Toggle global notifications
  const handleGlobalToggle = (value) => {
    setReceivePrayerNotifications(value);
    if (!value) {
      setPrayerPreferences((prev) =>
        Object.fromEntries(
          Object.entries(prev).map(([key, val]) => [
            key,
            { ...val, receive: false },
          ])
        )
      );
    }
  };

  // Toggle prayer-specific notifications
  const handlePrayerToggle = (prayerId) => {
    setPrayerPreferences((prev) => {
      const updated = {
        ...prev,
        [prayerId]: {
          ...prev[prayerId],
          receive: !prev[prayerId].receive,
        },
      };
      setIsModified(true); // Mark as modified
      return updated;
    });
  };

  // Update offset for each prayer
  const handleOffsetChange = (prayerId, offset) => {
    setPrayerPreferences((prev) => {
      const updated = {
        ...prev,
        [prayerId]: {
          ...prev[prayerId],
          offset,
        },
      };
      setIsModified(true); // Mark as modified
      return updated;
    });
  };

  const handleMosqueAnnouncementsToggle = () => {
    try {
      // Determine the new value
      const newValue = !receiveMosqueAnnouncements;

      // If the new value is different, toggle the state and mark it as modified
      if (newValue !== receiveMosqueAnnouncements) {
        setReceiveMosqueAnnouncements(newValue); // Toggle the local state
        setIsModified(true); // Mark as modified
      }

      // No API call or AsyncStorage update here, just toggle the state and mark as modified
    } catch (error) {
      console.error("Error toggling announcements preference:", error);
    }
  };

  const handleMosqueEventsToggle = () => {
    try {
      // Determine the new value
      const newValue = !receiveMosqueEvents;

      // If the new value is different, toggle the state and mark it as modified
      if (newValue !== receiveMosqueEvents) {
        setReceiveMosqueEvents(newValue); // Toggle the local state
        setIsModified(true); // Mark as modified
      }

      // No API call or AsyncStorage update here, just toggle the state and mark as modified
    } catch (error) {
      console.error("Error toggling events preference:", error);
    }
  };

  // Function to handle mosque events toggle
  // const handleMosqueEventsToggle = async () => {
  //   try {
  //     // Toggle the local state
  //     const newValue = !receiveMosqueEvents;
  //     setReceiveMosqueEvents(newValue);

  //     // Retrieve the Expo push token
  //     const tokenData = await Notifications.getExpoPushTokenAsync();
  //     const expoPushToken = tokenData.data;

  //     // Send update request to backend
  //     const response = await fetch(`${API_URL}/updateEventsPreference`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         expoPushToken,
  //         mosqueId, // Directly using mosqueId from route.params
  //         receiveEvents: newValue, // New value for receiveEvents
  //       }),
  //     });

  //     const result = await response.json();
  //     if (response.ok) {
  //       console.log("Successfully updated events preference:", result);
  //     } else {
  //       console.error("Failed to update events preference:", result.error);
  //     }

  //     // Store the preference in AsyncStorage
  //     await AsyncStorage.setItem(
  //       `mosqueEvents_${mosqueId}`,
  //       JSON.stringify({ receiveEvents: newValue })
  //     );
  //   } catch (error) {
  //     console.error("Error updating events preference:", error);
  //   }
  // };

  const handleSavePreferences = async () => {
    try {
      // Prepare the data structure to send to backend
      const preferences = {
        receivePrayerTimeReminders: receivePrayerNotifications,
        prayerTimesOffsets: prayerPreferences,
        receiveAnnouncements: receiveMosqueAnnouncements,
        receiveEvents: receiveMosqueEvents,
      };

      // Retrieve the Expo push token
      const tokenData = await Notifications.getExpoPushTokenAsync();
      const expoPushToken = tokenData.data;

      // Save to AsyncStorage as a cache
      await AsyncStorage.setItem(
        `prayerPreferences_${mosqueId}`,
        JSON.stringify(preferences)
      );

      // Backend API URL
      const url = `${API_URL}/savePreferences`;

      // Send to backend via API
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          expoPushToken,
          mosqueId,
          settings: preferences,
        }),
      });

      if (response.ok) {
        // console.log("Preferences saved to backend:", preferences);

        // Inform the user that settings will be applied from tomorrow
        Alert.alert(
          "Preferencat janë ruajtur me sukses",
          "Nga nesër do të aplikohen preferencat tuaja!",
          [{ text: "OK", onPress: () => navigation.navigate("Home") }]
        );
      } else {
        const errorResponse = await response.json();
        console.error("Failed to save preferences to backend", errorResponse);
        Alert.alert(
          "Error",
          "Failed to save preferences. Please try again later."
        );
      }
    } catch (error) {
      console.error("Error saving preferences:", error);
      Alert.alert("Error", "There was an issue saving your preferences.");
    }
  };

  // Handle back navigation with confirmation
  const handleBackPress = () => {
    if (isModified) {
      Alert.alert(
        "A jeni të sigurtë?",
        "Nuk keni ruajtur preferencat. A jeni të sigurtë që doni të largoheni pa i ruajtur?",
        [
          {
            text: "Anulo",
            onPress: () => null,
            style: "cancel",
          },
          {
            text: "Kalo pa ruajtur",
            onPress: () => navigation.goBack(),
          },
        ]
      );
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backIconContainer}
        onPress={handleBackPress}
      >
        <BackIconGreen style={styles.backIcon} />
      </TouchableOpacity>
      <View style={styles.header}>
        <ShapesTop width="100%" height={150} />
        <Text style={styles.title}>Preferencat</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <Text style={styles.subtitle}>Njoftimet</Text>
          {/* <Text style={styles.subtitle2}>Njofto për kohët e Namazit</Text> */}

          {/* Global Toggle */}
          <View style={styles.settingRow}>
            <Text style={styles.settingLabel}>Njofto për kohët e Namazit </Text>
            <Switch
              value={receivePrayerNotifications}
              onValueChange={handleGlobalToggle}
            />
          </View>

          {/* Prayer-Specific Toggles */}
          {receivePrayerNotifications &&
            prayerTimes.map((prayer) => (
              <View key={prayer.id} style={styles.prayerRow}>
                <View style={styles.rowTop}>
                  <View style={styles.rowLeft}>
                    {prayer.icon}
                    <Text style={styles.sectionText}>{prayer.name}</Text>
                  </View>
                  <Switch
                    value={prayerPreferences[prayer.id].receive}
                    onValueChange={() => handlePrayerToggle(prayer.id)}
                  />
                </View>
                {prayerPreferences[prayer.id].receive && (
                  <View style={styles.sliderContainer}>
                    <Text style={styles.offsetLabel}>Njofto para kohës</Text>
                    <Slider
                      value={prayerPreferences[prayer.id].offset}
                      onValueChange={(value) =>
                        handleOffsetChange(prayer.id, value)
                      }
                      minimumValue={0}
                      maximumValue={60}
                      step={5}
                      style={styles.offsetSlider}
                    />
                    <Text style={styles.offsetValue}>
                      {prayerPreferences[prayer.id].offset} min
                    </Text>
                  </View>
                )}
              </View>
            ))}

          {/* Mosque Announcements Toggle */}
          <View style={styles.settingRow}>
            <Text style={styles.settingLabel}>
              Njofto për njoftimet e xhamisë
            </Text>
            <Switch
              value={receiveMosqueAnnouncements}
              onValueChange={handleMosqueAnnouncementsToggle}
            />
          </View>

          {/* Mosque Events Toggle */}
          <View style={styles.settingRow}>
            <Text style={styles.settingLabel}>
              Njofto për eventet e xhamisë
            </Text>
            <Switch
              value={receiveMosqueEvents}
              onValueChange={handleMosqueEventsToggle}
            />
          </View>

          {/* Save Button */}
          <TouchableOpacity
            style={styles.saveButton}
            onPress={handleSavePreferences}
          >
            <Text style={styles.saveButtonText}>Ruaj Preferencat</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailsScreen;
