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

// Import Screens

const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

const getColorForLetter = (letter) => {
    const colors = {
      A: '#FF5733',
      B: '#33FF57',
      C: '#3357FF',
      D: '#FF33A1',
      E: '#F1C40F',
      F: '#8E44AD',
      G: '#2ECC71',
      H: '#E74C3C',
      I: '#3498DB',
      J: '#9B59B6',
      K: '#1ABC9C',
      L: '#E67E22',
      M: '#34495E',
      N: '#16A085',
      O: '#2980B9',
      P: '#D35400',
      Q: '#C0392B',
      R: '#7D3C98',
      S: '#2874A6',
      T: '#1F618D',
      U: '#F4D03F',
      V: '#138D75',
      W: '#A93226',
      X: '#4A235A',
      Y: '#1C2833',
      Z: '#5D6D7E',
    };
    return colors[letter.toUpperCase()] || '#CCCCCC'; // Default to gray for unknown characters
};

const SongCardComponent = ({ song }) => {

    const navigation = useNavigation();

    const letter = song.title ? song.title.charAt(0).toUpperCase() : '?';
    const avatarColor = getColorForLetter(letter); // Get color based on the letter
  
    return (
      <View style={styles.card}>
        <View style={styles.row}>
          {/* Display the avatar with dynamic color */}
          <View style={{justifyContent: 'center', width: '8%' }}>
            <Text>{song.no}</Text>
          </View>
          <View style={[styles.avatar, { backgroundColor: avatarColor, width: '20%' }]}>
            <Text style={styles.avatarText}>{letter}</Text>
          </View>
  
          <View style={styles.songDetails}>
            <Text style={styles.songTitle}>{truncateText(song.title, 20)}</Text>
            <Text>{truncateText(song.category, 20)}</Text>
            <Text style={styles.songAuthor}>{truncateText(song.author, 20)}</Text>
          </View>
        </View>
  
        <View style={styles.action}>
          <TouchableOpacity
            style={styles.detailButtonStyle}
            activeOpacity={0.6}
            onPress={() => navigation.navigate("LyricScreen", { song })}
          >
            <Icon name={'arrowright'} style={styles.icon} size={25} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  

export default SongCardComponent;

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    padding: 7,
    borderRadius: 7,
  },
  row: {
    flexDirection: 'row',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#01796F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  songDetails: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  songTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  songAuthor: {
    fontWeight: 'bold'
  },
  action: {
    justifyContent: 'center',
  },
  detailButtonStyle: {
    padding: 5,
  },
  icon: {
    color: 'black',
    // marginLeft: 10,
  },
});

