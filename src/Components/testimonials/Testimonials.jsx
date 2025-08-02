import React from "react";
import HeaderTetimonials from "./HeaderTetimonials";
import TestSlider from "./TestSlider";

const Testimonials = () => {
  return (
    <div className="my-20 mx-10 ">
      <HeaderTetimonials  />
      <div className="poppins-extrabold  text--black text-3xl uppercase text-center my-5 mt-16">
        Reviews
      </div>
      <TestSlider />
    </div>
  );
};

export default Testimonials;
