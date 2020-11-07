import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import "./css/BranchScreen.css";
import SemList from "../components/SemList";
import Loader from "../components/Loader";
import { getCurrent } from "../actions/branchActions";

const BranchScreen = ({ match }) => {
  const dispatch = useDispatch();

  const branchDetails = useSelector((state) => state.branchDetails);
  const { currBranch, loading } = branchDetails;

  const branch = match.params.dept;
  const sems = ["1", "2", "3", "4", "5", "6", "7", "8"];

  useEffect(() => {
    dispatch(getCurrent(match.params.dept));
  }, [dispatch, match]);

  if (loading) {
    return <Loader />;
  } else {
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
  }
};

export default BranchScreen;
