import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./css/ReplyScreen.css";
import { Button, Card, Container, Form } from "react-bootstrap";
import Loader from "../components/Loader";
import Comment from "../components/Comment";
import { getSinglePost, addReply } from "../actions/discussActions";
import Empty from "../components/Empty";

const DiscussScreen = ({ match, history }) => {
  const dispatch = useDispatch();

  const [description, setDescription] = useState("");

  const postSingle = useSelector((state) => state.postSingle);
  const { loading, post } = postSingle;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const replyAdd = useSelector((state) => state.replyAdd);
  const { success: successAdd, loading: loadingAdd } = replyAdd;

  const replyDelete = useSelector((state) => state.replyDelete);
  const { success: successDelete } = replyDelete;

  useEffect(() => {
    dispatch(getSinglePost(match.params.postId));
  }, [dispatch, match, successAdd, successDelete]);

  const replyHandler = () => {
    if (!description) {
      alert("Please enter description");
    } else {
      dispatch(addReply(description, match.params.postId));
      setDescription("");
    }
  };

  return (
    <div className='reply'>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          {!post ? (
            <div>
              <Empty message={`This link dosen't exist anymore`} />
            </div>
          ) : (
            <>
              <Card className='post'>
                <Card.Body>
                  <Card.Title as='h4'>{post.title}</Card.Title>
                  <Card.Text>{post.description}</Card.Text>
                </Card.Body>
                <Card.Footer className='text-muted postFooter'>
                  <h6>
                    Asked by {post.user.name} on {post.createdAt}
                  </h6>
                </Card.Footer>
              </Card>
              {userInfo ? (
                <div className='commentGroup'>
                  <Form.Group
                    controlId='formBasicEmail'
                    className='commentInput'
                  >
                    <Form.Control
                      type='text'
                      placeholder='Comment here....'
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                    <Form.Text className='text-muted'>
                      Your comment will be added to this post.
                    </Form.Text>
                  </Form.Group>
                  <Button
                    variant='info'
                    className='commentButton'
                    onClick={replyHandler}
                  >
                    Reply
                  </Button>
                </div>
              ) : (
                <h6>You need to be logged in to comment</h6>
              )}

              {!post.replies ? (
                <></>
              ) : (
                <>
                  <h4>Comments:- </h4>
                  {post.replies.length === 0 ? (
                    <Empty message={"No comments here"} />
                  ) : (
                    post.replies.map((reply) => (
                      <Comment
                        key={reply._id}
                        postId={match.params.postId}
                        reply={reply}
                      />
                    ))
                  )}
                </>
              )}
            </>
          )}
        </Container>
      )}
    </div>
  );
};

export default DiscussScreen;
