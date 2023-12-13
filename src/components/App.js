import Navbar from "./Navbar/Navbar";
import React, {useState, useEffect} from "react";
import { inject } from '@vercel/analytics';
import Home from "./Home/Home";
import Register from "./Register/Register";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import Demo from "./Demo/Demo";
import Settings from "./Settings/Settings";
import Error from "./Error/Error";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

inject();

function App() {

  const [username, setUsername] = useState(undefined);
  const [picture, setPicture] = useState(undefined);
  const [isAuth, setIsAuth] = useState(false);

  const checkAuth = async () => {
    try{
      const res = await fetch("https://warden-backend.onrender.com/check-auth",{
          method: "GET",
          credentials: "include"
      })
      
      const status = res.status;
      const data = await res.json();

      if(status === 200){
        setUsername(data.email);
        setPicture(data.picture);
        setIsAuth(true);
      }
    } catch(err) {

    }
  }

  useEffect(() => {
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
          <Route path="/dashboard" Component={() => isAuth ? <Dashboard email={username} /> : <Navigate to="/login"/>}/>
          <Route path="/settings" Component={() => isAuth ? <Settings/> : <Navigate to="/login"/>}/>
          <Route path="/demo" Component={Demo}/>
          <Route path="*" Component={() => <Error number="404" message="Page Not Found"/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
