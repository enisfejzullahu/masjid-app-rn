import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F9F9",
  },
  contentContainer: {
    alignItems: "center", // Move layout styles here
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
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    marginTop: 10,
    width: "90%",
    alignSelf: "center",
    marginBottom: 20,
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
  announcementDateContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  announcementDate: {
    fontSize: 18,
    color: "#06A85D",
    fontFamily: "Montserrat_600SemiBold",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  icon: {
    marginRight: 8,
  },
  announcementText: {
    marginTop: 8,
    fontSize: 18,
    color: "#000",
    fontFamily: "Montserrat_400Regular",
    width: "90%",
  },
  announcementImage: {
    width: "100%", // or a specific width
    height: 300, // or a specific height
    borderRadius: 10, // optional: for rounded corners
    marginTop: 10,
  },
  readMoreText: {
    marginTop: 15,
    fontSize: 15,
    color: "#00ADEF",
    fontFamily: "Montserrat_600SemiBold",
  },
  noAnnouncementsText: {
    width: "80%",
    textAlign: "center",
    marginVertical: 20,
    fontSize: 15,
    color: "#777",
    fontFamily: "Montserrat_400Regular",
    marginBottom: 40,
    alignSelf: "center",
  },
});

export default styles;
