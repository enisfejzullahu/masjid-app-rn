import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 200,
    backgroundColor: "#fff",
    borderRadius: 30,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  title: {
    fontSize: 22,
    fontFamily: "Montserrat_700Bold",
    width: "85%",
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    width: "100%",
    top: 5,
  },
  icon: {
    marginRight: 8,
  },
  infoText: {
    fontSize: 14,
    fontFamily: "Montserrat_400Regular",
  },
  moreIcon: {
    left: 10,
  },
});

export default styles;
