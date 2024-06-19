import React from 'react';
import IncreaseButton from './IncreaseButton';
import DeleteButton from './DeleteButton';

const ExpenseItem = (props) => {

    let expense = props.expense;

    return (        
        <tr>
            <td>{expense.name}</td>
            <td>{expense.cost.toFixed(2)}</td>
            <td>
                <IncreaseButton expense={expense} />
            </td>
            <td>
                <DeleteButton expense={expense} />
            </td>
        </tr>        
    )
}

export default ExpenseItem;
