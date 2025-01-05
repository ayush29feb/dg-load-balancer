// GeneratorCarousel.tsx
import React, { useState } from 'react';
import GeneratorCard from './GeneratorCard';

const GeneratorCarousel: React.FC = () => {
  const [generators, setGenerators] = useState<{ id: number; name: string; kva: number }[]>([]);
  const [nextId, setNextId] = useState(1);

  const addGenerator = () => {
    setGenerators([
      ...generators,
      { id: nextId, name: `Generator ${nextId}`, kva: 0 },
    ]);
    setNextId(nextId + 1);
  };

  const deleteGenerator = (id: number) => {
    setGenerators(generators.filter((generator) => generator.id !== id));
  };

  return (
    <div className="flex flex-wrap justify-center">
      {generators.map((generator) => (
        <GeneratorCard
          key={generator.id}
          name={generator.name}
          initialKVA={generator.kva}
          onDelete={() => deleteGenerator(generator.id)}
        />
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
