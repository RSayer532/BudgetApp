import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import AmountInput from "./AmountInput";
import "./css/Style.css";

const NewAllocationForm = () => {
    const { dispatch } = useContext(AppContext);

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

    const submitNewAllocation = () => {
        const expense = {
            name: name,
            cost: parseFloat(cost)
        };

        setName("");
        setCost("");

        dispatch({
            type: "NEW_EXPENSE",
            payload: expense
        });
    };

    return (
        <div>
            <div className="row">
                <div className="col">
                    <div className="input-group mb-3 department-input">
                        <span className="input-group-text input-btn" id="department-input">
                            Department
                        </span>
                        <input
                            type="text"
                            value={name}
                            className="form-control"
                            placeholder="..."
                            aria-label="..."
                            aria-describedby="department-input"
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>
                </div>

                <div className="col col-2"></div>

                <div className="col">
                    <AmountInput updateCost={setCost} expenseName={name} expenseCost={cost} />
                </div>

                <div className="col col-2">
                    <button
                        type="button"
                        className={`btn ${disabled} submit-btn`}
                        onClick={submitNewAllocation}
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewAllocationForm;
