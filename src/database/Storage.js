import AsyncStorage from "@react-native-async-storage/async-storage";
import Storage from "react-native-storage";

// Initialize storage with AsyncStorage as backend
const storage = new Storage({
  size: 1000, // Maximum capacity
  storageBackend: AsyncStorage, // Use AsyncStorage as the backend
  defaultExpires: null, // No expiration
  enableCache: true, // Enable caching
});

export default storage;
