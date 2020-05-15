import React from "react";
import CardSlider from "./CardSlider";

const Slider = () => {
  const card = {
    id: 1,
    name: "First Feature",
    content:
      "Little Red Cap opened her eyes and when she saw the sunbeams dancing to and fro through the trees and how the ground was covered with beautiful flowers.",
  };
  return (
    <div>
      <CardSlider card={card} latest />
    </div>
  );
};

export default Slider;
