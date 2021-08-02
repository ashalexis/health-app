import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

//props: title - string, onPress - fn, imgSrc - string (URL)

const buttonHeight = Dimensions.get("window").height * 0.4;
const buttonWidth = Dimensions.get("window").width * 0.9;

export const BigButton = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Image source={props.imgSrc} />
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
    minWidth: buttonWidth,
    maxWidth: buttonWidth,
    minHeight: buttonHeight,
    maxHeight: buttonHeight,
    backgroundColor: "#6d92c5",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin: 5,
    borderRadius: 25,
    shadowColor: "#3d4e63",
    elevation: 5,
  },
  text: {
    color: "white",
    fontSize: 18,
    marginTop: 20,
  },
});
