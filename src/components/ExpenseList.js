import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
    const { expenses, currency } = useContext(AppContext);

    return (
        <table className="table" style={{width: '90%', margin: 'auto'} }>
            <thead className="thead">
                <tr>
                    <th scope="col">Department</th>
                    <th scope="col">Allocated Budget</th>
                    <th scope="col" className="col-1 text-end">
                        + {currency.symbol} 10
                    </th>
                    <th scope="col" className="col-1 text-end">
                        Delete
                    </th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expense) => (
                    <ExpenseItem expense={expense} key={expense.name} />
                ))}
            </tbody>
        </table>
    );
};

export default ExpenseList;
