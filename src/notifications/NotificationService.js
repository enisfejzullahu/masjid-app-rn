import * as Notifications from "expo-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";
import prayerTimesData from "../database/PrayerTimesKS.json";

// Set the notification handler globally
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});



// Request notification permissions and handle device token registration
// Function to request notification permissions and fetch the Expo push token
export async function requestPermissionsAndFetchToken() {
  // Ask for permission to receive notifications
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;

  // If no existing permission, ask the user for it
  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  // If permissions are not granted, exit the function
  if (finalStatus !== 'granted') {
    alert('Failed to get push token for push notifications!');
    return;
  }

  // Get the token for push notifications
  const token = (await Notifications.getExpoPushTokenAsync()).data;
  console.log('Push notification token:', token);

  // Store the token using AsyncStorage or send it to your backend
  await AsyncStorage.setItem('expoPushToken', token);

  return token;
}

// Register device for push notifications
const registerForPushNotificationsAsync = async () => {
  try {
    const token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log("Expo Push Token:", token);
    // TODO: Send this token to your server if needed
  } catch (error) {
    console.error("Error getting push notification token:", error);
  }
};

export const requestNotificationPermissions = async () => {
  const { status } = await Notifications.getPermissionsAsync();
  if (status !== "granted") {
    const { status: newStatus } = await Notifications.requestPermissionsAsync();
    if (newStatus !== "granted") {
      alert("You need to enable notifications to use this feature.");
    }
  }
};

// Function to schedule a notification
export const schedulePrayerTimeNotification = async (time, title, body) => {
  // Create a notification trigger
  const trigger = new Date(time); // Ensure 'time' is a valid Date object

  // Schedule the notification
  await Notifications.scheduleNotificationAsync({
    content: {
      title: title, // Title of the notification
      body: body, // Body of the notification
      // data: { data: 'goes here' }, // Optional data
    },
    trigger: {
      // Schedule the notification for the specified time
      seconds: trigger.getTime() / 1000 - Date.now() / 1000, // Time until notification
      repeats: false, // Set to true if you want to repeat
    },
  });
};

export const schedulePrayerTimeNotifications = async () => {
  await requestNotificationPermissions();

  // Get today's date
  const currentDate = new Date();
  const today = currentDate.getDate(); // Current day
  const currentMonth = currentDate.getMonth() + 1; // Months are 0-indexed in JavaScript, add 1

  // Flag to check if we're scheduling for today or tomorrow
  let isSchedulingForTomorrow = false;

  // Find today's prayer times
  let prayerTimesForToday = prayerTimesData.find(
    (prayer) => prayer.Data === today && prayer.Muaji === currentMonth
  );

  // If all today's prayer times have passed, get the next day's prayer times
  if (
    prayerTimesForToday &&
    Object.values(prayerTimesForToday).every((time) => {
      if (typeof time === "string" && time.includes(":")) {
        const [hours, minutes] = time.split(":");
        const prayerTimeDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate(),
          hours,
          minutes
        );
        return prayerTimeDate <= currentDate;
      }
      return true;
    })
  ) {
    console.log(
      "All today's prayer times have passed. Scheduling for tomorrow."
    );

    // Get tomorrow's prayer times
    const tomorrowDate = new Date();
    tomorrowDate.setDate(today + 1);
    const tomorrowDay = tomorrowDate.getDate();
    const tomorrowMonth = tomorrowDate.getMonth() + 1;

    prayerTimesForToday = prayerTimesData.find(
      (prayer) => prayer.Data === tomorrowDay && prayer.Muaji === tomorrowMonth
    );
    isSchedulingForTomorrow = true; // Set the flag to true if scheduling for tomorrow
  }

  if (prayerTimesForToday) {
    console.log(
      "Prayer times found for notification scheduling:",
      prayerTimesForToday
    );

    const prayerTimes = [
      {
        time: prayerTimesForToday.Imsaku,
        title: "Koha e Imsakut",
        body: "Filloni ditën tuaj me lutje!",
      },
      {
        time: prayerTimesForToday.Agimi,
        title: "Është koha e Agimit!",
        body: "Pejgamberi a.s. tha: 'O Allah, bekoje umetin tim në mëngjeset e tyre.",
      },
      {
        time: prayerTimesForToday.Dreka,
        title: "Koha për namazin e Drekës",
        body: "Mos e lër namazin për më vonë!",
      },
      {
        time: prayerTimesForToday.Ikindia,
        title: "Koha për namazin e Ikindisë",
        body: "Përgatitu për t'u falur!",
      },
      {
        time: prayerTimesForToday.Akshami,
        title: "Koha për namazin e Akshamit",
        body: "Falu për të gjetur qetësi!",
      },
      {
        time: prayerTimesForToday.Jacia,
        title: "Koha për namazin e Jacisë",
        body: "Plotësoni këtë natë me adhurim dhe lutje!",
      },
    ];

    const scheduleDate = new Date(); // Use today's date if scheduling for today
    if (isSchedulingForTomorrow) {
      scheduleDate.setDate(scheduleDate.getDate() + 1); // Set date to tomorrow if scheduling for tomorrow
    }

    for (const { time, title, body } of prayerTimes) {
      const [hours, minutes] = time.split(":");
      const notificationDate = new Date(
        scheduleDate.getFullYear(),
        scheduleDate.getMonth(),
        scheduleDate.getDate(),
        hours,
        minutes
      );

      // Only schedule if the time is in the future
      if (notificationDate > currentDate) {
        await schedulePrayerTimeNotification(notificationDate, title, body);
      } else {
        console.log(
          `${title} time has already passed, notification not scheduled.`
        );
      }
    }

    console.log("Scheduled prayer time notifications.");
  } else {
    console.log("No prayer times available for today or tomorrow.");
  }
};

export const schedulePrayerTimeNotificationBefore = async (
  time,
  minutesBefore,
  title,
  body
) => {
  // Create a notification trigger based on the offset
  const trigger = new Date(time.getTime() - minutesBefore * 60000); // Subtract minutes from the prayer time

  // Schedule the notification
  await Notifications.scheduleNotificationAsync({
    content: {
      title: title, // Title of the notification
      body: body, // Body of the notification
    },
    trigger: {
      seconds: trigger.getTime() / 1000 - Date.now() / 1000, // Time until notification
      repeats: false, // Set to true if you want to repeat
    },
  });
};

export const schedulePrayerTimeNotificationsBefore = async () => {
  await requestNotificationPermissions();

  const currentDate = new Date();
  const today = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;

  // Check if we need to schedule for tomorrow if all times have passed today
  let isSchedulingForTomorrow = false;
  let prayerTimesForToday = prayerTimesData.find(
    (prayer) => prayer.Data === today && prayer.Muaji === currentMonth
  );

  if (
    prayerTimesForToday &&
    Object.values(prayerTimesForToday).every((time) => {
      if (typeof time === "string" && time.includes(":")) {
        const [hours, minutes] = time.split(":");
        const prayerTimeDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate(),
          hours,
          minutes
        );
        return prayerTimeDate <= currentDate;
      }
      return true;
    })
  ) {
    console.log("All today's prayer times have passed. Scheduling for tomorrow.");

    const tomorrowDate = new Date();
    tomorrowDate.setDate(today + 1);
    const tomorrowDay = tomorrowDate.getDate();
    const tomorrowMonth = tomorrowDate.getMonth() + 1;

    prayerTimesForToday = prayerTimesData.find(
      (prayer) => prayer.Data === tomorrowDay && prayer.Muaji === tomorrowMonth
    );
    isSchedulingForTomorrow = true;
  }

  if (prayerTimesForToday) {
    console.log("Prayer times found for pre-notification scheduling:", prayerTimesForToday);

    const prayerTimes = [
      { time: prayerTimesForToday.Imsaku, title: "Koha e Imsakut", body: "Koha për lutje!" },
      { time: prayerTimesForToday.Agimi, title: "Koha e Agimit", body: "Po fillon namazi i agimit!" },
      { time: prayerTimesForToday.Dreka, title: "Koha e Drekës", body: "Afrohet koha e namazit të Drekës!" },
      { time: prayerTimesForToday.Ikindia, title: "Koha e Ikindisë", body: "Përgatitu për Ikindi!" },
      { time: prayerTimesForToday.Akshami, title: "Koha e Akshamit", body: "Akshami po afrohet!" },
      { time: prayerTimesForToday.Jacia, title: "Koha e Jacisë", body: "Mos e harro Jacinë!" },
    ];

    const scheduleDate = new Date();
    if (isSchedulingForTomorrow) {
      scheduleDate.setDate(scheduleDate.getDate() + 1);
    }

    for (const { time, title, body } of prayerTimes) {
      const [hours, minutes] = time.split(":");
      const prayerTime = new Date(
        scheduleDate.getFullYear(),
        scheduleDate.getMonth(),
        scheduleDate.getDate(),
        hours,
        minutes
      );

      if (prayerTime > currentDate) {
        // Fetch the minutes before setting from AsyncStorage or your state
        const minutesBefore = settings[prayer.id]?.minutes || 5; // Default to 5 minutes if not set

        await schedulePrayerTimeNotificationBefore(
          prayerTime,
          minutesBefore,
          title,
          body
        );
      } else {
        console.log(`${title} time has already passed, notification not scheduled.`);
      }
    }

    console.log("Scheduled pre-prayer notifications.");
  } else {
    console.log("No prayer times available for today or tomorrow.");
  }
};


const getPrayerTimeFor = (prayerName, date) => {
  // Access prayer time from prayerTimesData
  const timeValue = prayerTimesData[prayerName];
  console.log(`Fetching time for ${prayerName}:`, timeValue);

  // Check if the prayer name exists in the data
  if (timeValue === undefined) {
    console.error(`No prayer time found for ${prayerName}.`);
    return null; // Return null if the prayer name is invalid
  }

  // Check if timeValue is a string
  if (typeof timeValue !== "string") {
    // If it's not a string (i.e., it's a number), handle it as needed
    console.error(
      `Invalid time format for ${prayerName}. Expected a string but got:`,
      timeValue
    );
    return null; // Return null if the format is incorrect
  }

  // Split and parse the time string
  const [hours, minutes] = timeValue.split(":").map(Number);

  // Validate hours and minutes
  if (isNaN(hours) || isNaN(minutes)) {
    console.error(`Error parsing time for ${prayerName}:`, timeValue);
    return null; // Return null if parsing fails
  }

  // Create a new date object for the specified date
  const prayerDate = new Date(date);
  prayerDate.setHours(hours, minutes, 0, 0); // Set the time of the prayer

  return prayerDate; // Return the date object representing the prayer time
};


// export const schedulePreNotifications = async (prayerTimes, minutesBefore) => {
//   await requestNotificationPermissions(); // Ensure permissions are granted

//   // Get today's date
//   const currentDate = new Date();
//   const today = currentDate.getDate();
//   const currentMonth = currentDate.getMonth() + 1;

//   // Find today's prayer times
//   let prayerTimesForToday = prayerTimesData.find(
//     (prayer) => prayer.Data === today && prayer.Muaji === currentMonth
//   );

//   // Check if all today's prayer times have passed
//   const allPrayerTimesPassed = prayerTimesForToday && Object.entries(prayerTimes).every(([prayer, isEnabled]) => {
//     if (isEnabled) {
//       const time = prayerTimesForToday[prayer];
//       if (time) {
//         const [hours, minutes] = time.split(":");
//         const prayerTimeDate = new Date(
//           currentDate.getFullYear(),
//           currentDate.getMonth(),
//           currentDate.getDate(),
//           hours,
//           minutes
//         );
//         return prayerTimeDate <= currentDate; // Check if the prayer time has passed
//       }
//       return true; // Consider undefined times as passed
//     }
//     return true; // If not enabled, consider it as passed
//   });

//   // If all today's prayer times have passed, get tomorrow's prayer times
//   if (allPrayerTimesPassed) {
//     console.log("All today's prayer times have passed. Scheduling for tomorrow.");

//     // Get tomorrow's date
//     const tomorrowDate = new Date();
//     tomorrowDate.setDate(today + 1);
//     const tomorrowDay = tomorrowDate.getDate();
//     const tomorrowMonth = tomorrowDate.getMonth() + 1;

//     prayerTimesForToday = prayerTimesData.find(
//       (prayer) => prayer.Data === tomorrowDay && prayer.Muaji === tomorrowMonth
//     );

//     // Log tomorrow's prayer times
//     if (prayerTimesForToday) {
//       console.log("Tomorrow's Prayer Times:", prayerTimesForToday);
//     } else {
//       console.log("No prayer times available for tomorrow.");
//       return; // Exit if there are no prayer times for tomorrow
//     }
//   }

//   // Schedule notifications for tomorrow's prayer times
//   const scheduleDate = new Date();
  
//   // Update to use tomorrow's prayer times
//   const prayerTimesToSchedule = allPrayerTimesPassed ? prayerTimesForToday : prayerTimesForToday;

//   for (const [prayer, isEnabled] of Object.entries(prayerTimes)) {
//     if (isEnabled) {
//       const time = prayerTimesToSchedule[prayer];

//       // Check if time is defined before splitting
//       if (time) {
//         const [hours, minutes] = time.split(":");

//         // Set the notification time based on tomorrow's date
//         const notificationTime = new Date(
//           scheduleDate.getFullYear(),
//           scheduleDate.getMonth(),
//           scheduleDate.getDate() + (allPrayerTimesPassed ? 1 : 0), // Increment day if scheduling for tomorrow
//           hours,
//           minutes
//         );

//         // Calculate the time to schedule the notification (minutesBefore)
//         notificationTime.setMinutes(notificationTime.getMinutes() - minutesBefore);

//         // Schedule the notification only if the time is in the future
//         if (notificationTime > currentDate) {
//           await schedulePrayerTimeNotification(notificationTime, `${prayer} Reminder`, `It's time for the ${prayer} prayer!`);
//           console.log(`Scheduled ${prayer} notification for ${notificationTime}`);
//         } else {
//           console.log(`${prayer} time has already passed, notification not scheduled.`);
//         }
//       } else {
//         console.log(`Prayer time for ${prayer} is undefined.`);
//       }
//     }
//   }
// };



export const clearAllScheduledNotifications = async () => {
  await Notifications.cancelAllScheduledNotificationsAsync();
  console.log('All scheduled notifications have been cleared.');
};

// Utility function to get the title based on the prayer key
const getNotificationTitle = (prayerKey) => {
  switch (prayerKey) {
    case "Imsaku":
      return "Koha e Imsakut ka ardhur";
    case "Agimi":
      return "Është koha e agimit.";
    case "Dreka":
      return "Koha për namazin e Drekës.";
    case "Ikindia":
      return "Koha për namazin e Ikindisë.";
    case "Akshami":
      return "Koha për namazin e Akshamit.";
    case "Jacia":
      return "Koha për namazin e Jacisë.";
    default:
      return "";
  }
};

// Utility function to get the notification body message based on the prayer key
const getNotificationBody = (prayerKey) => {
  switch (prayerKey) {
    case "Imsaku":
      return "Filloni ditën tuaj me lutje.";
    case "Agimi":
      return "Pejgamberi a.s. tha: 'O Allah, bekoje umetin tim në mëngjeset e tyre.'";
    case "Dreka":
      return "Mos e lër namazin për më vonë!";
    case "Ikindia":
      return "Përgatitu për t'u falur.";
    case "Akshami":
      return "Falu për të gjetur qetësi.";
    case "Jacia":
      return "Plotësoni këtë natë me adhurim dhe lutje.";
    default:
      return "";
  }
};

// Cancel all scheduled prayer notifications
export const cancelAllNotifications = async () => {
  console.log("Canceling all scheduled prayer notifications...");
  const scheduledNotifications =
    await Notifications.getAllScheduledNotificationsAsync();
  const prayerNotifications = scheduledNotifications.filter((notification) =>
    notification.identifier.startsWith("prayer-notification-")
  );

  for (const notification of prayerNotifications) {
    await Notifications.cancelScheduledNotificationAsync(
      notification.identifier
    );
    console.log(`Canceled notification: ${notification.identifier}`);
  }

  console.log("All prayer notifications canceled.");
};
