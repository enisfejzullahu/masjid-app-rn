import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { CircularProgress } from "react-native-svg-circular-progress";
import styles from "../../assets/styles/DonationsScreenStyles";
import ShapesTop from "../../assets/SVG/ShapesTop";
import BackIconGreen from "../../assets/SVG/BackIconGreen";
import { getDonationTypes } from "../database/Api";

const DonationsScreen = ({ route, navigation }) => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const mosqueId = route?.params?.mosqueId; // Use optional chaining

  useEffect(() => {
    const fetchDonations = async () => {
      if (!mosqueId) {
        setError("Mosque ID is undefined");
        setLoading(false);
        return;
      }

      try {
        const donationsData = await getDonationTypes(mosqueId);
        if (donationsData && Array.isArray(donationsData)) {
          setDonations(donationsData);
        } else {
          setDonations([]); // Ensure donations is an empty array if no data
        }
      } catch (err) {
        setError("Error fetching donations");
      }

      setLoading(false);
    };

    fetchDonations();
  }, [mosqueId]);

  if (loading) {
    return <View style={styles.loadingContainer}></View>;
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

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
        <Text style={styles.title}>Donacione</Text>
      </View>

      {donations.length === 0 ? (
        <View style={styles.noDonationsContainer}>
          <Text style={styles.noDonationsText}>
            Momentalisht nuk ka opsione për donacione për këtë xhami.
          </Text>
        </View>
      ) : (
        donations.map((donation) => {
          const goal = parseFloat(donation.goal) || 0;
          const currentAmount = parseFloat(donation.currentAmount) || 0;
          const progress = (currentAmount / goal) * 100;

          return (
            <TouchableOpacity
              key={donation.title}
              style={styles.card}
              onPress={() =>
                navigation.navigate("DonateScreen", {
                  title: donation.title,
                  goal: donation.goal,
                  currentAmount: donation.currentAmount,
                  description: donation.description,
                })
              }
            >
              <View style={styles.leftPart}>
                <Text style={styles.donationTitle}>{donation.title}</Text>
              </View>
              <View style={styles.rightPart}>
                <View style={styles.progressCircleContainer}>
                  <CircularProgress
                    percentage={progress}
                    tintColor="#fff" // Active color (white)
                    rotation={0} // Ensures the progress starts from the top (12 o'clock)
                  />
                  <View style={styles.centeredTextContainer}>
                    <Text style={styles.amountText}>${currentAmount}</Text>
                    <View style={styles.smalldivider} />
                    <Text style={styles.amountText}>${goal}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        })
      )}
    </View>
  );
};

export default DonationsScreen;
