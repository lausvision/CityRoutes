import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import UserInputs from './app/screens/UserInputs';
import Routes from './app/screens/Routes';

export default function App() {
  return (
    <AppNavigator/>
  );
}

const AppNavigator = StackNavigator({
  UserInputs: {screen: UserInputs},
  Routes: {screen: Routes}
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
