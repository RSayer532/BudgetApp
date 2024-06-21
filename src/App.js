import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import AllocationForm from "./components/AllocationForm";
import ExpenseList from "./components/ExpenseList";
import { AppProvider } from "./context/AppContext";
import NewAllocationForm from "./components/NewAllocationForm";
import CurrencyDropDown from "./components/CurrencyDropDown";

/* eslint react/prop-types: "off"*/

const App = () => {
    return (
        <AppProvider>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <h1 className="mt-3">Company&apos;s Budget Allocation</h1>
                </div>
            </nav>
            <div className="container">
                <div className="row mt-4">
                    {
                        <div className="col-sm">
                            <Budget />
                        </div>
                    }
                    {
                        <div className="col-sm">
                            <Remaining />
                        </div>
                    }
                    {
                        <div className="col-sm">
                            <ExpenseTotal />
                        </div>
                    }
                    {
                        <div className="col-sm">
                            <CurrencyDropDown />
                        </div>
                    }
                </div>

                <div className="row mt-4">
                    {
                        <div className="col-sm">
                            <ExpenseList />
                        </div>
                    }
                </div>

                <h2 className="mt-3">Change Allocation</h2>
                <div className="row mt-3">
                    <AllocationForm />
                </div>

                <div className="row mt-3">
                    <h2 className="mt-3">Add an Allocation</h2>
                    {<NewAllocationForm />}
                </div>
            </div>
        </AppProvider>
    );
};
export default App;
