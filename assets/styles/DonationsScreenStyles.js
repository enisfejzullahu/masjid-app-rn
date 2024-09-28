import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F9F9",
    alignItems: "center",
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
  card: {
    width: "90%",
    backgroundColor: "#06A85D",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 110,
  },
  donationTitle: {
    fontSize: 18,
    fontFamily: "Montserrat_600SemiBold",
    color: "#fff",
    width: "100%",
  },
  leftPart: {
    width: "70%",
  },
  rightPart: {
    alignItems: "flex-end",
    flex: 1,
  },
  progressCircleContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    width: 80, // Match the size of the progress circle
    height: 80, // Match the size of the progress circle
  },
  centeredTextContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  smalldivider: {
    width: "50%",
    height: 1.5,
    backgroundColor: "#fff",
  },
  amountText: {
    fontSize: 12,
    color: "#fff",
    textAlign: "center",
    fontFamily: "Montserrat_700Bold",
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
  noDonationsContainer: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  noDonationsText: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default styles;
