import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './src/routes/homeStack';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

changeNavigationBarColor('transparent', true);

export default function App() {  

  return (
    <>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </>
  );
}