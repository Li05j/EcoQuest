// SubmitForm.js
import React from 'react';

const SubmitForm = ({ data }) => {
    const DEFAULT_VEHICLE_MODEL_ID = "7268a9b7-17e8-4c8d-acca-57059252afe9"
    const DEFAULT_FUEL_SOURCE_UNIT = "btu"

    const handleSubmit = (event) => {
        event.preventDefault();

        const payload_electricity = {
            electricity_value: data.electricity.electricity_value,
            country: data.electricity.country,
        };

        const payload_vehicle = {
            distance_unit: data.vehicle.distance_unit,
            distance_value: data.vehicle.distance_value,
            vehicle_model_id: DEFAULT_VEHICLE_MODEL_ID,
        };

        const payload_fuel = {
            fuel_source_type: data.fuel.fuel_source_type,
            fuel_source_unit: DEFAULT_FUEL_SOURCE_UNIT,
            fuel_source_value: data.fuel.fuel_source_value,
        };

        const payload_shipping = {
            weight_value: data.shipping.weight_value,
            weight_unit: data.shipping.weight_unit,
            distance_value: data.shipping.distance_value,
            distance_unit: data.shipping.distance_unit,
            transport_method: data.shipping.transport_method,
        };

        // for debug
        // console.log('Data:', data);
        // console.log('Payload:', payload_fuel);
        //

        fetch('http://localhost:5000/estimate/electricity', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload_electricity),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        fetch('http://localhost:5000/estimate/vehicle', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload_vehicle),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        fetch('http://localhost:5000/estimate/fuel', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload_fuel),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        fetch('http://localhost:5000/estimate/shipping', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload_shipping),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div>
            Are you sure you want to submit?
            <p>You can double check your responses by selecting the forms on the left.</p>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default SubmitForm;