
import React from 'react';

interface TermsPageProps {
  onBack: () => void;
}

const TermsPage: React.FC<TermsPageProps> = ({ onBack }) => {
  return (
    <div className="pt-32 pb-24 bg-dame-white min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">

        <button
          onClick={onBack}
          className="text-dame-brown/40 text-sm font-medium hover:text-dame-brown smooth-transition mb-8 inline-flex items-center gap-2"
        >
          ← Retour
        </button>

        <h1 className="font-title text-3xl md:text-4xl text-dame-brown mb-2">Conditions Générales de Vente</h1>
        <p className="text-dame-brown/40 text-sm mb-10">Dernière mise à jour : mars 2025</p>

        <div className="prose prose-sm max-w-none text-dame-brown/70 space-y-8">

          <section>
            <h2 className="font-title text-xl text-dame-brown mb-3">1. Identification du vendeur</h2>
            <p>
              <strong>Dame Samoussa</strong> — Traiteur événementiel<br />
              Cotonou, Bénin<br />
              WhatsApp : <a href="https://wa.me/22967823234" className="text-dame-orange hover:underline">+229 67 82 32 34</a><br />
              Email : <a href="mailto:bonjour@damesamoussa.com" className="text-dame-orange hover:underline">bonjour@damesamoussa.com</a>
            </p>
          </section>

          <section>
            <h2 className="font-title text-xl text-dame-brown mb-3">2. Produits et services</h2>
            <p>
              Dame Samoussa propose des packs de snacks et petits fours préparés de façon
              artisanale (samoussas, mini pizzas, friands, crêpes, nems) pour des événements
              privés ou professionnels (anniversaires, mariages, baptêmes, séminaires, soirées).
            </p>
          </section>

          <section>
            <h2 className="font-title text-xl text-dame-brown mb-3">3. Commandes</h2>
            <p>
              Toute commande est initiée via le formulaire de réservation sur ce site. Elle est
              définitivement confirmée après :
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>La validation du formulaire</li>
              <li>La confirmation de disponibilité par Dame Samoussa via WhatsApp</li>
              <li>La réception du paiement ou d'un acompte</li>
            </ul>
          </section>

          <section>
            <h2 className="font-title text-xl text-dame-brown mb-3">4. Prix</h2>
            <p>
              Les prix sont indiqués en Francs CFA (FCFA) et incluent la préparation des
              produits. Les frais de livraison sont communiqués lors de la confirmation de
              commande selon le quartier.
            </p>
          </section>

          <section>
            <h2 className="font-title text-xl text-dame-brown mb-3">5. Paiement</h2>
            <p>
              Le paiement s'effectue exclusivement via <strong>MTN Mobile Money</strong> ou
              <strong> Moov Money</strong>, au numéro indiqué lors de la confirmation WhatsApp.
              Un acompte de 50 % peut être demandé pour les commandes importantes.
            </p>
          </section>

          <section>
            <h2 className="font-title text-xl text-dame-brown mb-3">6. Délai de préparation</h2>
            <p>
              Toute commande doit être passée <strong>au minimum 48 heures</strong> avant la
              date de l'événement. Pour les grands événements (Pack Événement), un délai de
              5 jours ouvrables est recommandé.
            </p>
          </section>

          <section>
            <h2 className="font-title text-xl text-dame-brown mb-3">7. Livraison</h2>
            <p>
              La livraison est assurée sur Cotonou et ses environs (Calavi, Godomey, Akpakpa…).
              Les frais et horaires de livraison sont convenus directement avec le client via
              WhatsApp. Dame Samoussa ne peut être tenue responsable de retards dus à des
              conditions de circulation exceptionnelles.
            </p>
          </section>

          <section>
            <h2 className="font-title text-xl text-dame-brown mb-3">8. Annulation et remboursement</h2>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Annulation &gt; 48h avant</strong> : remboursement intégral de l'acompte.</li>
              <li><strong>Annulation entre 24h et 48h avant</strong> : remboursement de 50 % de l'acompte.</li>
              <li><strong>Annulation &lt; 24h avant</strong> : aucun remboursement, les produits étant déjà préparés.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-title text-xl text-dame-brown mb-3">9. Qualité et réclamations</h2>
            <p>
              Dame Samoussa s'engage à livrer des produits frais et conformes à la commande.
              En cas de problème de qualité constaté à la livraison, le client doit nous
              contacter dans les <strong>2 heures</strong> suivant la réception via WhatsApp,
              avec une photo du problème constaté.
            </p>
          </section>

          <section>
            <h2 className="font-title text-xl text-dame-brown mb-3">10. Propriété intellectuelle</h2>
            <p>
              Le contenu du site (textes, images, logo, design) est la propriété exclusive de
              Dame Samoussa. Toute reproduction sans autorisation écrite est interdite.
            </p>
          </section>

          <section>
            <h2 className="font-title text-xl text-dame-brown mb-3">11. Droit applicable</h2>
            <p>
              Les présentes CGV sont soumises au droit béninois. En cas de litige, une
              solution amiable sera recherchée en priorité. À défaut, les tribunaux compétents
              de Cotonou seront saisis.
            </p>
          </section>

          <section>
            <h2 className="font-title text-xl text-dame-brown mb-3">12. Contact</h2>
            <p>
              Pour toute question, contactez-nous via WhatsApp au
              <a href="https://wa.me/22967823234" className="text-dame-orange hover:underline ml-1">+229 67 82 32 34</a> ou
              par email à <a href="mailto:bonjour@damesamoussa.com" className="text-dame-orange hover:underline">bonjour@damesamoussa.com</a>.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default TermsPage;
