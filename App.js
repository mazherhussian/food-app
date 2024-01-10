import React from "react";
import  GetStartedScreen  from "./src/screens/getStartedScreen";
import  HomeScreen  from "./src/screens/HomeScreen";
import  ItemScreen  from "./src/screens/ItemScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="GetStartedScreen">
    
      <Stack.Screen
        name="GetStarted"
        component={GetStartedScreen}
        options={{ headerShown:false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown:false}}
      />
      <Stack.Screen
        name="Item"
        component={ItemScreen}
        options={{ headerShown:false}}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
