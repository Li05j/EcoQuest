// FuelCombustionForm.js
import React from 'react';

const FuelCombustionForm = ({ data, updateData, setActivePage }) => {

    const handleNextForm = () => {
        setActivePage('shipping'); // next form
    };

    const handleValueChange = (e) => {
        updateData({ ...data, fuel_source_value: e.target.value });
    };

    const handleTypeChange = (e) => {
        updateData({ ...data, fuel_source_type: e.target.value });
    };

    return (
        <form>
            <div>
                <label>
                    Fuel Source Type:
                    <select value={data.fuel_source_type} onChange={handleTypeChange}>
                        <option value="">Select a Fuel Type</option>
                        <option value="bit">Bituminous Coal</option>
                        <option value="dfo">Distillate</option>
                        <option value="jf">Jet Fuel</option>
                        {/* and more */}
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Fuel Source Value (btu):
                    <input
                        type="number"
                        value={data.fuel_source_value}
                        onChange={handleValueChange}
                    />
                </label>
            </div>
            <button type="button" onClick={handleNextForm}>Next Form</button>
        </form>
    );
};

export default FuelCombustionForm;