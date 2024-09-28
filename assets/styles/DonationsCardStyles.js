import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  sectionContainer: {
    marginVertical: 20,
    paddingHorizontal: 16,
  },
  donationsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10, // Added marginBottom for spacing between header and button
  },
  subtitle2: {
    color: "#000",
    fontFamily: "Montserrat_700Bold",
    fontSize: 20,
  },
  donationsButton: {
    padding: 16,
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginTop: 10,
  },
  donationsButtonText: {
    fontSize: 20,
    color: "#06A85D",
    fontFamily: "Montserrat_700Bold",
    textAlign: "center",
  },
});

export default styles;
