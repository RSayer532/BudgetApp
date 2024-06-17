import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import AllocationForm from './components/AllocationForm';
import ExpenseList from './components/ExpenseList';
import NewAllocationForm from './components/NewAllocationForm';

// Add code to import the other components here under


import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {
                            <div className='col-sm'>
                                <Budget />
                            </div>
                        }        

                        {
                            <div className='col-sm'>
                                <Remaining />
                            </div>
                        }        

                        {
                            <div className='col-sm'>
                                <ExpenseTotal />
                            </div>
                        }              

                </div>

                <div className='row mt-3'>
                    {
                        <ExpenseList />
                    }  
                </div>

                <div className='row mt-3'>        

                    {
                        <div className='col-sm'>
                            <AllocationForm />
                        </div>
                    }  
                </div>

                <div className='row mt-3'>        

                    {
                        <div className='col-sm'>
                            <NewAllocationForm />
                        </div>
                    }  
                </div>
            </div>
        </AppProvider>
    );
};
export default App;
