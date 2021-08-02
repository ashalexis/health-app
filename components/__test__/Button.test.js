import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import { Button } from "../Button";

describe("Button component", () => {
  it("renders correctly", () => {
    const mockFn = jest.fn();
    const { getByText } = render(<Button title="test" onPress={mockFn} />);

    expect(getByText("test")).toBeTruthy();
    fireEvent.press(getByText("test"));
    expect(mockFn).toBeCalled();
  });
});
