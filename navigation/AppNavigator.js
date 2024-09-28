import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../src/screens/HomeScreen";
import SearchScreen from "../src/screens/SearchScreen";
import SettingsScreen from "../src/screens/SettingsScreen";
import MenuScreen from "../src/screens/MenuScreen";
import DetailsScreen from "../src/screens/DetailsScreen"; // Import DetailsScreen
import CalendarScreen from "../src/screens/CalendarScreen";
import DonationsScreen from "../src/screens/DonationsScreen";

import MosqueIcon from "../assets/SVG/MosqueIcon";
import SearchIcon from "../assets/SVG/SearchIcon";
import SettingsIcon from "../assets/SVG/SettingsIcon";
import Mosque from "../assets/SVG/Mosque";
import SearchFilled from "../assets/SVG/SearchFilled";
import SettingsFilled from "../assets/SVG/SettingsFilled";
import AnnouncementsScreen from "../src/screens/AnnouncementsScreen";
import HistoryScreen from "../src/screens/HistoryScreen";
import MosqueScreen from "../src/screens/MosqueScreen";
import DonateScreen from "../src/screens/DonateScreen";
import DisplayScreen from "../src/screens/DisplayScreen";
import NotificationsScreen from "../src/screens/NotificationsScreen";
import HelpScreen from "../src/screens/HelpScreen";
import AboutUsScreen from "../src/screens/AboutUsScreen";
import DonateScreen2 from "../src/screens/DonateScreen2";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        let IconComponent;
        let iconStyle = { marginBottom: 0 }; // Default style

        if (route.name === "Home") {
          IconComponent = focused ? MosqueIcon : Mosque;
        } else if (route.name === "Search") {
          IconComponent = focused ? SearchFilled : SearchIcon;
          iconStyle = { ...iconStyle, marginTop: 10 }; // Adjust for Search
        } else if (route.name === "Settings") {
          IconComponent = focused ? SettingsFilled : SettingsIcon;
          iconStyle = { ...iconStyle, marginTop: 10 }; // Adjust for Settings
        }

        return (
          <IconComponent
            width={45}
            height={45}
            style={iconStyle} // Apply the style
          />
        );
      },
      tabBarShowLabel: false, // Remove the labels under the icons
      tabBarStyle: {
        backgroundColor: "#06A85D", // Set the background color to green
        height: 100, // Set the height of the tab bar
        alignItems: "center",
      },
    })}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="Search"
      component={SearchScreen}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="Settings"
      component={SettingsScreen}
      options={{ headerShown: false }}
    />
  </Tab.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CalendarScreen"
        component={CalendarScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DonationsScreen"
        component={DonationsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DonateScreen"
        component={DonateScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AnnouncementsScreen"
        component={AnnouncementsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MosqueScreen"
        component={MosqueScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DisplayScreen"
        component={DisplayScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HelpScreen"
        component={HelpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AboutUsScreen"
        component={AboutUsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
