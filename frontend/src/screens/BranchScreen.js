import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./css/BranchScreen.css";
import coding from "../assets/RockIt.gif";
import SemList from "../components/SemList";
import { Link } from "react-router-dom";

const BranchScreen = ({ match }) => {
  const branchList = useSelector((state) => state.branchList);
  const { currBranch } = branchList;

  const branch = match.params.dept;
  const sems = ["1", "2", "3", "4", "5", "6", "7", "8"];

  return (
    <div className='branch'>
      <Container>
        <h1>{currBranch.description}</h1>
        <Row>
          {sems.map((sem) => (
            <Col key={branch._id} sm={12} md={6} lg={4} xl={3}>
              <SemList key={sem} sem={sem} branch={branch} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default BranchScreen;
