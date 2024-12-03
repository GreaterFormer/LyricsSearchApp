import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// Import Screens

import HomeScreen from './src/screens/HomeScreen';
import LyricScreen from './src/screens/LyricScreen';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='HomeScreen'
        screenOptions={{ gestureEnabled: false }}
      >
        <Stack.Screen 
          name='HomeScreen' 
          component={HomeScreen} 
          options={{ headerShown: false }} />
       
        <Stack.Screen 
          name='LyricScreen' 
          component={LyricScreen} 
          options={{ title: "Lyrics" }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;