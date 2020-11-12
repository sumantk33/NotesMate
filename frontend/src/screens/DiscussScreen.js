import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./css/DiscussScreen.css";
import { Container, Modal, Button, Form } from "react-bootstrap";
import Post from "../components/Post";
import Loader from "../components/Loader";
import { getPosts, addPost } from "../actions/discussActions";
import Empty from "../components/Empty";

const DiscussScreen = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const postList = useSelector((state) => state.postList);
  const { loading, posts } = postList;

  const postAdd = useSelector((state) => state.postAdd);
  const { loading: loadingAdd, success: successAdd } = postAdd;

  const postDelete = useSelector((state) => state.postDelete);
  const { loading: loadingDelete, success: successDelete } = postDelete;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, successDelete, successAdd]);

  const submitHandler = () => {
    if (!title || !description) {
      alert("Please fill in all the fields");
    } else {
      dispatch(addPost(title, description));
      handleClose();
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className='discuss'>
      <Container>
        <h1>Discuss</h1>
        {loading || loadingDelete || loadingAdd ? (
          <Loader />
        ) : posts.length === 0 ? (
          <Empty message={`No posts found`} />
        ) : (
          posts.map((post) => <Post key={post._id} post={post} />)
        )}
      </Container>

      <Button className='add' onClick={handleShow}>
        <i className='fa fa-plus plus' aria-hidden='true'></i>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        size='lg'
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Ask your question</Modal.Title>
        </Modal.Header>

        {!userInfo ? (
          <h5 className='loginAlert'>
            You must be logged in to post. You can <Link to='/'>login</Link>{" "}
            here.
          </h5>
        ) : (
          <>
            <Modal.Body>
              <Form.Group controlId='exampleForm.ControlInput1'>
                <Form.Label>Title:-</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Header of your question'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId='exampleForm.ControlTextarea1'>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as='textarea'
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant='secondary'
                className='askButton'
                onClick={submitHandler}
              >
                Ask
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </div>
  );
};

export default DiscussScreen;
