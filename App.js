import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import UserInputs from './app/screens/UserInputs';
import Routes from './app/screens/Routes';
import Activity from './app/screens/Activity';
import Transfer from './app/screens/Transfer';
import Home from './app/screens/Home';

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function AppNavigator(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="UserInputs" component={UserInputs} />
      <Stack.Screen name="Routes" component={Routes} />
      <Stack.Screen name="Activity" component={Activity} />
      <Stack.Screen name="Transfer" component={Transfer} />
    </Stack.Navigator>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
