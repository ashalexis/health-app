import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { render, fireEvent } from "@testing-library/react-native";
import { PhysicalScreen } from "../PhysicalScreen";

jest.mock("react-native/Libraries/Animated/src/NativeAnimatedHelper");

describe("Physical health landing screen", () => {
  it("renders correctly", () => {
    const { queryByText } = render(<PhysicalScreen />);

    expect(queryByText("Physical Stuff!")).toBeTruthy();
    expect(queryByText("Go to BMI calculator")).toBeTruthy();
    expect(queryByText("Go to Body Fat calculator")).toBeTruthy();
  });
});
