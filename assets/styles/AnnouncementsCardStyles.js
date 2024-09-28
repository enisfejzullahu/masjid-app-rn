import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F2F9F9",
    flex: 1,
  },
  sectionContainer: {
    marginVertical: 20,
    paddingHorizontal: 16,
  },
  announcementHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10, // Added marginBottom for spacing between header and card
  },
  subtitle2: {
    color: "#000",
    fontFamily: "Montserrat_700Bold",
    fontSize: 20,
  },
  moreText: {
    fontSize: 14,
    color: "#00ADEF",
    fontFamily: "Montserrat_600SemiBold",
  },
  announcementCard: {
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
  announcementDate: {
    fontSize: 14,
    color: "#32a852",
    fontFamily: "Montserrat_600SemiBold",
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 8,
  },
  announcementText: {
    marginTop: 8,
    fontSize: 14,
    color: "#333",
    fontFamily: "Montserrat_400Regular",
  },
  readMoreText: {
    marginTop: 10,
    fontSize: 14,
    color: "#00ADEF",
    fontFamily: "Montserrat_600SemiBold",
  },
});

export default styles;
