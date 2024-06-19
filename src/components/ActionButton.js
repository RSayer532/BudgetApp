import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';

const ActionButton = ({ actionName }) => {  

    const { dispatch, action } = useContext(AppContext);
    const [btnStyle, setBtnStyle] = useState('btn-outline-dark');

    useEffect(() => {
        setBtnStyle(action === actionName ? 'btn-dark' : 'btn-outline-dark');
    }, [action, actionName]);
        
    const handleAction = () => {
        setBtnStyle('btn-dark');

        dispatch({
            type: "SET_ACTION",
            payload: {
                name: actionName,
            }
        });  
    }

    return (
        <button className={`btn ${btnStyle}`} onClick={() => handleAction()} >{actionName}</button>
    )
};

export default ActionButton;