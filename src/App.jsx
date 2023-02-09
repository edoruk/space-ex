import "./App.css";
import NavBar from "./components/NavBar";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { HashRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <AnimatedRoutes />
      </Router>
    </div>
  );
}

export default App;
