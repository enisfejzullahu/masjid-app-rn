import React, { useRef, useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import moment from "moment";
import axios from "axios";
import * as Notifications from "expo-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "../../assets/styles/MosqueScreenStyles";

import MenuIcon from "../../assets/SVG/MenuIcon";
import InfoCard from "../components/InfoCard";
import DateCard from "../components/DateCard";
import SaveIcon from "../../assets/SVG/SaveIcon";
import SaveFilledIcon from "../../assets/SVG/SaveFilledIcon";
import BackIcon from "../../assets/SVG/BackIcon";

import PrayerTimesPart from "../components/PrayerTimesPart";
import AnnouncementsCard from "../components/AnnouncementsCard";
import DonationsCard from "../components/DonationsCard";
import EventsCard from "../components/EventsCard";
import HistoryCard from "../components/HistoryCard";
import {
  getTodaysPrayerTime,
  getTomorrowsPrayerTime,
  getMosqueInfo,
  getTodaysPrayerTimeJSON,
  getTomorrowsPrayerTimeJSON,
  getFavorites,
} from "../database/Api";
import storage from "../database/Storage";
import PrayerTimesKS from "../database/PrayerTimesKS.json";

// import { API_URL } from "../database/Api";

// const API_URL = "http://192.168.100.33:3000"; //SHPI
const API_URL = "https://masjid-app-7f88783a8532.herokuapp.com"; //FINAL
// const API_URL = "http://192.168.100.7:3000"; // Banese

const getCurrentPrayerTime = (todayTimes, tomorrowTimes) => {
  const now = new Date();
  const currentTime = now.getHours() * 100 + now.getMinutes();

  const prayerTimes = [
    { name: "Imsaku", time: todayTimes.Imsaku },
    { name: "Agimi", time: todayTimes.Agimi },
    { name: "Dreka", time: todayTimes.Dreka },
    { name: "Ikindia", time: todayTimes.Ikindia },
    { name: "Akshami", time: todayTimes.Akshami },
    { name: "Jacia", time: todayTimes.Jacia },
  ];

  let currentPrayer = null;
  let nextPrayer = null;

  for (let i = 0; i < prayerTimes.length; i++) {
    const prayerTime = prayerTimes[i];
    const [hours, minutes] = prayerTime.time.split(":").map(Number);
    const prayerTimeInMinutes = hours * 100 + minutes;

    // Check if current time is before or after the prayer time
    if (currentTime < prayerTimeInMinutes) {
      nextPrayer = prayerTime;
      break;
    } else {
      currentPrayer = prayerTime;
    }
  }

  // If all prayers have passed, the next prayer is Imsaku of tomorrow
  if (!nextPrayer && currentPrayer) {
    nextPrayer = { name: "Imsaku", time: tomorrowTimes.Imsaku };
  }

  // If no prayer has started, the current prayer is Jacia of yesterday (e.g., before Imsaku)
  if (!currentPrayer) {
    currentPrayer = { name: "Jacia", time: todayTimes.Jacia };
  }

  return { currentPrayer, nextPrayer };
};

const MosqueScreen = ({ route, navigation }) => {
  const scrollViewRef = useRef(null);
  const lastOffsetY = useRef(0);
  const [prayerTimes, setPrayerTimes] = useState({});
  const [error, setError] = useState(null);
  const [currentPrayerTime, setCurrentPrayerTime] = useState(null);
  const [nextPrayerTime, setNextPrayerTime] = useState(null);
  const { mosqueId } = route.params;
  const [mosque, setMosque] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteMosques, setFavoriteMosques] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [countdown, setCountdown] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [tomorrowPrayerTimes, setTomorrowPrayerTimes] = useState({});
  const [loading, setLoading] = useState(true);
  const [showHeader, setShowHeader] = useState(false); // Add state for sticky header
  const [messageText, setMessageText] = useState("");

  useEffect(() => {
    // Get today's date
    const today = new Date();
    const todayMonth = today.getMonth() + 1; // getMonth() is 0-based
    const todayDate = today.getDate();

    // Find today's prayer times in the JSON data
    const todaysPrayerTimes = PrayerTimesKS.find(
      (entry) => entry.Muaji === todayMonth && entry.Data === todayDate
    );

    if (todaysPrayerTimes) {
      setPrayerTimes(todaysPrayerTimes);
    } else {
      console.error("No prayer times found for today's date.");
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    const fetchMosqueInfo = async () => {
      try {
        const data = await getMosqueInfo(mosqueId);
        setMosque(data);
        checkIfFavorite(mosqueId); // Check if the mosque is already a favorite
      } catch (error) {
        console.error("Error fetching mosque info:", error);
      }
    };

    fetchMosqueInfo();
  }, [mosqueId]);

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        const todayData = await getTodaysPrayerTimeJSON();
        const tomorrowData = await getTomorrowsPrayerTimeJSON();

        if (todayData && tomorrowData) {
          const { currentPrayer, nextPrayer } = getCurrentPrayerTime(
            todayData,
            tomorrowData
          );
          setPrayerTimes(todayData);
          setTomorrowPrayerTimes(tomorrowData);
          setCurrentPrayerTime(currentPrayer);
          setNextPrayerTime(nextPrayer);
          setLoading(false);
        } else {
          console.error("No prayer times available for today or tomorrow");
          setError("No prayer times available");
        }
      } catch (err) {
        console.error("Error fetching prayer times:", err);
        setError(err.message || "Error fetching prayer times");
      }
    };

    fetchPrayerTimes();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (nextPrayerTime) {
        const countdown = calculateCountdown(nextPrayerTime);
        setCountdown(countdown);

        // If countdown is over, move to the next prayer
        if (
          countdown.hours === 0 &&
          countdown.minutes === 0 &&
          countdown.seconds === 0
        ) {
          const { currentPrayer, nextPrayer } = getCurrentPrayerTime(
            prayerTimes,
            tomorrowPrayerTimes
          );
          setCurrentPrayerTime(currentPrayer);
          setNextPrayerTime(nextPrayer);
        }
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [nextPrayerTime, prayerTimes, tomorrowPrayerTimes]);

  const calculateCountdown = (nextPrayerTime) => {
    if (!nextPrayerTime) return { hours: 0, minutes: 0, seconds: 0 };

    const now = moment();
    const [hours, minutes] = nextPrayerTime.time.split(":").map(Number);
    let nextPrayer = moment().hours(hours).minutes(minutes).seconds(0);

    if (nextPrayer.isBefore(now)) {
      nextPrayer.add(1, "day");
    }

    const duration = moment.duration(nextPrayer.diff(now));

    return {
      hours: Math.floor(duration.asHours()),
      minutes: duration.minutes(),
      seconds: duration.seconds(),
    };
  };

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;

    // Prevent scrolling beyond the top (offsetY < 0)
    if (offsetY < 0 && scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: 0, animated: false });
    }

    // Show header when scrolling down and user has scrolled more than 50px
    if (offsetY > lastOffsetY.current && offsetY > 50) {
      setShowHeader(true);
    }
    // Hide header when scrolling up but only after scrolling up past the top 50px
    else if (offsetY < lastOffsetY.current && offsetY <= 50) {
      setShowHeader(false);
    }

    // Update the last scroll position
    lastOffsetY.current = offsetY;
  };

  const handleNextPrayerTime = () => {
    const fetchPrayerTimes = async () => {
      try {
        const tomorrowData = await getTomorrowsPrayerTime(mosqueId);
        const nextDayPrayerTimesObject = tomorrowData?.prayerTimes[0] || {};
        const { currentPrayer, nextPrayerTime } = getCurrentPrayerTime(
          prayerTimes,
          nextDayPrayerTimesObject
        );
        setCurrentPrayerTime(currentPrayer);
        setNextPrayerTime(nextPrayerTime);
      } catch (err) {
        console.error("Error fetching prayer times:", err);
      }
    };

    fetchPrayerTimes();
  };

  const checkIfFavorite = async (mosqueId) => {
    try {
      const favorites = await storage.load({ key: "favorites" });
      setIsFavorite(favorites.includes(mosqueId));
    } catch (error) {
      console.error("Error checking favorites:", error);
      setIsFavorite(false);
    }
  };
  const addToFavorites = async (mosque) => {
    try {
      await storage.save({
        key: "favorites",
        id: mosque.id, // Unique ID for the item
        data: mosque,
        expires: null, // Set expiration if needed
      });
      console.log("Mosque added to favorites");
    } catch (error) {
      console.error("Error updating favorites:", error);
    }
  };

  useEffect(() => {
    checkIfFavorite(mosqueId); // Re-check favorite status whenever mosqueId changes
  }, [mosqueId]);

  // Your `handleSavePress` function should handle setting the favorite correctly:
  const handleSavePress = async () => {
    // Retrieve the Expo push token
    const tokenData = await Notifications.getExpoPushTokenAsync();
    const expoPushToken = tokenData.data; // Extract the token string directly

    // Store the push token locally
    await AsyncStorage.setItem("expoPushToken", expoPushToken);

    try {
      // Load existing favorites or initialize with an empty array if not found
      let favorites = [];
      try {
        favorites = await storage.load({ key: "favorites" });
      } catch (error) {
        if (error.name === "NotFoundError") {
          await storage.save({ key: "favorites", data: [] });
        } else {
          console.error("Error loading favorites:", error);
          return;
        }
      }

      // Toggle favorite status
      let updatedFavorites;
      if (isFavorite) {
        // Remove from favorites
        updatedFavorites = favorites.filter((id) => id !== mosqueId);
        setIsFavorite(false);
        // setMessageText("Xhamia është hequr nga të preferuarat tuaja."); // Update message

        // Call API to remove favorite
        await handleRemovePress(); // You can refactor the API call to be inside this function
      } else {
        // Add to favorites
        updatedFavorites = [...favorites, mosqueId];
        setIsFavorite(true);
        // setMessageText("Xhamia është shtuar në të preferuarat tuaja."); // Update message

        // Call backend API to save favorite
        try {
          const response = await axios.post(`${API_URL}/tokens/addFavorite`, {
            expoPushToken,
            mosqueId,
          });
          console.log("Response from backend:", response.data);
        } catch (apiError) {
          console.error("Error calling add favorite API:", apiError);
        }
      }

      // Save updated favorites to local storage
      await storage.save({ key: "favorites", data: updatedFavorites });

      // Show a temporary success message
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);

      // Navigate to Home
      navigation.navigate("Home");

      // Re-check the favorite status
      checkIfFavorite(mosqueId);
    } catch (error) {
      console.error("Error updating favorites:", error);
    }
  };

  const handleRemovePress = async () => {
    try {
      // Retrieve the stored Expo push token
      const expoPushToken = await AsyncStorage.getItem("expoPushToken");
      if (!expoPushToken) {
        console.error("No push token found");
        return;
      }

      // Call the API to remove the favorite mosque
      const response = await axios.delete(`${API_URL}/tokens/removeFavorite`, {
        data: {
          expoPushToken,
          mosqueId,
        },
      });

      console.log(response.data.message); // Show success message

      // Optionally update local storage
      let favorites = await storage.load({ key: "favorites" });
      favorites = favorites.filter((id) => id !== mosqueId);
      await storage.save({ key: "favorites", data: favorites });

      // // Show a success message
      // setShowMessage(true);
      // setMessageText("Xhamia është hequr nga të preferuarat tuaja."); // Set removal message
      // setTimeout(() => setShowMessage(false), 3000);

      // Navigate to Home
      navigation.navigate("Home");

      // Re-check the favorite status
      checkIfFavorite(mosqueId);
    } catch (error) {
      console.error("Error removing favorite API:", error);
    }
  };

  // const handleSavePress = async () => {
  //   try {
  //     // Load existing favorites or initialize with an empty array if not found
  //     let favorites = [];
  //     try {
  //       favorites = await storage.load({ key: "favorites" });
  //     } catch (error) {
  //       if (error.name === "NotFoundError") {
  //         await storage.save({ key: "favorites", data: [] });
  //       } else {
  //         console.error("Error loading favorites:", error);
  //         return;
  //       }
  //     }

  //     // Toggle favorite status
  //     let updatedFavorites;
  //     if (isFavorite) {
  //       // Remove from favorites
  //       updatedFavorites = favorites.filter((id) => id !== mosqueId);
  //       setIsFavorite(false);
  //       setMessageText("Xhamia është hequr nga të preferuarat tuaja.");
  //     } else {
  //       // Add to favorites
  //       updatedFavorites = [...favorites, mosqueId];
  //       setIsFavorite(true);
  //     }

  //     // Save updated favorites to storage
  //     await storage.save({ key: "favorites", data: updatedFavorites });

  //     // Show a temporary success message
  //     setShowMessage(true);
  //     setTimeout(() => setShowMessage(false), 3000);

  //     // Re-check the favorite status
  //     checkIfFavorite(mosqueId);

  //     // Optionally navigate to the Home screen if adding to favorites
  //     if (!isFavorite) {
  //       navigation.navigate("Home");
  //     }
  //   } catch (error) {
  //     console.error("Error updating favorites:", error);
  //   }
  // };

  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error}</Text>
      </View>
    );
  }

  if (
    !mosque ||
    Object.keys(prayerTimes).length === 0 ||
    !currentPrayerTime ||
    !nextPrayerTime
  ) {
    return <View style={styles.loadingContainer}></View>;
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      {!showHeader && (
        <View style={styles.topBar}>
          <TouchableOpacity
            style={styles.backIconContainer} // Add a style for positioning
            onPress={() => navigation.goBack()}
          >
            <BackIcon style={styles.backIcon} />
          </TouchableOpacity>
          <View style={styles.menuIconContainer}>
            {isFavorite ? (
              <TouchableOpacity onPress={handleRemovePress}>
                <SaveFilledIcon style={styles.saveIcon} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={handleSavePress}>
                <SaveIcon style={styles.saveIcon} />
              </TouchableOpacity>
            )}
          </View>

          {showMessage && (
            <View style={styles.messageContainer}>
              <Text style={styles.messageText}>{messageText} </Text>
            </View>
          )}
        </View>
      )}
      {showHeader && (
        <View style={styles.stickyHeader}>
          <TouchableOpacity
            style={styles.backIconContainer} // Add a style for positioning
            onPress={() => navigation.goBack()}
          >
            <BackIcon style={styles.backIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuIconContainer}
            onPress={handleSavePress}
          >
            {isFavorite ? (
              <SaveFilledIcon style={styles.saveIcon} />
            ) : (
              <SaveIcon style={styles.saveIcon} />
            )}
          </TouchableOpacity>
          {showMessage && (
            <View style={styles.messageContainer}>
              <Text style={styles.messageText}>
                Removed from your favorites!
              </Text>
            </View>
          )}
        </View>
      )}

      <ScrollView
        ref={scrollViewRef}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={styles.container}
        bounces={false}
        onScroll={handleScroll}
      >
        <ImageBackground
          source={{ uri: mosque.imageUrl }}
          style={styles.imageBackground}
          resizeMode="cover"
        >
          <LinearGradient
            colors={["transparent", "#fff"]}
            style={styles.gradient}
          />
          <View style={styles.content}>
            <InfoCard mosqueDetails={mosque} settingsButton={false} />
          </View>
        </ImageBackground>

        <View style={styles.infoCardContainer}>
          <DateCard
            nextPrayerTime={nextPrayerTime}
            countdown={countdown}
            calculateCountdown={calculateCountdown}
          />
        </View>
        <Text style={styles.subtitle}>Kohët e Namazit</Text>
        <PrayerTimesPart
          prayerTimes={prayerTimes}
          currentPrayerTime={currentPrayerTime}
        />
        <View style={styles.notes}>
          <View style={styles.smalldivider} />
          <Text style={styles.text}>Shënim: Hëna e plotë</Text>
          <View style={styles.smalldivider} />
        </View>
        <TouchableOpacity
          style={styles.calendarButton}
          onPress={() => navigation.navigate("CalendarScreen")}
        >
          <Text style={styles.calendarButtonText}>Shfaq kalendarin mujor</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <DonationsCard navigation={navigation} mosqueId={mosque.id} />
        <View style={styles.divider} />
        <AnnouncementsCard navigation={navigation} mosqueId={mosque.id} />
        <View style={styles.divider} />
        <EventsCard mosqueId={mosque.id} />
        <View style={styles.divider} />
        <HistoryCard navigation={navigation} mosqueId={mosque.id} />
        <View style={styles.divider} />
      </ScrollView>
    </>
  );
};

export default MosqueScreen;
