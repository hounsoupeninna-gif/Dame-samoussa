
import React from 'react';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dame-white font-body selection:bg-dame-orange/30 selection:text-dame-brown">
      <Header />

      <main>
        <LandingPage />
      </main>

      <footer className="bg-dame-brown text-dame-white py-16 mt-20">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12 border-b border-white/10 pb-12 mb-12">
          <div className="md:col-span-2">
            <h4 className="text-2xl font-title mb-6 italic">Dame Samoussa</h4>
            <p className="opacity-70 max-w-sm mb-6 leading-relaxed">
              L'excellence du snack africain pour vos événements les plus précieux.
              Parce que chaque fête mérite une saveur exceptionnelle.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-dame-orange transition-colors cursor-pointer">IG</div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-dame-orange transition-colors cursor-pointer">FB</div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-dame-orange transition-colors cursor-pointer">WA</div>
            </div>
          </div>
          <div>
            <h5 className="font-bold mb-6">Liens Rapides</h5>
            <ul className="space-y-4 text-sm opacity-70">
              <li className="hover:text-dame-orange transition-colors cursor-pointer">Nos Packs</li>
              <li className="hover:text-dame-orange transition-colors cursor-pointer">Traiteur Entreprise</li>
              <li className="hover:text-dame-orange transition-colors cursor-pointer">Avis Clients</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6">Contact</h5>
            <ul className="space-y-4 text-sm opacity-70">
              <li>📍 Cotonou, Bénin</li>
              <li>📞 +229 00 00 00 00</li>
              <li>✉️ hello@damesamoussa.com</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 text-center text-xs opacity-40">
          &copy; {new Date().getFullYear()} Dame Samoussa. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
};

export default App;
