import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { getMosques } from "../database/Api"; 
import styles from "../../assets/styles/SearchScreenStyles";

const SearchScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [mosques, setMosques] = useState([]);
  const [filteredMosques, setFilteredMosques] = useState([]);

  useEffect(() => {
    const fetchMosques = async () => {
      try {
        const data = await getMosques();
        setMosques(data);
        setFilteredMosques(data); // Initially show all mosques
      } catch (error) {
        console.error("Error fetching mosques:", error);
      }
    };
  
    fetchMosques();
  }, []);
  
  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text === "") {
      setFilteredMosques(mosques); // Show all mosques if search query is empty
    } else {
      setFilteredMosques(
        mosques.filter((mosque) =>
          mosque.emri && mosque.emri.toLowerCase().includes(text.toLowerCase())
        )
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Ionicons name="search" size={24} color="#000" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Cilën Xhami po kërkoni?"
            placeholderTextColor="#666"
            onChangeText={handleSearch}
            value={searchQuery}
          />
        </View>
      </View>

      <Text style={styles.suggestedText}>Sugjeruar për ju</Text>

      <FlatList
        data={filteredMosques}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.mosqueCard}
            onPress={() => navigation.navigate("MosqueScreen", { mosqueId: item.id })}
          >
            <View style={styles.mosqueInfo}>
              <Text style={styles.mosqueName}>{item.emri}</Text>
              <Text style={styles.mosqueLocation}>{item.adresa}</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#06A85D" />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default SearchScreen;
