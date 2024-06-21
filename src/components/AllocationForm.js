import React, { useContext, useState, useEffect, useRef } from "react";
import { AppContext } from "../context/AppContext";
import ActionButton from "./ActionButton";
import AmountInput from "./AmountInput";

const AllocationForm = () => {
    const { dispatch, currency, remaining, expenses, action } = useContext(AppContext);
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
                <div className="input-group">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="allocation-input">
                            Department
                        </label>
                    </div>
                    <select
                        className="custom-select"
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
            <div className="col-sm input-group">
                <div className="row">
                    <div className="col">
                        <ActionButton actionName="Add" />
                    </div>
                    <div className="col">
                        <ActionButton actionName="Reduce" />
                    </div>
                </div>
            </div>

            {/* Amount input */}
            <div className="col-sm">
                <AmountInput updateCost={setCost} expenseName={name} expenseCost={cost} />
            </div>

            {/* Submit button */}
            <div className="col-sm">
                <button
                    type="button"
                    className={`btn btn-dark ${disabled}`}
                    onClick={submitAllocation}
                >
                    Edit
                </button>
            </div>
        </>
    );
};

export default AllocationForm;
