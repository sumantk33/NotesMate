import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./css/DiscussScreen.css";
import { Container } from "react-bootstrap";
import Post from "../components/Post";
import Loader from "../components/Loader";
import { getPosts } from "../actions/discussActions";
import Reading from "../assets/reading.svg";
import Rocket from "../assets/rocket.svg";

const DiscussScreen = () => {
  const dispatch = useDispatch();

  const postList = useSelector((state) => state.postList);
  const { loading, posts } = postList;

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className='discuss'>
      <img src={Reading} alt='Reading' className='reading' />
      {/* <img src={Rocket} alt='Rocket' className='rocket' /> */}
      <Container>
        <h1>Discuss</h1>
        {loading ? (
          <Loader />
        ) : (
          posts.map((post) => <Post key={post._id} post={post} />)
        )}
      </Container>
    </div>
  );
};

export default DiscussScreen;
