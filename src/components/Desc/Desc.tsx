import React from "react";
import "./Desc.css";

const Desc: React.FC = () => {
    return(<div data-testid="desc-section" className="desc-container">
        <div className="desc-item">
            <div className="item-text">
                <div className="item-heading">Watch your Growth Live</div>
                <div className="item-subtext">
                    With Warden Finance you can watch your finances grow live on our dashboard.
                    <div className="item-button">
                        <a href="" className="item-link">View Live</a>
                    </div>
                </div>
            </div>
            <div className="item-image">
                <img className="img-element" src="chart.svg"></img>
            </div>
        </div>
        <div className="desc-item">
            <div className="item-image padded">
                <img className="img-element" src="team.svg"></img>
            </div>
            <div className="item-text">
                <div className="item-heading">Get Help From Warden</div>
                <div className="item-subtext">
                    Warden Finance is an assistant that helps you manage your budget 
                    <div className="item-button">
                        <a href="" className="item-link">Dashboard</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="desc-item">
            <div className="item-text">
                <div className="item-heading">Join Us at Warden</div>
                <div className="item-subtext">
                    Join Warden to Take Control Over your Finances
                    <div className="item-button">
                        <a href="" className="item-link">Join Now</a>
                    </div>
                </div>
            </div>
            <div className="item-image">
                <img className="img-element" src="join.svg"></img>
            </div>
        </div>
    </div>)
}

export default Desc;