
import React from 'react';
import { CheckIcon } from '../constants';

interface UpsellPageProps {
  onAccept: () => void;
  onDecline: () => void;
}

const UpsellPage: React.FC<UpsellPageProps> = ({ onAccept, onDecline }) => {
  return (
    <div className="pt-32 pb-12 bg-dame-white min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-dame-orange/20">
          <div className="bg-dame-orange p-6 text-center text-white">
            <p className="uppercase tracking-widest text-sm font-bold mb-2">Attendez ! Une opportunité unique pour vous...</p>
            <h2 className="text-3xl md:text-4xl font-bold">Voulez-vous passer au niveau PLATINUM ?</h2>
          </div>
          
          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1530103043960-ef38714abb15?auto=format&fit=crop&q=80&w=600" 
                  className="rounded-2xl shadow-lg mb-6" 
                  alt="Premium Event" 
                />
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckIcon />
                    <span className="font-medium">Buffet géant pour 50 personnes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckIcon />
                    <span className="font-medium">Décoration Anniversaire VIP Complète</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckIcon />
                    <span className="font-medium">Gâteau personnalisé 3 étages</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckIcon />
                    <span className="font-medium">Serveur dédié pendant 4 heures</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col justify-center text-center md:text-left">
                <h3 className="text-2xl font-bold text-dame-brown mb-4">Pack Anniversaire Premium</h3>
                <p className="text-dame-brown/70 mb-8 leading-relaxed">
                  Ne vous souciez de rien. Nous transformons votre espace en une véritable salle de réception VIP. 
                  C'est l'option préférée pour celles qui veulent marquer les esprits.
                </p>
                
                <div className="mb-8">
                  <p className="text-dame-brown/50 line-through">Valeur : 250 000 F CFA</p>
                  <p className="text-4xl font-bold text-dame-orange">175 000 F CFA</p>
                  <p className="text-xs text-dame-orange font-bold uppercase mt-1">Économisez 75 000 F CFA aujourd'hui</p>
                </div>
                
                <button 
                  onClick={onAccept}
                  className="bg-dame-orange text-white py-5 rounded-2xl font-bold text-xl shadow-lg shadow-dame-orange/40 hover:scale-105 transition-all mb-4"
                >
                  OUI ! Je passe au Pack Premium
                </button>
                
                <button 
                  onClick={onDecline}
                  className="text-dame-brown/40 font-medium hover:text-dame-brown transition-colors underline text-sm"
                >
                  Non merci, je reste sur mon Pack VIP 8 personnes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpsellPage;
