
import React, { useState } from 'react';
import { MENU_ITEMS, PIZZAS_QUEIJOS } from '../constants';

interface MenuViewProps {
  onBack: () => void;
}

const MenuView: React.FC<MenuViewProps> = ({ onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleBack = () => {
    if (selectedCategory) {
      setSelectedCategory(null);
    } else {
      onBack();
    }
  };

  if (selectedCategory === 'pizzas') {
    return (
      <div className="px-4 py-10 max-w-4xl mx-auto animate-fade-in">
        <div className="flex items-center justify-between mb-8 border-b border-zinc-800 pb-4">
          <h2 className="text-3xl font-light tracking-widest uppercase text-white">SABORES</h2>
          <button 
            onClick={handleBack}
            className="text-green-500 hover:text-green-400 text-sm font-semibold uppercase tracking-widest"
          >
            <i className="fa-solid fa-arrow-left mr-2"></i> Voltar
          </button>
        </div>

        <div className="space-y-4">
          {PIZZAS_QUEIJOS.map((pizza) => (
            <div key={pizza.id} className="bg-white rounded-sm border border-zinc-200 p-4 flex gap-4 hover:shadow-lg transition-shadow duration-300">
              <div className="flex-1">
                <h3 className="text-lg font-medium text-black mb-1">
                  {pizza.name} {pizza.isVegetarian && <span className="text-zinc-500 font-normal text-sm">(vegetariana)</span>}
                </h3>
                <p className="text-sm text-zinc-700 leading-snug mb-2">{pizza.descriptionPt}</p>
                <p className="text-xs italic text-zinc-500 leading-snug mb-3">{pizza.descriptionEn}</p>
                <div className="flex items-center gap-4 text-sm font-bold text-black">
                  <span>G R${pizza.priceG}</span>
                  <span>P R${pizza.priceP}</span>
                </div>
              </div>
              <div className="w-24 h-20 sm:w-32 sm:h-24 flex-shrink-0 relative overflow-hidden rounded shadow-inner">
                <img 
                  src={pizza.image} 
                  alt={pizza.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-1 right-1 bg-white/80 p-0.5 rounded shadow">
                   <i className="fa-solid fa-magnifying-glass-plus text-[10px] text-zinc-600"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="px-6 py-10 animate-fade-in">
      <div className="flex items-center justify-between mb-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-light tracking-tighter uppercase border-b border-green-500 pb-2">Cardápio</h2>
        <button 
          onClick={onBack}
          className="text-green-500 hover:text-green-400 text-sm font-semibold uppercase tracking-widest"
        >
          <i className="fa-solid fa-arrow-left mr-2"></i> Voltar
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {MENU_ITEMS.map((item) => (
          <div 
            key={item.id} 
            onClick={() => item.id === 'pizzas' && setSelectedCategory('pizzas')}
            className="group cursor-pointer overflow-hidden rounded-lg bg-zinc-900 border border-zinc-800 hover:border-green-500/50 transition-all duration-300"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <h3 className="absolute bottom-4 left-4 text-lg font-medium text-white group-hover:text-green-400 transition-colors">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-10 text-center text-zinc-600 text-xs">
        * Clique em "Pizzas" para ver os sabores de referência das imagens.
      </div>
    </div>
  );
};

export default MenuView;
