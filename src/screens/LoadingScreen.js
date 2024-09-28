import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.shapesContainer}>
        {/* Add shapes here */}
      </View>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C0EBF5',
  },
  shapesContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '30%',
    // Add shape styles here
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  loadingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default LoadingScreen;
