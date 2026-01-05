
import React, { useState } from 'react';
import Logo from './Logo';

interface ReservationsViewProps {
  onBack: () => void;
}

const ReservationsView: React.FC<ReservationsViewProps> = ({ onBack }) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [showRulesModal, setShowRulesModal] = useState(false);
  
  // Form state for summary display
  const [reservationData, setReservationData] = useState({
    people: '',
    date: '',
    time: ''
  });

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    setReservationData({
      people: formData.get('people') as string,
      date: formData.get('date') as string,
      time: formData.get('time') as string,
    });
    setStep(2);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Reserva enviada com sucesso!");
    onBack();
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
    } else {
      onBack();
    }
  };

  // Helper to format date
  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    const [year, month, day] = dateStr.split('-');
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-start py-8 px-4 animate-fade-in relative">
      <style>{`
        input[type="date"]::-webkit-calendar-picker-indicator {
          cursor: pointer;
          filter: brightness(0);
        }
      `}</style>
      
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden text-black">
        {/* Step 1 Header */}
        {step === 1 && (
          <div className="p-6 border-b border-zinc-100 flex justify-between items-center bg-zinc-50/50">
            <h2 className="text-xl font-bold text-zinc-800">Nova Reserva</h2>
            <button onClick={onBack} className="text-zinc-400 hover:text-black transition-colors p-2">
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>
          </div>
        )}

        <div className={step === 2 ? "p-0" : "p-8"}>
          {step === 1 ? (
            /* Passo 1: Detalhes da Reserva */
            <form className="space-y-8" onSubmit={handleNext}>
              <div>
                <label className="block text-base font-medium text-zinc-700 mb-3">
                  <span className="text-red-500 mr-1">*</span>Pessoas
                </label>
                <div className="relative">
                  <select 
                    required
                    name="people"
                    className="w-full border border-zinc-200 rounded-lg py-3.5 px-4 appearance-none bg-white text-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all cursor-pointer"
                    defaultValue={reservationData.people || ""}
                  >
                    <option value="" disabled>Escolha a quantidade de pessoas</option>
                    {[...Array(12)].map((_, i) => (
                      <option key={i} value={i + 1} className="text-black">{i + 1} {i === 0 ? 'Pessoa' : 'Pessoas'}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                    <i className="fa-solid fa-chevron-down text-zinc-400 text-sm"></i>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-base font-medium text-zinc-700 mb-3">
                  <span className="text-red-500 mr-1">*</span>Data
                </label>
                <div className="relative">
                  <input 
                    required
                    name="date"
                    type="date" 
                    defaultValue={reservationData.date}
                    className="w-full bg-white border border-zinc-200 rounded-lg py-3.5 px-4 text-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all cursor-pointer"
                  />
                </div>
              </div>

              <div>
                <label className="block text-base font-medium text-zinc-700 mb-3">
                  <span className="text-red-500 mr-1">*</span>Horário
                </label>
                <div className="relative">
                  <select 
                    required
                    name="time"
                    className="w-full border border-zinc-200 rounded-lg py-3.5 px-4 appearance-none bg-white text-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all cursor-pointer"
                    defaultValue={reservationData.time || ""}
                  >
                    <option value="" disabled>Escolha o horário</option>
                    {['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00'].map(h => (
                      <option key={h} value={h} className="text-black">{h}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                    <i className="fa-solid fa-chevron-down text-zinc-400 text-sm"></i>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button 
                  type="submit"
                  className="w-full bg-[#f1434c] hover:bg-[#d93a42] text-white font-bold py-4 rounded-lg shadow-lg shadow-red-500/20 active:scale-[0.98] transition-all text-lg tracking-wide"
                >
                  Avançar
                </button>
              </div>
            </form>
          ) : (
            /* Passo 2: Dados Pessoais com Logo e Resumo com Imagem de Fundo */
            <div className="animate-fade-in">
              <div 
                className="relative p-6 border-b border-zinc-100 flex flex-col bg-cover bg-center min-h-[260px]"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1000")' }}
              >
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
                
                <div className="relative z-10 w-full flex justify-between items-start h-full flex-col">
                  {/* Top: Logo and Close */}
                  <div className="flex justify-between items-start w-full">
                    <div className="scale-[0.6] origin-top-left -ml-4 -mt-4 drop-shadow-lg">
                      <Logo />
                    </div>
                    <button onClick={onBack} className="text-white/70 hover:text-white transition-colors p-2 -mt-2 drop-shadow-lg">
                      <i className="fa-solid fa-xmark text-lg"></i>
                    </button>
                  </div>
                  
                  {/* Bottom: Info and Edit Button */}
                  <div className="mt-auto flex justify-between items-end w-full pb-2">
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold text-white/90 uppercase tracking-[0.2em]">Sua Reserva</p>
                      <p className="text-sm font-semibold text-white drop-shadow-md">
                        {reservationData.people} {parseInt(reservationData.people) === 1 ? 'pessoa' : 'pessoas'} • {formatDate(reservationData.date)} às {reservationData.time}
                      </p>
                    </div>
                    
                    {/* Edit Button - White box, black text, positioned right */}
                    <button 
                      onClick={() => setStep(1)}
                      className="bg-white px-6 py-2 rounded shadow-xl transition-all active:scale-95 group flex items-center"
                    >
                      <span className="text-[11px] font-extrabold text-black uppercase tracking-widest">Editar</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-bold text-zinc-800 mb-8">Seus dados</h3>
                <form className="space-y-6" onSubmit={handleFinalSubmit}>
                  <div>
                    <label className="block text-sm font-medium text-zinc-600 mb-2">
                      <span className="text-red-500 mr-1">*</span>Nome Completo
                    </label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-zinc-100 border border-zinc-200 rounded-md py-3 px-4 focus:outline-none focus:border-zinc-400 text-zinc-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-600 mb-2">
                      <span className="text-red-500 mr-1">*</span>E-mail
                    </label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-zinc-100 border border-zinc-200 rounded-md py-3 px-4 focus:outline-none focus:border-zinc-400 text-zinc-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-600 mb-2">
                      <span className="text-red-500 mr-1">*</span>Celular
                    </label>
                    <div className="flex border border-zinc-200 rounded-md overflow-hidden bg-zinc-100">
                      <div className="flex items-center px-3 bg-zinc-200 border-r border-zinc-300 cursor-pointer hover:bg-zinc-300 transition-colors">
                        <img src="https://flagcdn.com/w20/br.png" className="w-5 h-auto mr-2" alt="Brasil" />
                        <span className="text-zinc-700 text-sm font-medium">+55</span>
                        <i className="fa-solid fa-caret-down ml-2 text-[10px] text-zinc-500"></i>
                      </div>
                      <input 
                        required
                        type="tel" 
                        placeholder="(00) 00000-0000"
                        className="flex-1 py-3 px-4 focus:outline-none bg-transparent text-zinc-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-600 mb-2">Ocasião</label>
                    <div className="relative">
                      <select className="w-full bg-zinc-100 border border-zinc-200 rounded-md py-3 px-4 appearance-none text-zinc-500 focus:outline-none focus:border-zinc-400 cursor-pointer">
                        <option value="">Escolha a ocasião</option>
                        <option value="Aniversário">Aniversário</option>
                        <option value="Formatura">Formatura</option>
                        <option value="Jantar Romântico">Jantar Romântico</option>
                        <option value="Reunião de Negócios">Reunião de Negócios</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                        <i className="fa-solid fa-chevron-down text-zinc-400 text-[10px]"></i>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-600 mb-2">Data de nascimento</label>
                    <input 
                      type="date" 
                      className="w-full bg-zinc-100 border border-zinc-200 rounded-md py-3 px-4 focus:outline-none focus:border-zinc-400 text-zinc-400 font-medium cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-600 mb-2">Observação</label>
                    <textarea 
                      className="w-full bg-zinc-100 border border-zinc-200 rounded-md py-3 px-4 focus:outline-none focus:border-zinc-400 h-20 resize-none text-zinc-900"
                    />
                    <p className="text-[10px] text-zinc-400 mt-1">Essa solicitação está sujeita a disponibilidade do restaurante.</p>
                  </div>

                  {/* Card Sobre a Reserva */}
                  <div className="bg-white border border-zinc-100 rounded-xl p-6 mt-8 space-y-4">
                    <h3 className="text-lg font-bold text-zinc-800">Sobre a Reserva</h3>
                    
                    <div>
                      <p className="text-sm font-bold text-zinc-800 mb-1">Tolerância</p>
                      <p className="text-sm text-zinc-500">10 minutos</p>
                    </div>

                    <div>
                      <p className="text-sm font-bold text-zinc-800 mb-2">Regras e condições</p>
                      <p className="text-xs text-zinc-500 leading-relaxed mb-2 line-clamp-2">
                        De domingo a quinta-feira tolerância de 15 minutos de atraso para reservas, sexta e sábado não há tolerância, somente com antecedência ou no horári...
                      </p>
                      <div className="flex justify-end">
                        <button 
                          type="button" 
                          onClick={() => setShowRulesModal(true)}
                          className="border border-zinc-400 rounded px-3 py-1 text-[10px] flex items-center text-[#f1434c] font-medium hover:border-[#f1434c] transition-colors"
                        >
                          <span className="mr-1">+</span> Ver mais
                        </button>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-bold text-zinc-800 mb-1">Informações adicionais</p>
                      <p className="text-[11px] italic text-zinc-400">
                        Para mais informações, entre em contato com o restaurante.
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-zinc-100">
                    <p className="text-[10px] text-center text-zinc-500 mb-4 px-4 leading-tight">
                      Ao reservar, você também declara que aceita os <span className="text-[#f1434c] cursor-pointer">termos</span> e <span className="text-[#f1434c] cursor-pointer">políticas</span> do Get In e do restaurante.
                    </p>
                    <button 
                      type="submit"
                      className="w-full bg-[#f1434c] hover:bg-[#d93a42] text-white font-bold py-4 rounded-lg shadow-lg shadow-red-500/20 active:scale-[0.98] transition-all text-lg tracking-wide"
                    >
                      Reservar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <button 
        onClick={handleBack}
        className="mt-8 text-zinc-400 hover:text-white text-sm uppercase tracking-widest flex items-center transition-colors"
      >
        <i className="fa-solid fa-arrow-left mr-2"></i> {step === 1 ? 'Voltar para Home' : 'Voltar'}
      </button>

      {/* Regras e Condições Modal */}
      {showRulesModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowRulesModal(false)}
          ></div>
          
          <div className="relative w-full max-sm bg-white rounded-lg shadow-2xl animate-fade-in-up">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-zinc-700">Regras e condições</h3>
                <button 
                  onClick={() => setShowRulesModal(false)}
                  className="text-zinc-400 hover:text-zinc-600 transition-colors"
                >
                  <i className="fa-solid fa-xmark text-lg"></i>
                </button>
              </div>
              
              <div className="text-sm text-zinc-600 leading-relaxed mb-8">
                De domingo a quinta-feira tolerância de 15 minutos de atraso para reservas, sexta e sábado não há tolerância, somente com antecedência ou no horário agendado.
              </div>
              
              <div className="flex justify-end pt-4 border-t border-zinc-50">
                <button 
                  onClick={() => setShowRulesModal(false)}
                  className="bg-[#f1434c] hover:bg-[#d93a42] text-white px-8 py-2 rounded font-bold transition-all active:scale-95"
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservationsView;
