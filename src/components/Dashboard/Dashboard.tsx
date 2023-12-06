import React, {useState, useEffect} from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import Footer from "../Footer/Footer";
import Transaction from "./Transaction/Transaction";
import Profile from "./Profile/Profile";
import YearGraph from "./YearGraph/YearGraph";
import "./Dashboard.css";

interface DashProps {
    email: string
}

const Dashboard: React.FC<DashProps> = (props) =>{

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

    interface DashData {
        date: string,
        monthData: number[],
        budgetData: number[],
        maxBudget: number,
        pastMonths: PastMonths[]
        image: Blob
    }

    const [dashData, setDashData] = useState<DashData>({date: "", monthData: [], budgetData: [], maxBudget: 0, pastMonths: [], image: new Blob()});

    async function getData() {
        await fetch("https://warden-backend.onrender.com/dashboard", {
            method: "GET",
            credentials: "include"
        })
        .then(res => {
            if(res.status !== 200){
                window.location.href = "/login";
            }
            return res.json();
        })
        .then(data => setDashData(data));
    }

    useEffect(() => {
        if(dashData.monthData.length === 0 || dashData.budgetData.length === 0){
            getData();
        }
    }, [dashData]);


    const data = {
        labels: [],
        datasets:[{
            label: "",
            data: dashData.monthData,
            backgroundColor: [
                '#3498db',   // Food (Dodger Blue)
                '#e74c3c',   // Bills (Alizarin Crimson)
                '#2ecc71',   // Entertainment (Emerald)
                '#f39c12',   // Transportation (Sunflower)
                '#9b59b6',   // Personal Care (Amethyst)
                '#16a085',   // Shopping (Green Sea)
                '#e67e22',   // Other (Carrot)
              ]}],
    }

    let dataSum = 0;

    for(let i = 0; i < dashData.monthData.length; i++){
        console.log(dashData.monthData[i]);
        dataSum += dashData.monthData[i];
    }

    let percentage: number[] = [];
    for(let i = 0; i<dashData.budgetData.length; i++){
        let unRounded = (dashData.monthData[i]/dashData.budgetData[i]) * 100;
        if(unRounded > 100){
            unRounded = 100;
        }
        percentage.push(Math.round(unRounded)); 
    }

    console.log(dataSum);

    
    return(<div>
    <div className="dashboard-container">
        <div className="dashboard">
            <div className="form-row">
                <Profile email={props.email} profileData={dashData.pastMonths} image={dashData.image}/>
                <Transaction reRender={getData}/>
                <div className="overview">
                    <p className="header">Spending Overview</p>
                    <div className="overview-container">
                        <div className="overview-chart">
                            <Doughnut key={0} data={data}/>
                        </div>
                        <div className="overview-key">
                            <div className="monthly-overview">Monthly Total: ${dataSum.toFixed(2)}</div>
                            <div className="key food">
                                <i className="fa-solid fa-circle"></i> Food & Dining - {dataSum === 0 ? 0 : Math.round((dashData.monthData[0]/dataSum) * 100)}%
                            </div>
                            <div className="key bills">
                                <i className="fa-solid fa-circle"></i> Bills & Utilities - {dataSum === 0 ? 0 : Math.round((dashData.monthData[1]/dataSum) * 100)}%
                            </div>
                            <div className="key entertainment">
                                <i className="fa-solid fa-circle"></i> Entertainment - {dataSum === 0 ? 0 : Math.round((dashData.monthData[2]/dataSum) * 100)}%
                            </div>
                            <div className="key transportation">
                                <i className="fa-solid fa-circle"></i> Transportation - {dataSum === 0 ? 0 : Math.round((dashData.monthData[3]/dataSum) * 100)}%
                            </div>
                            <div className="key personal">
                                <i className="fa-solid fa-circle"></i> Personal Care - {dataSum === 0 ? 0 : Math.round((dashData.monthData[4]/dataSum) * 100)}%
                            </div>
                            <div className="key shopping">
                                <i className="fa-solid fa-circle"></i> Shopping - {dataSum === 0 ? 0 : Math.round((dashData.monthData[5]/dataSum) * 100)}%
                            </div>
                            <div className="key other">
                                <i className="fa-solid fa-circle"></i> Other - {dataSum === 0 ? 0 : Math.round((dashData.monthData[6]/dataSum) * 100)}%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
            <div className="budgets-container">
                    <p className="header">Remaining Budget</p>
                    <div className="budgets">
                        <div className="budget-graphs">
                            <span className="bar-title">Food & Dining</span>
                            <div className="budget-background">
                                <div className="budget food" style={{width: `${percentage[0]}%`}}></div>
                            </div>
                            <span className="bar-title">Bills & Utilities</span>
                            <div className="budget-background">
                                <div className="budget bills" style={{width: `${percentage[1]}%`}}></div>
                            </div>
                            <span className="bar-title">Entertainment</span>
                            <div className="budget-background">
                                <div className="budget entertainment" style={{width: `${percentage[2]}%`}}></div>
                            </div>
                            <span className="bar-title">Transportation</span>
                            <div className="budget-background">
                                <div className="budget transportation" style={{width: `${percentage[3]}%`}}></div>
                            </div>
                            <span className="bar-title">Personal Care</span>
                            <div className="budget-background">
                                <div className="budget personal" style={{width: `${percentage[4]}%`}}></div>
                            </div>
                            <span className="bar-title">Shopping</span>
                            <div className="budget-background">
                                <div className="budget shopping" style={{width: `${percentage[5]}%`}}></div>
                            </div>
                            <span className="bar-title">Other</span>
                            <div className="budget-background">
                                <div className="budget other" style={{width: `${percentage[6]}%`}}></div>
                            </div>
                        </div>
                        <div className="budget-text">
                            <p className="budget-paragraph">This is how much of your budget you have used for each category.</p>
                            <p className="budget-paragraph">To update your budgets for any of the categories go to the budgets page.</p>
                            <a className="budget-button" href="/settings">Update Budgets</a>
                        </div>
                    </div>
                </div>
                <YearGraph data={dashData.pastMonths}/>
            </div>
        </div>
    </div>
    <Footer/>
    </div>);
}

export default Dashboard;