import React from "react";
import { Bar } from "react-chartjs-2";
import "./YearGraph.css";

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

interface GraphProps{
    data: PastMonths[]
}

const YearGraph: React.FC<GraphProps> = (props) => {

    const pastMonths = props.data;
    let graphData: number[] = Array(12).fill(0);

    for(let i = 0; i< pastMonths.length; i++){
        const current = pastMonths[i];
        const year = parseInt(current.year_month.substring(0,4));
        const month = parseInt(current.year_month.substring(5));

        const currentYear = new Date().getFullYear();
        if(year === currentYear){
            if(month === new Date().getMonth()){
                const monthProgress = new Date().getDay() / 30;
                const expenses = Object.values(pastMonths[i])
                .map(value => parseFloat(value));

                console.log(JSON.stringify(expenses));

                let expenseSum = 0;

                for(let i = 3; i< expenses.length - 1; i++){
                    expenseSum += expenses[i];
                }

                graphData[month-1] = (parseFloat(current.max_budget) * monthProgress) - expenseSum;
            }
            else{
                const expenses = Object.values(pastMonths[i])
                .map(value => parseFloat(value));

                console.log(JSON.stringify(expenses));

                let expenseSum = 0;

                for(let i = 3; i< expenses.length - 1; i++){
                    expenseSum += expenses[i];
                }

                graphData[month-1] = parseFloat(current.max_budget) - expenseSum;
            }
            
        }
    }

    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "Monthly Savings",
                data: graphData,
                backgroundColor: [""]
            }
        ]
    }

    const aboveZeroColor = "#42f598";
    const belowZeroColor = "#f54949";

    data.datasets[0].backgroundColor = data.datasets[0].data.map(value => (value >= 0 ? aboveZeroColor : belowZeroColor))

    const options = {
        scales: {
          y: {
            beginAtZero: true,
            suggestedMin: 0, // Set the minimum value for the scale
          },
        },
    };

    return(
        <div className="year-container">
            <div className="graph-container">
                <Bar data={data} options={options}/>
            </div>
        </div>
    )
}

export default YearGraph;