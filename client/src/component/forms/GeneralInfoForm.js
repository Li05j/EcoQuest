// GeneralInfoForm.js
import React from 'react';

const GeneralInfoForm = ({ data, updateData, setActivePage }) => {

    const handleNextForm = () => {
        setActivePage('electricity'); // next form
    };

    const handleTimeframeChange = (e) => {
        updateData({ ...data, timeframe: e.target.value });
    };

    const handleHouseholdChange = (e) => {
        updateData({ ...data, household: e.target.value });
    };

    const handleCountryChange = (e) => {
        updateData({ ...data, country: e.target.value });
    };

    return (
        <form>
            <div>
                <label>
                    Are you looking for a monthly, quarterly, or a yearly report?
                    <select value={data.timeframe} onChange={handleTimeframeChange}>
                        <option value="">Select an Option</option>
                        <option value="month">Monthly</option>
                        <option value="quarter">Quarterly</option>
                        <option value="year">Yearly</option>
                    </select>
                </label>
            </div>
            <div>
                <label>
                    How many people is in your household?
                    <select value={data.household} onChange={handleHouseholdChange}>
                        <option value="">Select an Option</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5 or more">4+</option>
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Which country are you residing in?
                    <select value={data.country} onChange={handleCountryChange}>
                        <option value="">Select a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        {/* and more */}
                    </select>
                </label>
            </div>
            <button type="button" onClick={handleNextForm}>Next Form</button>
        </form>
    );
};

export default GeneralInfoForm;