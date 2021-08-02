import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { BmiScreen } from "../BmiScreen";

describe("Bmi Screen", () => {
  it("renders correctly", () => {
    const { queryByText, queryByA11yLabel } = render(<BmiScreen />);

    expect(queryByText("Calculate your BMI!")).toBeTruthy();
    expect(queryByA11yLabel("height input")).toBeTruthy();
    expect(queryByA11yLabel("weight input")).toBeTruthy();
    expect(queryByText("Calculate BMI")).toBeTruthy();

    //table
    expect(queryByText("BMI")).toBeTruthy();
    expect(queryByText("Description")).toBeTruthy();
    expect(queryByText("< 18.5")).toBeTruthy();
    expect(queryByText("Underweight.")).toBeTruthy();
  });

  it("calculates bmi correctly", () => {
    const { getByText, getByA11yLabel, queryByText } = render(<BmiScreen />);

    fireEvent.changeText(getByA11yLabel("height input"), "160");
    fireEvent.changeText(getByA11yLabel("weight input"), "50");
    fireEvent.press(getByText("Calculate BMI"));
    expect(queryByText("Your BMI is: 19.53")).toBeTruthy();
  });
});
