import "react-native-gesture-handler";
import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Input } from "../components/Input";

export const BmiScreen = ({ navigation }) => {
  const [height, setHeight] = React.useState(null);
  const [weight, setWeight] = React.useState(null);
  const [bmi, setBmi] = React.useState(null);

  const calculate = () => {
    let intWeight = parseInt(weight);
    let intHeight = parseInt(height) / 100;
    let calculatedBmi = (intWeight / intHeight ** 2).toFixed(2);
    if (height < 1) {
      alert("Please enter a valid height!");
    } else if (weight < 1) {
      alert("Please enter a valid weight!");
    } else {
      setBmi(calculatedBmi);
    }
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.title}>Calculate your BMI!</Text>

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
        unit="kg"
      />

      <Button title="Calculate BMI" onPress={() => calculate()} />

      <Text style={{ marginTop: 20, fontSize: 18 }}>
        Your BMI is: <Text style={{ fontWeight: "bold" }}>{bmi}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: { fontSize: 20, marginBottom: 30 },
});
