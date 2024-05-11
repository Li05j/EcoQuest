// VehicleForm.js
import React from 'react';

const VehicleForm = ({ data, updateData, setActivePage }) => {

    const handleNextForm = () => {
        setActivePage('fuel'); // next form
    };

    const handleValueChange = (e) => {
        updateData({ ...data, distance_value: e.target.value });
    };

    const handleUnitChange = (e) => {
        updateData({ ...data, distance_unit: e.target.value });
    };

    return (
        <form>
            <div>
                <label>
                    Distance traveled via your vehicle:
                    <input
                        type="number"
                        value={data.distance_value}
                        onChange={handleValueChange}
                    />
                    <select value={data.distance_unit} onChange={handleUnitChange}>
                        <option value="">Select a Unit</option>
                        <option value="km">km</option>
                        <option value="mi">mi</option>
                    </select>
                </label>
            </div>
            <button type="button" onClick={handleNextForm}>Next Form</button>
        </form>
    );
};

export default VehicleForm;