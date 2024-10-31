import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from "expo-notifications";
import * as BackgroundFetch from "expo-background-fetch";

// import {
//   startBackgroundFetch,
//   requestNotificationPermissions,
//   registerBackgroundFetch,
// } from "./src/notifications/AllNotifications";
// import {
//   requestPermissionsAndFetchToken,
//   schedulePrayerTimeNotifications,
//   schedulePreNotifications,
//   clearAllScheduledNotifications,
// } from "./src/notifications/NotificationService";

import { registerForPushNotificationsAsync } from "./src/notifications/FinalNotifications";

import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light,
  Montserrat_300Light_Italic,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black,
  Montserrat_900Black_Italic,
} from "@expo-google-fonts/montserrat";

import storage from "./src/database/Storage";
import AppNavigator from "./navigation/AppNavigator";
import LoadingScreen from "./src/screens/LoadingScreen";

// Set the notification handler globally
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);

  const [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light,
    Montserrat_300Light_Italic,
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black,
    Montserrat_900Black_Italic,
  }); 

  useEffect(() => {
    const initialize = async () => {


      // Load favorites from storage
      storage
        .load({ key: "favorites" })
        .then((loadedFavorites) => {
          setFavorites(loadedFavorites);
          setIsLoading(false);
        })
        .catch((err) => {
          if (err.name === "NotFoundError") {
            storage.save({ key: "favorites", data: [] }).then(() => {
              setFavorites([]);
              setIsLoading(false);
            });
          } else {
            console.error("Error checking favorites:", err);
          }
        });

      // // Request permissions and fetch notification token
      // await requestPermissionsAndFetchToken();

      await registerForPushNotificationsAsync(); 



      // // Load user preferences for notification minutes and selected prayer times
      // const storedMinutesBefore = await AsyncStorage.getItem("minutesBefore");
      // const storedPrayerTimes = await AsyncStorage.getItem("prayerTimes");

      // const minutesBefore = storedMinutesBefore
      //   ? parseInt(storedMinutesBefore)
      //   : 5; // Default to 5 if not set
      // const prayerTimes = storedPrayerTimes
      //   ? JSON.parse(storedPrayerTimes)
      //   : {
      //       Imsak: true,
      //       Agimi: true,
      //       Dreka: true,
      //       Ikindi: true,
      //       Akshami: true,
      //       Jacia: true,
      //     };

      // Schedule prayer time notifications for today
      // await schedulePrayerTimeNotifications(); // Optionally, you might pass the prayerTimes and minutesBefore here if needed

      // Register the background fetch task to schedule notifications for future prayer times
      // await registerBackgroundFetch();

      // Optionally, you might want to schedule pre-notifications here based on loaded preferences
      // await schedulePreNotifications(prayerTimes, minutesBefore); // Ensure you have this function implemented


    };

    initialize();
  }, []);

  if (!fontsLoaded || isLoading) {
    return <LoadingScreen />;
  }

  return (
    <View style={styles.container}>
      <AppNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
