import React from "react";
import { Text, View } from "react-native";
import { Button } from "../../components/Button";

export const BreathingScreen = ({ navigation }) => {
  const [seconds, setSeconds] = React.useState(0);
  const [display, setDisplay] = React.useState("");
  const [isActive, setIsActive] = React.useState(false);
  const [hasPause, setHasPause] = React.useState(false);

  const instructions = {
    one: "Exhale for four seconds",
    two: "Hold for four seconds",
    three: "Inhale for four seconds",
    four: "Hold for four seconds",
  };

  const startTimer = () => {
    setIsActive(true);
    setSeconds(4);
    setDisplay(instructions.one);
    setHasPause(true);
  };

  const pauseTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSeconds(0);
    setDisplay("");
    setHasPause(false);
  };

  React.useEffect(() => {
    let interval = null;
    if (isActive && seconds >= 0) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else if (seconds < 0 && display == instructions.one) {
      setDisplay(instructions.two);
      setSeconds(4);
    } else if (seconds < 0 && display == instructions.two) {
      setDisplay(instructions.three);
      setSeconds(4);
    } else if (seconds < 0 && display == instructions.three) {
      setDisplay(instructions.four);
      setSeconds(4);
    } else if (seconds < 0 && display == instructions.four) {
      setDisplay(instructions.one);
      setSeconds(4);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 100 }}>{seconds}</Text>
      <Text style={{ fontSize: 18 }}>{display}</Text>
      <Button title="Start" onPress={() => startTimer()} />
      {hasPause && (
        <Button
          title={isActive ? "Pause" : "Unpause"}
          onPress={() => pauseTimer()}
        />
      )}
      {hasPause && <Button title="Reset" onPress={() => resetTimer()} />}
    </View>
  );
};
