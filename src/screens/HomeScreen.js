import React, { useRef, useState, useEffect, useCallback } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  ActivityIndicator,
  Platform,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Swiper from "react-native-swiper";
import storage from "../database/Storage";

import styles from "../../assets/styles/HomeScreenStyles";

import MenuIcon from "../../assets/SVG/MenuIcon";
import InfoCard from "../components/InfoCard";
import DateCard from "../components/DateCard";
import PrayerTimesPart from "../components/PrayerTimesPart";
import {
  getTodaysPrayerTime,
  getTomorrowsPrayerTime,
  getMosqueInfo,
  getTodaysPrayerTimeJSON,
  getTomorrowsPrayerTimeJSON,
} from "../database/Api";
import PrayerTimesKS from "../database/PrayerTimesKS.json";
import AnnouncementsCard from "../components/AnnouncementsCard";
import DonationsCard from "../components/DonationsCard";
import EventsCard from "../components/EventsCard";
import HistoryCard from "../components/HistoryCard";
import moment from "moment";
import PamjaIcon from "../../assets/SVG/PamjaIcon";
import ShapesTop from "../../assets/SVG/ShapesTop";

// Function to determine the current prayer time
// Function to determine the current prayer time
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

const Placeholder = () => (
  <View style={styles.placeholder}>
    <Text>Loading Prayer Times...</Text> {/* Custom placeholder */}
  </View>
);

const HomeScreen = ({ navigation }) => {
  const scrollViewRef = useRef(null);
  const lastOffsetY = useRef(0);
  const [prayerTimes, setPrayerTimes] = useState({});
  const [error, setError] = useState(null);
  const [currentPrayerTime, setCurrentPrayerTime] = useState(null);
  const [nextPrayerTime, setNextPrayerTime] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [favoriteMosques, setFavoriteMosques] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showHeader, setShowHeader] = useState(false); // Add state for sticky header
  const [activeIndex, setActiveIndex] = useState(0);
  const [countdown, setCountdown] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [tomorrowPrayerTimes, setTomorrowPrayerTimes] = useState({});

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

  useFocusEffect(
    useCallback(() => {
      const fetchFavorites = async () => {
        try {
          const storedFavorites = await storage.load({ key: "favorites" });
          setFavorites(storedFavorites);
        } catch (error) {
          console.error("Error loading favorites:", error);
          setFavorites([]);
        }
      };

      fetchFavorites();
    }, [])
  );

  const handleIndexChanged = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const storedFavorites = await storage.load({ key: "favorites" });
        setFavorites(storedFavorites || []);
      } catch (err) {
        console.error("Error loading favorites:", err);
      }
    };

    loadFavorites();
  }, []);

  useEffect(() => {
    const fetchFavoriteMosques = async () => {
      const mosqueDetails = await Promise.all(
        favorites.map(async (mosqueId) => {
          try {
            const mosqueInfo = await getMosqueInfo(mosqueId);
            return mosqueInfo;
          } catch (error) {
            console.error(
              `Error fetching details for mosque ${mosqueId}:`,
              error
            );
            return null;
          }
        })
      );
      setFavoriteMosques(mosqueDetails.filter((mosque) => mosque !== null));
    };

    fetchFavoriteMosques();
  }, [favorites]);

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

  if (favoriteMosques.length === 0) {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <ShapesTop />
        </View>
        <View style={styles.centerContent}>
          <Text style={styles.mainMessage}>
            Nuk keni asnjë xhami të preferuar.
          </Text>
          <Text style={styles.subMessage}>
            Filloni të kërkoni dhe të shtoni xhami në preferencat tuaja duke
            klikuar më poshtë!
          </Text>
          <TouchableOpacity
            style={styles.findMosquesButton}
            onPress={() => navigation.navigate("Search")}
          >
            <Text style={styles.findMosquesButtonText}>Kërkoni Xhamitë</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <>
      <StatusBar
        barStyle={Platform.OS === "android" ? "light-content" : "dark-content"}
      />
      <View style={styles.topBar}>
        <View style={styles.paginationDotsTop}>
          {favoriteMosques.map((_, index) => (
            <View
              key={index}
              style={[styles.dot, activeIndex === index && styles.activeDot]}
            />
          ))}
        </View>
      </View>
      <Swiper
        loop={false}
        showsPagination={false} 
        onIndexChanged={handleIndexChanged}
      >
        {favoriteMosques.map((mosque) => (
          <ScrollView
            key={mosque.id}
            bounces={false}
            ref={scrollViewRef}
            onScroll={handleScroll}
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            style={styles.container}
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
                <InfoCard mosqueDetails={mosque} settingsButton={true} />
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
              currentPrayerTime={currentPrayerTime || {}}
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
              <Text style={styles.calendarButtonText}>
                Shfaq kalendarin mujor
              </Text>
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
        ))}
      </Swiper>
    </>
  );
};

export default HomeScreen;
