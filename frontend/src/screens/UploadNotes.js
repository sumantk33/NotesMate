import React, { useState } from "react";
import axios from "axios";
import "./css/ContactScreen.css";
import "./css/UploadNotesScreen.css";
import { Container, Form, Button, Toast } from "react-bootstrap";
import Message from "../components/Message";

const ContactScreen = () => {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [sem, setSem] = useState(1);
  const [subject, setSubject] = useState("");
  const [sub_code, setSub_code] = useState("");
  const [link, setLink] = useState("");
  const [show, setShow] = useState(false);
  const [variant, setVariant] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = async () => {
    if (!name || !department || !sem || !subject || !sub_code || !link) {
      alert("Please fill in all the details");
    } else {
      const data = {
        name,
        department,
        sem,
        subject,
        sub_code,
        link,
      };

      const config = {
        "Content-Type": "application/json",
      };

      const url = "http://localhost:5000/api/upload/add";

      try {
        const { status } = await axios.post(url, data, config);

        if (status === 201) {
          setVariant("success");
          setMessage(
            "Your notes were successfully uploaded and will be reviewed"
          );
        } else {
          setVariant("danger");
          setMessage(
            "Oops!!! There was some error. Pleaswe refresh the page and try again"
          );
        }
        setShow(true);
      } catch (error) {}

      setName("");
      setDepartment("");
      setSem(1);
      setSubject("");
      setSub_code("");
      setLink("");
    }
  };

  return (
    <div className='contact'>
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
        }}
      >
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <Message variant={variant}>{message}</Message>
          </Toast.Header>
        </Toast>
      </div>

      <Container>
        <h1>Send us your notes</h1>
        <Form>
          <Form.Group controlId='Name'>
            <Form.Label>
              <h5>Name:-</h5>
            </Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter the name of the notes'
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='exampleForm.ControlSelect1'>
            <Form.Label>
              <h5>Choose your department:-</h5>
            </Form.Label>
            <Form.Control
              as='select'
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            >
              <option value={"lol"}>---SELECT---</option>
              <option value={"CSE"}>Computer Science and Engineering</option>
              <option value={"ISE"}>Information Science and Engineering</option>
              <option value={"ECE"}>
                Electronics and Communications Engineering
              </option>
              <option value={"CIV"}>Civil Engineering</option>
              <option value={"MECH"}>Mechanial Engineering</option>
              <option value={"EEE"}>Electrical Engineering</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId='exampleForm.ControlSelect1'>
            <Form.Label>
              <h5>Select your semester:-</h5>
            </Form.Label>
            <Form.Control
              as='select'
              value={sem}
              onChange={(e) => setSem(e.target.value)}
            >
              <option val={1}>1</option>
              <option val={2}>2</option>
              <option val={3}>3</option>
              <option val={4}>4</option>
              <option val={5}>5</option>
              <option val={6}>6</option>
              <option val={7}>7</option>
              <option val={8}>8</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId='subject'>
            <Form.Label>
              <h5>Subject:-</h5>
            </Form.Label>
            <Form.Control
              type='name'
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            ></Form.Control>
            <Form.Text className='text-muted'>
              Please enter the subject code as in curriculum
            </Form.Text>
          </Form.Group>

          <Form.Group controlId='sub_code'>
            <Form.Label>
              <h5>Subject Code:-</h5>
            </Form.Label>
            <Form.Control
              type='name'
              value={sub_code}
              onChange={(e) => setSub_code(e.target.value)}
            ></Form.Control>
            <Form.Text className='text-muted'>
              Please enter the subject code as in curriculum
            </Form.Text>
          </Form.Group>

          <Form.Group controlId='link'>
            <Form.Label>
              <h5>Link:-</h5>
            </Form.Label>
            <Form.Control
              type='name'
              value={link}
              onChange={(e) => setLink(e.target.value)}
            ></Form.Control>
            <Form.Text className='text-muted'>
              Upload the notes on Google Drive and share the link here. Make
              sure to give public access.
            </Form.Text>
          </Form.Group>

          <div className='text-center'>
            <Button
              variant='outline-primary'
              className='upload'
              onClick={submitHandler}
            >
              <span style={{ fontSize: "20px" }}>Upload </span>
              <i className='fa fa-long-arrow-right' aria-hidden='true'></i>
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default ContactScreen;
