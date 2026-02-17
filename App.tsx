
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import UpsellPage from './pages/UpsellPage';
import DownsellPage from './pages/DownsellPage';
import OrderPage from './pages/OrderPage';
import ThanksPage from './pages/ThanksPage';
import AutomationView from './pages/AutomationView';
import { FunnelStep, OrderDetails, UserData } from './types';

const App: React.FC = () => {
  const [step, setStep] = useState<FunnelStep>('landing');
  const [orderDetails, setOrderDetails] = useState<OrderDetails>({
    basePack: true,
    premiumPack: false,
    snackTray: false,
    total: 23000
  });
  const [userData, setUserData] = useState<UserData | null>(null);

  // Scroll to top on step change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  const goToUpsell = () => setStep('upsell');
  
  const handleUpsellAccept = () => {
    setOrderDetails(prev => ({
      ...prev,
      premiumPack: true,
      basePack: false, // Premium replaces VIP
      total: 175000
    }));
    setStep('order');
  };

  const handleUpsellDecline = () => {
    setStep('downsell');
  };

  const handleDownsellAccept = () => {
    setOrderDetails(prev => ({
      ...prev,
      snackTray: true,
      total: prev.total + 5000
    }));
    setStep('order');
  };

  const handleDownsellDecline = () => {
    setStep('order');
  };

  const handleOrderConfirm = (data: any) => {
    setUserData(data);
    setStep('thanks');
  };

  return (
    <div className="min-h-screen bg-dame-white font-body selection:bg-dame-orange/30 selection:text-dame-brown">
      <Header />
      
      <main>
        {step === 'landing' && <LandingPage onNext={goToUpsell} />}
        {step === 'upsell' && <UpsellPage onAccept={handleUpsellAccept} onDecline={handleUpsellDecline} />}
        {step === 'downsell' && <DownsellPage onAccept={handleDownsellAccept} onDecline={handleDownsellDecline} />}
        {step === 'order' && <OrderPage orderDetails={orderDetails} onConfirm={handleOrderConfirm} />}
        {step === 'thanks' && <ThanksPage userData={userData} />}
        {step === 'automation' && <AutomationView />}
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
              <li className="hover:text-dame-orange transition-colors cursor-pointer" onClick={() => setStep('automation')}>Automation Marketing (Admin)</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6">Contact</h5>
            <ul className="space-y-4 text-sm opacity-70">
              <li>📍 Plateau, Dakar, Sénégal</li>
              <li>📞 +221 77 000 00 00</li>
              <li>✉️ hello@damesamoussa.com</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 text-center text-xs opacity-40">
          &copy; {new Date().getFullYear()} Dame Samoussa. Tous droits réservés. Design Premium by Expert Funnel.
        </div>
      </footer>

      {/* Sticky Mobile CTA on Landing */}
      {step === 'landing' && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-dame-beige z-40">
          <button 
            onClick={goToUpsell}
            className="w-full bg-dame-orange text-white py-4 rounded-xl font-bold shadow-lg shadow-dame-orange/30 active:scale-95 transition-all"
          >
            Réserver mon Pack VIP - 23 000 F
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
