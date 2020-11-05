import React from "react";
import Hero from "../components/Hero";
import Desc from "../components/Description";
import Branches from "../components/Branches";

const LandingScreen = () => {
  return (
    <>
      <Hero />
      <Branches />
      <Desc />
    </>
  );
};

export default LandingScreen;
