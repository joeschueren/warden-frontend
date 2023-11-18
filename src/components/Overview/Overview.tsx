import React from "react";
import "./Overview.css";

const Overview: React.FC = () =>{
    return(<div className="overview-container">
        <div className="overview-div">
            <div className="text-container">
                <p data-testid="header" className="overview-text">Invest. Manage. Profit.</p>
                <p data-testid="subtext" className="overview-subtext">Analytics and recommendations to improve your portfolio, and manage your budget</p>
            </div>
            <div className="overview-cards">
                <div className="overview-card purple">
                    <i className="fa-solid fa-magnifying-glass-chart fa-4x"></i>
                    <p className="card-text"> Progress Insights</p>
                </div>
                <div className="overview-card orange">
                    <i className="fa-solid fa-chart-simple fa-4x"></i>
                    <p className="card-text">Daily Tracker</p>
                </div>
                <div className="overview-card blue">
                    <i className="fa-solid fa-lock fa-4x"></i>
                    <p className="card-text">Budget Security</p>
                </div>
                <div className="overview-card green">
                    <i className="fa-solid fa-route fa-4x"></i>
                    <p className="card-text">Clear Roadmap</p>
                </div>
            </div>
        </div>
    </div>)
}

export default Overview;