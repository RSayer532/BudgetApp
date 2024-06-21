import React, { useContext } from "react";
import IncreaseButton from "./IncreaseButton";
import DeleteButton from "./DeleteButton";
import { AppContext } from "../context/AppContext";
import PropTypes from "prop-types";

const ExpenseItem = (props) => {
    const { currency } = useContext(AppContext);
    let expense = props.expense;

    return (
        <tr>
            <td>{expense.name}</td>
            <td>
                {currency.symbol} {expense.cost.toFixed(2)}
            </td>
            <td className="text-end">
                <IncreaseButton expense={expense} />
            </td>
            <td className="text-end">
                <DeleteButton expense={expense} />
            </td>
        </tr>
    );
};

// runtime checks for development
ExpenseItem.propTypes = {
    expense: PropTypes.shape({ cost: PropTypes.number, name: PropTypes.string })
};

export default ExpenseItem;
