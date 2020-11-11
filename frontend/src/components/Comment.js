import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { deleteReply } from "../actions/discussActions";

const Comment = ({ postId, reply, match }) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const deleteHandler = () => {
    // console.log(postId);
    // console.log(reply._id);
    dispatch(deleteReply(postId, reply._id));
  };

  return (
    <Card className='comment'>
      <Card.Body>
        <div className='info'>
          <Card.Text>{reply.replyDescription}</Card.Text>
          <span className='commentFooter'>
            Comment by {reply.replyUser.name} on {reply.replyCreatedAt}
          </span>
        </div>
        <div className='deleteIcon'>
          {userInfo && reply.replyUser._id === userInfo._id && (
            <Button variant='danger' onClick={deleteHandler}>
              <i className='fa fa-trash'></i>
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Comment;
