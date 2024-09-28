import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F9F9",
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: "center",
    paddingBottom: 20,
  },
  header: {
    width: "100%",
    position: "relative",
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
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 20,
    fontFamily: "Montserrat_600SemiBold",
    marginTop: 10,
    width: "90%",
  },
  card: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  topPart: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  topLeftPart: {
    width: "70%",
  },
  shareButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#06A85D",
    padding: 6,
    borderRadius: 10,
    marginTop: 15,
    width: "80%",
  },
  shareText: {
    fontSize: 16,
    color: "#fff",
    fontFamily: "Montserrat_600SemiBold",
  },
  progressCircleContainer: {
    width: 120,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    right: 10,
  },
  centeredTextContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  smalldivider: {
    width: "80%",
    height: 1.5,
    backgroundColor: "#06A85D",
  },
  amountText: {
    fontSize: 15,
    color: "#06A85D",
    fontFamily: "Montserrat_700Bold",
  },
  middlePart: {
    marginBottom: 20,
  },
  text: {
    fontSize: 15,
    fontFamily: "Montserrat_400Regular",
    marginTop: 12,
  },
  paymentForm: {
    marginTop: 12,
    width: "100%",
  },
  label: {
    fontSize: 14,
    fontFamily: "Montserrat_600SemiBold",
    color: "#000",
    marginTop: 5,
  },

  requiredText: {
    color: "#9B9B9B",
    fontFamily: "Montserrat_500Medium",
  },
  input: {
    height: 50,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderColor: "#06A85D",
    borderWidth: 1,
    paddingHorizontal: 15,
    fontSize: 16,
    fontFamily: "Montserrat_500Medium",
    color: "#000",
  },
  horizontalInputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  picker: {
    height: 50,
    width: "100%",
    borderWidth: 1,
    borderColor: "#06A85D",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
  formTitle: {
    fontSize: 20,
    fontFamily: "Montserrat_700Bold",
    color: "#333",
    marginBottom: 5,
  },
  formLabel: {
    fontSize: 15,
    fontFamily: "Montserrat_500Medium",
    color: "#333",
    marginBottom: 5,
  },
  amountInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#06A85D",
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    marginVertical: 10,
    paddingHorizontal: 15,
    height: 50,
  },
  amountInput: {
    flex: 1,
    color: "#06A85D",
    fontSize: 18,
    fontFamily: "Montserrat_700Bold",
  },
  currencyText: {
    color: "#06A85D",
    fontSize: 18,
    fontFamily: "Montserrat_700Bold",
    marginLeft: 10, // space between input and "EUR"
  },
  totalText: {
    fontSize: 20,
    fontFamily: "Montserrat_600SemiBold",
    marginTop: 5,
    marginBottom: 15,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#F2F9F9",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
    fontSize: 16,
    fontFamily: "Montserrat_500Medium",
    borderColor: "#ddd",
    borderWidth: 1,
  },
  donateButton: {
    backgroundColor: "#06A85D",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginVertical: 10,
  },
  donateButtonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Montserrat_700Bold",
    marginLeft: 10,
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
  inputError: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    fontSize: 13,
    marginBottom: 5,
    bottom: 4,
  },
  cvcExpiryContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardField: {
    borderColor: "#b0b0b0", // A softer border color for better aesthetics
    borderWidth: 1.5, // Slightly thicker border
    borderRadius: 10, // Rounded corners for a modern look
    backgroundColor: "#f9f9f9", // Light background color for better contrast
    paddingHorizontal: 15, // Add horizontal padding
    paddingVertical: 12, // Add vertical padding
    fontSize: 16, // Ensure font size is legible
    color: "#333", // Darker text color for better readability
  },
  cardFieldContainer: {
    marginBottom: 20,
    height: 60, // Increased height for better spacing
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.1, // Shadow opacity
    shadowRadius: 5, // Shadow radius
    elevation: 3, // Elevation for Android
  },
});

export default styles;
