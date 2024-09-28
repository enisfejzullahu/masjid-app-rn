import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Share,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import PamjaIcon from "../../assets/SVG/PamjaIcon";
import ShapesTop from "../../assets/SVG/ShapesTop"; // Import the SVG
import styles from "../../assets/styles/SettingsScreenStyles";
import BellIcon2 from "../../assets/SVG/BellIcon2";
import HelpIcon from "../../assets/SVG/HelpIcon";
import AboutUsIcon from "../../assets/SVG/AboutUsIcon";
import ShareIcon from "../../assets/SVG/ShareIcon";

const SettingsScreen = ({ navigation }) => {
  const shareApp = async () => {
    try {
      const result = await Share.share({
        message: "Shkarko aplikacionin tonë nga linku: https://example.com", // Replace with your actual app link when available
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // Shared with activity type of result.activityType
        } else {
          // Shared
        }
      } else if (result.action === Share.dismissedAction) {
        // Dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ShapesTop width="100%" height={150} />
        <Text style={styles.title}>Preferencat</Text>
      </View>

      {/* Make the content scrollable */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <TouchableOpacity
              style={styles.optionRow}
              onPress={() => navigation.navigate("DisplayScreen")}
            >
              <PamjaIcon width={30} height={30} style={styles.icon} />
              <Text style={styles.optionText}>Pamja</Text>
              <MaterialIcons
                name="arrow-forward-ios"
                size={20}
                color="#06A85D"
              />
            </TouchableOpacity>
            <View style={styles.smalldivider} />
            <TouchableOpacity
              style={styles.optionRow}
              onPress={() => navigation.navigate("NotificationsScreen")}
            >
              <BellIcon2 width={30} height={30} style={styles.icon} />
              <Text style={styles.optionText}>Njoftimet</Text>
              <MaterialIcons
                name="arrow-forward-ios"
                size={20}
                color="#06A85D"
              />
            </TouchableOpacity>
            <View style={styles.smalldivider} />
            <TouchableOpacity
              style={styles.optionRow}
              onPress={() => navigation.navigate("HelpScreen")}
            >
              <HelpIcon width={30} height={30} style={styles.icon} />
              <Text style={styles.optionText}>Ndihma</Text>
              <MaterialIcons
                name="arrow-forward-ios"
                size={20}
                color="#06A85D"
              />
            </TouchableOpacity>
            <View style={styles.smalldivider} />
            <TouchableOpacity
              style={styles.optionRow}
              onPress={() => navigation.navigate("AboutUsScreen")}
            >
              <AboutUsIcon width={30} height={30} style={styles.icon} />
              <Text style={styles.optionText}>Rreth Nesh</Text>
              <MaterialIcons
                name="arrow-forward-ios"
                size={20}
                color="#06A85D"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareButton} onPress={shareApp}>
              <ShareIcon width={30} height={30} />
              <Text style={styles.shareText}>Shpërndaj Aplikacionin</Text>
            </TouchableOpacity>
            {/* Logo and Copyright */}
            <View style={styles.footer}>
              <Image
                source={require("../../assets/logo-xhamia-ime.png")}
                style={styles.logo}
              />
              <Text style={styles.copyrightText}>
                Copyright 2024, Xhamia Ime
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SettingsScreen;
