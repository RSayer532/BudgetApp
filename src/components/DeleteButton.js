import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import PropTypes from "prop-types";

const DeleteButton = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDecrease = () => {
        dispatch({
            type: "DELETE_EXPENSE",
            payload: props.expense
        });
    };

    return (
        <button
            type="button"
            className="btn btn-danger rounded-circle"
            onClick={() => handleDecrease()}
        >
            D
        </button>
    );
};

DeleteButton.propTypes = {
    expense: PropTypes.object
};

export default DeleteButton;
