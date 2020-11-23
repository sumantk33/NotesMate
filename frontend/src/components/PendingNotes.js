import React from "react";
import { useDispatch } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { approveNotes, deletePendingNotes } from "../actions/notesAction";

const PendingNotes = ({ note }) => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deletePendingNotes(note._id));
  };

  const approveHandler = () => {
    dispatch(approveNotes(note._id));
  };

  return (
    <div>
      <Card className='notes'>
        <Card.Body className='notesBody'>
          <div className='info'>
            <Card.Title as='h4'>
              {note.department} Sem {note.sem}
            </Card.Title>
            <Card.Text>
              <h6>Name:- {note.name}</h6>
              <h6>Subject:- {note.subject}</h6>
              <h6>Subject Code:- {note.sub_code}</h6>
              <h6>
                Link:-
                <a href={note.link} target='_blank' rel='noopener noreferrer'>
                  {note.link}
                </a>
              </h6>
            </Card.Text>
          </div>
          <div className='buttons'>
            <Button variant='primary' onClick={approveHandler}>
              <i className='fa fa-check'></i>
            </Button>
            <Button variant='danger' onClick={deleteHandler}>
              <i className='fa fa-trash'></i>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PendingNotes;
