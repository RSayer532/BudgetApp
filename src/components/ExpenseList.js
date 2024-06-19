import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {

    const { expenses } = useContext(AppContext);

    return (
        <table className='table table-hover'>
            <thead className="thead-dark">
                <tr>
                    <th scope='col'>Department</th>
                    <th scope='col'>Allocated Budget</th>
                    <th scope='col' className="col-2">Increase by 10</th>
                    <th scope='col' className="col-2">Delete</th>
                </tr>
            </thead>
            <tbody>                
                {
                    expenses.map((expense) => (<ExpenseItem expense={expense} key={expense.id}  />))
                }                
            </tbody>

        </table>
    )
}

export default ExpenseList;
