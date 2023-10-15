import React, { useEffect, useState } from "react";
import { PilotsCard } from "../components/PilotsCard";
import { getAllInfoCollectionRealTime, saveInfoCollection } from "@/firebase/functions/firestore";

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

  const [pilots, setPilots] = useState<any>([]);
  
  //é necessário usar o useEffect para que o componente seja renderizado novamente quando o estado for atualizado.
  useEffect(() => {
    getAllInfoCollectionRealTime('pilots', setPilots);
  }, [])


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
        <option value="Nenhum">Nenhum</option>
        {pilots.map((pilot: { ID: string, name: string }) => (
          <option key={pilot.ID} value={pilot.name}>
            {pilot.name}
          </option>
        ))}
        </select>

    </div>
  );
};

export default Dropdown;


//
//const [pilots, setPilot] = useState<string>('');
//const selectPilots = (pilots: string) => {
 //setPilot(pilots);

//  };