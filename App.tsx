import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './app/screens/HomeScreen';
import { QuizScreen } from './app/screens/QuizScreen';
import { ResultScreen } from './app/screens/ResultScreen';
import { HistoryScreen } from './app/screens/HistoryScreen';
import { SettingsScreen } from './app/screens/SettingsScreen';
import { getSystemTheme, lightTheme, darkTheme } from './app/theme';
import { StatusBar } from 'expo-status-bar';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: '<A REMPLACER>',
  authDomain: '<A REMPLACER>',
  projectId: '<A REMPLACER>',
  storageBucket: '<A REMPLACER>',
  messagingSenderId: '<A REMPLACER>',
  appId: '<A REMPLACER>'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Stack = createStackNavigator();

export default function App() {
  const theme = getSystemTheme();
  return (
    <NavigationContainer>
  <StatusBar style={theme === darkTheme ? 'light' : 'dark'} />
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Quiz" component={QuizScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
