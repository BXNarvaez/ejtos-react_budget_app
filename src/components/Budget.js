import React, {useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, currency} = useContext(AppContext);

    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
            setNewBudget(event.target.value);
            dispatch({
                type: 'SET_BUDGET',
                adjustment: event.target.value,
            });
    }

    return (
        <div className='alert alert-secondary' style={{ marginLeft: '2rem' }}>
            <span>Budget:{currency}
                <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
            </span>
        </div>
    );
}

export default Budget;
