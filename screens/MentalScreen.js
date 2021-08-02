import "react-native-gesture-handler";
import React from "react";
import { Text, View } from "react-native";
import { Button } from "../components/Button";

export const MentalScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        style={{
          fontSize: 30,
          marginBottom: 20,
        }}
      >
        Mental Stuff!
      </Text>
      <Button
        title="A reminder to breathe"
        onPress={() => navigation.navigate("Breathe")}
      />
    </View>
  );
};
