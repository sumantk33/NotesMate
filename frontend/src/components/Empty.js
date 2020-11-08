import React from "react";
import empty from "../assets/empty.svg";

const Empty = () => {
  return (
    <div className='empty text-center'>
      <img src={empty} alt='Empty' />
      <h4>No results found!!</h4>
    </div>
  );
};

export default Empty;
