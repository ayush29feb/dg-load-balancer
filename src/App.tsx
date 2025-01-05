import React from 'react';
import GeneratorCarousel from './components/GeneratorCarousel';

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <GeneratorCarousel />
    </div>
  );
};

export default App;
