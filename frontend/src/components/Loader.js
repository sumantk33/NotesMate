import React from "react";
import loader from "../assets/loader.gif";

const Loader = () => {
  return (
    <>
      <img
        src={loader}
        alt='Loading'
        style={{ width: "300px", margin: "auto", display: "block" }}
      />
    </>
  );
};

export default Loader;
