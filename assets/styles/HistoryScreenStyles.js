import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F9F9",
  },
  contentContainer: {
    alignItems: "center",
  },
  header: {
    marginBottom: 20,
    width: "100%",
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
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    marginTop: 10,
    width: "90%",
    alignSelf: "center",
    marginBottom: 20,
    overflow: "hidden", // Ensures the image is clipped within the card’s rounded corners
  },
  card2: {
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    marginTop: 10,
    width: "90%",
    alignSelf: "center",
    marginBottom: 40,
    overflow: "hidden",
  },
  insideCard: {
    padding: 16,
  },
  historikuImage: {
    width: "100%", // Full width of the card
    height: 200, // Adjust the height as needed
    borderRadius: 10,
  },
  historikuTitle: {
    fontSize: 20,
    fontFamily: "Montserrat_700Bold",
    marginTop: 10,
    color: "#000",
  },
  historikuText: {
    fontSize: 16,
    fontFamily: "Montserrat_400Regular",
    marginTop: 10,
    color: "#000",
    lineHeight: 24,
    marginBottom: 25,
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
  paragraphContainer: {
    marginBottom: 20, // Adjust this value to control space between paragraphs
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  fotoTitle: {
    fontSize: 20,
    fontFamily: "Montserrat_700Bold",
    marginVertical: 15,
    color: "#000",
  },
  topImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  imagesRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  thumbnailImage: {
    width: (Dimensions.get('window').width - 94) / 3, // Adjust width of each thumbnail
    height: 100, // Adjust height of each thumbnail
    margin: 4,
    borderRadius: 5,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  fullScreenImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  moreImagesOverlay: {
    position: "relative",
  },
  moreImagesTextContainer: {
    position: "absolute",
    top: 5,
    left: 4,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
    borderRadius: 8,
    height: 100,
    width: (Dimensions.get('window').width - 94) / 3, // Adjust width of each thumbnai
  },
  moreImagesText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  thumbnailImageWithOpacity: {
    width: (Dimensions.get('window').width - 99) / 3, // Adjust width of each thumbnail
    height: 100,
    margin: 5,
    borderRadius: 8,
  },
});

export default styles;
