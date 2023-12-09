import React from "react";
import "./Error.css";

interface ErrorProps {
    number: string;
    message: string
}


const NotFound: React.FC<ErrorProps> = (props) => {
    return(<div className="not-found-container">
        <div className="not-found">
            <div className="not-found-logo">
                <span className="not-found-title">warden</span>
                <img className="logo" src="logo.png"></img>
            </div>
            <div className="four">{props.number}</div>
            <p className="page-not-found">{props.message}</p>
        </div>
    </div>)
}

export default NotFound;