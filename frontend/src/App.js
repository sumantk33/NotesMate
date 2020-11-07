import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import LandingScreen from "./screens/LandingScreen";
import BranchScreen from "./screens/BranchScreen";
import SemScreen from "./screens/SemScreen";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Route exact path='/' component={LandingScreen} />
      <Route exact path='/:dept' component={BranchScreen} />
      <Route exact path='/:dept/:sem' component={SemScreen} />
      <Footer />
    </Router>
  );
};

export default App;
