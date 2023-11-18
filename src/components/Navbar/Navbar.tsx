import React, {useState} from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {

    const [isToggled, setIsToggled]: [boolean, any] = useState(false);

    function handleToggle(){
        setIsToggled((prev: boolean) => !prev);
    }
    return(<div>
            <div data-testid="navbar" className="nav-div">
                <div className="nav-title">
                    <span data-testid="title" className="title-text">Warden</span>
                    <div className="toggle-button">
                        <i className="fa-solid fa-bars fa-lg" onClick={handleToggle}></i>
                    </div>
                </div>
                <div className={"link-div" + (isToggled ? "" : " hidden")}>
                    <a className="nav-link" href="/about">About</a>
                    <a className="nav-link" href="/pricing">Pricing</a>
                    <a className="nav-link" href="/showcase">Showcase</a>
                    <a className="nav-link" href="/book">Book an Appointment</a>
                    <a className="nav-link" href="/signin">Sign In</a>
                    <div className="highlight-div">
                        <a className="link-highlight" href="/register">Sign Up</a>
                    </div>
                    </div>
                </div>
            </div>)
}

export default Navbar;