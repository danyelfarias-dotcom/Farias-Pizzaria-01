
import React from 'react';
import { LOCATIONS } from '../constants';

interface LocationsViewProps {
  onBack: () => void;
}

const LocationsView: React.FC<LocationsViewProps> = ({ onBack }) => {
  return (
    <div className="px-6 py-10 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center space-x-3">
          <i className="fa-solid fa-location-dot text-green-500 text-2xl"></i>
          <h2 className="text-3xl font-light tracking-tighter uppercase border-b border-green-500 pb-2">Localização</h2>
        </div>
        <button 
          onClick={onBack}
          className="text-green-500 hover:text-green-400 text-sm font-semibold uppercase tracking-widest"
        >
          <i className="fa-solid fa-arrow-left mr-2"></i> Voltar
        </button>
      </div>

      <div className="space-y-12">
        {LOCATIONS.map((loc) => (
          <div key={loc.id} className="bg-zinc-900/30 p-8 rounded-2xl border border-zinc-800 hover:border-green-900/50 transition-colors group">
            <h3 className="text-2xl font-semibold text-white mb-6 uppercase tracking-wide group-hover:text-green-400 transition-colors">
              {loc.name}
            </h3>
            
            <div className="space-y-4 text-zinc-400">
              <div className="flex items-start space-x-4">
                <i className="fa-solid fa-house mt-1 text-green-500/70"></i>
                <div>
                  <p className="text-zinc-200">{loc.address}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <i className="fa-solid fa-globe text-green-500/70"></i>
                <div className="flex items-center space-x-2">
                  <span>CEP {loc.cep}</span>
                  <a 
                    href={loc.mapUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-500 text-xs underline decoration-green-900 underline-offset-4 hover:decoration-green-500"
                  >
                    [ver mapa]
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800">
              <p className="text-xs uppercase tracking-widest text-zinc-500 mb-2">Central de atendimento</p>
              <div className="flex items-center space-x-3 text-xl font-bold text-white hover:text-green-500 transition-colors cursor-pointer">
                <i className="fa-solid fa-phone"></i>
                <span>{loc.phone}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationsView;
