import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import LandingScreen from "./screens/LandingScreen";
import BranchScreen from "./screens/BranchScreen";
import SemScreen from "./screens/SemScreen";
import SubjectScreen from "./screens/SubjectScreen";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import UploadScreen from "./screens/UploadNotes";
import DiscussScreen from "./screens/DiscussScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Route exact path='/' component={LandingScreen} />
      <Route exact path='/about' component={AboutScreen} />
      <Route exact path='/contact' component={ContactScreen} />
      <Route exact path='/upload' component={UploadScreen} />
      <Route exact path='/branch/:dept' component={BranchScreen} />
      <Route exact path='/branch/:dept/:sem' component={SemScreen} />
      <Route
        exact
        path='/branch/:dept/:sem/:sub_code'
        component={SubjectScreen}
      />
      <Route exact path='/discuss' component={DiscussScreen} />
      <Route exact path='/login' component={LoginScreen} />
      <Route exact path='/register' component={RegisterScreen} />
    </Router>
  );
};

export default App;
