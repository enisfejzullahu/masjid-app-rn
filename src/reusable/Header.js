import React from 'react';
import { View, Text } from 'react-native';
import ShapesTop from '../../assets/SVG/ShapesTop';
import styles from '../../assets/styles/MenuScreenStyles.js';

const Header = ({title}) => (
  <View style={styles.header}>
    <ShapesTop width="100%" height={150} />
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default Header;
