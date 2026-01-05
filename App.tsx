
import React, { useState } from 'react';
import HomeView from './components/HomeView';
import MenuView from './components/MenuView';
import LocationsView from './components/LocationsView';
import ReservationsView from './components/ReservationsView';
import DeliveryView from './components/DeliveryView';
import { ViewState } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');

  const renderView = () => {
    switch (view) {
      case 'menu':
        return <MenuView onBack={() => setView('home')} />;
      case 'locations':
        return <LocationsView onBack={() => setView('home')} />;
      case 'reservations':
        return <ReservationsView onBack={() => setView('home')} />;
      case 'delivery':
        return <DeliveryView onBack={() => setView('home')} />;
      default:
        return <HomeView onNavigate={setView} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-green-500 selection:text-black">
      {/* Background decoration */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-green-900/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-green-900/10 rounded-full blur-[120px]"></div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto">
        {renderView()}
      </main>

      {/* Footer Nav for quick access (visible on scroll) */}
      <footer className="py-8 border-t border-zinc-900 mt-10">
        <div className="flex flex-col items-center space-y-4 opacity-60 hover:opacity-100 transition-opacity">
          <div className="flex space-x-6 text-zinc-400">
            <a href="#" className="hover:text-green-500 transition-colors"><i className="fa-brands fa-instagram text-xl"></i></a>
            <a href="#" className="hover:text-green-500 transition-colors"><i className="fa-brands fa-facebook text-xl"></i></a>
            <a href="#" className="hover:text-green-500 transition-colors"><i className="fa-brands fa-whatsapp text-xl"></i></a>
          </div>
          <p className="text-[10px] uppercase tracking-widest text-zinc-600">© 2024 Pizzaria Farias. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
