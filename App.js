import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { StripeProvider } from "@stripe/stripe-react-native";


import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light,
  Montserrat_300Light_Italic,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black,
  Montserrat_900Black_Italic,
} from "@expo-google-fonts/montserrat";

import storage from "./src/database/Storage";
import AppNavigator from "./navigation/AppNavigator";
import LoadingScreen from "./src/screens/LoadingScreen";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Load fonts
  const [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light,
    Montserrat_300Light_Italic,
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black,
    Montserrat_900Black_Italic,
  });


  useEffect(() => {
    storage
      .load({
        key: "favorites",
      })
      .then((favorites) => {
        // Favorites exist
        console.log("Favorites found:", favorites);
        setIsLoading(false); // Data is ready, stop loading
      })
      .catch((err) => {
        if (err.name === "NotFoundError") {
          // Initialize the favorites key if it doesn't exist
          console.log("No favorites found, initializing an empty array");
          storage
            .save({
              key: "favorites",
              data: [],
            })
            .then(() => {
              setIsLoading(false); // Data is ready, stop loading
            });
        } else {
          console.error("Error checking favorites:", err);
        }
      });
  }, []);

  if (!fontsLoaded || isLoading) {
    return <LoadingScreen />;
  }

  return (
    <StripeProvider
      publishableKey="pk_test_51Pyv8z1JCipCWrBSjhdSeBqgWQmWBTwNRRnVdoUdTT4tKiBJnjGTXPav1udePsWPMA7MRFueD4nUAZ0iZUm6JnUe00kiVPojlz"
      // Optionally include other props like `merchantIdentifier` or `urlScheme`
    >
      <View style={styles.container}>
        <AppNavigator />
      </View>
    </StripeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
