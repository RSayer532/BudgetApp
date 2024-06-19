import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    useEffect(() => {
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget,
        });
    }, [dispatch, newBudget]);

    const handleNewBudget = (budgetValue) => {

        if (isNaN(parseFloat(budgetValue))) {
            alert("This is not a valid value for the budget");
            return;
        }

        setNewBudget(parseFloat(budgetValue));

    }

    return (
        <div className='input-group mb-3'>
            <span className="input-group-text" id="budget-input">Budget: {currency.symbol} </span>
            <input type="number" step="10" className="form-control" value={budget.toFixed(2)} arial-label="Budget" aria-describedby="budget-input" onChange={(event) => handleNewBudget(parseInt(event.target.value))} />            
        </div>
    );
};

export default Budget
