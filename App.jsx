import React, { useState } from 'react';

const ComponentSelector = ({ name, options, selectedOption, onSelect }) => {
  return (
    <div>
      <h3>{name}</h3>
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onSelect(option)}
          style={{ 
            backgroundColor: selectedOption?.name === option.name ? 'lightgreen' : 'lightgrey',
            margin: '5px',
            padding: '10px',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          {option.name} - {option.price} HUF
        </button>
      ))}
    </div>
  );
};

export const App = () => {
  const [processor, setProcessor] = useState(null);
  const [memory, setMemory] = useState(null);
  const [motherboard, setMotherboard] = useState(null);
  const [powerSupply, setPowerSupply] = useState(null);
  const [ssd, setSSD] = useState(null);
  const [gpu, setGPU] = useState(null);

  const processors = [
    { name: 'Intel i5', price: 50000 },
    { name: 'Intel i7', price: 75000 },
    { name: 'AMD Ryzen 5', price: 60000 },
  ];

  const memories = [
    { name: '8GB RAM', price: 12000 },
    { name: '16GB RAM', price: 25000 },
    { name: '32GB RAM', price: 45000 },
  ];

  const motherboards = [
    { name: 'ASUS PRIME B550M', price: 40000 },
    { name: 'MSI B650 TOMAHAWK', price: 65000 },
    { name: 'Gigabyte Z790 AORUS ELITE', price: 95000 },
  ];

  const powerSupplies = [
    { name: 'Corsair RM750x 750W', price: 45000 },
    { name: 'Be Quiet! Pure Power 11 600W', price: 38000 },
    { name: 'Seasonic Focus GX-650', price: 42000 },
  ];

  const ssds = [
    { name: 'Samsung 970 EVO Plus 1TB', price: 38000 },
    { name: 'WD Black SN850X 2TB', price: 70000 },
    { name: 'Crucial P3 Plus 1TB', price: 30000 },
  ];

  const gpus = [
    { name: 'NVIDIA RTX 4060 Ti', price: 180000 },
    { name: 'AMD RX 7800 XT', price: 220000 },
    { name: 'NVIDIA RTX 4070 SUPER', price: 270000 },
  ];

  const totalPrice =
    (processor?.price || 0) +
    (memory?.price || 0) +
    (motherboard?.price || 0) +
    (powerSupply?.price || 0) +
    (ssd?.price || 0) +
    (gpu?.price || 0);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h2>💻 Számítógép összeszerelő app</h2>

      <ComponentSelector
        name="Processzor"
        options={processors}
        selectedOption={processor}
        onSelect={setProcessor}
      />

      <ComponentSelector
        name="Memória"
        options={memories}
        selectedOption={memory}
        onSelect={setMemory}
      />

      <ComponentSelector
        name="Alaplap"
        options={motherboards}
        selectedOption={motherboard}
        onSelect={setMotherboard}
      />

      <ComponentSelector
        name="Tápegység"
        options={powerSupplies}
        selectedOption={powerSupply}
        onSelect={setPowerSupply}
      />

      <ComponentSelector
        name="SSD"
        options={ssds}
        selectedOption={ssd}
        onSelect={setSSD}
      />

      <ComponentSelector
        name="Videókártya (GPU)"
        options={gpus}
        selectedOption={gpu}
        onSelect={setGPU}
      />
      <h3>Teljes ár: {totalPrice} HUF</h3>
    </div>
  );
};