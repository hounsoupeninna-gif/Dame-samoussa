
import React from 'react';

interface PrivacyPageProps {
  onBack: () => void;
}

const PrivacyPage: React.FC<PrivacyPageProps> = ({ onBack }) => {
  return (
    <div className="pt-32 pb-24 bg-dame-white min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">

        <button
          onClick={onBack}
          className="text-dame-brown/40 text-sm font-medium hover:text-dame-brown smooth-transition mb-8 inline-flex items-center gap-2"
        >
          ← Retour
        </button>

        <h1 className="font-title text-3xl md:text-4xl text-dame-brown mb-2">Politique de confidentialité</h1>
        <p className="text-dame-brown/40 text-sm mb-10">Dernière mise à jour : mars 2025</p>

        <div className="prose prose-sm max-w-none text-dame-brown/70 space-y-8">

          <section>
            <h2 className="font-title text-xl text-dame-brown mb-3">1. Qui sommes-nous ?</h2>
            <p>
              Dame Samoussa est une entreprise de traiteur événementiel basée à Cotonou, Bénin,
              spécialisée dans la préparation et la livraison de snacks et petits fours pour les
              particuliers et les entreprises. Responsable du traitement des données :
              Dame Samoussa — <a href="mailto:bonjour@damesamoussa.com" className="text-dame-orange hover:underline">bonjour@damesamoussa.com</a>.
            </p>
          </section>

          <section>
            <h2 className="font-title text-xl text-dame-brown mb-3">2. Données collectées</h2>
            <p>Lors d'une réservation sur notre site, nous collectons :</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Votre nom complet</li>
              <li>Votre numéro WhatsApp</li>
              <li>Votre adresse email (optionnelle)</li>
              <li>Le type et la date de votre événement</li>
              <li>Votre quartier de livraison</li>
              <li>Le pack commandé et le montant total</li>
            </ul>
          </section>

          <section>
            <h2 className="font-title text-xl text-dame-brown mb-3">3. Finalité du traitement</h2>
            <p>Vos données sont utilisées exclusivement pour :</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Traiter et confirmer votre commande via WhatsApp</li>
              <li>Vous envoyer les instructions de paiement MTN MoMo</li>
              <li>Vous recontacter en cas de besoin concernant votre livraison</li>
              <li>Vous envoyer un rappel avant votre événement (si vous y avez consenti)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-title text-xl text-dame-brown mb-3">4. Base légale</h2>
            <p>
              Le traitement de vos données repose sur votre consentement explicite, donné lors
              de la validation du formulaire de commande (case RGPD cochée).
            </p>
          </section>

          <section>
            <h2 className="font-title text-xl text-dame-brown mb-3">5. Conservation des données</h2>
            <p>
              Vos données sont conservées dans notre CRM (Google Sheets sécurisé) pendant une
              durée maximale de <strong>2 ans</strong> à compter de votre dernière commande,
              puis supprimées.
            </p>
          </section>

          <section>
            <h2 className="font-title text-xl text-dame-brown mb-3">6. Partage des données</h2>
            <p>
              Nous ne vendons, ne louons et ne partageons jamais vos données personnelles avec
              des tiers à des fins commerciales. Vos informations restent strictement internes
              à Dame Samoussa.
            </p>
          </section>

          <section>
            <h2 className="font-title text-xl text-dame-brown mb-3">7. Vos droits</h2>
            <p>Conformément aux réglementations applicables, vous disposez des droits suivants :</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement (« droit à l'oubli »)</li>
              <li>Droit d'opposition au traitement</li>
            </ul>
            <p className="mt-3">
              Pour exercer ces droits, contactez-nous à :
              <a href="mailto:bonjour@damesamoussa.com" className="text-dame-orange hover:underline ml-1">bonjour@damesamoussa.com</a> ou via WhatsApp au <a href="https://wa.me/22967823234" className="text-dame-orange hover:underline">+229 67 82 32 34</a>.
            </p>
          </section>

          <section>
            <h2 className="font-title text-xl text-dame-brown mb-3">8. Sécurité</h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées
              pour protéger vos données contre tout accès non autorisé, toute perte ou
              destruction accidentelle.
            </p>
          </section>

          <section>
            <h2 className="font-title text-xl text-dame-brown mb-3">9. Contact</h2>
            <p>
              Pour toute question relative à cette politique, écrivez-nous à
              <a href="mailto:bonjour@damesamoussa.com" className="text-dame-orange hover:underline ml-1">bonjour@damesamoussa.com</a>.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
