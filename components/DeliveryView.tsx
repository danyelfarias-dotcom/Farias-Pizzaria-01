
import React, { useState } from 'react';

interface DeliveryViewProps {
  onBack: () => void;
}

const DeliveryView: React.FC<DeliveryViewProps> = ({ onBack }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      alert("Pedido recebido! Preparando sua Farias Pizza.");
      onBack();
    }, 1500);
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-10 animate-fade-in">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
        {/* Decorative corner light */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-500/10 rounded-full blur-3xl"></div>
        
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white tracking-tight">FAZER PEDIDO</h2>
          <i className="fa-solid fa-motorcycle text-green-500 text-xl"></i>
        </div>

        {submitted ? (
          <div className="py-20 text-center space-y-4 animate-pulse">
            <i className="fa-solid fa-circle-check text-green-500 text-6xl mb-4"></i>
            <p className="text-lg font-medium">Enviando pedido...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Nome</label>
              <div className="relative">
                <i className="fa-solid fa-user absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 text-sm"></i>
                <input 
                  required
                  type="text" 
                  placeholder="Seu nome completo"
                  className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl py-3.5 pl-11 pr-4 text-white focus:outline-none focus:border-green-500 transition-colors placeholder:text-zinc-600"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Endereço</label>
              <div className="relative">
                <i className="fa-solid fa-location-dot absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 text-sm"></i>
                <input 
                  required
                  type="text" 
                  placeholder="Rua, número, bairro"
                  className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl py-3.5 pl-11 pr-4 text-white focus:outline-none focus:border-green-500 transition-colors placeholder:text-zinc-600"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Telefone</label>
              <div className="relative">
                <i className="fa-solid fa-phone absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 text-sm"></i>
                <input 
                  required
                  type="tel" 
                  placeholder="(00) 00000-0000"
                  className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl py-3.5 pl-11 pr-4 text-white focus:outline-none focus:border-green-500 transition-colors placeholder:text-zinc-600"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Pizza</label>
              <div className="relative">
                <i className="fa-solid fa-pizza-slice absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 text-sm"></i>
                <input 
                  required
                  type="text" 
                  placeholder="Ex: Margherita, Quatro Queijos..."
                  className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl py-3.5 pl-11 pr-4 text-white focus:outline-none focus:border-green-500 transition-colors placeholder:text-zinc-600"
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-900/20 active:scale-[0.98] transition-all text-sm uppercase tracking-widest mt-4"
            >
              Confirmar Pedido
            </button>
          </form>
        )}
      </div>

      <button 
        onClick={onBack}
        className="mt-8 text-zinc-500 hover:text-white text-xs uppercase tracking-[0.2em] flex items-center transition-colors group"
      >
        <i className="fa-solid fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i> Voltar para Home
      </button>
    </div>
  );
};

export default DeliveryView;
