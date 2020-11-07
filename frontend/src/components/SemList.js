import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { Card } from "react-bootstrap";

const SemList = ({ sem, branch }) => {
  const branchDetails = useSelector((state) => state.branchDetails);
  const { currBranch } = branchDetails;

  return (
    <Card className='semBranchCard my-4 rounded text-center'>
      <Card.Body>
        <Card.Title>
          <h3>{`Sem ${sem}`}</h3>
        </Card.Title>

        <Card.Text>
          <h6>{currBranch.description}</h6>
        </Card.Text>
        <Link to={`${currBranch.code}/${sem}`}>
          <AwesomeButton type='primary' size='small'>
            Go
          </AwesomeButton>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default SemList;
