import React, { useState } from 'react';

interface DropdownProps {
  onChange: (selectedOption: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ onChange }) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const dropdownStyle: React.CSSProperties = {
    border: '1px solid #ccc',
    borderRadius: '9px',
    textAlign: 'center',
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedOption(value);
    onChange(value); // Chama a função onChange passada como prop para atualizar o estado no componente pai.
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
