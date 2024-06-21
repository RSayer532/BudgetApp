import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import ActionButton from "./ActionButton";
import AmountInput from "./AmountInput";
import "./css/Style.css";

const AllocationForm = () => {
    const { dispatch, expenses, action } = useContext(AppContext);
    const [name, setName] = useState("");
    const [cost, setCost] = useState("");
    const [disabled, setDisabled] = useState("");

    useEffect(() => {
        if (cost === "" || name === "") {
            setDisabled("disabled");
        } else {
            setDisabled("");
        }
    }, [name, cost]);

    // Handle submit of allocation change and clear input
    const submitAllocation = () => {
        const expense = {
            name: name,
            cost: parseFloat(cost)
        };

        setCost("");
        setName("");

        if (action === "Reduce") {
            dispatch({
                type: "RED_EXPENSE",
                payload: expense
            });
        } else {
            dispatch({
                type: "ADD_EXPENSE",
                payload: expense
            });
        }

        // Reset to default action of adding expenses when submitted
        dispatch({
            type: "SET_ACTION",
            payload: {
                name: "Add"
            }
        });
    };

    return (
        <>
            {/* Department dropdown*/}
            <div className="col-sm">
                <div className="input-group mb-3 department-input">
                    <label className="input-group-text input-btn" htmlFor="allocation-input">
                        Department
                    </label>
                    <select
                        className="form-select"
                        id="allocation-input"
                        onChange={(event) => setName(event.target.value)}
                        value={name}
                    >
                        <option defaultValue>Choose...</option>
                        {expenses.map((expense) => (
                            <option value={expense.name} key={expense.name} name={expense.name}>
                                {expense.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Action buttons */}
            <div className="col col-2">
                <div className="row">
                    <div className="col">
                        <ActionButton actionName="Add" colourClass="success" />
                    </div>
                    <div className="col">
                        <ActionButton actionName="Reduce" colourClass="danger" />
                    </div>
                </div>
            </div>

            {/* Amount input */}
            <div className="col amount-input">
                <AmountInput updateCost={setCost} expenseName={name} expenseCost={cost} />
            </div>

            {/* Submit button */}
            <div className="col col-2">
                <button
                    type="button"
                    className={`btn ${disabled} submit-btn`}
                    onClick={submitAllocation}
                >
                    Edit
                </button>
            </div>
        </>
    );
};

export default AllocationForm;
