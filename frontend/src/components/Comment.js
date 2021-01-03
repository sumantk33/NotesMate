import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { deleteReply } from "../actions/discussActions";

const Comment = ({ postId, reply, match }) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const deleteHandler = () => {
    dispatch(deleteReply(postId, reply._id));
  };

  return (
    <Card className="comment">
      <Card.Body>
        <div className="info">
          <Card.Text>{reply.replyDescription}</Card.Text>
          <span className="commentFooter">
            Comment by {reply.replyUser.name} on {reply.replyCreatedAt}
            {userInfo && reply.replyUser._id === userInfo._id && (
              <Button
                variant="danger"
                onClick={deleteHandler}
                className="btn-sm"
              >
                <i className="fa fa-trash"></i>
              </Button>
            )}
          </span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Comment;
