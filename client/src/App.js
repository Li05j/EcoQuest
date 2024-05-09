// App.js
import React, { useState } from 'react';
import Navbar from './component/Navbar';
import ElectricityForm from './component/ElectricityForm';
import FlightForm from './component/FlightForm';

const App = () => {
  const [activePage, setActivePage] = useState('');

  const renderContent = () => {
    switch (activePage) {
      case 'electricity':
        return <ElectricityForm />;
      case 'flight':
        return <FlightForm />;
      default:
        return <div>Select an option</div>;
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <Navbar setActivePage={setActivePage} />
      <div style={{ flexGrow: 1 }}>
        {renderContent()}
      </div>
    </div>
  );
};

export default App;