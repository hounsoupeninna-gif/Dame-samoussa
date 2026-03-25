
import React from 'react';
import { CheckIcon, WhatsAppIcon } from '../constants';

interface UpsellPageProps {
  onAccept: () => void;
  onDecline: () => void;
}

const UpsellPage: React.FC<UpsellPageProps> = ({ onAccept, onDecline }) => {
  return (
    <div className="pt-32 pb-20 bg-dame-white min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-title text-3xl md:text-5xl text-dame-brown mb-4 leading-tight">
            Vous recevez beaucoup de monde ?
          </h2>
          <p className="text-dame-brown/60 text-lg max-w-xl mx-auto">
            Découvrez le <strong className="text-dame-brown">Pack Événement</strong> — pensé pour les grandes célébrations jusqu'à 250 personnes.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-dame-beige/40 overflow-hidden">
          {/* Badge top */}
          <div className="bg-dame-brown px-8 py-4 flex items-center justify-between">
            <span className="text-white font-bold text-lg">Pack Événement</span>
            <span className="bg-dame-orange text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">Pour 250 personnes</span>
          </div>

          <div className="p-8 md:p-10 grid md:grid-cols-2 gap-10 items-center">
            {/* Ce que contient le pack */}
            <div>
              <p className="text-xs font-bold text-dame-orange uppercase tracking-widest mb-5">Ce que vous recevez :</p>
              <ul className="space-y-3 mb-8">
                {[
                  '50 Samoussas (choix viande/poulet/poisson)',
                  '50 Mini Pizzas gourmandes',
                  '50 Mini Friands croustillants',
                  '50 Nems croustillants',
                  '50 Croissants jambon',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-dame-brown/80 text-sm">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="bg-dame-beige/20 rounded-2xl p-4 border border-dame-beige/40">
                <p className="text-xs font-bold text-dame-brown uppercase tracking-wide mb-1">Livraison incluse</p>
                <p className="text-dame-brown/60 text-sm">Partout à Cotonou et environs, chaud et croustillant à l'arrivée.</p>
              </div>
            </div>

            {/* Prix + CTA */}
            <div className="text-center md:text-left">
              <p className="text-dame-brown/40 text-sm mb-1">Prix total</p>
              <p className="text-5xl font-bold text-dame-orange mb-1">77 250</p>
              <p className="text-dame-brown/50 font-semibold mb-8">F CFA</p>

              <button
                onClick={onAccept}
                className="w-full inline-flex items-center justify-center gap-3 bg-dame-orange text-white font-bold text-lg py-5 rounded-2xl shadow-xl shadow-dame-orange/30 hover:-translate-y-0.5 smooth-transition mb-4"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Oui, je prends le Pack Événement
              </button>

              <button
                onClick={onDecline}
                className="w-full inline-flex items-center justify-center gap-2 border-2 border-dame-brown/20 text-dame-brown/70 font-semibold text-sm py-4 rounded-2xl hover:border-dame-brown/50 hover:text-dame-brown smooth-transition"
              >
                ← Non merci, je veux le Pack Anniversaire à 19 900 F CFA
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default UpsellPage;
