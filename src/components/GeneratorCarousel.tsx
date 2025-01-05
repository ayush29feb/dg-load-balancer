import React from 'react';
import GeneratorCard from './GeneratorCard';
import useGeneratorStore from '../store';

const GeneratorCarousel: React.FC = () => {
  const generators = useGeneratorStore((state) => state.generators);
  const addGenerator = useGeneratorStore((state) => state.addGenerator);

  return (
    <div className="flex flex-wrap justify-center">
      {generators.map((generator) => (
        <GeneratorCard key={generator.id} id={generator.id} />
      ))}
      <div
        onClick={addGenerator}
        className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-100 p-4 m-2 flex items-center justify-center cursor-pointer hover:bg-gray-200"
      >
        <span className="text-gray-600 text-xl font-semibold">+ Add Generator</span>
      </div>
    </div>
  );
};

export default GeneratorCarousel;
