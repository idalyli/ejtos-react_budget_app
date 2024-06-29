import React, {useContext, useState} from 'react';
import {AppContext} from '../context/AppContext';

const Budget = () => {
    const {budget, currency} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value)


        }
    return (
        <div className='alert alert-secondary'>
            <span style={{size:5}}>Budget:{currency}</span>
            <input style={{size:5}} type="number" step="10"  max='20000' value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;
