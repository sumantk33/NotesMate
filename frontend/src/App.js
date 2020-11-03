import "./App.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Container></Container>
    </Router>
  );
};

export default App;
