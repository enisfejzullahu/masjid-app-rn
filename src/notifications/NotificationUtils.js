import * as Notifications from "expo-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";
import prayerTimeData from "../database/PrayerTimesKS.json";

// Load settings from AsyncStorage
export const loadSettings = async () => {
  try {
    const storedSettings = await AsyncStorage.getItem("notificationSettings");
    if (storedSettings) {
      return JSON.parse(storedSettings);
    } else {
      // Initialize default settings if none are found
      const initialSettings = {};
      Object.keys(prayerTimeData[0]).forEach((key) => {
        if (key !== "Muaji" && key !== "Data") {
          initialSettings[key] = { enabled: false, minutes: 0 }; // Default values
        }
      });
      await saveSettings(initialSettings); // Save the initial settings to AsyncStorage
      return initialSettings;
    }
  } catch (error) {
    console.error("Error loading settings from AsyncStorage:", error);
    return null;
  }
};

// Save settings to AsyncStorage
export const saveSettings = async (settings) => {
  try {
    await AsyncStorage.setItem(
      "notificationSettings",
      JSON.stringify(settings)
    );
    console.log("Settings saved successfully:", settings);
  } catch (error) {
    console.error("Error saving settings to AsyncStorage:", error);
  }
};

// Schedule notifications for the prayer times
export const scheduleNotifications = async (settings, todayPrayerTimes) => {
  const currentTime = new Date();

  // Cancel existing notifications before scheduling new ones
  await cancelScheduledNotifications(Object.keys(settings));

  for (const prayer in settings) {
    if (settings[prayer]?.enabled && todayPrayerTimes[prayer]) {
      const prayerTime = new Date();
      const [hours, minutes] = todayPrayerTimes[prayer].split(":").map(Number);
      prayerTime.setHours(hours, minutes, 0, 0);

      // Calculate the notification time
      const notificationTime = new Date(
        prayerTime.getTime() - settings[prayer].minutes * 60000
      );

      // Only schedule if the notification time is in the future
      if (notificationTime > currentTime) {
        const identifier = `prayer-${prayer}`; // Use the prayer name as an identifier
        await Notifications.scheduleNotificationAsync({
          content: {
            title: `Koha për namaz: ${prayer}`,
            body: `Njoftim: ${prayer} do të fillojë në ${settings[prayer].minutes} minuta.`,
          },
          trigger: {
            date: notificationTime,
          },
          identifier,
        });
        console.log(
          `Scheduled notification: ${identifier} at ${notificationTime}`
        );
      }
    }
  }
};

// Cancel all scheduled notifications related to prayer times
const cancelScheduledNotifications = async (prayerIdentifiers) => {
  const notifications = await Notifications.getAllScheduledNotificationsAsync();
  for (const notification of notifications) {
    const identifier = notification.identifier.split("-")[1];
    if (prayerIdentifiers.includes(identifier)) {
      await Notifications.cancelScheduledNotificationAsync(
        notification.identifier
      );
      console.log(`Canceled notification: ${notification.identifier}`);
    }
  }
};
