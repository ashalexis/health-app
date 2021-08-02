import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./screens/HomeScreen";
import { PhysicalScreen } from "./screens/PhysicalScreen";
import { BmiScreen } from "./screens/BmiScreen";
import { BodyFatScreen } from "./screens/BodyFatScreen";
import { MentalScreen } from "./screens/MentalScreen";
import { BreathingScreen } from "./screens/BreathingScreen";

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
        <Stack.Screen name="Physical health" component={PhysicalScreen} />
        <Stack.Screen name="Mental health" component={MentalScreen} />
        <Stack.Screen name="BMI Calculator" component={BmiScreen} />
        <Stack.Screen name="Body Fat Calculator" component={BodyFatScreen} />
        <Stack.Screen name="Breathe" component={BreathingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
