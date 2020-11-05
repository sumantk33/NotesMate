import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Desc from "./components/Description";
import Branches from "./components/Branches";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Hero />
      <Desc />
      <Branches />
    </Router>
  );
};

export default App;
