
import React from 'react';
import { CheckIcon } from '../constants';

interface DownsellPageProps {
  onAccept: () => void;
  onDecline: () => void;
}

const DownsellPage: React.FC<DownsellPageProps> = ({ onAccept, onDecline }) => {
  return (
    <div className="pt-32 pb-12 bg-dame-white min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-dame-beige animate-scaleIn">
          <div className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-dame-brown mb-4 animate-fadeIn">Besoin d'un petit extra sans vous ruiner ?</h2>
            <p className="text-lg text-dame-brown/70 mb-10">
              Complétez votre fête avec notre <strong>Plateau Découverte</strong>. Un assortiment de 20 pièces supplémentaires pour être sûr que personne ne manque de rien.
            </p>
            
            <div className="bg-dame-beige/10 rounded-2xl p-6 mb-10 inline-block text-left border border-dame-beige/30">
              <div className="flex items-center gap-4 mb-4">
                <img src="https://picsum.photos/seed/tray/200/200" className="w-20 h-20 rounded-xl object-cover" alt="Plateau" />
                <div>
                  <h4 className="font-bold text-dame-brown">Plateau Snack Plus</h4>
                  <p className="text-sm text-dame-brown/60">20 pièces mixtes (Samoussas & Nems)</p>
                </div>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-dame-beige">
                <span className="font-bold text-dame-orange">Seulement +5 000 F CFA</span>
                <span className="text-xs text-dame-brown/50 line-through">Valeur 8 500 F CFA</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-4 max-w-sm mx-auto">
              <button 
                onClick={onAccept}
                className="bg-dame-brown text-white py-4 rounded-xl font-bold text-lg shadow-xl hover:scale-105 transition-all"
              >
                Oui, j'ajoute ce plateau !
              </button>
              <button 
                onClick={onDecline}
                className="text-dame-brown/40 font-medium hover:text-dame-brown transition-colors text-sm"
              >
                Non, finaliser ma commande actuelle
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownsellPage;
