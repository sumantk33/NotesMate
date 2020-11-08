import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "react-awesome-button/dist/styles.css";
import { Container, Table } from "react-bootstrap";
import "./css/SubjectScreen.css";
import { getNotes } from "../actions/notesAction";
import Loader from "../components/Loader";
import Reading from "../assets/reading.svg";

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
        <img src={Reading} alt='Reading' className='reading' />

        <Container>
          <h1>Notes</h1>
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
                    <a
                      // style={{ display: "table-cell" }}
                      href={note.link}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <button>
                        <i className='fa fa-arrow-right' aria-hidden='true'></i>
                      </button>
                    </a>
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
