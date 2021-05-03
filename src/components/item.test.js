import { render } from "@testing-library/react";
import React from "react";
import Item from "./item";

it("renders price correctly", () => {
    const { getByTestId } = render(<Item name="item1" cost="20.00" quantity="2"></Item>)
    expect(getByTestId("item")).toHaveTextContent("40.00");
})

it("does not render negative price", () => {
  const { getByTestId } = render(
    <Item name="item1" cost="-20.00" quantity="1"></Item>
  );
  expect(getByTestId("item")).toHaveTextContent("NaN");
});

it("does not render string price", () => {
  const { getByTestId } = render(
    <Item name="item1" cost="test" quantity="1"></Item>
  );
  expect(getByTestId("item")).toHaveTextContent("NaN");
});

