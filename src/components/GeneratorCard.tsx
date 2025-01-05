import React, { useState } from 'react';

type GeneratorCardProps = {
  name: string;
  initialKVA: number;
  onDelete?: () => void;
};

const GeneratorCard: React.FC<GeneratorCardProps> = ({ name, initialKVA, onDelete }) => {
  const [kva, setKVA] = useState(initialKVA);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setKVA(value);
    }
  };
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4 m-2 relative">
      {onDelete && (
        <button
          onClick={onDelete}
          className="absolute top-2 right-2 text-red-500 hover:text-red-700"
        >
          &times;
        </button>
      )}
      <h2 className="text-xl font-bold mb-4">{name}</h2>
      <div className="mb-4">
        <label htmlFor="kvaInput" className="block text-gray-700 text-sm font-semibold mb-2">
          KVA Value:
        </label>
        <input
          id="kvaInput"
          type="number"
          value={kva}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <p className="text-gray-700 text-sm">Current KVA: {kva} kVA</p>
    </div>
  );
};

export default GeneratorCard;
