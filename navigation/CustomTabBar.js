// src/components/CustomTabBar.js
import React, { useRef, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CustomTabBar = ({ state, descriptors, navigation }) => {
  const insets = useSafeAreaInsets();
  const tabWidth = 100 / state.routes.length;
  const indicatorTranslateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(indicatorTranslateX, {
      toValue: tabWidth * state.index,
      useNativeDriver: true,
    }).start();
  }, [state.index, tabWidth]);

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <View style={styles.indicatorContainer}>
        <Animated.View
          style={[
            styles.indicator,
            {
              transform: [{ translateX: indicatorTranslateX }],
              width: `${tabWidth / 2}%`, // Width of the indicator
            },
          ]}
        />
      </View>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const IconComponent = options.tabBarIcon({ focused: isFocused });

          return (
            <TouchableOpacity
              key={route.key}
              onPress={() => {
                navigation.navigate(route.name);
              }}
              style={styles.tab}
            >
              {IconComponent}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#06A85D', // Background color of the tab bar
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    position: 'relative', // Ensure positioning for the indicator
  },
  tabBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 80, // Height of the tab bar
    position: 'relative', // Set relative positioning to control child elements
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%', // Ensure tab takes full height of tab bar
  },
  indicatorContainer: {
    position: 'absolute',
    top: -4, // Position the indicator container just below the top border of the navbar
    left: 0,
    right: 0,
    height: 4, // Height of the indicator
    backgroundColor: 'transparent',
    zIndex: 1, // Ensure the indicator is above the tab bar
  },
  indicator: {
    position: 'absolute',
    bottom: 0, // Align the indicator to the bottom of the container
    height: '100%', // Full height of the indicator container
    backgroundColor: '#fff', // Color of the indicator
  },
});

export default CustomTabBar;
