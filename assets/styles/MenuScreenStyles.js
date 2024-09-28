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
  title: {
    fontSize: 24,
    fontFamily: "Montserrat_700Bold",
    marginTop: 10,
    left: 20,
  },
  listContainer: {
    width: "100%", // This styles the ScrollView itself
    paddingHorizontal: 10,
  },
  scrollViewContent: {
    // Move layout styles here
    alignItems: "center", // Center the content inside the ScrollView
    paddingVertical: 20,
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
    marginLeft: 20,
  },
  card: {
    width: "85%",
    height: 150,
    borderRadius: 20,
    overflow: "hidden",
    position: "relative",
    marginRight: 10,
  },
  cardImage: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%",
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontFamily: "Montserrat_700Bold",
    color: "#fff",
    marginLeft: 5,
  },
  cardInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 5,
    marginBottom: 10,
    marginTop: 5,
  },
  locationIcon: {
    marginRight: 5,
    color: "#fff",
  },
  locationText: {
    fontSize: 12,
    fontFamily: "Montserrat_400Regular",
    color: "#fff",
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
  dotsContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
