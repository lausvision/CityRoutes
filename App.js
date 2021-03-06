import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { store } from "./app/store";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider as StoreProvider } from "react-redux";

import UserInputs from "./app/screens/UserInputs";
import Routes from "./app/screens/Routes";
import Activity from "./app/screens/Activity";
import Transfer from "./app/screens/Transfer";
import Home from "./app/screens/Home";
import Location from "./app/screens/Location";
import Selection from "./app/screens/Selection";

export default function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
}

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="UserInputs" component={UserInputs} />
      <Stack.Screen name="Routes" component={Routes} />
      <Stack.Screen name="Activity" component={Activity} />
      <Stack.Screen name="Transfer" component={Transfer} />
      <Stack.Screen name="Location" component={Location} />
      <Stack.Screen name="Selection" component={Selection} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
