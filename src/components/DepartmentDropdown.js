import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import PropTypes from "prop-types";

const DepartmentDropdown = ({ setDepartmentName }) => {
    const { expenses } = useContext(AppContext);

    return (
        <div className="input-group">
            <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="allocation-input">
                    Department
                </label>
            </div>
            <select
                className="custom-select"
                id="allocation-input"
                onChange={(event) => setDepartmentName(event.target.value)}
            >
                <option defaultValue>Choose...</option>
                {expenses.map((expense) => (
                    <option value={expense.name} key={expense.name} name={expense.name}>
                        {expense.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

DepartmentDropdown.propTypes = {
    setDepartmentName: PropTypes.func
};

export default DepartmentDropdown;
