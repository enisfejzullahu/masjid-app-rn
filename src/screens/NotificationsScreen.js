import React, { useState } from "react";
import { View, Text, TouchableOpacity, Switch } from "react-native";
import styles from "../../assets/styles/NotificationsScreenStyles";

import BackIconGreen from "../../assets/SVG/BackIconGreen";
import ShapesTop from "../../assets/SVG/ShapesTop";
import BellFilledIcon from "../../assets/SVG/BellFilledIcon";
import VolumeOnIcon from "../../assets/SVG/VolumeOnIcon";
import VolumeOffIcon from "../../assets/SVG/VolumeOffIcon";

const NotificationsScreen = ({ navigation }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [azanMode, setAzanMode] = useState("withAzan"); // withAzan or withoutAzan

  const toggleNotifications = () => setNotificationsEnabled((prev) => !prev);

  const handleAzanSelect = (mode) => {
    setAzanMode(mode);
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
      <View style={styles.card}>
        {/* First Section: Notification Toggle */}
        <Text style={styles.subtitle}>Të gjitha njoftimet</Text>

        <View style={styles.section}>
          <View style={styles.leftSection}>
            <View style={styles.iconContainer}>
              <BellFilledIcon style={styles.icon} />
            </View>
            <Text style={styles.sectionText}>Ndal njoftimet</Text>
          </View>
          <Switch
            value={notificationsEnabled}
            onValueChange={toggleNotifications}
            trackColor={{ false: "#767577", true: "#06A85D" }}
            thumbColor={notificationsEnabled ? "#fff" : "#f4f3f4"}
          />
        </View>

        {!notificationsEnabled && (
          <View style={styles.radioGroup}>
            <Text style={styles.subtitle}>Njofto për kohët e namazit</Text>

            <TouchableOpacity
              style={styles.radioButton}
              onPress={() => handleAzanSelect("withAzan")}
            >
              <View style={styles.leftSection}>
                <View style={styles.iconContainer}>
                  <VolumeOnIcon style={styles.icon} />
                </View>
                <Text style={styles.radioText}>Me ezan</Text>
              </View>
              <View style={styles.radioCircle}>
                {azanMode === "withAzan" && <View style={styles.selectedRb} />}
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.radioButton}
              onPress={() => handleAzanSelect("withoutAzan")}
            >
              <View style={styles.leftSection}>
                <View style={styles.iconContainer}>
                  <VolumeOffIcon style={styles.icon} />
                </View>
                <Text style={styles.radioText}>Pa ezan</Text>
              </View>
              <View style={styles.radioCircle}>
                {azanMode === "withoutAzan" && (
                  <View style={styles.selectedRb} />
                )}
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default NotificationsScreen;
