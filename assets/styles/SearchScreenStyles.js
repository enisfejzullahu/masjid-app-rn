import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F9F9",
    padding: 16,
    paddingTop: 150, // Space for the searchContainer
  },
  searchContainer: {
    backgroundColor: "#06A85D", // Green background
    borderBottomLeftRadius: 30, // Rounded bottom corners
    borderBottomRightRadius: 30, // Rounded bottom corners
    width: width, // Full width
    position: "absolute", // Position it absolutely
    top: 0, // Align to the top
    zIndex: 1, // Ensure it's above other content
    paddingHorizontal: 16,
    height: 150, // Height of the searchContainer
    justifyContent: "flex-end", // Align items to the bottom
    paddingBottom: 16, // Space for search input
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingHorizontal: 15,
    height: 55,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#000",
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  suggestedText: {
    fontSize: 18,
    fontFamily: "Montserrat_600SemiBold",
    marginTop: 20,
    marginBottom: 10,
    color: "#000",
  },
  mosqueCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    padding: 16,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  mosqueInfo: {
    flex: 1,
  },
  mosqueName: {
    fontSize: 16,
    fontFamily: "Montserrat_700Bold",
    color: "#000",
  },
  mosqueLocation: {
    fontSize: 14,
    color: "#666",
    fontFamily: "Montserrat_400Regular"
  },
});

export default styles;
