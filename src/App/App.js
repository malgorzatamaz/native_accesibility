import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import List from '../List/List';
import Details from '../Details/Details';
import VoiceRecognitionProvider from '../utils/VoiceRecognitionContext';
import AccessibilityModeProvider from '../utils/AccessibilityModeContext';
import NavigationBar from '../NavigationBar/NavigationBar';

const Stack = createStackNavigator();

const App = () => {
  return (
    <VoiceRecognitionProvider>
      <AccessibilityModeProvider>
        <NavigationContainer>
          <NavigationBar />
          <Stack.Navigator initialRouteName="List">
            <Stack.Screen name="List" component={List} />
            <Stack.Screen name="Details" component={Details} />
          </Stack.Navigator>
        </NavigationContainer>
      </AccessibilityModeProvider>
    </VoiceRecognitionProvider>
  );
};

export default App;
