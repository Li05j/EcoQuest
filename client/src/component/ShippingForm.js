// ShippingForm.js
import React from 'react';

const ShippingForm = ({ data, updateData, setActivePage }) => {

    const handleNextForm = () => {
        setActivePage('submit');
    };

    const handleWeightValueChange = (e) => {
        updateData({ ...data, weight_value: e.target.value });
    };

    const handleWeightUnitChange = (e) => {
        updateData({ ...data, weight_unit: e.target.value });
    };

    const handleDistanceValueChange = (e) => {
        updateData({ ...data, distance_value: e.target.value });
    };

    const handleDistanceUnitChange = (e) => {
        updateData({ ...data, distance_unit: e.target.value });
    };

    const handleTransportMethodChange = (e) => {
        updateData({ ...data, transport_method: e.target.value });
    };

    return (
        <form>
            <div>
                <label>
                    Weight Value:
                    <input
                        type="number"
                        value={data.weight_value}
                        onChange={handleWeightValueChange}
                    />
                    <select value={data.weight_unit} onChange={handleWeightUnitChange}>
                        <option value="kg">kg</option>
                        <option value="lb">lb</option>
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Distance Value:
                    <input
                        type="number"
                        value={data.distance_value}
                        onChange={handleDistanceValueChange}
                    />
                    <select value={data.distance_unit} onChange={handleDistanceUnitChange}>
                        <option value="km">km</option>
                        <option value="mi">mi</option>
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Transport Method:
                    <select value={data.transport_method} onChange={handleTransportMethodChange}>
                        <option value="ship">Ship</option>
                        <option value="train">Train</option>
                        <option value="truck">Truck</option>
                        <option value="plane">Plane</option>
                    </select>
                </label>
            </div>
            <button type="button" onClick={handleNextForm}>Next Form</button>
        </form>
    );
};

export default ShippingForm;