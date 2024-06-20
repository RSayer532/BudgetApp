import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import ActionButton from "./ActionButton";
import DepartmentDropdown from "./DepartmentDropdown";
import AmountInput from "./AmountInput";

const AllocationForm = () => {
  const { dispatch, action } = useContext(AppContext);

  const [name, setName] = useState("");
  const [cost, setCost] = useState(null);
  const [disabled, setDisabled] = useState("");

  useEffect(() => {
    if (cost === null || name === "") {
      setDisabled("disabled");
    } else {
      setDisabled("");
    }
  }, [name, cost]);

  const submitAllocation = () => {
    const expense = {
      name: name,
      cost: parseFloat(cost)
    };

    if (action === "Reduce") {
      dispatch({
        type: "RED_EXPENSE",
        payload: expense
      });
    } else {
      dispatch({
        type: "ADD_EXPENSE",
        payload: expense
      });
    }
  };

  return (
    <>
      <div className="col-sm">
        <DepartmentDropdown setDepartmentName={setName} />
      </div>

      <div className="col-sm input-group">
        <div className="row">
          <div className="col">
            <ActionButton actionName="Add" />
          </div>
          <div className="col">
            <ActionButton actionName="Reduce" />
          </div>
        </div>
      </div>

      <div className="col-sm">
        <AmountInput updateCost={setCost} expenseName={name} />
      </div>

      <div className="col-sm">
        <button
          type="button"
          className={`btn btn-dark ${disabled}`}
          value="Submit"
          onClick={submitAllocation}
        >
          Edit
        </button>
      </div>
    </>
  );
};

export default AllocationForm;
