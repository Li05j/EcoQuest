// Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = ({ setActivePage }) => {
    return (
        <div className="navbar">
            <button onClick={() => setActivePage('electricity')}>Electricity</button>
            <button onClick={() => setActivePage('flight')}>Flight</button>
        </div>
    );
};

export default Navbar;