import "react-native-gesture-handler";
import React from "react";
import { Text, View } from "react-native";
import { Button } from "../components/Button";
import { BigButton } from "../components/BigButton";

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 30, marginBottom: 10 }}>
        Monitor your health!
      </Text>
      <BigButton
        title="Mental Health"
        onPress={() => console.log("test")}
        imgSrc={require("./images/mental.png")}
      />
      <BigButton
        title="Physical Health"
        onPress={() => navigation.navigate("Physicals")}
        imgSrc={require("./images/physical.png")}
      />
    </View>
  );
};
