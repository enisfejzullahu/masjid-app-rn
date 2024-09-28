import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import moment from "moment";
import "moment/locale/sq"; // Import Albanian locale

import styles from "../../assets/styles/AnnouncementsScreenStyles";
import { getAnnouncements } from "../database/Api";

import ShapesTop from "../../assets/SVG/ShapesTop";
import BackIconGreen from "../../assets/SVG/BackIconGreen";
import BellIcon from "../../assets/SVG/BellIcon";

moment.locale("sq"); // Set the locale to Albanian

const AnnouncementsScreen = ({ navigation, route }) => {
  const [announcements, setAnnouncements] = useState([]);
  const [isExpanded, setIsExpanded] = useState({});
  const mosqueId = route.params?.mosqueId; // Get the mosqueId from route params

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        if (!mosqueId) {
          console.error("Mosque ID is undefined");
          return;
        }
        const announcementsData = await getAnnouncements(mosqueId);

        // Get the current date
        const now = moment();

        // Filter and format the dates in Albanian
        const filteredAnnouncements = announcementsData
          .filter((announcement) => {
            const announcementDate = moment(announcement.date, "DD/MM/YYYY");
            return (
              announcementDate.isValid() &&
              now.diff(announcementDate, "months") < 1
            );
          })
          .map((announcement) => {
            const date = moment(announcement.date, "DD/MM/YYYY").locale("sq");

            const formattedDate = date.isValid()
              ? date.format("D MMMM")
              : "Data e panjohur";

            return { ...announcement, date: formattedDate };
          });

        setAnnouncements(filteredAnnouncements);
      } catch (error) {
        console.error("Error fetching announcements:", error);
      }
    };

    fetchAnnouncements();
  }, [mosqueId]);

  const toggleExpand = (id) => {
    setIsExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

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
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {announcements.map((announcement) => (
          <View key={announcement.id} style={styles.card}>
            <View style={styles.announcementDateContainer}>
              <BellIcon style={styles.icon} />
              <Text style={styles.announcementDate}>{announcement.date}</Text>
            </View>

            <Text
              style={styles.announcementText}
              numberOfLines={isExpanded[announcement.id] ? 0 : 6}
            >
              {announcement.text}
            </Text>
            {announcement.imageUrl ? (
              <Image
                source={{ uri: announcement.imageUrl }}
                style={styles.announcementImage}
              />
            ) : null}

            <TouchableOpacity onPress={() => toggleExpand(announcement.id)}>
              <Text style={styles.readMoreText}>
                {isExpanded[announcement.id] ? "Shfaq me pak" : "Lexo me shume"}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
        <Text style={styles.noAnnouncementsText}>
          Njoftimet më të vjetra se një muaj nuk janë në dispozicion
        </Text>
      </ScrollView>
    </View>
  );
};

export default AnnouncementsScreen;
