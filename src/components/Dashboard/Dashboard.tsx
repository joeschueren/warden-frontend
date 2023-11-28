import React from "react";
import "./Dashboard.css";

const Dashboard: React.FC = () =>{

    fetch("http://localhost:5000/check-auth", {
        method: "POST"
    })
    .then(res => {
        console.log(res.status);
    })
    return(<div className="dashboard-container">
        <div className="dashboard">

        </div>
    </div>);
}

export default Dashboard;