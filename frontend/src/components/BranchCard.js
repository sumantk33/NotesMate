import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const BranchCard = ({ branch }) => {
  var image = branch.image;
  return (
    <Card className='branchCard my-4 rounded'>
      <Card.Img variant='top' className='cardImg my-1' src={branch.image} />

      <Card.Body>
        <Card.Title>
          <h3>{branch.name}</h3>
        </Card.Title>
        <Card.Text>
          <h6>{branch.description}</h6>
        </Card.Text>
        <Button variant='primary'>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default BranchCard;
