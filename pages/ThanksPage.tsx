
import React from 'react';
import { Logo } from '../constants';

const ThanksPage: React.FC<{ userData: any }> = ({ userData }) => {
  return (
    <div className="pt-32 pb-12 flex items-center justify-center min-h-screen bg-dame-white">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <div className="bg-white p-12 rounded-[3rem] shadow-2xl border-4 border-dame-beige/20 relative">
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-dame-orange rounded-full flex items-center justify-center text-white shadow-xl border-4 border-white">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-dame-brown mb-6 mt-8">C'est Officiel, {userData.name} !</h1>
          <p className="text-2xl text-dame-orange font-title italic mb-8">Vous êtes maintenant une Cliente VIP Dame Samoussa.</p>
          
          <div className="bg-dame-beige/10 p-6 rounded-2xl mb-8 text-left space-y-4">
            <p className="font-semibold text-dame-brown">Et maintenant ?</p>
            <ul className="space-y-3 text-sm text-dame-brown/70">
              <li className="flex gap-3">
                <span className="text-dame-orange">✔</span>
                <span>Un de nos conseillers va vous contacter sur WhatsApp dans les 15 minutes pour confirmer la date.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-dame-orange">✔</span>
                <span>Vous recevrez une photo de la préparation de vos snacks le jour J.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-dame-orange">✔</span>
                <span>Livraison garantie à votre adresse le <strong>{userData.birthday}</strong>.</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-dame-brown text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all">
              Découvrir nos offres Premium
            </button>
            <button className="border-2 border-dame-orange text-dame-orange px-8 py-4 rounded-xl font-bold hover:bg-dame-orange hover:text-white transition-all">
              Nous suivre sur Instagram
            </button>
          </div>

          <div className="mt-12 pt-8 border-t border-dame-beige">
            <Logo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThanksPage;
