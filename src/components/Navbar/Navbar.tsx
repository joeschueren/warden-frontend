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
                        <i className="fa-solid fa-bars" onClick={handleToggle}></i>
                    </div>
                </div>
                <div className={"link-div" + (isToggled ? " hidden" : "")}>
                    <div className="nav-link"><a href="/about">About</a></div>
                    <div className="nav-link"><a href="/pricing">Pricing</a></div>
                    <div className="nav-link"><a href="/showcase">Showcase</a></div>
                    <div className="nav-link"><a href="/book">Book an Appointment</a></div>
                    <div className="nav-link"><a href="/signin">Sign In</a></div>
                    <div className="nav-link-highlight">
                        <span className="link-highlight">
                            <a id="highlight-anchor"href="/register">Sign Up</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>)
}

export default Navbar;