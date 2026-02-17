
import React from 'react';

export const COLORS = {
  primary: '#E66A1A',
  secondary: '#F28C28',
  dark: '#4A1F0F',
  light: '#F3D6A4',
  white: '#FAF7F2',
};

export const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="w-10 h-10 bg-dame-orange rounded-full flex items-center justify-center text-white font-bold text-xl italic border-2 border-dame-brown">
      DS
    </div>
    <span className="font-title text-2xl font-bold tracking-tight text-dame-brown">
      Dame <span className="text-dame-orange">Samoussa</span>
    </span>
  </div>
);

export const CheckIcon = () => (
  <svg className="w-5 h-5 text-dame-orange" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);
