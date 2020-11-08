import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Description = () => {
  return (
    <div className='desc'>
      <h1>One place to get all your Notes</h1>
      <h5>
        You can get all your notes in just one place without hassle.
        <br /> We also host a discussion forum where all your queries can be
        solved
        <br /> by the students of your college community(Coming soon).
      </h5>
      <Link to='/about'>
        <Button variant='outline-primary' size='lg' className='learnMore'>
          <span style={{ fontSize: "20px" }}>Learn More </span>
          <i className='fa fa-long-arrow-right' aria-hidden='true'></i>
        </Button>
      </Link>
    </div>
  );
};

export default Description;
