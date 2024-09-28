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
  contentContainer: {
    width: "90%",
  },
  card: {
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
    marginBottom: 20,
  },
  faqItem: {
    marginBottom: 15,
  },
  questionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  question: {
    fontSize: 16,
    fontFamily: "Montserrat_600SemiBold",
    width: "80%",
  },
  answer: {
    fontSize: 16,
    fontFamily: "Montserrat_400Regular",
    color: "#555",
    marginTop: 10,
    paddingLeft: 20,
  },
  chevronIcon: {
    width: 16,
    height: 16,
    right: 5,
  },
  contactSection: {
    marginTop: 10,
  },
  contactText: {
    fontSize: 14,
    fontFamily: "Montserrat_400Regular",
    marginBottom: 10,
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
