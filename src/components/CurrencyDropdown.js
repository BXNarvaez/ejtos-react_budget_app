import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = () => {
    const { dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            symbol: event.target.value,
        })
    }

    return (
        <select className='custom-select alert alert-success' onChange={handleCurrencyChange}>
            <option defaultValue value="£" name="Pound">GBP (£)</option>
            <option value="$" name="Dollar">USD ($)</option>
            <option value="€" name="Euro">EUR (€)</option>
            <option value="₹" name="Ruppee">INR (₹)</option>
        </select>
    );
};

export default CurrencyDropdown;