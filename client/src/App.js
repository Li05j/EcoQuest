// App.js
import React, { useState } from 'react';
import Navbar from './component/Navbar';
import ElectricityForm from './component/ElectricityForm';
import ShippingForm from './component/ShippingForm';
import SubmitForm from './component/Submit';

const App = () => {
  const [activePage, setActivePage] = useState('');
  const [formData, setFormData] = useState({
    electricity: { electricity_value: '', country: '' },
    shipping: { weight_value: '', weight_unit: '', distance_value: '', distance_unit: '', transport_method: '' },
  });

  const renderContent = () => {
    switch (activePage) {
      case 'electricity':
        return <ElectricityForm
          data={formData.electricity}
          updateData={(newData) => setFormData({ ...formData, electricity: newData })}
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