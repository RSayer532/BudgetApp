import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import PropTypes from "prop-types";

const ActionButton = ({ actionName }) => {
    const { dispatch, action } = useContext(AppContext);
    const [btnStyle, setBtnStyle] = useState("");

    useEffect(() => {
        console.log(actionName, action);
        setBtnStyle(action === actionName ? "btn-dark" : "btn-outline-dark");
    }, [action, actionName]);

    const handleAction = () => {
        setBtnStyle("btn-dark");

        dispatch({
            type: "SET_ACTION",
            payload: {
                name: actionName
            }
        });
    };

    return (
        <button className={`btn ${btnStyle}`} onClick={() => handleAction()}>
            {actionName}
        </button>
    );
};

ActionButton.propTypes = {
    actionName: PropTypes.string
};

export default ActionButton;
