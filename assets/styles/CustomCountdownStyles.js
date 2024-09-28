import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  countdownContainer: {
    flexDirection: "row",
    alignItems: "flex-start", // Align items to the top
    top: 5,
  },
  hoursText: {
    fontSize: 30,
    fontFamily: "Montserrat_600SemiBold", // Use the Montserrat font
    color: "#06A85D", // Text color
    lineHeight: 35, // Match the fontSize for vertical alignment
    textAlign: "left", // Center align the text within the block
  },
  minutesText: {
    fontSize: 30,
    fontFamily: "Montserrat_600SemiBold", // Use the Montserrat font
    color: "#06A85D", // Text color
    lineHeight: 35, // Match the fontSize for vertical alignment
    textAlign: "left", // Center align the text within the block
  },
  secondsText: {
    top: 1,
    fontSize: 18,
    fontFamily: "Montserrat_600SemiBold", // Use the Montserrat font
    color: "#06A85D", // Text color
    lineHeight: 40, // Match the larger fontSize for vertical alignment
    marginLeft: 2, // Add some space between minutes and seconds
    textAlign: "left", // Center align the text within the block
    width: 40,
  },
  colonText: {
    fontSize: 30,
    fontFamily: "Montserrat_600SemiBold", // Use the Montserrat font
    color: "#06A85D", // Text color
    lineHeight: 33, // Match the fontSize for vertical alignment
  },
});

export default styles;
