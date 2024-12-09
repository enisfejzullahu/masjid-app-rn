import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F9F9",
    alignItems: "center",
  },
  scrollContainer: {
    width: width,
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
  subtitle: {
    fontSize: 18,
    fontFamily: "Montserrat_500Medium",
    marginBottom: 5,
  },
  subtitle2: {
    fontSize: 15,
    fontFamily: "Montserrat_400Regular",
    marginBottom: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  rowLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  sectionText: {
    fontSize: 16,
    fontFamily: "Montserrat_400Regular",
    marginLeft: 10,
  },
  dropdown: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginBottom: 10,
  },
  dropdownContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginBottom: 5,
  },
  selectedOption: {
    backgroundColor: "#DFF5E1",
  },
  optionText: {
    fontSize: 16,
    fontFamily: "Montserrat_400Regular",
    marginLeft: 10,
    color: "#333",
  },
  timeAdjustment: {
    justifyContent: "center",
    alignItems: "center",
  },
  timeAdjustmentText: {
    fontSize: 14,
    fontFamily: "Montserrat_400Regular",
    color: "#333",
    marginBottom: 5,
  },
  timeAdjustmentControls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 100,
  },
  minutesText: {
    fontSize: 20,
    fontFamily: "Montserrat_500Medium",
    color: "#333",
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
  minutesLabel: {
    fontSize: 14,
    fontFamily: "Montserrat_400Regular",
    color: "#333",
    marginLeft: 5,
  },
  settingRow: {
    flexDirection: "row", // Keep this for horizontal alignment
    alignItems: "center", // Vertically align text and switch
    justifyContent: "space-between", // Space out the text and switch
    paddingHorizontal: 5, // Horizontal padding
    paddingVertical: 15, // Vertical padding
    borderBottomWidth: 1,
    borderBottomColor: "rgba(6, 168, 93, 0.3)", // RGBA for 30% opacity
    width: "100%", // Full width,
  },
  settingLabel: {
    fontSize: 16,
    fontFamily: "Montserrat_600SemiBold",
    color: "#333", // Text color
    flex: 1, // Allow the label to take available space before the switch
  },
  prayerRow: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(6, 168, 93, 0.3)", // RGBA for 30% opacity
  },
  rowTop: {
    flexDirection: "row",
    justifyContent: "space-between", // Ensures left and right items are spaced
    alignItems: "center",
    width: "100%", // Ensures the row uses full width
  },
  rowLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  sectionText: {
    fontSize: 16,
    fontFamily: "Montserrat_500Medium",
    marginLeft: 10,
    color: "#333",
  },
  offsetLabel: {
    fontSize: 14,
    fontFamily: "Montserrat_400Regular",
    color: "#333",
    marginTop: 10,
  },
  sliderContainer: {
    marginTop: 10,
    width: "100%", // Ensures slider takes full width
    alignItems: "center", // Centers the slider and value text
  },
  offsetSlider: {
    width: "80%", // Makes the slider 80% width of the container (centered)
    marginVertical: 10,
  },
  offsetValue: {
    fontSize: 16,
    fontFamily: "Montserrat_500Medium",
    color: "#333",
    marginTop: 2, // Adds some spacing between the slider and value
  },
  saveButton: {
    backgroundColor: "#06A85D", // Green background
    paddingVertical: 15, // Vertical padding
    paddingHorizontal: 25, // Horizontal padding
    borderRadius: 8, // Rounded corners
    alignItems: "center", // Horizontally center the text
    justifyContent: "center", // Vertically center the text
    elevation: 3, // Add shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2, // Shadow opacity
    shadowRadius: 5, // Shadow blur radius
    marginTop: 10,
  },
  saveButtonText: {
    color: "#fff", // White text color
    fontSize: 16, // Text size
    fontFamily: "Montserrat_500Medium", // Font style
    textTransform: "uppercase", // Make text uppercase
  },
});

export default styles;
