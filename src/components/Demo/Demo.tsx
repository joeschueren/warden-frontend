import React, {useState, useEffect} from "react";
import "../Login/Login.css";

const Login: React.FC = () => {
    const [message, setMessage]: [string, Function] = useState("\u00A0");

    const url = (process.env.NODE_ENV === "production" ?
   "https://season-best-yoke.glitch.me":
   "http://localhost:5000");

    useEffect(() => {
        document.title = "Login";
    })

    async function handleSubmit(event: any){ 
        event.preventDefault();

        setMessage("\u00A0");
        const email:string = event.target.email.value;
        const password:string = event.target.password.value;

        try{
            await fetch(url+"/login",{
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email: email, password: password})})
            .then(res =>{
                if(res.status === 401){
                    setMessage("Email or Password Entered is Incorrect");
                    event.target.email.value = "";
                    event.target.email.password = "";
                }
                else if(res.status === 200){
                    window.location.href = "/dashboard";
                }
            })
        }
        catch(error){
            if(error){
                setMessage("Error logging in please try again.");
                setTimeout(()=>{
                    setMessage("\u00A0");
                }, 10000);
                console.log(error);
            }
        }
    }

    return(
    <div className="register-container">
        <div className="form-container">
            <div className="auth-header">
                <span data-testid="logo" className="header-text">warden</span>
                <img className="logo" alt="Company Logo" src="logo.png"></img>
            </div>
            <span className="welcome">Welcome Back to Warden</span>
            <p>Don't have an account? <a className="switch-form" href="/register">Register</a></p>
            <form method="POST" className="form" onSubmit={handleSubmit}>
                <span className="input-label">Email</span>
                <input type="email" className="form-input" placeholder="Email" name="email" value="demo@gmail.com"></input>
                <span className="input-label">Password</span>
                <input type="password" className="form-input" placeholder="Password" name="password" value="password123"></input>
                <p className="warning">{message}</p>
                <button type="submit" className="form-button">Log In</button>
            </form>
        </div>
    </div>)
}

export default Login;