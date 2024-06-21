import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import PropTypes from "prop-types";

const IncreaseButton = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleIncrease = () => {
        dispatch({
            type: "ADD_EXPENSE",
            payload: {
                name: props.expense.name,
                cost: 10
            }
        });
    };

    return (
        <button type="button" className="btn btn-outline-dark" onClick={handleIncrease}>
            +
        </button>
    );
};

// Runtime checking for development
IncreaseButton.propTypes = {
    expense: PropTypes.object
};

export default IncreaseButton;
