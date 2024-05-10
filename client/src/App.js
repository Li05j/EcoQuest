// App.js
import React, { useState } from 'react';
import Navbar from './component/Navbar';
import ElectricityForm from './component/forms/ElectricityForm';
import VehicleForm from './component/forms/VehicleForm';
import FuelCombustionForm from './component/forms/FuelCombustionForm';
import ShippingForm from './component/forms/ShippingForm';
import SubmitForm from './component/forms/Submit';

const App = () => {
  const [activePage, setActivePage] = useState('');
  const [formData, setFormData] = useState({
    electricity: { electricity_value: '', country: '' },
    vehicle: { distance_unit: '', distance_value: '' },
    fuel: { fuel_source_type: '', fuel_source_value: '' },
    shipping: { weight_value: '', weight_unit: '', distance_value: '', distance_unit: '', transport_method: '' },
  });

  const renderContent = () => {
    switch (activePage) {
      case 'electricity':
        return <ElectricityForm
          data={formData.electricity}
          updateData={(newData) => setFormData({ ...formData, electricity: newData })}
          setActivePage={setActivePage} />;
      case 'vehicle':
        return <VehicleForm
          data={formData.vehicle}
          updateData={(newData) => setFormData({ ...formData, vehicle: newData })}
          setActivePage={setActivePage} />;
      case 'fuel':
        return <FuelCombustionForm
          data={formData.fuel}
          updateData={(newData) => setFormData({ ...formData, fuel: newData })}
          setActivePage={setActivePage} />;
      case 'shipping':
        return <ShippingForm
          data={formData.shipping}
          updateData={(newData) => setFormData({ ...formData, shipping: newData })}
          setActivePage={setActivePage} />;
      case 'submit':
        return <SubmitForm data={formData} />;
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