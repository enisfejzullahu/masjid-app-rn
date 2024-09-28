import { StyleSheet, Dimensions } from "react-native";

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
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  sectionText: {
    fontSize: 16,
    fontFamily: "Montserrat_400Regular",
    marginLeft: 5,

  },
  subtitle: {
    fontSize: 18,
    fontFamily: "Montserrat_500Medium",
    marginBottom: 20,
  },
  radioGroup: {
    flexDirection: "column",
    marginTop: 10,
  },
  radioButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  radioText: {
    fontSize: 16,
    fontFamily: "Montserrat_400Regular",
    marginLeft: 5,

  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#06A85D", // Green border color for radio button
  },
  selectedRb: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#06A85D", // Green color for selected radio button
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
