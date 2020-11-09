import React from "react";
import { Card, Button } from "react-bootstrap";

const post = ({ post }) => {
  return (
    <div>
      <Card className='post'>
        <Card.Body>
          <Card.Title as='h4'>{post.title}</Card.Title>
          <Card.Text>{post.description}</Card.Text>
        </Card.Body>
        <Card.Footer className='text-muted postFooter'>
          <h6>
            Asked by {post.userName} on {post.createdAt}
          </h6>
          <Button variant='primary'>
            <i className='fa fa-reply'></i>
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default post;
