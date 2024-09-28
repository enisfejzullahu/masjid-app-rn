import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start', // Push the card towards the top
      alignItems: 'center',
      paddingTop: 20, // Adjust the padding as needed
      top: 100,
    },
    card: {
      flexDirection: 'row',
      width: '89%',
      padding: 20,
      backgroundColor: '#fff',
      borderRadius: 25,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 5,
      marginVertical: 10,
    },
    leftPart: {
      flex: 0.5,
      justifyContent: 'center',
      alignItems: 'left',
      paddingRight: 25,
      borderRightWidth: 1,
      borderRightColor: '#3C3C3C',
    },
    rightPart: {
      flex: 0.8,
      justifyContent: 'center',
      alignItems: 'left',
      paddingLeft: 10,
    },
    infoText: {
      fontSize: 14,
      fontFamily: 'Montserrat_400Regular', // Use the Montserrat font
      color: '#06A85D', // Text color
      left: 1,
      width: 120
    },
    dateText: {
      fontSize: 17,
      fontFamily: 'Montserrat_500Medium', 
    },
    hijriDateText: {
      marginTop: 5,
      fontSize: 17,
      fontFamily: 'Montserrat_500Medium',
    },
    digitStyle: {
      backgroundColor: 'transparent',
      marginHorizontal: 0,
    },
    digitTxtStyle: {
      color: '#06A85D',
      fontSize: 30,
      fontFamily: 'Montserrat_600SemiBold',
    },
    separatorStyle: {
      color: 'green', // Separator color
    },
  });
  
  export default styles;
  