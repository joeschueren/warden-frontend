import React, { useEffect } from "react";
import "./Error.css";

interface ErrorProps {
    number: string;
    message: string
}


const NotFound: React.FC<ErrorProps> = (props) => {

    useEffect(() => {
        document.title = props.number+"  "+props.message;
    })

    return(<div className="not-found-container">
        <div className="not-found">
            <div className="not-found-logo">
                <span className="not-found-title">warden</span>
                <img className="logo" alt="Company Logo" src="logo.png"></img>
            </div>
            <div className="four">{props.number}</div>
            <p className="page-not-found">{props.message}</p>
        </div>
    </div>)
}

export default NotFound;