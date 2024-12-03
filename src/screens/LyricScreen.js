import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import LinearGradient from "react-native-linear-gradient"; // Add a gradient library if needed

const LyricsScreen = ({ route }) => {
  const { song } = route.params; // Get the song object passed through navigation

  // Generate a dynamic color based on the song category or title
  const getHeaderColor = (category) => {
    const colors = {
      "HYMNS BASED ON PSALMS": ["#4CAF50", "#81C784"], // Light Green
      "CLASSIC HYMNS": ["#2196F3", "#64B5F6"], // Blue
      "POPULAR SONGS": ["#FF5722", "#FF8A65"], // Orange
    };
    return colors[category] || ["#3E4E5E", "#6A7A89"]; // Default Gray Gradient
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header with Dynamic Gradient */}
      <LinearGradient
        colors={getHeaderColor(song.category)}
        style={styles.header}
      >
        <Text style={styles.title}>{song.title}</Text>
        <Text style={styles.category}>{song.category}</Text>
        <Text style={styles.reference}>{song.reference}</Text>
      </LinearGradient>

      {/* Verses Section */}
      <View style={styles.section}>
        {song.verses.map((verse, index) => (
          <View key={index} style={styles.verse}>
            {(index === 0 && song.chorus && song.chorusFrontPlacement) ? <Text style={styles.chorus}>{song.chorus}</Text>: null}
            <Text style={styles.verseText}>{verse}</Text>
            {(index === 0 && song.chorus && song.chorusFrontPlacement == null) ? <Text style={styles.chorus}>{song.chorus}</Text>: null}
          </View>
        ))}
      </View>

      {/* Footer with Author */}
      <View style={styles.footer}>
        <Text style={styles.author}>Written by: {song.author}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 5,
  },
  category: {
    fontSize: 16,
    color: "#f0f0f0",
    textAlign: "center",
  },
  reference: {
    fontSize: 14,
    color: "#d0d0d0",
    textAlign: "center",
    marginTop: 5,
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: "600",
    color: "#01796F",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
  },
  verse: {
    marginBottom: 15,
  },
  chorus: {
    marginTop: 10,
    fontStyle: 'italic',
    fontSize: 15,
    paddingHorizontal: 5
  },
  verseText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#444",
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 5,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  footer: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  author: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#555",
  },
});

export default LyricsScreen;
