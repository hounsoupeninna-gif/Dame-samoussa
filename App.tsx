
import React from 'react';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import LandingPageV2 from './pages/LandingPageV2';
import { InstagramIcon, FacebookIcon, WhatsAppIcon, MapPinIcon, PhoneIcon, MailIcon } from './constants';

const isV2 = window.location.pathname === '/v2';

const App: React.FC = () => {
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
        <LandingPage />
      </main>

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
                <a href="mailto:adagbenon.fifame@gmail.com" className="hover:text-dame-orange smooth-transition">adagbenon.fifame@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-6 py-5 text-center text-xs text-white/30">
          © {new Date().getFullYear()} Dame Samoussa — Tous droits réservés
        </div>
      </footer>
    </div>
  );
};

export default App;
