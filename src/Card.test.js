import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

it("renders without crashing", function() {
  render(<Card />);
})

it("matches snapshot", function() { // could also pass in dummy data for props like caption="caption"
  const { caption, src, currNum, totalNum } = { caption: "caption", src: "src", currNum: 1, totalNum: 1};
  const { container } = render(<Card caption={caption} src={src} currNum={currNum} totalNum={totalNum} />);
  expect(container).toMatchSnapshot();
})