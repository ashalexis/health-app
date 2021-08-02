import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

//props: title - string, onPress - fn,

export const Button = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text style={styles.text}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 250,
    backgroundColor: "#6d92c5",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    margin: 10,
    borderRadius: 25,
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});
