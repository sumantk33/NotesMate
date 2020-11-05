import React from "react";
import { Container } from "react-bootstrap";
import "./css/BranchScreen.css";

const BranchScreen = ({ match }) => {
  return (
    <div className='branch'>
      <Container>
        <h1>{match.params.dept}</h1>
      </Container>
    </div>
  );
};

export default BranchScreen;
