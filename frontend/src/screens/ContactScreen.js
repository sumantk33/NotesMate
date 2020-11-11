import React, { useState } from "react";
import axios from "axios";
import "./css/ContactScreen.css";
import { Container, Form, Button, Toast } from "react-bootstrap";
import Message from "../components/Message";

const ContactScreen = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [email_id, setEmail_id] = useState("");
  const [show, setShow] = useState(false);
  const [variant, setVariant] = useState("");
  const [message, setMessage] = useState("");

  const getDate = () => {
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth() + 1; // January is 0
    const yyyy = today.getFullYear();
    return dd.toString() + "-" + mm.toString() + "-" + yyyy.toString();
  };

  const submitHandler = async () => {
    if (!name || !description || !email_id) {
      alert("Please enter all the details");
    } else {
      const newIssue = {
        name,
        description,
        email_id,
        date: getDate(),
      };

      const config = {
        "Content-Type": "application/json",
      };

      try {
        const { status } = await axios.post("/api/issues", newIssue, config);

        if (status === 200) {
          setVariant("success");
          setMessage("Your issue was successfully recorded");
        } else {
          setVariant("danger");
          setMessage(
            "Oops!!! There was some error. Pleaswe refresh the page and try again"
          );
        }
        setShow(true);
      } catch (error) {}

      setName("");
      setDescription("");
      setEmail_id("");
    }
  };

  return (
    <div className='contact'>
      <Container>
        <h1>Got any question?</h1>

        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translate(-50%, 0)",
          }}
        >
          <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={3000}
            autohide
          >
            <Toast.Header>
              <Message variant={variant}>{message}</Message>
            </Toast.Header>
          </Toast>
        </div>

        <Form>
          <Form.Group controlId='name'>
            <Form.Label>
              <h5>Name:-</h5>
            </Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter your name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='exampleForm.ControlTextarea1'>
            <Form.Label>
              <h5>What's your issue:-</h5>
            </Form.Label>
            <Form.Control
              as='textarea'
              rows={4}
              placeholder='Elaborate on your issue'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId='exampleForm.ControlInput1'>
            <Form.Label>
              <h5>Tell us your contact email id:-</h5>
            </Form.Label>
            <Form.Control
              type='email'
              placeholder='name@example.com'
              value={email_id}
              onChange={(e) => setEmail_id(e.target.value)}
            />
          </Form.Group>

          <div className='text-center'>
            <Button
              variant='outline-primary'
              className='askQuestion'
              onClick={submitHandler}
            >
              <span style={{ fontSize: "20px" }}>Ask </span>
              <i className='fa fa-long-arrow-right' aria-hidden='true'></i>
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default ContactScreen;
