import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./css/DiscussScreen.css";
import { Container, Modal, Button } from "react-bootstrap";
import Post from "../components/Post";
import Loader from "../components/Loader";
import { getPosts } from "../actions/discussActions";
import Reading from "../assets/reading.svg";

const DiscussScreen = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const postList = useSelector((state) => state.postList);
  const { loading, posts } = postList;

  const postDelete = useSelector((state) => state.postDelete);
  const { loading: loadingDelete, success: successDelete } = postDelete;

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, successDelete]);

  return (
    <div className='discuss'>
      {/* <img src={Reading} alt='Reading' className='reading' /> */}
      <Container>
        <h1>Discuss</h1>
        {loading || loadingDelete ? (
          <Loader />
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
          <Modal.Title>Express your thoughts</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.set
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Ask
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DiscussScreen;
