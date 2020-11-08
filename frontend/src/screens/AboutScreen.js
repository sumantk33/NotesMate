import React from "react";
import "./css/AboutScreen.css";
import { Container } from "react-bootstrap";

const AboutScreen = () => {
  return (
    <div className='about text-center'>
      {/* <img src={Reading} alt='Reading' className='reading' /> */}
      <Container>
        <h1>About NotesMate</h1>
        <h5>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales
          neque sodales ut etiam sit amet. Auctor eu augue ut lectus arcu
          bibendum at. Facilisi cras fermentum odio eu feugiat pretium nibh
          ipsum. Auctor urna nunc id cursus metus. Elit scelerisque mauris
          pellentesque pulvinar pellentesque habitant morbi tristique. Enim sed
          faucibus turpis in eu mi bibendum neque egestas. Molestie nunc non
          blandit massa enim nec. <br />
          <br />
          Vel orci porta non pulvinar neque laoreet suspendisse interdum. Nibh
          nisl condimentum id venenatis a condimentum vitae. Sem et tortor
          consequat id porta. Odio ut sem nulla pharetra. Mi quis hendrerit
          dolor magna eget est lorem ipsum. Non quam lacus suspendisse faucibus
          interdum. Aliquam id diam maecenas ultricies.
        </h5>
      </Container>
    </div>
  );
};

export default AboutScreen;
