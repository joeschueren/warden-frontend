import Navbar from "./Navbar/Navbar";
import React, {useState, useEffect} from "react";
import Home from "./Home/Home";
import Register from "./Register/Register";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import Demo from "./Demo/Demo";
import Settings from "./Settings/Settings";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {

  const [username, setUsername] = useState(undefined);
  const [picture, setPicture] = useState(undefined);

  useEffect(() => {
    async function checkAuth(){
      const res = await fetch("https://warden-backend.onrender.com/check-auth",{
          method: "GET",
          credentials: "include"
      })
      
      const status = await res.status;
      const data = await res.json();

      console.log("This is supposed to be the picture: "+data.picture);

      if(status === 200){
        setUsername(data.email);
        setPicture(data.picture)
      }
    }
    
    checkAuth()
  },[])


  return (
    <div>
      <Router>
      <Navbar user={username} image={picture}/>
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/register" Component={Register}/>
          <Route path="/login" Component={Login}/>
          <Route path="/dashboard" Component={() => <Dashboard email={username}/>}/>
          <Route path="/settings" Component={Settings}/>
          <Route path="/demo" Component={Demo}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
