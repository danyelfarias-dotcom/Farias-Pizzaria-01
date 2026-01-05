
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex flex-col items-center mb-8">
      <div className="w-32 h-32 rounded-full border-2 border-green-500 flex items-center justify-center bg-black overflow-hidden shadow-lg shadow-green-500/20">
        <div className="text-center">
          <span className="block text-2xl font-bold tracking-widest text-white">FARIAS</span>
          <span className="block text-[10px] uppercase tracking-[0.2em] text-green-500 font-light">Pizzaria</span>
        </div>
      </div>
      <h1 className="mt-4 text-xl font-semibold tracking-wide text-white">Farias Pizzaria</h1>
    </div>
  );
};

export default Logo;
