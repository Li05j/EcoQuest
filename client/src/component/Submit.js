// SubmitForm.js
import React from 'react';

const SubmitForm = ({ data }) => {

    const handleSubmit = (event) => {
        event.preventDefault();

        const payload_electricity = {
            electricity_value: data.electricity.electricity_value,
            country: data.electricity.country,
        };

        // for debug
        console.log('Data:', data);
        console.log('Electricity Payload:', payload_electricity);

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