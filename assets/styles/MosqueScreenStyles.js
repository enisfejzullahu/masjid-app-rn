import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  imageBackground: {
    width: "100%",
    height: 300,
    justifyContent: "flex-end",
    tintColor: "cyan",
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    padding: 20,
    alignItems: "center",
    top: 60,
  },
  title: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
  subtitle: {
    color: "#000",
    fontFamily: "Montserrat_700Bold",
    marginTop: 30,
    marginBottom: 12,
    left: 20,
    fontSize: 18,
  },
  subtitle2: {
    color: "#000",
    fontFamily: "Montserrat_700Bold",
    marginTop: 30,
    marginBottom: 12,
    left: 20,
    fontSize: 20,
  },
  menuIconContainer: {
    position: "absolute",
    top: 52,
    right: 30,
  },
  menuIcon: {
    // Add styles if needed
  },
  infoCardContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    bottom: 80,
  },
  prayerTimesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center", // Center horizontally
    width: "90%", // Ensure the container takes full width
    marginHorizontal: 10,
    left: 5,
  },
  prayerTimeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%", // Ensure each row takes full width
    maxWidth: 400, // Optional: Set a max width to keep the grid centered
  },
  divider: {
    width: "90%", // Adjust as needed
    height: 1,
    backgroundColor: "#06A85D", // Green color
    left: "5%",
    marginTop: 30,
  },
  notes: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 10,
  },
  smalldivider: {
    width: "80%", // Adjust as needed
    height: 1,
    backgroundColor: "#06A85D", // Green color
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    fontFamily: "Montserrat_600SemiBold",
    color: "#000",
    textAlign: "center",
  },
  calendarButton: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  calendarButtonText: {
    color: "#06A85D",
    fontSize: 18,
    fontFamily: "Montserrat_700Bold", // Use the Montserrat font
  },
  donationsButton: {
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 5,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  donationsButtonText: {
    color: "#06A85D",
    fontSize: 20,
    fontFamily: "Montserrat_700Bold", // Use the Montserrat font
  },
  announcementHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  moreText: {
    fontSize: 16,
    color: "#06A85D",
    fontFamily: "Montserrat_600SemiBold",
    right: 20,
    top: 10,
  },
  announcementCard: {
    padding: 16,
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    marginTop: 10,
    width: "90%",
    alignSelf: "center",
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
  readMoreText: {
    marginTop: 15,
    fontSize: 15,
    color: "#00ADEF",
    fontFamily: "Montserrat_600SemiBold",
  },
  eventCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    marginTop: 10,
    width: "90%",
    alignSelf: "center",
  },
  eventDetails: {
    flex: 1,
  },
  eventTitle: {
    fontSize: 20,
    color: "#333",
    fontFamily: "Montserrat_600SemiBold",
  },
  eventDateTime: {
    fontSize: 16,
    color: "#555",
    fontFamily: "Montserrat_500Medium",
    marginTop: 4,
  },
  eventLogo: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  historyCard: {
    width: "90%",
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    paddingTop: 0, // Remove top padding to ensure the image is flush with the top
    paddingBottom: 20, // Only apply bottom padding for content below the image
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    alignItems: "center",
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  historyCardTitle: {
    fontSize: 20,
    fontFamily: "Montserrat_600SemiBold",
    color: "#000",
    marginBottom: 15,
  },
  historyCardText: {
    fontSize: 16,
    fontFamily: "Montserrat_400Regular",
    color: "#000",
    textAlign: "center",
    marginBottom: 12,
    width: "90%",
  },
  readAllButton: {
    backgroundColor: "#F8F8F8",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: "80%",
    marginVertical: 10,
    alignItems: "center",
  },
  readAllButtonText: {
    fontSize: 16,
    fontFamily: "Montserrat_700Bold",
    color: "#06A85D",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  backIconContainer: {
    position: "absolute",
    top: 50,
    left: 30, // Adjust positioning
    zIndex: 1,
  },
  backIcon: {
    width: 20,
    height: 20,
  },
  topBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "transparent", // Or any background color you prefer
    zIndex: 10,
  },
  stickyHeader: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#06A85D",
    paddingHorizontal: 16,
    paddingVertical: 8,
    zIndex: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 100,
  },
  messageContainer: {
    flex: 1,
    top: "100%", // Align to top
    left: 0, // Align to left
    right: 0, // Stretch to the right
    bottom: 0, // Stretch to the bottom
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
    backgroundColor: "#06A85D",
    borderRadius: 8, // Optional: rounded corners
    padding: 16, // Optional: padding around the message
    zIndex: 1000, // Ensure it's on top of other content
  },
  messageText: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
});

export default styles;
