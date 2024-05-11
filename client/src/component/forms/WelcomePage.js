// WelcomePage.js
import React from 'react';

const WelcomePage = ({ setActivePage }) => {
    const handleNextForm = () => {
        setActivePage('general'); // next form
    };

    return (
        <div>
            <h1>Your Carbon Footprint Calculator</h1>
            <p>Interested in making an impact to the world by knowing how to reduce YOUR personal carbon footprint?</p>
            <p>Click the button below to start!</p>
            <button type="button" onClick={handleNextForm}>Start!</button>
        </div>
    );
};

export default WelcomePage;