import React from "react";
import "./Transaction.css";

interface TransactionProps {
    reRender: Function;
}

const Transaction: React.FC<TransactionProps> = (props) =>{

    fetch("https://season-best-yoke.glitch.me/check-auth",{
        method:"get",
        credentials: "include"
    })
    .then(res => {
        if(res.status !== 200){
            props.reRender()
        }
    })

    function handleSubmit(event: any){
        event.preventDefault();

        const category = event.target.category.value;
        const amount = event.target.amount.value;

        fetch("https://season-best-yoke.glitch.me/transaction",{
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({category: category, amount: amount})
        })
        .then(res => {
            if(res.status === 200){
                window.location.reload();
            }
        })
    }

    return(<div className="transaction-container">
        <form onSubmit={handleSubmit}>
            <p className="form-header">Add a Transaction</p>
            <div className="transaction-body">
                <p className="income-text hidden-text">Add a transaction to your account.</p>
                <p className="select-title">Select a Category:</p>
                <select className="category" title="Category" name="category">
                    <option value="0">Food & Drink</option>
                    <option value="1">Bills & Utilities</option>
                    <option value="2">Entertainment</option>
                    <option value="3">Transportation</option>
                    <option value="4">Personal Care</option>
                    <option value="5">Shopping</option>
                    <option value="6">Other</option>
                </select>
                <p className="select-title">Amount of Transaction:</p>
                <input type="number" step=".01" className="amount" name="amount" placeholder="Amount"></input>
            <button className="transaction-btn" type="submit">Submit</button>
            </div>
        </form>
    </div>);
}

export default Transaction;