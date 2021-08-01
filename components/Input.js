import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

// params: title - string, onChangeText - function, unit - string (cm/kg)

export const Input = props => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>{props.title}</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <TextInput
          onChangeText={props.onChangeText}
          value={props.value}
          keyboardType="numeric"
          style={styles.textInput}
        />
        <Text>{props.unit}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#e0e0e0",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    marginRight: 10,
    minWidth: 100,
  },
});
