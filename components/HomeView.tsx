
import React from 'react';
import Logo from './Logo';
import { ViewState } from '../types';

interface HomeViewProps {
  onNavigate: (view: ViewState) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const buttons: { label: string; onClick: () => void; icon: string }[] = [
    { label: 'Cardápio', onClick: () => onNavigate('menu'), icon: 'fa-utensils' },
    { label: 'Reservas', onClick: () => onNavigate('reservations'), icon: 'fa-calendar-check' },
    { label: 'Delivery', onClick: () => onNavigate('delivery'), icon: 'fa-motorcycle' },
    { label: 'Endereço', onClick: () => onNavigate('locations'), icon: 'fa-location-dot' },
  ];

  return (
    <div className="flex flex-col items-center px-4 max-w-md mx-auto py-10">
      <Logo />
      
      <div className="w-full space-y-4">
        {buttons.map((btn, idx) => (
          <button
            key={idx}
            onClick={btn.onClick}
            className="w-full bg-zinc-900 border border-green-900/50 hover:border-green-500 hover:bg-zinc-800 text-gray-200 py-4 px-6 rounded-full transition-all duration-300 flex items-center justify-between group"
          >
            <i className={`fa-solid ${btn.icon} text-green-500 group-hover:scale-110 transition-transform`}></i>
            <span className="text-sm font-medium tracking-wide uppercase">{btn.label}</span>
            <div className="w-4"></div> {/* spacer */}
          </button>
        ))}
      </div>

      <div className="mt-12 text-center text-zinc-500 text-xs uppercase tracking-widest">
        Desde 1990 • Qualidade e Tradição
      </div>
    </div>
  );
};

export default HomeView;
