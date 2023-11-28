import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Register from "./Register/Register";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/register" Component={Register}/>
          <Route path="/login" Component={Login}/>
          <Route path="/dashboard" Component={Dashboard}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
