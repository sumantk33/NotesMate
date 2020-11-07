import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "react-awesome-button/dist/styles.css";
import { Container, Table, Button } from "react-bootstrap";
import "./css/SemScreen.css";
import { getSubjects } from "../actions/subjectActions";
import Loader from "../components/Loader";

const SemScreen = ({ match }) => {
  const dispatch = useDispatch();

  const subjectList = useSelector((state) => state.subjectList);
  const { loading, subjects } = subjectList;

  useEffect(() => {
    dispatch(getSubjects(match.params.dept, match.params.sem));
  }, [dispatch, match]);

  if (loading) {
    return <Loader />;
  } else {
    return (
      <div className='semester'>
        <Container>
          <h1>Materials</h1>
          <h4>
            {match.params.dept} Sem {match.params.sem} :-
          </h4>

          <Table
            striped
            responsive
            bordered
            hover
            className='table text-center table-body'
          >
            <thead>
              <tr>
                <th width={"20%"}>ID</th>
                <th>SUBJECT</th>
                <th width={"30%"}>LINK</th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((sub, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{sub.subject}</td>
                  <td>
                    <Link
                      to={`/${match.params.dept}/${match.params.sem}/${sub.sub_code}`}
                    >
                      <button>
                        <i className='fa fa-arrow-right' aria-hidden='true'></i>
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
};

export default SemScreen;
