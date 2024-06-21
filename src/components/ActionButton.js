import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import PropTypes from "prop-types";
import "./css/Style.css";

const ActionButton = ({ actionName, colourClass }) => {
    const { dispatch, action } = useContext(AppContext);
    const [btnStyle, setBtnStyle] = useState("");

    useEffect(() => {
        setBtnStyle(action === actionName ? `btn-${colourClass}` : "btn-outline-secondary");
    }, [action, actionName]);

    console.log(colourClass);
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
        <button className={`btn ${btnStyle} action-btn`} onClick={() => handleAction()}>
            {actionName}
        </button>
    );
};

ActionButton.propTypes = {
    actionName: PropTypes.string
};

export default ActionButton;
