import React, { createContext, useReducer } from "react";

// 5. The reducer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
    switch (action.type) {
        case "NEW_EXPENSE": {
            action.type = "DONE";

            // Determine if there is already an expense for the allocation
            if (state.expenses.find((expense) => expense.name === action.payload.name)) {
                console.log(
                    `There is currently an allocation for this expense, please modify above`
                );
                return {
                    ...state
                };
            }

            let current_expenditure = state.expenses.reduce((total, currentExp) => {
                return total + currentExp;
            }, 0);

            if (current_expenditure + action.payload.cost > state.budget) {
                console.log(
                    `You cannot add an allocation of ${action.payload.cost}, it goes beyond your current budget`
                );
            }

            state.expenses.push(action.payload);

            return {
                ...state
            };
        }

        case "ADD_EXPENSE": {
            let total_budget = state.expenses.reduce((previousExp, currentExp) => {
                return previousExp + currentExp.cost;
            }, 0);
            total_budget = total_budget + action.payload.cost;
            action.type = "DONE";
            if (total_budget <= state.budget) {
                total_budget = 0;
                state.expenses.map((currentExp) => {
                    if (currentExp.name === action.payload.name) {
                        currentExp.cost = action.payload.cost + currentExp.cost;
                    }
                    return currentExp;
                });

                return {
                    ...state
                };
            } else {
                console.log("Cannot increase the allocation! Out of funds");
                return {
                    ...state
                };
            }
        }

        case "RED_EXPENSE": {
            const red_expenses = state.expenses.map((currentExp) => {
                if (
                    currentExp.name === action.payload.name &&
                    currentExp.cost - action.payload.cost >= 0
                ) {
                    currentExp.cost = currentExp.cost - action.payload.cost;
                    state.budget = state.budget + action.payload.cost;
                }
                return currentExp;
            });
            action.type = "DONE";
            return {
                ...state,
                expenses: [...red_expenses]
            };
        }

        case "DELETE_EXPENSE":
            action.type = "DONE";
            state.expenses = state.expenses.filter(
                (expense) => expense.name !== action.payload.name
            );
            action.type = "DONE";

            return {
                ...state
            };

        case "SET_BUDGET":
            action.type = "DONE";
            state.budget = action.payload;

            return {
                ...state
            };

        case "CHG_CURRENCY": {
            action.type = "DONE";
            let oldCurrency = state.currency.name;
            let newCurrency = action.payload.name;

            let PoundDollar = 1.27;
            let PoundEuro = 1.18;
            let DollarEuro = 1.07;

            let conversion = 0;

            if (oldCurrency === newCurrency) {
                return {
                    ...state
                };
            }

            switch (oldCurrency) {
                case "Pound":
                    conversion = newCurrency === "Dollar" ? PoundDollar : PoundEuro;
                    break;
                case "Dollar":
                    conversion = newCurrency === "Pound" ? 1 / PoundDollar : DollarEuro;
                    break;
                case "Euro":
                    conversion = newCurrency === "Pound" ? 1 / PoundEuro : 1 / DollarEuro;
                    break;
                default:
                    break;
            }

            state.currency = action.payload;

            state.budget = state.budget * conversion;
            state.maximum_budget = state.maximum_budget * conversion;

            state.expenses.map((expense) => {
                expense.cost *= conversion;
                return expense;
            });

            return {
                ...state
            };
        }

        case "SET_ACTION":
            state.action = action.payload.name;

            return {
                ...state
            };

        default:
            return state;
    }
};

// 1. Sets the initial state when the app loads
const initialState = {
    budget: 2000,
    maximum_budget: 20000,
    expenses: [
        {
            name: "Marketing",
            cost: 200
        },
        {
            name: "Finance",
            cost: 200
        },
        {
            name: "Sales",
            cost: 50
        },
        {
            name: "Human Resource",
            cost: 50
        },
        {
            name: "IT",
            cost: 500
        }
    ],
    currency: {
        symbol: "£",
        name: "Pound"
    },
    action: "Add"
};

// 2. Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext();

// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
export const AppProvider = (props) => {
    // 4. Sets up the app state. takes a reducer, and an initial state
    const [state, dispatch] = useReducer(AppReducer, initialState);
    let remaining = 0;

    if (state.expenses) {
        const totalExpenses = state.expenses.reduce((total, item) => {
            return (total = total + item.cost);
        }, 0);
        remaining = state.budget - totalExpenses;
    }

    return (
        <AppContext.Provider
            value={{
                expenses: state.expenses,
                budget: state.budget,
                maximum_budget: state.maximum_budget,
                remaining: remaining,
                dispatch,
                currency: state.currency,
                action: state.action
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};
