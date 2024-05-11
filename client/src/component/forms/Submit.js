// SubmitForm.js
import React, { useState } from 'react';
import { sendDataToChatGPT } from '../../service/ChatService';

const SubmitForm = ({ data }) => {
    const DEFAULT_VEHICLE_MODEL_ID = "7268a9b7-17e8-4c8d-acca-57059252afe9"
    const DEFAULT_FUEL_SOURCE_UNIT = "btu"

    const [totalCarbonKg, setTotalCarbonKg] = useState(null);
    const [totalCarbonLb, setTotalCarbonLb] = useState(null);
    const [chatGptResponse, setChatGptResponse] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitFlag, setsubmitFlag] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        setTotalCarbonKg(null);
        setTotalCarbonLb(null);
        setChatGptResponse(null);
        setIsSubmitting(true);
        setsubmitFlag(true);

        const payload_electricity = {
            electricity_value: data.electricity.electricity_value,
            country: data.general.country,
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

        Promise.all([
            fetch('http://localhost:5000/estimate/electricity', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload_electricity),
            }),
            fetch('http://localhost:5000/estimate/vehicle', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload_vehicle),
            }),
            fetch('http://localhost:5000/estimate/fuel', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload_fuel),
            }),
            fetch('http://localhost:5000/estimate/shipping', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload_shipping),
            })
        ])
            .then(responses => Promise.all(responses.map(res => res.json())))
            .then(async ([electricityResponse, vehicleResponse, fuelResponse, shippingResponse]) => {
                setTotalCarbonKg(
                    electricityResponse.data.attributes.carbon_kg +
                    vehicleResponse.data.attributes.carbon_kg +
                    fuelResponse.data.attributes.carbon_kg +
                    shippingResponse.data.attributes.carbon_kg
                )
                setTotalCarbonLb(
                    electricityResponse.data.attributes.carbon_lb +
                    vehicleResponse.data.attributes.carbon_lb +
                    fuelResponse.data.attributes.carbon_lb +
                    shippingResponse.data.attributes.carbon_lb
                )
                const openai_reply = await sendDataToChatGPT([totalCarbonKg, totalCarbonLb], data)
                setChatGptResponse(openai_reply)
                setIsSubmitting(false);
            })
            .catch((error) => {
                console.error('Error:', error);
                setIsSubmitting(false);
            });
    };

    return (
        <div>
            <p>Are you sure you want to submit?</p>
            <p>You can go back and double check your responses by selecting the forms on the left.</p>
            <button type="submit" onClick={handleSubmit} disabled={isSubmitting}>Submit</button>
            <br></br><br></br>
            <pre>{submitFlag && <p>Your total carbon footprint is:
                {totalCarbonKg !== null && totalCarbonLb !== null ? ` ${totalCarbonKg} kg / ${totalCarbonLb} lb` : ' calculating...'}</p>}
                {submitFlag && <p>We suggest...:
                    {chatGptResponse !== null ? ` ${chatGptResponse}` : ' analysing your submission...'}</p>}
            </pre>
        </div>
    );
};

export default SubmitForm;