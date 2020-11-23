import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { deleteIssue } from "../actions/issuesActions";

const IssueCard = ({ issue }) => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteIssue(issue._id));
  };

  return (
    <div>
      <Card className='post'>
        <Card.Body>
          <Card.Text>{issue.description}</Card.Text>
        </Card.Body>
        <Card.Footer className='text-muted postFooter'>
          <h6 className='askedBy'>
            Asked by {issue.name} on {issue.date}
          </h6>

          <div className='icons'>
            <Button variant='danger' onClick={deleteHandler}>
              <i className='fa fa-trash'></i>
            </Button>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default IssueCard;
