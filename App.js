import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import {AuthNavigator} from './app/Navigation/AppNavigator'
   


export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
    
  );
}
