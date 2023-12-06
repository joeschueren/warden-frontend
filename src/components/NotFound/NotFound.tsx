import React from "react";
import "./NotFound.css";

const NotFound: React.FC = () => {
    return(<div className="not-found-container">
        <div className="not-found">
            <div className="not-found-logo">
                <span className="not-found-title">warden</span>
                <img className="logo" src="logo.png"></img>
            </div>
            <div className="four">404</div>
            <p className="page-not-found">Page Not Found</p>
        </div>
    </div>)
}

export default NotFound;