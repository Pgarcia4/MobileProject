import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './navigation/StackNavigation';

export default function App() {

  return (
    <SafeAreaProvider>
        <NavigationContainer>
          <StackNavigation/>
        </NavigationContainer>
    </SafeAreaProvider>
  );
}