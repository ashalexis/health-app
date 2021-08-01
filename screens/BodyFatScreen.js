import "react-native-gesture-handler";
import React from "react";
import { Button, Keyboard, StyleSheet, Switch, Text, View } from "react-native";
import { Input } from "../components/Input";

export const BodyFatScreen = ({ navigation }) => {
  //false is male, true is female
  const [gender, setGender] = React.useState(false);
  const [height, setHeight] = React.useState(null);
  const [weight, setWeight] = React.useState(null);
  const [neck, setNeck] = React.useState(null);
  const [waist, setWaist] = React.useState(null);
  const [hip, setHip] = React.useState(null);
  const [bodyFat, setBodyFat] = React.useState(null);

  const calculate = () => {
    Keyboard.dismiss;

    let intHeight = parseInt(height);
    let intWeight = parseInt(weight);
    let intNeck = parseInt(neck);
    let intWaist = parseInt(waist);
    let bodyfat;
    if (gender) {
      //female
      let intHip = parseInt(hip);
      bodyfat = (
        495 /
          (1.29579 -
            0.35004 * Math.log10(intWaist + intHip - intNeck) +
            0.221 * Math.log10(intHeight)) -
        450
      ).toFixed(2);
    } else {
      //male
      bodyfat = (
        495 /
          (1.0324 -
            0.19077 * Math.log10(intWaist - intNeck) +
            0.15456 * Math.log10(intHeight)) -
        450
      ).toFixed(2);
    }
    setBodyFat(`${bodyfat}%`);
  };

  const toggleSwitch = () => setGender(previousState => !previousState);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.title}>Calculate your Body Fat!</Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <Text>Male</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={gender ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={gender}
        />
        <Text>Female</Text>
      </View>

      <Input
        title="Height in cm:"
        value={height}
        onChangeText={text => setHeight(text)}
        unit="cm"
      />

      <Input
        title="Weight in kg:"
        value={weight}
        onChangeText={text => setWeight(text)}
        unit="cm"
      />

      <Input
        title="Neck circumference in cm:"
        value={neck}
        onChangeText={text => setNeck(text)}
        unit="cm"
      />

      <Input
        title="Waist circumference in cm:"
        value={waist}
        onChangeText={text => setWaist(text)}
        unit="cm"
      />

      {gender && (
        <Input
          title="Hip circumference in cm:"
          value={hip}
          onChangeText={text => setHip(text)}
          unit="cm"
        />
      )}

      <Button title="Calculate Body Fat %" onPress={() => calculate()} />
      <Text style={{ marginTop: 20, fontSize: 18 }}>
        Your body fat percentage is:{" "}
        <Text style={{ fontWeight: "bold" }}>{bodyFat}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: { fontSize: 20, marginBottom: 30 },
  textInput: {
    backgroundColor: "#e0e0e0",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    marginRight: 10,
  },
});
