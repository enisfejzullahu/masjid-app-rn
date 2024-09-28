import React, { useState, useEffect } from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";
import { getEvents } from "../database/Api";
import styles from "../../assets/styles/HomeScreenStyles";
import moment from "moment";

const EventsCard = ({ mosqueId }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true); // Start loading
      const eventsData = await getEvents(mosqueId);

      if (eventsData?.message) {
        // Handle API errors
        setError(eventsData.message);
        setEvents([]);
      } else {
        // Set events data (could be an empty array if no events are available)
        setEvents(eventsData);
        setError(null);
      }

      setLoading(false); // End loading
    };

    fetchEvents();
  }, [mosqueId]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#06A85D" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle2}>Eventet</Text>
      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : events.length > 0 ? (
        events.map((event) => {
          const eventDate = new Date(event.date._seconds * 1000);
          const formattedDate = moment(eventDate).format("DD.MM.YYYY");
          const formattedTime = moment(eventDate).format("HH:mm");

          return (
            <View key={event.id} style={styles.eventCard}>
              <View style={styles.eventDetails}>
                <Text style={styles.eventTitle}>{event.title}</Text>
                <Text style={styles.eventDateTime}>
                  {formattedDate} - {formattedTime}
                </Text>
              </View>
              <Image
                source={require("../../assets/logo-xhamia-ime.png")}
                style={styles.eventLogo}
              />
            </View>
          );
        })
      ) : (
        // Display this if no events are available, without treating it as an error
        <View style={styles.historyCard}>
          <Text style={styles.noEventsText}>Nuk ka evente për këtë xhami</Text>
        </View>
      )}
    </View>
  );
};

export default EventsCard;
