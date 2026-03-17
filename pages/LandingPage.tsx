
import React from 'react';
import { CheckIcon } from '../constants';

const WHATSAPP_NUMBER = '22967823234';
const PHONE_DISPLAY = '+229 01 67 82 32 34';
const SITE_URL = 'https://hounsoupeninna-gif.github.io/Dame-samoussa/';

const SOURCE_LABELS: Record<string, string> = {
  facebook: 'votre publicité Facebook',
  instagram: 'votre publication Instagram',
  tiktok: 'votre vidéo TikTok',
  whatsapp: 'votre statut WhatsApp',
  google: 'Google',
};

const getWhatsAppLink = (): string => {
  const params = new URLSearchParams(window.location.search);
  const source = params.get('utm_source') || '';
  const sourceLabel = SOURCE_LABELS[source.toLowerCase()] || null;
  const message = sourceLabel
    ? `Bonjour Dame Samoussa ! Je vous contacte suite à ${sourceLabel} 🎉`
    : `Bonjour Dame Samoussa ! Je veux réserver un pack 🎉`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

const ShareButton: React.FC = () => {
  const shareText = 'Dame Samoussa — Petits fours & snacks livrés pour vos événements à Cotonou 🎉';

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: 'Dame Samoussa', text: shareText, url: SITE_URL });
      } catch (_) {}
    } else {
      window.open(`https://wa.me/?text=${encodeURIComponent(shareText + '\n' + SITE_URL)}`, '_blank');
    }
  };

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-white/20 smooth-transition text-sm"
    >
      🔗 Partager la page
    </button>
  );
};

const WhatsAppButton: React.FC<{ label?: string; className?: string }> = ({
  label = '💬 Réserver sur WhatsApp',
  className = '',
}) => (
  <a
    href={getWhatsAppLink()}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center bg-dame-orange text-white font-bold rounded-xl shadow-xl shadow-dame-orange/30 hover:scale-105 smooth-transition cta-button min-h-[56px] hover:shadow-2xl hover:shadow-dame-orange/40 ${className}`}
  >
    {label}
  </a>
);

const packs = [
  {
    name: 'Pack Anniversaire',
    people: null,
    total: 24000,
    items: ['10 Samoussas', '10 Mini Pizzas', '10 Friands', '10 Crêpes', '10 Nems'],
    highlight: true,
  },
  {
    name: 'Pack Végétarien',
    people: null,
    total: 23000,
    items: ['20 Samoussas épinards/pomme de terre', '20 Mini Pizzas champignon', '20 Crêpes'],
    highlight: false,
  },
  {
    name: 'Pack Événement',
    people: 250,
    total: 77250,
    items: ['50 Samoussas', '50 Mini Pizzas', '50 Friands', '50 Nems', '50 Croissants jambon'],
    highlight: false,
  },
];


const testimonials = [
  {
    name: 'Vanessa T.',
    city: 'Cotonou',
    text: 'Les petits fours étaient incroyables ! Tous mes invités en redemandaient. Je recommande à 100%.',
    stars: 5,
  },
  {
    name: 'Rodrigue K.',
    city: 'PK 10',
    text: "Dame Samoussa a transformé l'anniversaire de mon fils. Zéro stress, tout était parfait à l'arrivée.",
    stars: 5,
  },
  {
    name: 'Tatiana H.',
    city: 'Cotonou',
    text: "La qualité est au rendez-vous à chaque commande. C'est notre traiteur officiel pour tous nos événements.",
    stars: 5,
  },
];

const faqs = [
  {
    q: 'Comment se passe la livraison ?',
    a: 'Nous livrons partout à Cotonou et environs. Les snacks arrivent chauds et croustillants dans des emballages premium.',
  },
  {
    q: 'Puis-je choisir le type de samoussa ?',
    a: 'Oui ! Viande, poulet ou poisson — vous choisissez lors de la discussion sur WhatsApp.',
  },
  {
    q: "Quand dois-je commander ?",
    a: "Nous recommandons une réservation 48h à l'avance pour garantir la fraîcheur artisanale.",
  },
  {
    q: 'Comment se passe le paiement ?',
    a: 'Paiement simple via MTN MoMo ou Moov Money. Notre équipe vous envoie les instructions sur WhatsApp.',
  },
];

const LandingPage: React.FC = () => {
  return (
    <div className="pt-24 pb-12">

      {/* Hero plein écran */}
      <section style={{ height: '100svh', minHeight: '600px', marginTop: '-6rem', position: 'relative', overflow: 'hidden' }}>
        {/* Vidéo de fond */}
        <video
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        {/* Overlay sombre */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)' }} />

        {/* Contenu centré */}
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '0 1.5rem',
          zIndex: 10,
        }}>
          <span className="inline-block bg-white/10 backdrop-blur-sm text-white font-semibold px-5 py-2 rounded-full text-xs uppercase tracking-widest border border-white/30 mb-8">
            Traiteur événementiel · Cotonou
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6" style={{ maxWidth: '56rem' }}>
            Soyez l'hôte d'honneur de votre propre fête —{' '}
            <span className="text-dame-orange italic">Dame Samoussa</span> s'occupe du reste.
          </h1>
          <p className="text-lg md:text-xl mb-10 leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '42rem' }}>
            Pas de stress en cuisine. Pas de vaisselle interminable. Juste des mini-délices croustillants, chauds et livrés chez vous.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <WhatsAppButton
              label="💬 Réserver sur WhatsApp"
              className="text-lg px-8 py-4"
            />
            <a href="#packs" className="text-white/80 hover:text-white font-semibold underline underline-offset-4 smooth-transition text-sm">
              Voir nos formules ↓
            </a>
          </div>
        </div>

        {/* Bande de réassurance en bas du hero */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)', padding: '1rem 1.5rem', zIndex: 10 }}>
          <div className="container mx-auto flex flex-wrap justify-center gap-6 md:gap-12 text-white text-sm font-semibold">
            <span>🚚 Livraison garantie</span>
            <span>🔥 Servi chaud</span>
            <span>⭐ +200 clients satisfaits</span>
            <span>📱 Paiement MTN MoMo</span>
          </div>
        </div>
      </section>

      {/* Hook storytelling */}
      <section className="bg-dame-brown text-dame-white py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl mb-8 font-title italic">
            "L'excellence des mignardises pour vos événements les plus précieux."
          </h2>
          <p className="text-lg md:text-xl font-light opacity-90 leading-relaxed mb-12">
            Parce que chaque fête mérite une saveur exceptionnelle.
          </p>
          <WhatsAppButton
            label="💬 Je veux ce service — WhatsApp"
            className="text-xl px-10 py-5"
          />
        </div>
      </section>

      {/* Packs */}
      <section id="packs" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dame-brown mb-4">Choisissez votre pack</h2>
            <p className="text-dame-orange font-semibold tracking-widest uppercase">Des quantités pensées pour votre événement</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packs.map((pack, i) => (
              <div
                key={i}
                className={`rounded-3xl p-8 border-2 shadow-xl relative animate-scaleIn card-hover ${
                  pack.highlight
                    ? 'border-dame-orange bg-dame-white scale-105'
                    : 'border-dame-beige/30 bg-white'
                }`}
              >
                {pack.highlight && (
                  <div className="absolute top-0 right-0 bg-dame-orange text-white px-4 py-2 rounded-bl-3xl rounded-tr-3xl font-bold text-sm badge-shine">
                    ⭐ Le plus populaire
                  </div>
                )}
                <h3 className="text-2xl font-bold text-dame-brown mb-2">{pack.name}</h3>
                {pack.people && <p className="text-dame-brown/50 mb-6">{pack.people} personnes</p>}

                {/* Prix */}
                <div className="mb-6">
                  <p className="text-4xl font-bold text-dame-orange">{pack.total.toLocaleString()} F CFA</p>
                  {pack.people && <p className="text-sm text-dame-brown/50 mt-1">pour {pack.people} personnes</p>}
                </div>

                {/* Quantités */}
                <div className="bg-dame-beige/10 rounded-xl p-4 mb-6">
                  <p className="text-xs font-bold text-dame-orange uppercase mb-2">Ce que vous recevez :</p>
                  <ul className="space-y-2">
                    {pack.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-dame-brown">
                        <CheckIcon />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <WhatsAppButton
                  label={`💬 Commander ce pack`}
                  className={`w-full text-base py-4 ${!pack.highlight ? 'opacity-90' : ''}`}
                />
              </div>
            ))}
          </div>

          <p className="text-center text-dame-brown/50 mt-8 text-sm">
            💬 Vous avez plus de 50 personnes ? Écrivez-nous sur WhatsApp pour un devis personnalisé.
          </p>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 bg-dame-beige/10">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-dame-brown mb-12">Ce que disent nos clientes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-dame-beige/30 card-hover animate-fadeIn">
                <p className="text-dame-orange font-bold mb-1">{'⭐'.repeat(t.stars)}</p>
                <p className="text-dame-brown/80 italic mb-4 leading-relaxed">"{t.text}"</p>
                <p className="font-bold text-dame-brown text-sm">{t.name}</p>
                <p className="text-dame-brown/40 text-xs">{t.city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-dame-orange">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-4xl font-bold text-white mb-6">Prêt(e) à passer commande ?</h2>
          <p className="text-white/90 text-xl mb-10 leading-relaxed">
            Écrivez-nous sur WhatsApp. Notre équipe vous répond en moins de 5 minutes et s'occupe de tout.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-dame-orange font-bold text-xl px-12 py-5 rounded-2xl shadow-2xl hover:scale-105 smooth-transition min-h-[64px]"
          >
            💬 Réserver maintenant sur WhatsApp
          </a>
          <p className="text-white/60 text-sm mt-6">Réponse garantie en moins de 5 minutes • Paiement MTN MoMo / Moov Money</p>
          <div className="mt-6">
            <ShareButton />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-dame-brown">Questions fréquentes</h2>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <details key={i} className="group bg-dame-beige/10 p-6 rounded-2xl border border-dame-beige/30 cursor-pointer card-hover">
                <summary className="font-bold text-lg flex justify-between items-center list-none smooth-transition hover:text-dame-orange text-dame-brown">
                  {item.q}
                  <span className="text-dame-orange group-open:rotate-180 smooth-transition">↓</span>
                </summary>
                <p className="mt-4 text-dame-brown/70 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dame-brown text-white/70 py-8 text-center text-sm">
        <p className="font-bold text-white text-base mb-1">Dame Samoussa</p>
        <p>Cotonou, Bénin</p>
        <a href="tel:+2290167823234" className="text-dame-orange font-semibold hover:underline">
          +229 01 67 82 32 34
        </a>
        <p className="mt-4 text-white/40 text-xs">© {new Date().getFullYear()} Dame Samoussa — Tous droits réservés</p>
      </footer>

      {/* Sticky mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-dame-beige z-40">
        <WhatsAppButton
          label="💬 Réserver sur WhatsApp"
          className="w-full text-base py-4"
        />
      </div>
    </div>
  );
};

export default LandingPage;
