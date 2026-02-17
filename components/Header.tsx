
import React from 'react';
import { Logo } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-dame-beige/30 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex gap-6 text-sm font-semibold text-dame-brown uppercase tracking-wider">
          <span className="cursor-pointer hover:text-dame-orange transition-colors">Accueil</span>
          <span className="cursor-pointer hover:text-dame-orange transition-colors">Notre Pack VIP</span>
          <span className="cursor-pointer hover:text-dame-orange transition-colors">Avis Clients</span>
        </div>
        <button className="bg-dame-orange text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg shadow-dame-orange/20 cta-button">
          Réserver
        </button>
      </div>
    </header>
  );
};

export default Header;
