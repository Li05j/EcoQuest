// ElectricityForm.js
import React, { useState } from 'react';

const ElectricityForm = ({ data, updateData, setActivePage }) => {

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // send data to your server
    //     console.log({ electricityValue, country });
    // };

    const handleNextForm = () => {
        setActivePage('flight'); // Assuming 'flight' is the next form
    };

    const handleValueChange = (e) => {
        updateData({ ...data, electricity_value: e.target.value });
    };

    const handleCountryChange = (e) => {
        updateData({ ...data, country: e.target.value });
    };

    return (
        <form>
            <div>
                <label>
                    Electricity Value (mwh):
                    <input
                        type="number"
                        value={data.electricity_value}
                        onChange={handleValueChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Country:
                    <select value={data.country} onChange={handleCountryChange}>
                        <option value="">Select a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                    </select>
                </label>
            </div>
            {/* <button type="submit">Submit</button> */}
            <button type="button" onClick={handleNextForm}>Next Form</button>
        </form>
    );
};

export default ElectricityForm;