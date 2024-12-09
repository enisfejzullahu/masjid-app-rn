import * as Notifications from "expo-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { v4 as uuidv4 } from "uuid"; // Use a library like uuid to generate unique IDs
// import { API_URL } from "../database/Api";

// const API_URL = "http://192.168.100.33:3000"; //SHPI
// const API_URL = "http://192.168.100.7:3000"; //Banese
const API_URL = "https://masjid-app-7f88783a8532.herokuapp.com";

export const registerForPushNotificationsAsync = async () => {
  // Request notification permissions
  const { status } = await Notifications.requestPermissionsAsync();
  if (status !== "granted") {
    alert("You need to enable permissions for notifications.");
    return;
  }

  // Retrieve the Expo push token
  const tokenData = await Notifications.getExpoPushTokenAsync();
  const expoPushToken = tokenData.data; // Extract the token string directly

  // Check if the token already exists in your backend
  const existingToken = await checkTokenExistsInBackend(expoPushToken);

  if (!existingToken) {
    // Save the token to your backend if it does not exist
    await saveTokenToBackend(expoPushToken);
  } else {
  }
};

// Function to check if the token already exists in the backend
const checkTokenExistsInBackend = async (expoPushToken) => {
  try {
    const response = await fetch(`${API_URL}/check-token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ expoPushToken }),
    });

    if (response.ok) {
      const data = await response.json();
      return data.exists; // Assume the backend returns whether the token exists
    } else {
      console.error("Error checking token existence:", response.statusText);
      return false;
    }
  } catch (error) {
    console.error("Error checking token existence:", error);
    return false;
  }
};

const saveTokenToBackend = async (expoPushToken) => {
  try {
    const response = await fetch(`${API_URL}/send-notification-token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ expoPushToken }), // Send only the token string
    });

    const responseText = await response.text();
    if (response.ok) {
      console.log("Successfully saved push token:", expoPushToken);
    } else {
      console.error("Failed to save push token. Status:", response.status);
      console.error("Response text:", responseText);
    }
  } catch (error) {
    console.error("Error saving push tokeen:", error);
  }
};
