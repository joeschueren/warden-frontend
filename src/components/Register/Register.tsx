import React, {useState} from "react";
import "./Register.css";

const Register: React.FC = () => {
    const [message, setMessage]: [string, Function] = useState("\u00A0");

    async function handleSubmit(event: any){ 
        event.preventDefault();

        setMessage("\u00A0");
        const email:string = event.target.email.value;
        const password:string = event.target.password.value;
        alert(email+" "+password);

        try{
            await fetch("http://localhost:5000/register",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email: email, password: password})})
            .then(res =>{
                if(res.status === 409){
                    setMessage("The Email Entered is Unavailable");
                    event.target.email.value = "";
                }
            })
        }
        catch(error){
            if(error){
                setMessage("Error registering please try again.");
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
            <div className="form-header">
                <span data-testid="logo" className="header-text">warden</span>
                <img className="logo" src="logo.png"></img>
            </div>
            <span className="welcome">Welcome to Warden</span>
            <p>Already have an account? <a className="switch-form" href="/login">Login</a></p>
            <form action="localhost:3000" method="POST" className="form" onSubmit={handleSubmit}>
                <span className="input-label">Email</span>
                <input type="email" className="form-input" placeholder="Email" name="email"></input>
                <span className="input-label">Password</span>
                <input type="password" className="form-input" placeholder="Password" name="password"></input>
                <p className="warning">{message}</p>
                <button type="submit" className="form-button">Register</button>
            </form>
        </div>
    </div>)
}

export default Register;