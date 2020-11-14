import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { deletePost } from "../actions/discussActions";

const Post = ({ post }) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const deleteHandler = () => {
    dispatch(deletePost(post._id));
  };

  return (
    <div>
      <Card className='post'>
        <Card.Body>
          <Card.Title as='h4'>{post.title}</Card.Title>
          <Card.Text>{post.description}</Card.Text>
        </Card.Body>
        <Card.Footer className='text-muted postFooter'>
          <h6 className='askedBy'>
            Asked by {post.user.name} on {post.createdAt}
          </h6>

          <div className='icons'>
            {userInfo && post.user._id === userInfo._id && (
              <Button variant='danger' onClick={deleteHandler}>
                <i className='fa fa-trash'></i>
              </Button>
            )}
            <Link to={`/discuss/${post._id}`}>
              <Button variant='primary'>
                <i className='fa fa-reply'></i>
              </Button>
            </Link>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Post;
