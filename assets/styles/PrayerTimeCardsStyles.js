import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  box: {
    width: "30%",
    height: 120,
    borderRadius: 10,
    backgroundColor: "#06A85D",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    position: "relative",
  },
  currentBox: {
    backgroundColor: "#fff",
  },
  iconContainer: {
    position: "absolute",
    top: "10%", // Position the container in the vertical center of the parent

    alignItems: "center",
    justifyContent: "center",
  },
  
  
  icon: {
  },
  textContainer: {
    marginTop: 20, // Adjust as needed
    alignItems: "center",
  },
  name: {
    fontSize: 16,
    fontFamily: "Montserrat_600SemiBold",
    color: "#fff",
    top: 15,
  },
  time: {
    fontSize: 20,
    fontFamily: "Montserrat_700Bold",
    color: "#fff",
    top: 15,
  },
  currentText: {
    color: "#06A85D",
  },
});

export default styles;
