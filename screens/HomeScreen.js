import "react-native-gesture-handler";
import React from "react";
import { Text, View } from "react-native";
import { Button } from "../components/Button";

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 30, marginBottom: 20 }}>
        Monitor your health!
      </Text>
      <Button
        title="Go to BMI calculator"
        onPress={() => navigation.navigate("BMI Calculator")}
      />
      <Button
        title="Go to Body Fat calculator"
        onPress={() => navigation.navigate("Body Fat Calculator")}
      />
    </View>
  );
};
