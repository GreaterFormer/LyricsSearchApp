import React, { useState, useEffect } from 'react';
import { 
  View, Text, TextInput, 
  Image, ImageBackground, 
  TouchableOpacity, Alert, ScrollView, KeyboardAvoidingView,
  SafeAreaView, StyleSheet 
} from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { COLORS } from '../utils/GlobalStyle';
import Icon from 'react-native-vector-icons/AntDesign';

import songData from '../assets/data/data.json';

// Import Screens
import SongCardComponent from '../components/SongCardComponent';

const HomeScreen = () => {
  const [songDetail, setSongDetail] = useState([]); // State to hold all songs
  const [filteredSongs, setFilteredSongs] = useState([]); // State for filtered songs
  const [searchQuery, setSearchQuery] = useState(""); // State for search input

  // Set initial state with all songs on component mount
  useEffect(() => {
    setSongDetail(songData);
    setFilteredSongs(songData); // Initially display all songs
  }, []);

  // Function to handle search
  const onTyping = (text) => {
    setSearchQuery(text); // Update search query state
    if (text === "") {
      // If search is empty, show all songs
      setFilteredSongs(songDetail);
    } else {
      // Filter songs based on the search text across title, chorus, and verses
      const filtered = songDetail.filter((song) => {
        const searchText = text.toLowerCase();
  
        return (
          (song.title && song.title.toLowerCase().includes(searchText)) || // Check title safely
          (song.chorus && song.chorus.toLowerCase().includes(searchText)) || // Check chorus safely
          (song.verses &&
            song.verses.some(
              (verse) => verse && verse.toLowerCase().includes(searchText) // Check verses safely
            ))
        );
      });
      setFilteredSongs(filtered);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* Search Bar */}
        <View style={styles.searchbarStyle}>
          <TextInput
            style={styles.searchInputStyle}
            onChangeText={onTyping}
            value={searchQuery} // Bind the input value to state
            placeholder="Search by title, chorus, or verses..."
          />
          <TouchableOpacity
            style={styles.cancelButtonStyle}
            activeOpacity={0.6}
            onPress={() => {
              setSearchQuery(""); // Clear the search query
              setFilteredSongs(songDetail); // Reset the filtered songs
            }}
          >
            <Text style={{ textAlign: "center" }}>Cancel</Text>
          </TouchableOpacity>
        </View>

        {/* Separator */}
        <View style={styles.lineStyle}></View>

        {/* Song List */}
        <ScrollView>
          {filteredSongs.map((song, index) => (
            <SongCardComponent key={index} song={song} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: COLORS.primary,
    padding: 20
  },
  searchbarStyle: { 
    width: '100%', 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  searchInputStyle: {
    borderWidth: 1,
    borderRadius: 7,
    width: '80%',
    padding: 10,
    paddingHorizontal: 20
  },
  cancelButtonStyle: {
    borderWidth: 1,
    borderRadius: 7,
    justifyContent: 'center',
    width: '15%',
    height: 35
  },
  lineStyle: {
    width: '100%', 
    marginTop: 10, 
    borderWidth: 1
  }
});