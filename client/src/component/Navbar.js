// Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
    const handleNavItemClick = (item) => {
        console.log(item);
    };

    return (
        <div className="navbar">
            <button onClick={() => handleNavItemClick('electricity')}>Electricity</button>
            <button onClick={() => handleNavItemClick('flight')}>Flight</button>
        </div>
    );
};

export default Navbar;