import React from "react";
import "./Booking.css";

const Booking: React.FC = () => {
    return(<div className="booking-container">
        <div data-testid="booking-div" className="booking-div">
            <div className="booking-cta">
                <p className="booking-text">Login or  <span className="highlight">Sign Up</span>.</p>
                <a className="link-highlight" href="/register">Sign Up</a>
                <a className="secondary-anchor" href="/book">Log In</a>
            </div>
            <div className="booking-form-div">
                <p className="booking-text">Book an <span className="highlight">Appointment</span>.</p>
                <form className="booking-form">
                    <input className="booking-input" placeholder="Name"></input>
                    <input className="booking-input" placeholder="mm/dd/yyyy"></input>
                    <button className="booking-button">Book</button>
                </form>
            </div>
        </div>
    </div>)
}

export default Booking;