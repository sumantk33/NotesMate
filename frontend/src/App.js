import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Desc from "./components/Description";

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className='upper'>
        <Hero />
      </div>
      <Desc />
    </Router>
  );
};

export default App;
