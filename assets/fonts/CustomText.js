import React from 'react';
import { Text } from 'react-native';

const CustomText = ({ style, variant, ...props }) => {
  let fontFamily;

  switch (variant) {
    case 'thin':
      fontFamily = 'Montserrat_100Thin';
      break;
    case 'thin-italic':
      fontFamily = 'Montserrat_100Thin_Italic';
      break;
    case 'extra-light':
      fontFamily = 'Montserrat_200ExtraLight';
      break;
    case 'extra-light-italic':
      fontFamily = 'Montserrat_200ExtraLight_Italic';
      break;
    case 'light':
      fontFamily = 'Montserrat_300Light';
      break;
    case 'light-italic':
      fontFamily = 'Montserrat_300Light_Italic';
      break;
    case 'regular':
      fontFamily = 'Montserrat_400Regular';
      break;
    case 'regular-italic':
      fontFamily = 'Montserrat_400Regular_Italic';
      break;
    case 'medium':
      fontFamily = 'Montserrat_500Medium';
      break;
    case 'medium-italic':
      fontFamily = 'Montserrat_500Medium_Italic';
      break;
    case 'semi-bold':
      fontFamily = 'Montserrat_600SemiBold';
      break;
    case 'semi-bold-italic':
      fontFamily = 'Montserrat_600SemiBold_Italic';
      break;
    case 'bold':
      fontFamily = 'Montserrat_700Bold';
      break;
    case 'bold-italic':
      fontFamily = 'Montserrat_700Bold_Italic';
      break;
    case 'extra-bold':
      fontFamily = 'Montserrat_800ExtraBold';
      break;
    case 'extra-bold-italic':
      fontFamily = 'Montserrat_800ExtraBold_Italic';
      break;
    case 'black':
      fontFamily = 'Montserrat_900Black';
      break;
    case 'black-italic':
      fontFamily = 'Montserrat_900Black_Italic';
      break;
    default:
      fontFamily = 'Montserrat_400Regular';
  }

  return <Text {...props} style={[{ fontFamily }, style]} />;
};

export default CustomText;
