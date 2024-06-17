import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';


const ExpenseItem = (props) => {

    return (        
        <tr>
            <th scope="row">1</th>
            <td>props.expense.name</td>
            <td>props.expense.cost</td>
            <td>
                <button className='btn'>+</button>
            </td>
            <td>
                <button className='btn'>-</button>
            </td>
        </tr>        
    )
}

export default ExpenseItem;
