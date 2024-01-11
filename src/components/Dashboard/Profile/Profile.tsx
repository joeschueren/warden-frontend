import React from "react";
import "./Profile.css";

interface PastMonths {
    email: string,
    year_month: string,
    food: string,
    bills: string,
    entertainment: string,
    transportation: string,
    personal_care: string,
    shopping: string,
    other: string,
    max_budget: string

}

interface ProfileProps {
    email: string
    profileData: PastMonths[],
    image: any
}

const Profile: React.FC<ProfileProps> = (props) => {

    async function handleLogout(){
        const res = await fetch("https://season-best-yoke.glitch.me/logout",{
            method: "GET",
            credentials: "include"
        })

        if(res.status === 200){
            window.location.href = "/";
        }
    }

    const pastMonths = props.profileData;

    let total = 0;

    for(let i = 0; i< pastMonths.length; i++){
        const current = pastMonths[i];
        const month = parseInt(current.year_month.substring(5));
        
        const expenses = Object.values(pastMonths[i])
        .map(value => parseFloat(value));

        console.log(JSON.stringify(expenses));
        let expenseSum = 0;
        for(let i = 3; i< expenses.length - 1; i++){
            expenseSum += expenses[i];
        }
    
        total += parseFloat(current.max_budget) - expenseSum;
            
    }

    let blob = null;

    if(props.image){
        const uint8Array = new Uint8Array(props.image.data);
        blob = new Blob([uint8Array], { type: "buffer" });
    }
    

    return(
        <div className="profile-container">
            <img className="profile-picture" src={blob ? URL.createObjectURL(blob) : "profile.svg"}></img>
            <p>{props.email}</p>
            <span>Total Saved: ${total.toFixed(2)}</span>
            <a className="settings" href="/settings">Account Settings</a>
            <a href="#" className="logout" onClick={handleLogout}>Logout</a>
        </div>)

}


export default Profile;