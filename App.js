import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./screens/HomeScreen";
import { BmiScreen } from "./screens/BmiScreen";
import { BodyFatScreen } from "./screens/BodyFatScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome!" }}
        />
        <Stack.Screen name="BMI Calculator" component={BmiScreen} />
        <Stack.Screen name="Body Fat Calculator" component={BodyFatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
