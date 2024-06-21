import React, { useContext, useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { AppContext } from "../context/AppContext";

const CurrencyDropDown = () => {
    const { dispatch, currency } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);

    useEffect(() => {
        dispatch({
            type: "CHG_CURRENCY",
            payload: newCurrency
        });
    }, [dispatch, newCurrency]);

    let currencies = [
        {
            symbol: "\u00A3",
            name: "Pound"
        },
        {
            symbol: "\u0024",
            name: "Dollar"
        },
        {
            symbol: "\u20AC",
            name: "Euro"
        }
    ];

    return (
        <DropdownButton
            variant="outline-secondary float-end"
            id="dropdown-basic-button"
            title={`Currency ${currency.symbol} (${currency.name})`}
        >
            {currencies.map((currencyOption) => (
                <Dropdown.Item
                    key={currencyOption.name}
                    onClick={() => setNewCurrency(currencyOption)}
                >{`${currencyOption.symbol} ${currencyOption.name}`}</Dropdown.Item>
            ))}
        </DropdownButton>
    );
};

export default CurrencyDropDown;
