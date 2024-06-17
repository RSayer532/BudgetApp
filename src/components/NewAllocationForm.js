import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const NewAllocationForm = () => {
    const { dispatch, remaining} = useContext(AppContext);
    const [name, setName] = useState('')
    const [cost, setCost] = useState('');

    const submitNewAllocation = () => {
        if (cost > remaining){
            alert(`This new allocation of £${cost} is too expensive!`);
            setCost("");
            return;
        } else if (isNaN(parseInt(cost))){
            console.log(isNaN(parseInt(cost)));
            console.log(cost);
            //alert(`${cost} is not a valid value`);
        }

        const expense = {
            name: name,
            cost: cost,
        };

        dispatch({
            type: 'NEW_EXPENSE',
            payload: expense,
        })
    };

    return (
        <div>
            <div className="row">
                <div className="input-group mb-3" style={{marginLeft: "2rem"}}>
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>Choose...</option>
                        <option value="Marketing" name="marketing">Marketing</option>
                        <option value="Sales" name="sales">Sales</option>
                        <option value="Finance" name="finance">Finance</option>
                        <option value="HR" name="hr">HR</option>
                        <option value="IT" name="it">IT</option>
                        <option value="Admin" name="admin">Admin</option>
                    </select>

                    <div className="input-group-prepend" style={{ marginLeft: "2rem"}}>
                        <form onSubmit={submitNewAllocation}>
                        <label>
                            Allocation:
                            <input type="number" placeholder="£" name="allocation" onChange={setCost} />
                        </label>
                        <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewAllocationForm;