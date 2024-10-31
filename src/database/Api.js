// For Android Emulator
//const API_URL = 'http://10.0.2.2:3000';

// For iOS Simulator or change to your computer's local IP address for physical devices
// const API_URL = "http://192.168.100.33:3000"; SHPI
const API_URL = "https://masjid-app-7f88783a8532.herokuapp.com"; //FINAL
// const API_URL = "http://192.168.100.7:3000"; // Banese

import storage from "./Storage";
import PrayerTimesKS from "../database/PrayerTimesKS.json";

export const getMosques = async () => {
  try {
    const response = await fetch(`${API_URL}/mosques`);
    if (!response.ok) {
      throw new Error("Failed to fetch mosques");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching mosques:", error);
    throw error;
  }
};

export const getMosqueInfo = async (mosqueId) => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 seconds timeout

    const response = await fetch(`${API_URL}/mosques/${mosqueId}`, {
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error("Failed to fetch mosque info");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching mosque info:", error);
    throw error;
  }
};

export const getFavorites = async () => {
  try {
    const favorites = await storage.load({
      key: "favorites",
      autoSync: true,
      syncInBackground: true,
    });
    return favorites;
  } catch (error) {
    console.error("Error fetching favorites:", error);
    return []; // Return empty array if there's an error
  }
};

export const getTodaysPrayerTime = async (mosqueId) => {
  try {
    const response = await fetch(`${API_URL}/mosques/${mosqueId}/today`);
    if (!response.ok) {
      throw new Error("Failed to fetch today's prayer times");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching prayer times:", error);
    throw error;
  }
};

export const getTomorrowsPrayerTime = async (mosqueId) => {
  try {
    // Calculate tomorrow's date
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const formattedDate = `${tomorrow.getFullYear()}-${String(
      tomorrow.getMonth() + 1
    ).padStart(2, "0")}-${String(tomorrow.getDate()).padStart(2, "0")}`;

    // Fetch tomorrow's prayer times using the formatted date
    const response = await fetch(`${API_URL}/mosques/${mosqueId}/tomorrow`);
    if (!response.ok) {
      throw new Error("Failed to fetch tomorrow's prayer times");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching prayer times:", error);
    throw error;
  }
};

// Adjusted function for today's prayer times
export const getTodaysPrayerTimeJSON = () => {
  const today = new Date();
  const month = today.getMonth() + 1; // Months are 0-indexed
  const date = today.getDate();

  const todayData = PrayerTimesKS.find(
    (entry) => entry.Muaji === month && entry.Data === date
  );

  return todayData || {};
};

// Adjusted function for tomorrow's prayer times
export const getTomorrowsPrayerTimeJSON = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const month = tomorrow.getMonth() + 1;
  const date = tomorrow.getDate();

  const tomorrowData = PrayerTimesKS.find(
    (entry) => entry.Muaji === month && entry.Data === date
  );

  return tomorrowData || {};
};

// Function to fetch donation types
// api/donations.js
export const getDonationTypes = async (mosqueId) => {
  if (!mosqueId) {
    console.error("No mosque ID provided");
    return null;
  }

  try {
    const response = await fetch(`${API_URL}/mosques/${mosqueId}/donacionet`);

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    if (!data || !Array.isArray(data.donations)) {
      console.error("No donations found or invalid data structure");
      return null;
    }

    return data.donations;
  } catch (error) {
    console.error("Error fetching donations:", error);
    return null;
  }
};

// Function to fetch all announcements
export const getAnnouncements = async (mosqueId) => {
  try {
    const response = await fetch(
      `${API_URL}/mosques/${mosqueId}/announcements`
    );

    if (!response.ok) {
      // Optionally handle non-200 responses
      return {
        message: `Failed to fetch announcements, status: ${response.status}`,
      };
    }

    const data = await response.json();

    if (data.announcements.length === 0) {
      return { message: "There are no announcements for this mosque." };
    }

    return data.announcements;
  } catch (error) {
    // Return a custom error message or a default response
    return { message: "Error fetching announcements." };
  }
};

// Function to fetch all events
export const getEvents = async (mosqueId) => {
  try {
    const response = await fetch(`${API_URL}/mosques/${mosqueId}/eventet`);

    if (!response.ok) {
      return { message: `Failed to fetch events, status: ${response.status}` };
    }

    const data = await response.json();

    // Handle the case where there are no events
    if (!data.events || data.events.length === 0) {
      return []; // Return an empty array if no events are available
    }

    return data.events;
  } catch (error) {
    return { message: "Error fetching events." };
  }
};

export const getHistoriku = async (mosqueId) => {
  try {
    const response = await fetch(`${API_URL}/mosques/${mosqueId}/historiku`);

    if (!response.ok) {
      if (response.status === 404) {
        return null; // Indicate no history found without an error
      }
      return {
        message: `Failed to fetch historiku, status: ${response.status}`,
      };
    }

    const data = await response.json();

    // Handle the case where there is no historiku
    if (!data || !data.title || !data.text) {
      return null; // Indicate no history available
    }

    return data;
  } catch (error) {
    return { message: "Error fetching historiku." };
  }
};

// Function to save token to the backend
export const saveTokenToBackend = async (userId, token) => {
  try {
    await fetch(`${API_URL}/send-notification-token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, expoPushToken: token }),
    });
  } catch (error) {
    console.error("Error saving push token:", error);
  }
};
