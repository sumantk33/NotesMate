import React from "react";

const Hero = () => {
  return (
    <div className='hero'>
      <h1>NotesMate.</h1>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
        className='waves'
      >
        <path
          fill='#ffffff'
          fillOpacity='1'
          d='M0,224L120,240C240,256,480,288,720,288C960,288,1200,256,1320,240L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z'
        ></path>
      </svg>
    </div>
  );
};

export default Hero;
