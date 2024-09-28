import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F9F9",
    alignItems: "center",
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    paddingBottom: 30, // Add some padding at the bottom to prevent content from being cut off
  },
  header: {
    marginBottom: 20,
    width: "100%",
  },
  shapesTop: {
    position: "absolute",
    top: 0,
    left: 0,
    width: width,
    height: 150,
  },
  title: {
    fontSize: 24,
    fontFamily: "Montserrat_700Bold",
    marginTop: 10,
    left: 20,
  },
  cardContainer: {
    width: width,
    alignItems: "center",
  },
  card: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
  },
  smalldivider: {
    width: "100%", // Adjust as needed
    height: 1,
    backgroundColor: "#06A85D", // Green color
    marginVertical: 3,
    alignSelf: "center",
    opacity: 0.3,
  },
  icon: {
    left: 5,
    marginRight: 10,
  },
  optionText: {
    flex: 1,
    fontSize: 18,
    fontFamily: "Montserrat_500Medium",
  },
  shareButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#06A85D",
    padding: 12,
    borderRadius: 10,
    marginTop: 20, // Adjust margin to give space between the options and button
  },
  shareText: {
    fontSize: 17,
    color: "#fff",
    fontFamily: "Montserrat_600SemiBold",
  },
  footer: {
    alignItems: "center",
    marginTop: 25,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  copyrightText: {
    marginTop: 10,
    fontSize: 14,
    color: "#06A85D",
    fontFamily: "Montserrat_400Regular",
  },
  backIconContainer: {
    position: "absolute",
    top: 70,
    left: 20,
    zIndex: 1,
  },
  backIcon: {
    width: 20,
    height: 20,
  },
});

export default styles;
