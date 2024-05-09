// App.js
import React, { useState } from 'react';
import Navbar from './component/Navbar';
import ElectricityForm from './component/ElectricityForm';
import FlightForm from './component/FlightForm';

const App = () => {
  const [activePage, setActivePage] = useState('');
  const [formData, setFormData] = useState({
    electricity: { electricity_value: '', country: '' },
    flight: { /* ... */ },
  });

  const renderContent = () => {
    switch (activePage) {
      case 'electricity':
        return <ElectricityForm
          data={formData.electricity}
          updateData={(newData) => setFormData({ ...formData, electricity: newData })}
          setActivePage={setActivePage} />;
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