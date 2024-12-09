import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { getHistoriku } from "../database/Api";
import styles from "../../assets/styles/HomeScreenStyles"; // Import your styles

const HistoryCard = ({ navigation, mosqueId }) => {
  const [historiku, setHistoriku] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHistoriku = async () => {
      setLoading(true); // Start loading
      const historikuData = await getHistoriku(mosqueId);

      if (historikuData?.message) {
        // Handle API errors
        setError(historikuData.message);
      } else {
        // Set historiku data (could be null if no history is available)
        setHistoriku(historikuData);
        setError(null);
      }

      setLoading(false); // End loading
    };

    fetchHistoriku();
  }, [mosqueId]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle2}>Historiku</Text>
      <View style={styles.historyCard}>
        {error ? (
          <Text style={styles.errorText}>{error}</Text>
        ) : historiku ? (
          <>
            <Image source={{ uri: historiku.image }} style={styles.image} />
            <Text style={styles.historyCardTitle}>{historiku.title}</Text>
            <Text style={styles.historyCardText} numberOfLines={7}>
              {historiku.text}
            </Text>
            <TouchableOpacity
              style={styles.readAllButton}
              onPress={() => navigation.navigate("HistoryScreen", { mosqueId })}
            >
              <Text style={styles.readAllButtonText}>Lexo të gjithën</Text>
            </TouchableOpacity>
          </>
        ) : (
          // Display this if no history is available, without treating it as an error
          <Text style={styles.noHistoryText}>
            Historiku nuk është i disponueshëm për këtë xhami.
          </Text>
        )}
      </View>
    </View>
  );
};

export default HistoryCard;
