import React, {useState} from "react";
import "./Navbar.css";

interface NavbarProps {
    user: string,
    image: any
}

const Navbar: React.FC<NavbarProps> = (props) => {

    const email = props.user;
    let updated = "";

    if(email){
        updated = email.substring(0, email.indexOf("@"));
    }

    let picture = (<svg className="nav-profile" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 340 340">
                    <path fill="#DDD" d="m169,.5a169,169 0 1,0 2,0zm0,86a76,76 0 1 1-2,0zM57,287q27-35 67-35h92q40,0 67,35a164,164 0 0,1-226,0"/>
                </svg>)
    if(props.image !== undefined){
        const uint8Array = new Uint8Array(props.image.data);
        const blob = new Blob([uint8Array], { type: "buffer" });
        picture = (<img className="profile-pic"src={URL.createObjectURL(blob)}/>)
    }


    const [isToggled, setIsToggled]: [boolean, any] = useState(false);

    function handleToggle(){
        setIsToggled((prev: boolean) => !prev);
    }
    return(<div>
            <div data-testid="navbar" className="nav-div">
                <div className="nav-title">
                    <a href="/" className="nav-title">
                        <span data-testid="title" className="title-text">warden</span>
                        <img className="logo" src="logo.png"></img>
                    </a>
                    <div className="toggle-button">
                        <i className="fa-solid fa-bars fa-lg" onClick={handleToggle}></i>
                    </div>
                </div>
                <div className={"link-div" + (isToggled ? "" : " hidden")}>
                    <a className="nav-link" href="/dashboard">About</a>
                    <a className="nav-link" href="/dashboard">Pricing</a>
                    <a className="nav-link" href="/dashboard">Showcase</a>
                    <a className="nav-link" href="/dashboard">Book an Appointment</a>
                    {
                        email ? (
                        <div className="nav-email">
                            <a className="email-text" href="/dashboard">{updated}
                            {picture}
                            </a>
                        </div>) : 
                        (<div className="nav-auth">
                            <a className="nav-link" href="/login">Sign In</a>
                            <div className="highlight-div">
                                <a className="link-highlight nav-signin" href="/register">Sign Up</a>
                            </div>
                        </div>)
                    }
                    </div>
                </div>
            </div>)
}

export default Navbar;