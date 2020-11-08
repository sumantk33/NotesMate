import React from "react";
import "./css/ContactScreen.css";
import { Container, Form, Button } from "react-bootstrap";

const ContactScreen = () => {
  return (
    <div className='contact'>
      <Container>
        <h1>Ask a question</h1>
        <Form>
          <Form.Group controlId='name'>
            <Form.Label>
              <h5>Name:-</h5>
            </Form.Label>
            <Form.Control
              type='name'
              placeholder='Enter your name'
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='exampleForm.ControlTextarea1'>
            <Form.Label>
              <h5>Explain your issue:-</h5>
            </Form.Label>
            <Form.Control
              as='textarea'
              rows={4}
              placeholder='Elaborate on your issue'
            />
          </Form.Group>

          <Form.Group controlId='exampleForm.ControlInput1'>
            <Form.Label>
              <h5>Tell us your contact email id:-</h5>
            </Form.Label>
            <Form.Control type='email' placeholder='name@example.com' />
          </Form.Group>

          <div className='text-center'>
            <Button variant='outline-primary' className='askQuestion'>
              <span style={{ fontSize: "20px" }}>Send </span>
              <i className='fa fa-long-arrow-right' aria-hidden='true'></i>
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default ContactScreen;
