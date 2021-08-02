import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import { BigButton } from "../BigButton";

describe("BigButton component", () => {
  it("renders correctly", () => {
    const mockFn = jest.fn();
    const { getByText } = render(
      <BigButton
        title="test"
        onPress={mockFn}
        imgSrc={{
          uri:
            "https://callstack.github.io/react-native-testing-library/img/owl.png",
        }}
      />
    );

    expect(getByText("test")).toBeTruthy();
    fireEvent.press(getByText("test"));
    expect(mockFn).toBeCalled();
  });
});
