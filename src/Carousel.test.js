import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

// can import image files, and make a props variable that copies the default props
// then pass this into Carousel when you render it
// then you know that it's relying on the same test data everytime
// check Brit's slack message for a sample it block

it("renders without crashing", function() {
  render(<Carousel />);
})
 
it("matches snapshot", function() {
  const { container } = render(<Carousel />);
  expect(container).toMatchSnapshot();
})

it("works when you click on the right arrow", function() {
  const { container } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="Photo by Richard Pasquarella on Unsplash"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="Photo by Pratik Patel on Unsplash"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".fa-chevron-circle-right");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="Photo by Richard Pasquarella on Unsplash"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="Photo by Pratik Patel on Unsplash"]')
  ).toBeInTheDocument();
});

it("works when you click on the left arrow", function() {
  const { container } = render(<Carousel />);

  // move forward in the carousel
  const rightArrow = container.querySelector(".fa-chevron-circle-right");
  fireEvent.click(rightArrow);
  
  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="Photo by Pratik Patel on Unsplash"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="Photo by Richard Pasquarella on Unsplash"]')
  ).not.toBeInTheDocument();

  // move backward in the carousel
  const leftArrow = container.querySelector(".fa-chevron-circle-left");
  fireEvent.click(leftArrow);

  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="Photo by Pratik Patel on Unsplash"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="Photo by Richard Pasquarella on Unsplash"]')
  ).toBeInTheDocument();
});


it("removes left arrow on first image", function() {
  const { container } = render(<Carousel />);

  const leftArrow = container.querySelector(".fa-chevron-circle-left");
  expect(
    leftArrow).toHaveClass("hideLeftArrow");
});

it("removes right arrow on last image", function() {
  const { container } = render(<Carousel />); // could pass in test props so that it doesn't rely on having 
  // exactly the number of images it does now
  // can import images 

  const rightArrow = container.querySelector(".fa-chevron-circle-right");
  
  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);

  expect(
    rightArrow).toHaveClass("hideRightArrow");
});
