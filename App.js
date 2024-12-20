import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AboutMeScreen from './AboutMeScreen.js';
import MyLanguagesScreen from './MyLanguagesScreen.js';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="About Me" component={AboutMeScreen} />
        <Tab.Screen name="My Languages" component={MyLanguagesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
