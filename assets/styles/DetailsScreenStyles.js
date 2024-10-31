import { StyleSheet } from "react-native";

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
  saveButton: {
    backgroundColor: "#06A85D",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    margin: 20,
    position: "absolute",
    bottom: 5,
    left: 20,
    right: 20,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default styles;
