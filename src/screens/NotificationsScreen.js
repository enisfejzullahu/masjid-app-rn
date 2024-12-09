import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Switch } from "react-native";
import styles from "../../assets/styles/NotificationsScreenStyles";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from "expo-notifications";
import { getExpoPushTokenAsync } from 'expo-notifications';


import BackIconGreen from "../../assets/SVG/BackIconGreen";
import ShapesTop from "../../assets/SVG/ShapesTop";
import BellFilledIcon from "../../assets/SVG/BellFilledIcon";
// import {API_URL} from "../database/Api";

// // const API_URL = "http://192.168.100.33:3000"; SHPI
const API_URL = "https://masjid-app-7f88783a8532.herokuapp.com"; //FINAL
// const API_URL = "http://192.168.100.7:3000"; // Banese

const NotificationsScreen = ({ navigation }) => {
  const [notificationsDisabled, setNotificationsDisabled] = useState(false);

  // Function to request notification permissions and fetch the token
  const requestPermissionsAndFetchToken = async () => {
    const storedToken = await AsyncStorage.getItem("expoPushToken");
    if (storedToken) {
      console.log("Using stored push notification token:", storedToken);
      setNotificationPreference(storedToken, notificationsDisabled);
      return storedToken;
    }

    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notifications!");
      return;
    }

    const token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log("Push notification token:", token);

    await AsyncStorage.setItem("expoPushToken", token);
    setNotificationPreference(token, notificationsDisabled);
    return token;
  };

  // Function to set notification preference in the backend
  const setNotificationPreference = async (expoPushToken, disabled) => {
    try {
      const response = await axios.post(
        `${API_URL}/update-notification-preference`,
        {
          expoPushToken,
          disabled,
        }
      );
      console.log(response.data); // Log response data
    } catch (error) {
      console.error("Error updating notification preference:", error);
    }
  };

  // Function to toggle notifications and update state
  const toggleNotifications = async () => {
    const newStatus = !notificationsDisabled;
    setNotificationsDisabled(newStatus);

    const userNotificationToken = await AsyncStorage.getItem("expoPushToken");
    if (userNotificationToken) {
      await setNotificationPreference(userNotificationToken, newStatus); // Ensure this is awaited
    }
  };

  // Fetch the initial state of notifications on component mount
  useEffect(() => {
    const fetchNotificationPreference = async () => {
      const userNotificationToken = await AsyncStorage.getItem("expoPushToken");

      if (userNotificationToken) {
        try {
          const response = await axios.get(
            `${API_URL}/get-notification-preference`,
            { params: { expoPushToken: userNotificationToken } } // Use params to send as a query
          );
          const { notificationsDisabled } = response.data;
          setNotificationsDisabled(notificationsDisabled);
        } catch (error) {
          console.error("Error fetching notification preference:", error);
        }
      } else {
        console.warn("Expo push token not found in AsyncStorage.");
      }
    };

    fetchNotificationPreference();
  }, []);

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
        <Text style={styles.title}>Njoftimet</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.subtitle}>Të gjitha njoftimet</Text>

        <View style={styles.section}>
          <View style={styles.leftSection}>
            <View style={styles.iconContainer}>
              <BellFilledIcon style={styles.icon} />
            </View>
            <Text style={styles.sectionText}>Ndal njoftimet</Text>
          </View>
          <Switch
            value={notificationsDisabled} // Switch is on when notifications are disabled
            onValueChange={toggleNotifications}
            trackColor={{ false: "#767577", true: "#06A85D" }}
            thumbColor={notificationsDisabled ? "#fff" : "#f4f3f4"}
          />
        </View>
      </View>
    </View>
  );
};

export default NotificationsScreen;
