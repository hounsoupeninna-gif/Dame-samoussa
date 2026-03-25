
import React from 'react';
import { Logo, WhatsAppIcon } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="bg-white/95 backdrop-blur-sm border-b border-dame-beige/30">
        <div className="container mx-auto px-6 h-24 flex items-center justify-between">
          <Logo />
          <a
            href={`https://wa.me/22967823234?text=${encodeURIComponent('Bonjour Dame Samoussa ! Je veux réserver un pack')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-dame-orange text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-dame-orange/20 hover:bg-dame-orange-light smooth-transition"
          >
            <WhatsAppIcon className="w-4 h-4" /> Réserver
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
