import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F9F9",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: {
    marginBottom: 20,
    width: "100%",
  },
  title: {
    fontSize: 18,
    fontFamily: "Montserrat_700Bold",
    marginVertical: 10,
    textAlign: "center",
    width: "80%",
    alignSelf: "center"
  },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 5,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
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
  tableContainer: {
    width: "100%",
    flexGrow: 1,
  },
  tableHeader: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#fff",
    zIndex: 10,
    paddingVertical: 15,
    alignItems: "center",
    width: "100%"
  },
  headerText: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 11.8,
    color: "#333",
    width: "15%",
    textAlign: "center",
    right: 7,
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  cellText: {
    fontFamily: "Montserrat_500Medium",
    fontSize: 14,
    color: "#333",
    width: "12%",
    textAlign: "center",
  },
  navigationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    width: "80%",
  },
  monthText: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 18,
    color: "#333",
  },
  scrollView: {
    width: "100%",
    height: 450,
  },
  dateRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
    paddingHorizontal: 15
  },
  dateText: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 14,
    color: "#333",
  },
  eventText: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 14,
    color: "#666",
  },
});

export default styles;
