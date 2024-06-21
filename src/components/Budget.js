import React, { useContext, useState, useEffect, useRef } from "react";
import { AppContext } from "../context/AppContext";
import Overlay from "react-bootstrap/Overlay";
import "./css/Style.css";

/* eslint no-unused-vars: "off"*/
/* eslint react/prop-types: "off"*/

const Budget = () => {
    const { dispatch, budget, currency, expenses, maximum_budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const [showError, setShowError] = useState(false);
    const [message, setMessage] = useState("");
    const target = useRef(null);

    useEffect(() => {
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);

        if (budget > totalExpenses) {
            setShowError(false);
        } else {
            setShowError(true);
        }
    })

    const handleNewBudget = (budgetString) => {
        // Check if user has cleared the input box
        if (budgetString === "") {
            setNewBudget("");
            return;
        }

        // Now to check if the value is a valid number
        const budgetValue = parseFloat(budgetString);

        setNewBudget(budgetValue);

        const totalExpenses = expenses.reduce((total, item) => {
            return (total = total + item.cost);
        }, 0);

       
        // Input element prevents user from inputting characters
        // Check that the budget input is more than the spent already and
        // the budget does not exceed �20,000 (or equivalent)

        if (budgetValue < totalExpenses) {
            setMessage("Cannot reduce budget below the amount already spent");
            setShowError(true);
        } else if (budgetValue > 20000) {
            setMessage(`Budget cannot exceed ${currency.symbol} ${maximum_budget}`);
            setShowError(true);
        } else {
            
            setShowError(false);
        }

        dispatch({
            type: "SET_BUDGET",
            payload: budgetValue
        });
    };

    return (
        <>
            <div className="input-group mb-3">
                <span className="input-group-text input-btn" ref={target} id="budget-input">
                    Budget: {currency.symbol}{" "}
                </span>
                <input
                    type="number"
                    step="10"
                    className="form-control"
                    value={newBudget}
                    aria-label="Budget"
                    aria-describedby="budget-input"
                    onChange={(event) => handleNewBudget(event.target.value)}
                />
            </div>
            <Overlay target={target.current} show={showError} placement="bottom-start">
                {({
                    placement: _placement,
                    arrowProps: _arrowProps,
                    show: _show,
                    popper: _popper,
                    hasDoneInitialMeasure: _hasDoneInitialMeasure,
                    ...props
                }) => (
                    <div
                        {...props}
                        style={{
                            position: "absolute",
                            backgroundColor: "rgba(255, 100, 100, 0.85)",
                            padding: "2px 10px",
                            color: "white",
                            borderRadius: 3,
                            ...props.style
                        }}
                    >
                        {message}
                    </div>
                )}
            </Overlay>
        </>
    );
};

export default Budget;
