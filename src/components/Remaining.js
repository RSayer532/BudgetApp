import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Remaining = () => {
  const { expenses, budget, currency } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  const alertType = totalExpenses > budget ? "alert-danger" : "alert-success";
  return (
    <div className={`input-group mb-3`}>
      <span className={`btn-${alertType} input-group-text`} id="budget-input">
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
