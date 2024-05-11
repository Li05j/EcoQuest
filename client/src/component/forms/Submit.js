// SubmitForm.js
import React from 'react';
import { sendDataToChatGPT } from '../../service/ChatService';

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

        sendDataToChatGPT(
            [100, 220.462],
            [payload_electricity, payload_vehicle, payload_fuel, payload_shipping]
        )

        // test version
        // Promise.all([
        //     fetch('http://localhost:5000/estimate/electricity', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(payload_electricity),
        //     }),
        // ])
        //     .then(responses => Promise.all(responses.map(res => res.json())))
        //     .then((electricityResponse) => {
        //         const totalCarbonKg =
        //             electricityResponse.data.attributes.carbon_kg;
        //         const totalCarbonLb =
        //             electricityResponse.data.attributes.carbon_lb;

        //         sendDataToChatGPT(
        //             [totalCarbonKg, totalCarbonLb],
        //             [payload_electricity, payload_vehicle, payload_fuel, payload_shipping]
        //         )
        //     })
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });

        //////////////////////////////////////////////////////////////////////////////
        // Promise.all([
        //     fetch('http://localhost:5000/estimate/electricity', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(payload_electricity),
        //     }),
        //     fetch('http://localhost:5000/estimate/vehicle', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(payload_vehicle),
        //     }),
        //     fetch('http://localhost:5000/estimate/fuel', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(payload_fuel),
        //     }),
        //     fetch('http://localhost:5000/estimate/shipping', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(payload_shipping),
        //     })
        // ])
        //     .then(responses => Promise.all(responses.map(res => res.json())))
        //     .then(([electricityResponse, vehicleResponse, fuelResponse, shippingResponse]) => {
        //         const totalCarbonKg =
        //             electricityResponse.data.attributes.carbon_kg +
        //             vehicleResponse.data.attributes.carbon_kg +
        //             fuelResponse.data.attributes.carbon_kg +
        //             shippingResponse.data.attributes.carbon_kg;
        //         const totalCarbonLb =
        //             electricityResponse.data.attributes.carbon_lb +
        //             vehicleResponse.data.attributes.carbon_lb +
        //             fuelResponse.data.attributes.carbon_lb +
        //             shippingResponse.data.attributes.carbon_lb;

        //         sendDataToChatGPT(
        //             [totalCarbonKg, totalCarbonLb],
        //             [payload_electricity, payload_vehicle, payload_fuel, payload_shipping]
        //         )
        //     })
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });
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