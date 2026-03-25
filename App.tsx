
import React, { useState } from 'react';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import LandingPageV2 from './pages/LandingPageV2';
import OrderPage from './pages/OrderPage';
import ThanksPage from './pages/ThanksPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import { InstagramIcon, FacebookIcon, WhatsAppIcon, MapPinIcon, PhoneIcon, MailIcon } from './constants';
import { FunnelStep, OrderDetails, UserData } from './types';

const isV2 = window.location.pathname === '/v2';

const App: React.FC = () => {
  const [step, setStep] = useState<FunnelStep>('landing');
  const [orderDetails, setOrderDetails] = useState<OrderDetails>({ packName: 'Pack Anniversaire', total: 24000 });
  const [userData, setUserData] = useState<UserData | null>(null);

  const handleSelectPack = (packName: string, total: number) => {
    setOrderDetails({ packName, total });
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setStep('order');
  };

  const handleOrderSubmit = (data: UserData) => {
    setUserData(data);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setStep('thanks');
  };

  const handleRestart = () => {
    setStep('landing');
    setOrderDetails({ packName: 'Pack Anniversaire', total: 24000 });
    setUserData(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isV2) {
    return (
      <div className="min-h-screen font-body">
        <Header />
        <main><LandingPageV2 /></main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dame-white font-body selection:bg-dame-orange/30 selection:text-dame-brown">
      <Header />

      <main>
        {step === 'landing' && (
          <LandingPage onSelectPack={handleSelectPack} />
        )}
        {step === 'order' && (
          <OrderPage
            orderDetails={orderDetails}
            onSubmit={handleOrderSubmit}
            onBack={() => setStep('landing')}
            onShowPrivacy={() => { setStep('privacy'); window.scrollTo({ top: 0 }); }}
          />
        )}
        {step === 'thanks' && userData && (
          <ThanksPage userData={userData} onRestart={handleRestart} />
        )}
        {step === 'privacy' && (
          <PrivacyPage onBack={() => setStep('landing')} />
        )}
        {step === 'terms' && (
          <TermsPage onBack={() => setStep('landing')} />
        )}
      </main>

      {(step === 'landing' || step === 'privacy' || step === 'terms') && (
        <footer className="bg-dame-brown text-white">
          <div className="container mx-auto px-6 py-16 grid md:grid-cols-3 gap-12 border-b border-white/10">
            {/* Logo + tagline */}
            <div className="md:col-span-1">
              <img src="/logo.png" alt="Dame Samoussa" className="h-20 w-auto object-contain mb-4" />
              <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                L'excellence du snack africain pour vos événements les plus précieux.
              </p>
              <div className="flex gap-3 mt-6">
                <a href="#" aria-label="Instagram" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-dame-orange smooth-transition">
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a href="#" aria-label="Facebook" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-dame-orange smooth-transition">
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a href="https://wa.me/22967823234" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-dame-orange smooth-transition">
                  <WhatsAppIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Liens */}
            <div>
              <h5 className="font-bold text-sm uppercase tracking-widest text-white/40 mb-6">Navigation</h5>
              <ul className="space-y-3 text-sm text-white/60">
                <li><a href="#packs" className="hover:text-dame-orange smooth-transition">Nos formules</a></li>
                <li><a href="#" className="hover:text-dame-orange smooth-transition">Traiteur entreprise</a></li>
                <li><a href="#" className="hover:text-dame-orange smooth-transition">Avis clients</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h5 className="font-bold text-sm uppercase tracking-widest text-white/40 mb-6">Contact</h5>
              <ul className="space-y-4 text-sm text-white/60">
                <li className="flex items-center gap-3">
                  <MapPinIcon className="w-4 h-4 text-dame-orange flex-shrink-0" /> Cotonou, Bénin
                </li>
                <li className="flex items-center gap-3">
                  <WhatsAppIcon className="w-4 h-4 text-dame-orange flex-shrink-0" />
                  <a href="https://wa.me/22967823234" target="_blank" rel="noopener noreferrer" className="hover:text-dame-orange smooth-transition">+229 67 82 32 34</a>
                </li>
                <li className="flex items-center gap-3">
                  <PhoneIcon className="w-4 h-4 text-dame-orange flex-shrink-0" />
                  <a href="tel:+2290167823234" className="hover:text-dame-orange smooth-transition">+229 01 67 82 32 34</a>
                </li>
                <li className="flex items-center gap-3">
                  <MailIcon className="w-4 h-4 text-dame-orange flex-shrink-0" />
                  <a href="mailto:bonjour@damesamoussa.com" className="hover:text-dame-orange smooth-transition">bonjour@damesamoussa.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="container mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/30">
            <span>© {new Date().getFullYear()} Dame Samoussa — Tous droits réservés</span>
            <div className="flex gap-5">
              <button onClick={() => { setStep('privacy'); window.scrollTo({ top: 0 }); }} className="hover:text-dame-orange smooth-transition">
                Politique de confidentialité
              </button>
              <button onClick={() => { setStep('terms'); window.scrollTo({ top: 0 }); }} className="hover:text-dame-orange smooth-transition">
                CGV
              </button>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default App;
