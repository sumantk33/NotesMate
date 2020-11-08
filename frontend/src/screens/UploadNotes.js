import React from "react";
import "./css/ContactScreen.css";
import { Container, Form, Button } from "react-bootstrap";
import Reading from "../assets/reading.svg";

const ContactScreen = () => {
  return (
    <div className='contact'>
      {/* <img src={Reading} alt='Reading' className='reading' /> */}
      <Container>
        <h1>Send us your notes</h1>
        <Form>
          <Form.Group controlId='name'>
            <Form.Label>
              <h5>Name:-</h5>
            </Form.Label>
            <Form.Control
              type='name'
              placeholder='Enter the name of the notes'
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='exampleForm.ControlSelect1'>
            <Form.Label>
              <h5>Choose your department:-</h5>
            </Form.Label>
            <Form.Control as='select'>
              <option>Computer Science and Engineering</option>
              <option>Information Science and Engineering</option>
              <option>Electronics and Communications Engineering</option>
              <option>Civil Engineering</option>
              <option>Mechanial Engineering</option>
              <option>Electrical Engineering</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId='exampleForm.ControlSelect1'>
            <Form.Label>
              <h5>Select your semester:-</h5>
            </Form.Label>
            <Form.Control as='select'>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId='subject'>
            <Form.Label>
              <h5>Subject:-</h5>
            </Form.Label>
            <Form.Control type='name'></Form.Control>
            <Form.Text className='text-muted'>
              Please enter the subject code as in curriculum
            </Form.Text>
          </Form.Group>

          <Form.Group controlId='sub_code'>
            <Form.Label>
              <h5>Subject Code:-</h5>
            </Form.Label>
            <Form.Control type='name'></Form.Control>
            <Form.Text className='text-muted'>
              Please enter the subject code as in curriculum
            </Form.Text>
          </Form.Group>

          <Form.Group controlId='link'>
            <Form.Label>
              <h5>Link:-</h5>
            </Form.Label>
            <Form.Control type='name'></Form.Control>
            <Form.Text className='text-muted'>
              Upload the notes on Google Drive and share the link here. Make
              sure to give public access.
            </Form.Text>
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
