import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";
import BranchCard from "./BranchCard";
import Loader from "./Loader";

const Branches = () => {
  const [branchs, setBranchs] = useState([]);
  const [loading, setLoading] = useState(false);

  const getBranches = async () => {
    setLoading(true);
    const { data } = await axios.get("/api/branches");
    setBranchs(data);
    console.log(data);
  };

  useEffect(() => {
    getBranches();
    setLoading(false);
  }, []);

  return (
    <div className='branches'>
      <h1>Academics</h1>
      <Container>
        <Row>
          {branchs.map((branch) => (
            <Col key={branch._id} sm={12} md={6} lg={4} xl={4}>
              <BranchCard branch={branch} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Branches;
