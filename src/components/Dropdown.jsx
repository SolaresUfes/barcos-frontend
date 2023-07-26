import React, { useState } from 'react';

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const dropdownStyle = {
    border: '1px solid #ccc', 
    borderRadius: '9px',
    textAlign: 'center',

};

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <select
        id="dropdown"
        value={selectedOption}
        onChange={handleChange}
        style={dropdownStyle} 
      >
        <option value="">-- Escolha o Piloto --</option>
        <option value="Davi Agatti">Davi Agatti</option>
        <option value="Vitor Pizzol">Vitor Pizzol</option>
        <option value="Pedro Sossai">Pedro Sossai</option>
        <option value="Outro">Outro</option>
      </select>
    </div>
  );
};

export default Dropdown;
