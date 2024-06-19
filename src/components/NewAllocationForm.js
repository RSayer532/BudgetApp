import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import AmountInput from './AmountInput';

const NewAllocationForm = () => {
    const { dispatch } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState(null);
    const [disabled, setDisabled] = useState('');

    useEffect(() => {
        if (cost === null || name === '') {
            setDisabled('disabled');
        } else {
            setDisabled('');
        }

    }, [name, cost]);

    const submitNewAllocation = () => {

        const expense = {
            name: name,
            cost: parseInt(cost),
        };

        dispatch({
            type: 'NEW_EXPENSE',
            payload: expense
        });
    };

    return (
        <div>
            <div className="row">
                <div className="col-sm">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="department-input">Deparment</span>
                        </div>
                        <input type="text" className="form-control" placeholder="..." aria-label="..." aria-describedby="department-input" onChange={(event) => setName(event.target.value)} />
                    </div>
                </div>

                <div className='col-sm'>
                    <AmountInput updateCost={setCost} />
                </div>

                <div className='col-sm'>
                    <button type="button" className={`btn btn-dark ${disabled}`} value="Submit" onClick={submitNewAllocation} >Add</button>
                </div>
               
            </div>
        </div>
    );
};

export default NewAllocationForm;