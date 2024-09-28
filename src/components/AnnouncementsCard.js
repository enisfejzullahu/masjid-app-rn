import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import moment from "moment";
import "moment/locale/sq"; // Import Albanian locale

import BellIcon from "../../assets/SVG/BellIcon";
import styles from "../../assets/styles/HomeScreenStyles"; // Import your styles
import { getAnnouncements } from "../database/Api"; // Assuming you have an API function to fetch announcements

moment.locale("sq"); // Set the locale to Albanian

const AnnouncementsCard = ({ mosqueId, navigation }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [latestAnnouncement, setLatestAnnouncement] = useState(null);

  useEffect(() => {
    const fetchLatestAnnouncement = async () => {
      try {
        const announcements = await getAnnouncements(mosqueId);
        if (announcements.length > 0) {
          setLatestAnnouncement(announcements[0]);
        }
      } catch (error) {
        console.error("Error fetching announcements:", error);
      }
    };

    fetchLatestAnnouncement();
  }, [mosqueId]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  if (!latestAnnouncement) {
    return null; // Or a loading indicator if needed
  }

  // Use the date from the latest announcement and format it in Albanian
  const announcementDate = moment(latestAnnouncement.date, "DD/MM/YYYY")
    .locale("sq")
    .format("D MMMM");

  return (
    <View style={styles.container}>
      <View style={styles.announcementHeader}>
        <Text style={styles.subtitle2}>Njoftimet</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("AnnouncementsScreen", { mosqueId })
          }
        >
          <Text style={styles.moreText}>Më shume</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.announcementCard}>
        <View style={styles.announcementDateContainer}>
          <BellIcon style={styles.icon} />
          <Text style={styles.announcementDate}>{announcementDate}</Text>
        </View>
        <Text
          style={styles.announcementText}
          numberOfLines={isExpanded ? 0 : 6}
        >
          {latestAnnouncement.text}
        </Text>
        {latestAnnouncement.imageUrl ? (
          <Image
            source={{ uri: latestAnnouncement.imageUrl }}
            style={styles.announcementImage}
          />
        ) : null}
        <TouchableOpacity onPress={toggleExpand}>
          <Text style={styles.readMoreText}>
            {isExpanded ? "Shfaq me pak" : "Lexo me shume"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AnnouncementsCard;
