
import React from 'react';
import { Logo } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-dame-beige/30 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Logo />
        <a
          href={`https://wa.me/22967823234?text=${encodeURIComponent('Bonjour Dame Samoussa ! Je veux réserver un pack 🎉')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-dame-orange text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg shadow-dame-orange/20 cta-button"
        >
          💬 Réserver
        </a>
      </div>
    </header>
  );
};

export default Header;
