import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center my-4 py-3'>
            <h4>Copyright &copy; NotesMate</h4>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
