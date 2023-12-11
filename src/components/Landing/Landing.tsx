import React from "react";
import "./Landing.css"

const Landing: React.FC = () => {
    return(
        <div className="container">
            <div className="landing-div">
                <div className="text-div">
                    <p data-testid="landing-text" className="landing-text">The <span className="highlight-text">All-in-One</span> Tool to <span className="highlight-text">Safely </span>Manage your
                    <span className="highlight-text"> Budget</span> and <span className="highlight-text">Finances</span>.</p>
                    <p data-testid="landing-subtext" className="landing-subtext">
                        Monitor, plan, and fine tune your finances.
                    </p>
                    <a className="link-highlight" href="/register">Free Sign Up</a>
                    <a className="secondary-anchor" href="/demo">Book a Demo</a>
                </div>
                <div className="image-container">
                    <img className="landing-image" src="landing-image.svg" alt="finance diagram webpage"></img>
                </div>
            </div>
        </div>
    )
}

export default Landing;