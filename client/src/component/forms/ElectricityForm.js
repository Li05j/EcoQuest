// ElectricityForm.js
import React from 'react';

const ElectricityForm = ({ data, updateData, setActivePage }) => {

    const handleNextForm = () => {
        setActivePage('vehicle'); // next form
    };

    const handleValueChange = (e) => {
        updateData({ ...data, electricity_value: e.target.value });
    };

    return (
        <form>
            <div>
                <label>
                    Enter your electricity usage in mwh:
                    <input
                        type="number"
                        value={data.electricity_value}
                        onChange={handleValueChange}
                    />
                </label>
            </div>
            <button type="button" onClick={handleNextForm}>Next Form</button>
        </form>
    );
};

export default ElectricityForm;