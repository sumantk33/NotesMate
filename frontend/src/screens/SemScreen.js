import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Container, Row, Table } from "react-bootstrap";
import "./css/SemScreen.css";
import { getNotes } from "../actions/notesAction";
import Loader from "../components/Loader";

const SemScreen = ({ match }) => {
  const dispatch = useDispatch();

  const notesList = useSelector((state) => state.notesList);
  const { loading, notes } = notesList;

  useEffect(() => {
    dispatch(getNotes(match.params.dept, match.params.sem));
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
            className='table text-center'
          >
            <thead>
              <tr>
                <th>ID</th>
                <th>SUBJECT</th>
                <th>LINK</th>
              </tr>
            </thead>
            <tbody>
              {notes.map((note, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{note.subject}</td>
                  <td>{note.link}</td>
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
