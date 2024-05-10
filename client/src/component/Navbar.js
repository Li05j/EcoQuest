// Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = ({ setActivePage }) => {
    return (
        <div className="navbar">
            <button onClick={() => setActivePage('electricity')}>Electricity Form</button>
            <button onClick={() => setActivePage('vehicle')}>Vehicle Form</button>
            <button onClick={() => setActivePage('fuel')}>Fuel Combustion Form</button>
            <button onClick={() => setActivePage('shipping')}>Shipping Form</button>
            <button onClick={() => setActivePage('submit')}>Submit Form</button>
        </div>
    );
};

export default Navbar;