import React, { useContext, useState, useRef, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import Overlay from "react-bootstrap/Overlay";
import PropTypes from "prop-types";

/* eslint no-unused-vars: "off"*/
/* eslint react/prop-types: "off"*/

const AmountInput = ({ updateCost, expenseName, expenseCost }) => {
    const { currency, remaining, expenses, action } = useContext(AppContext);
    const [showError, setShowError] = useState(false);
    const [message, setMessage] = useState("");
    const target = useRef(null);

    useEffect(() => {
        if (remaining > parseFloat(expenseCost) || expenseCost === "") {
            setShowError(false);
        } else {
            setShowError(true);
        }
    }, [remaining]);

    const handleAmount = (value) => {
        let showMessage = false;

        // Check to see if the amount is valid based on existing funds and
        // show popup if needed
        if (action === "Add") {
            setMessage("Cannot exceed the remaining funds!");
            showMessage = value > remaining ? true : false;
        } else {
            setMessage("Cannot reduce by this much");
            let oldValue = expenses.find((expense) => expense.name === expenseName).cost;
            showMessage = value > oldValue ? true : false;
        }

        if (showMessage) {
            setShowError(true);
        } else {
            setShowError(false);
            updateCost(value);
        }

        updateCost(value);
    };

    return (
        <>
            <div className="input-group amount-input">
                <span className="input-group-text " ref={target}>
                    Amount: {currency.symbol}
                </span>
                <input
                    type="number"
                    className="form-control"
                    aria-label="Amount"
                    aria-describedby="amount-input"
                    value={expenseCost}
                    onChange={(event) => handleAmount(event.target.value)}
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

AmountInput.propTypes = {
    updateCost: PropTypes.func,
    expenseName: PropTypes.string
};

export default AmountInput;
