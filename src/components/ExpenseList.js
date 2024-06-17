import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {

    const { expenses } = useContext(AppContext);

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th scope='col'>Department</th>
                    <th scope='col'>Allocated Budget</th>
                    <th scope='col'>Increase by 10</th>
                    <th scope='col'>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    expenses.forEach((expense) => {
                        <ExpenseItem expense={{expense}} />                
                    })            
                }
            </tbody>

        </table>
    )
}

export default ExpenseList;
