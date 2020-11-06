import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import BranchCard from "./BranchCard";
import Loader from "./Loader";
import { listBranches } from "../actions/branchActions";

const Branches = () => {
  const dispatch = useDispatch();

  const branchList = useSelector((state) => state.branchList);
  const { branches, loading } = branchList;

  useEffect(() => {
    dispatch(listBranches());
  }, [dispatch]);

  return (
    <div className='branches'>
      <h1>Academics</h1>
      <Container>
        <Row>
          {loading ? (
            <Loader />
          ) : (
            branches.map((branch) => (
              <Col key={branch._id} sm={12} md={6} lg={4} xl={4}>
                <BranchCard branch={branch} />
              </Col>
            ))
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Branches;
