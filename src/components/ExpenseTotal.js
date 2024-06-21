import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseTotal = () => {
    const { expenses, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    return (
        <div className={`input-group mb-3`}>
            <span className="input-group-text input-btn" id="budget-input">
                Spent so far: {currency.symbol}{" "}
            </span>
            <span
                type="number"
                step="10"
                className="form-control disable"
                aria-label="Budget"
                aria-describedby="budget-input"
            >
                {totalExpenses.toFixed(2)}
            </span>
        </div>
    );
};

export default ExpenseTotal;
