import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "react-awesome-button/dist/styles.css";
import { Container, Table, Button } from "react-bootstrap";
import "./css/SemScreen.css";
import { getNotes } from "../actions/notesAction";
import Loader from "../components/Loader";

const SemScreen = ({ match }) => {
  const dispatch = useDispatch();

  const notesList = useSelector((state) => state.notesList);
  const { loading, notes } = notesList;

  useEffect(() => {
    dispatch(
      getNotes(match.params.dept, match.params.sem, match.params.sub_code)
    );
  }, [dispatch, match]);

  if (loading) {
    return <Loader />;
  } else {
    return (
      <div className='semester'>
        <Container>
          <h1>Materials</h1>
          <h4>
            {match.params.dept} Sem {match.params.sem} {match.params.sub_code}{" "}
            :-
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
                <th>ID</th>
                <th>NAME</th>
                <th>SUBJECT</th>
                <th>LINK</th>
              </tr>
            </thead>
            <tbody>
              {notes.map((note, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{note.name}</td>
                  <td>{note.sub_code}</td>
                  <td>
                    <Link
                      to={`/${match.params.dept}/${match.params.sem}/${note.sub_code}`}
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
