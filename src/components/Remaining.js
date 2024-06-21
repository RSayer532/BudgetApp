import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import "./css/Style.css";

const Remaining = () => {
    const { expenses, budget, currency, remaining } = useContext(AppContext);
    const [warning, setWarning] = useState("input-btn");

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    useEffect(() => {

        if (budget <= totalExpenses) {
            setWarning('bg-danger');
        } else if (remaining < 0.5 * budget) {
            setWarning('bg-warning')
        } else {
            setWarning('input-btn');
        }
    })

    return (
        <div className={`input-group mb-3`}>
            <span className={`${warning} input-group-text`} id="remaining">
                Remaining {currency.symbol}{" "}
            </span>
            <span
                type="number"
                step="10"
                className="form-control disable"
                aria-label="Budget"
                aria-describedby="budget-input"
            >
                {(budget - totalExpenses).toFixed(2)}
            </span>
        </div>
    );
};

export default Remaining;
