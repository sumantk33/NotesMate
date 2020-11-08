import React from "react";
import Hero from "../components/Hero";
import Desc from "../components/Description";
import Branches from "../components/Branches";
import Footer from "../components/Footer";

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
