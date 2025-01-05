import React from 'react';
import useGeneratorStore from '../store';

const InputLoad: React.FC = () => {
  const load = useGeneratorStore((state) => state.load);
  const updateLoad = useGeneratorStore((state) => state.updateLoad);

  const handleLoadChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      updateLoad(value);
    }
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4 m-2">
      <h2 className="text-xl font-bold mb-4">Current Load</h2>
      <div className="mb-4">
        <label htmlFor="loadInput" className="block text-gray-700 text-sm font-semibold mb-2">
          Load (kVA):
        </label>
        <input
          id="loadInput"
          type="number"
          value={load}
          onChange={handleLoadChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <p className="text-gray-700 text-sm">Total Load: {load} kVA</p>
    </div>
  );
};

export default InputLoad;
