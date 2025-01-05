// App.tsx
import React from 'react';
import GeneratorCarousel from './components/GeneratorCarousel';
import InputLoad from './components/InputLoad';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Generator Load Balancer</h1>
      <div className="flex flex-col items-center space-y-6">
        <InputLoad />
        <GeneratorCarousel />
      </div>
    </div>
  );
};

export default App;
