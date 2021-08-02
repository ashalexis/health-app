import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { BodyFatScreen } from "../BodyFatScreen";

describe("Bmi Screen", () => {
  it("renders correctly", () => {
    const { getByA11yLabel, queryByText, queryByA11yLabel } = render(
      <BodyFatScreen />
    );

    expect(queryByText("Calculate your Body Fat!")).toBeTruthy();
    expect(queryByA11yLabel("height input")).toBeTruthy();
    expect(queryByA11yLabel("weight input")).toBeTruthy();
    expect(queryByA11yLabel("neck input")).toBeTruthy();
    expect(queryByA11yLabel("waist input")).toBeTruthy();
    expect(queryByA11yLabel("hip input")).not.toBeTruthy();
    expect(queryByText("Calculate Body Fat %")).toBeTruthy();

    //table
    expect(queryByText("Women")).toBeTruthy();
    expect(queryByText("Men")).toBeTruthy();
    expect(queryByText("Description")).toBeTruthy();
    expect(queryByText("Essential fat")).toBeTruthy();
    expect(queryByText("10 - 13%")).toBeTruthy();
    expect(queryByText("2 - 5%")).toBeTruthy();

    fireEvent(
      getByA11yLabel("toggle between male and female"),
      "valueChange",
      true
    );
    expect(queryByA11yLabel("hip input")).toBeTruthy();
  });

  it("calculates body fat % correctly", () => {
    const { getByText, getByA11yLabel, queryByText } = render(
      <BodyFatScreen />
    );

    fireEvent.changeText(getByA11yLabel("height input"), "170");
    fireEvent.changeText(getByA11yLabel("weight input"), "65");
    fireEvent.changeText(getByA11yLabel("neck input"), "20");
    fireEvent.changeText(getByA11yLabel("waist input"), "60");
    fireEvent.press(getByText("Calculate Body Fat %"));
    expect(queryByText("Your body fat percentage is: 11.96%")).toBeTruthy();
  });
});
