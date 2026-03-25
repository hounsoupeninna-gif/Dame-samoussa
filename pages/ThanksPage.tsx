
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { WhatsAppIcon, CheckIcon } from '../constants';
import { UserData } from '../types';

interface ThanksPageProps {
  userData: UserData;
  onRestart: () => void;
}

const WHATSAPP_NUMBER = '22967823234';

const buildWhatsAppMessage = (u: UserData): string => {
  const lines = [
    `Bonjour Dame Samoussa ! 🎉 Je viens de confirmer ma réservation.`,
    ``,
    `📋 *Récapitulatif de ma commande :*`,
    `• Nom : ${u.name}`,
    `• WhatsApp : ${u.whatsapp}`,
    u.email ? `• Email : ${u.email}` : null,
    `• Type d'événement : ${u.eventType}`,
    `• Date : ${new Date(u.eventDate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}`,
    `• Quartier : ${u.quartier}`,
    ``,
    `🛍️ *Pack choisi :* ${u.packName}`,
    `💰 *Total :* ${u.packTotal.toLocaleString('fr-FR')} F CFA`,
    `💳 *Paiement :* MTN Mobile Money`,
    ``,
    `Merci de me confirmer les instructions de paiement MoMo. À très vite !`,
  ].filter(l => l !== null);
  return lines.join('\n');
};

const ThanksPage: React.FC<ThanksPageProps> = ({ userData, onRestart }) => {
  const firstName = userData.name.split(' ')[0];
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildWhatsAppMessage(userData))}`;

  const formattedDate = new Date(userData.eventDate).toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="pt-32 pb-24 bg-dame-white min-h-screen">
      <div className="container mx-auto px-4 max-w-xl text-center">

        {/* Icône succès */}
        <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 className="w-12 h-12 text-green-500" />
        </div>

        {/* Message personnalisé */}
        <h2 className="font-title text-3xl md:text-4xl text-dame-brown mb-4 leading-tight">
          Merci {firstName} ! 🎉<br />
          <span className="text-dame-orange">Votre réservation est confirmée.</span>
        </h2>
        <p className="text-dame-brown/60 text-base mb-10 leading-relaxed">
          Notre équipe vous contactera sur WhatsApp dans les <strong>5 prochaines minutes</strong> pour finaliser votre commande.
        </p>

        {/* Récap commande */}
        <div className="bg-white border border-dame-beige/40 rounded-3xl shadow-lg p-8 mb-8 text-left">
          <p className="text-xs font-bold text-dame-orange uppercase tracking-widest mb-5">Récapitulatif</p>
          <ul className="space-y-3">
            {[
              { label: 'Pack', value: userData.packName },
              { label: 'Montant', value: `${userData.packTotal.toLocaleString('fr-FR')} F CFA` },
              { label: 'Événement', value: userData.eventType },
              { label: 'Date', value: formattedDate },
              { label: 'Quartier', value: userData.quartier },
              { label: 'Paiement', value: 'MTN Mobile Money' },
            ].map((row, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-dame-brown/70 text-sm">
                  <strong className="text-dame-brown">{row.label} :</strong> {row.value}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA WhatsApp pré-rempli */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-3 bg-dame-orange text-white font-bold text-lg py-5 rounded-2xl shadow-xl shadow-dame-orange/30 hover:-translate-y-0.5 smooth-transition mb-4"
        >
          <WhatsAppIcon className="w-5 h-5" />
          Écrire à Dame Samoussa sur WhatsApp
        </a>

        <p className="text-dame-brown/40 text-xs mb-8">
          Un message pré-rempli avec vos informations sera envoyé automatiquement.
        </p>

        {/* Retour accueil */}
        <button
          onClick={onRestart}
          className="text-dame-brown/40 text-sm font-medium hover:text-dame-brown smooth-transition underline underline-offset-4"
        >
          Retour à l'accueil
        </button>

      </div>
    </div>
  );
};

export default ThanksPage;
