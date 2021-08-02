import "react-native-gesture-handler";
import React from "react";
import {
  Dimensions,
  Keyboard,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { InfoTable } from "../../components/InfoTable";

export const BodyFatScreen = ({ navigation }) => {
  //false is male, true is female
  const [gender, setGender] = React.useState(false);
  const [height, setHeight] = React.useState(null);
  const [weight, setWeight] = React.useState(null);
  const [neck, setNeck] = React.useState(null);
  const [waist, setWaist] = React.useState(null);
  const [hip, setHip] = React.useState(null);
  const [bodyFat, setBodyFat] = React.useState(null);

  const tableHead = ["Description", "Women", "Men"];
  const tableData = [
    ["Essential fat", "10 - 13%", "2 - 5%"],
    ["Athletes", "14 - 20%", "6 - 13%"],
    ["Fitness", "21 - 24%", "14- 17%"],
    ["Average", "25 - 31%", "18 - 25%"],
    ["Obese", "32+%", "25+%"],
  ];

  const tableWidth = Dimensions.get("window").width * 0.9;

  const calculate = () => {
    Keyboard.dismiss;

    let intHeight = parseInt(height);
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
          justifyContent: "center",
          marginBottom: 20,
        }}
      >
        <Text>Male</Text>
        <Switch
          trackColor={{ false: "#3d4e63", true: "#a6c7e8" }}
          thumbColor={gender ? "#3257a6" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={gender}
          accessibilityLabel="toggle between male and female"
        />
        <Text>Female</Text>
      </View>

      <ScrollView>
        <Input
          title="Height in cm:"
          value={height}
          onChangeText={text => setHeight(text)}
          unit="cm"
          label="height input"
        />

        <Input
          title="Weight in kg:"
          value={weight}
          onChangeText={text => setWeight(text)}
          unit="kg"
          label="weight input"
        />

        <Input
          title="Neck circumference in cm:"
          value={neck}
          onChangeText={text => setNeck(text)}
          unit="cm"
          label="neck input"
        />

        <Input
          title="Waist circumference in cm:"
          value={waist}
          onChangeText={text => setWaist(text)}
          unit="cm"
          label="waist input"
        />

        {gender && (
          <Input
            title="Hip circumference in cm:"
            value={hip}
            onChangeText={text => setHip(text)}
            unit="cm"
            label="hip input"
          />
        )}

        <Button title="Calculate Body Fat %" onPress={() => calculate()} />
        <Text style={styles.resultText}>
          Your body fat percentage is:{" "}
          <Text style={{ fontWeight: "bold" }}>{bodyFat}</Text>
        </Text>

        <InfoTable
          tableHead={tableHead}
          tableData={tableData}
          tableWidth={tableWidth}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: { fontSize: 20, marginBottom: 30, marginTop: 30 },
  resultText: { marginTop: 20, fontSize: 16, marginBottom: 20 },
});
