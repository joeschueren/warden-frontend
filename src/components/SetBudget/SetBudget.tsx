import React, {useState, useEffect} from "react";
import "./SetBudget.css";

const SetBudget: React.FC = () =>{

    const [currentData, setCurrentData] = useState([]);

    fetch("https://warden-backend.onrender.com/check-auth",{
        method:"get",
        credentials: "include"
    })
    .then(res => {
        if(res.status !== 200){
            window.location.href= "/login";
        }
    })

    useEffect(()=>{
        async function getBudgets(){
            const res = await fetch("https://warden-backend.onrender.com/get-budgets",{
            method: "GET",
            credentials: "include"});

            const data = await res.json();

            if(data){
                setCurrentData(data);
            }
        }
        getBudgets();
    }, [])

    async function handleSubmit(event: any){
        event.preventDefault();

        const e = event.target;

        const food = e.food.value;
        const bills = e.bills.value;
        const entertainment = e.entertainment.value;
        const transportation = e.transportation.value;
        const personal = e.personal.value;
        const shopping = e.shopping.value;
        const other = e.other.value;

        await fetch("https://warden-backend.onrender.com/set-budget",{
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                    food: food,
                    bills: bills,
                    entertainment: entertainment,
                    transportation: transportation,
                    personal: personal,
                    shopping: shopping,
                    other: other
                })
        })
        .then(res => {
            if(res.status === 200){
                window.location.href= "/dashboard";
            }
        })
    }

    return(<div className="budget-container">
        <form onSubmit={handleSubmit}>
            <p className="budget-title">Update Budgets</p>
            <p className="category-title">Food & Dining</p>
            $ <input className="budget-input" type="number" step=".01" name="food" placeholder="Food & Dining" value={currentData[0]}></input>
            <p className="category-title">Bills & Utilities</p>
            $ <input className="budget-input" type="number" step=".01" name="bills" placeholder="Bills & Utilities" value={currentData[1]}></input>
            <p className="category-title">Entertainment</p>
            $ <input className="budget-input" type="number" step=".01" name="entertainment" placeholder="Entertainment" value={currentData[2]}></input>
            <p className="category-title">Tranportation</p>
            $ <input className="budget-input" type="number" step=".01" name="transportation" placeholder="Transportation" value={currentData[3]}></input>
            <p className="category-title">Personal Care</p>
            $ <input className="budget-input" type="number" step=".01" name="personal" placeholder="Personal Care" value={currentData[4]}></input>
            <p className="category-title">Shopping</p>
            $ <input className="budget-input" type="number" step=".01" name="shopping" placeholder="Shopping" value={currentData[5]}></input>
            <p className="category-title">Other</p>
            $ <input className="budget-input" type="number" step=".01" name="other" placeholder="Other" value={currentData[6]}></input>
            <button className="confirm-button" style={{marginTop: "30px"}} type="submit">Save Changes</button>
        </form>
    </div>);
}

export default SetBudget;