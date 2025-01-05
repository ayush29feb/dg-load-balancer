import React from 'react';
import useGeneratorStore from '../store';

type GeneratorCardProps = {
  id: number;
};

const GeneratorCard: React.FC<GeneratorCardProps> = ({ id }) => {
  const generator = useGeneratorStore((state) =>
    state.generators.find((gen) => gen.id === id)
  );
  const updateKVA = useGeneratorStore((state) => state.updateKVA);
  const deleteGenerator = useGeneratorStore((state) => state.deleteGenerator);

  if (!generator) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      updateKVA(id, value);
    }
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4 m-2 relative">
      <button
        onClick={() => deleteGenerator(id)}
        className="absolute top-2 right-2 text-red-500 hover:text-red-700"
      >
        &times;
      </button>
      <h2 className="text-xl font-bold mb-4">{generator.name}</h2>
      <div className="mb-4">
        <label htmlFor="kvaInput" className="block text-gray-700 text-sm font-semibold mb-2">
          KVA Value:
        </label>
        <input
          id="kvaInput"
          type="number"
          value={generator.kva}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <p className="text-gray-700 text-sm">Current KVA: {generator.kva} kVA</p>
    </div>
  );
};

export default GeneratorCard;
