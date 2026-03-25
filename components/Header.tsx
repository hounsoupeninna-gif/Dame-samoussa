
import React from 'react';
import { Logo } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="bg-white/95 backdrop-blur-sm border-b border-dame-beige/30">
        <div className="container mx-auto px-6 h-24 flex items-center justify-between">
          <Logo />
        </div>
      </div>
    </header>
  );
};

export default Header;
