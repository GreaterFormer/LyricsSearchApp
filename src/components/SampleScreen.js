import React, { useState, useEffect } from 'react';
import { 
  View, Text, TextInput, 
  Image, ImageBackground, 
  TouchableOpacity, Alert, ScrollView, KeyboardAvoidingView,
  SafeAreaView, StyleSheet 
} from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { COLORS } from '../utils/GlobalStyle';

// Import Screens

const SampleScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
            <Text>asdfasdf</Text>
        </View>
    </SafeAreaView>
  );
}

export default SampleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: COLORS.primary,
  },
});