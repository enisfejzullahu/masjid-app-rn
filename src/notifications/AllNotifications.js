// import * as BackgroundFetch from "expo-background-fetch";
// import * as TaskManager from "expo-task-manager";
// import { schedulePrayerTimeNotifications, schedulePreNotifications } from "./NotificationService";

// // Define the task name
// const BACKGROUND_FETCH_TASK = "background-prayer-fetch-task";


// // Define the background fetch task
// TaskManager.defineTask(BACKGROUND_FETCH_TASK, async () => {
//   try {
//     console.log("Running background fetch for scheduling prayer times...");
    

//     // // Retrieve user preferences from local storage
//     // const storedMinutesBefore = await AsyncStorage.getItem("minutesBefore");
//     // const storedPrayerTimes = await AsyncStorage.getItem("prayerTimes");

//     // // Default values
//     // const minutesBefore = storedMinutesBefore
//     //   ? parseInt(storedMinutesBefore)
//     //   : 5; // Default to 5 minutes if not set
//     // const prayerTimes = storedPrayerTimes
//     //   ? JSON.parse(storedPrayerTimes)
//     //   : {
//     //       Imsak: true,
//     //       Agimi: true,
//     //       Dreka: true,
//     //       Ikindi: true,
//     //       Akshami: true,
//     //       Jacia: true,
//     //     }; // Default to all prayer times enabled

//     // Schedule notifications for the next day's prayer times
//     await schedulePrayerTimeNotifications(true); // Keep your existing function for prayer time notifications

//     // // Schedule pre-notifications based on user preferences
//     // await schedulePreNotifications(prayerTimes, minutesBefore);

//     console.log("Background fetch completed successfully.");
//     return BackgroundFetch.BackgroundFetchResult.NewData;
//   } catch (error) {
//     console.error("Error in background fetch task:", error);
//     return BackgroundFetch.BackgroundFetchResult.Failed;
//   }
// });

// export const registerBackgroundFetch = async () => {
//   try {
//     await BackgroundFetch.registerTaskAsync(BACKGROUND_FETCH_TASK, {
//       minimumInterval: 60 * 60 * 24, // 24 hours interval
//       stopOnTerminate: false, // Keep the task running even when the app is terminated
//       startOnBoot: true, // Start the task automatically when the device is rebooted
//     });
//     console.log("Background fetch task registered successfully.");
//   } catch (error) {
//     console.error("Error registering background fetch task:", error);
//   }
// };
