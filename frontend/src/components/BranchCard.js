import React from "react";
import { useDispatch } from "react-redux";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import "./BranchCard.scss";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { setCurrent } from "../actions/branchActions";

const BranchCard = ({ branch }) => {
  const dispatch = useDispatch();

  const setBranch = () => {
    dispatch(setCurrent(branch));
  };

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
        <Link to={`/branch/${branch.code}`}>
          <AwesomeButton type='primary' size='medium' onPress={setBranch}>
            Go
          </AwesomeButton>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default BranchCard;
