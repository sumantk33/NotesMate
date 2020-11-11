import React from "react";
import empty from "../assets/empty.svg";

const Empty = ({ message }) => {
  return (
    <div className='empty text-center'>
      <img src={empty} alt='Empty' />
      <h4>{message}</h4>
    </div>
  );
};

export default Empty;
