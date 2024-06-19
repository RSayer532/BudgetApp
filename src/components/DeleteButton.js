import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'


const DeleteButton = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDecrease = () => {

        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.expense
        })
    }

    return (
        <button type="button" className="btn btn-outline-dark" onClick={() => handleDecrease()}>-</button>
    )
};

export default DeleteButton;