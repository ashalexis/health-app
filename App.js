import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./screens/HomeScreen";
import { BmiScreen } from "./screens/BmiScreen";
import { BodyFatScreen } from "./screens/BodyFatScreen";
import { PhysicalScreen } from "./screens/PhysicalScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { elevation: 0 },
          cardStyle: { backgroundColor: "#fff" },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Physicals" component={PhysicalScreen} />
        <Stack.Screen name="BMI Calculator" component={BmiScreen} />
        <Stack.Screen name="Body Fat Calculator" component={BodyFatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
