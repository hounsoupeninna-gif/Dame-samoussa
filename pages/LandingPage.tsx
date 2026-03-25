
import React from 'react';
import { ArrowDown, ChevronDown } from 'lucide-react';
import { CheckIcon, WhatsAppIcon, ShareIcon, TruckIcon, FlameIcon, StarIcon, CreditCardIcon } from '../constants';

const WHATSAPP_NUMBER = '22967823234';
const SITE_URL = 'https://damesamoussa.com/';

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
  const shareText = 'Dame Samoussa — Petits fours & snacks livrés pour vos événements à Cotonou';

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
      aria-label="Partager la page"
      className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/20 smooth-transition text-sm"
    >
      <ShareIcon className="w-4 h-4" /> Partager
    </button>
  );
};

const WhatsAppButton: React.FC<{ label?: string; className?: string }> = ({
  label = 'Réserver sur WhatsApp',
  className = '',
}) => (
  <a
    href={getWhatsAppLink()}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className={`inline-flex items-center justify-center gap-3 bg-dame-orange text-white font-bold rounded-2xl shadow-xl shadow-dame-orange/30 hover:bg-dame-orange-light hover:-translate-y-0.5 smooth-transition cta-button min-h-[56px] ${className}`}
  >
    <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
    <span>{label}</span>
  </a>
);

const packs = [
  {
    name: 'Pack Anniversaire',
    subtitle: 'Idéal pour les petites fêtes',
    people: null,
    total: 19900,
    originalTotal: 24000,
    promoLabel: 'Offre ce mois-ci',
    items: ['10 Samoussas', '10 Mini Pizzas', '10 Friands', '10 Crêpes', '10 Nems'],
    highlight: true,
    badge: 'Le plus populaire',
  },
  {
    name: 'Pack Végétarien',
    subtitle: 'Saveurs végétales généreuses',
    people: null,
    total: 23000,
    originalTotal: null,
    promoLabel: null,
    items: ['20 Samoussas épinards/pomme de terre', '20 Mini Pizzas champignon', '20 Crêpes'],
    highlight: false,
    badge: null,
  },
  {
    name: 'Pack Événement',
    subtitle: 'Pour les grandes célébrations',
    people: 250,
    total: 77250,
    originalTotal: null,
    promoLabel: null,
    items: ['50 Samoussas', '50 Mini Pizzas', '50 Friands', '50 Nems', '50 Croissants jambon'],
    highlight: false,
    badge: 'Pour 250 personnes',
  },
];

const testimonials = [
  {
    name: 'Vanessa T.',
    initials: 'VT',
    city: 'Cotonou',
    text: 'Les petits fours étaient incroyables ! Tous mes invités en redemandaient. Je recommande à 100%.',
    stars: 5,
  },
  {
    name: 'Rodrigue K.',
    initials: 'RK',
    city: 'PK 10',
    text: "Dame Samoussa a transformé l'anniversaire de mon fils. Zéro stress, tout était parfait à l'arrivée.",
    stars: 5,
  },
  {
    name: 'Tatiana H.',
    initials: 'TH',
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
    q: 'Quand dois-je commander ?',
    a: "Nous recommandons une réservation 48h à l'avance pour garantir une fraîcheur et un croustillant garantis.",
  },
  {
    q: 'Comment se passe le paiement ?',
    a: 'Paiement simple via MTN MoMo ou Moov Money. Notre équipe vous envoie les instructions sur WhatsApp.',
  },
];

interface LandingPageProps {
  onSelectPack: (packName: string, packTotal: number) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onSelectPack }) => {
  return (
    <div className="pb-20 md:pb-0">

      {/* ── HERO ── */}
      <section style={{ height: '100svh', minHeight: '640px', marginTop: '-5rem', paddingTop: '2rem', position: 'relative', overflow: 'hidden' }}>
        <video
          src="/hero.mp4"
          autoPlay muted loop playsInline
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        {/* Gradient overlay — plus chaleureux que le noir flat */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(160deg, rgba(74,31,15,0.72) 0%, rgba(0,0,0,0.55) 50%, rgba(230,106,26,0.25) 100%)'
        }} />

        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', textAlign: 'center',
          padding: '0 1.5rem', zIndex: 10,
        }}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-10" style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.5)', backdropFilter: 'blur(8px)', borderRadius: '100px', padding: '8px 22px' }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#F28C28', display: 'inline-block', flexShrink: 0 }} />
            <span style={{ color: '#ffffff', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              Traiteur événementiel · Cotonou, Bénin
            </span>
          </div>

          {/* Titre */}
          <h1 className="font-title text-white leading-tight mb-6 drop-shadow-lg" style={{ maxWidth: '54rem' }}>
            <span className="block text-4xl md:text-6xl font-bold mb-4">
              Soyez la star de votre fête,
            </span>
            <span className="block text-2xl md:text-3xl font-normal text-white/85">
              <span className="text-dame-orange font-semibold italic">Nous nous occupons de tout.</span>
            </span>
          </h1>

          <p className="text-base md:text-lg mb-10 leading-relaxed max-w-xl" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Pas de stress en cuisine. Pas de vaisselle interminable.<br className="hidden md:block" />
            Juste des mini-délices croustillants, chauds et livrés chez vous.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => onSelectPack('Pack Anniversaire', 19900)}
              className="inline-flex items-center justify-center gap-3 bg-dame-orange text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-xl shadow-dame-orange/30 hover:bg-dame-orange-light hover:-translate-y-0.5 smooth-transition cta-button min-h-[56px]"
            >
              <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
              Réserver sur WhatsApp
            </button>
            <a href="#packs" className="text-white/80 hover:text-white font-semibold smooth-transition text-sm flex items-center gap-1">
              Voir nos formules
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bande réassurance */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(74,31,15,0.85)', backdropFilter: 'blur(8px)', padding: '1rem 1.5rem', zIndex: 10, borderTop: '1px solid rgba(243,214,164,0.2)' }}>
          <div className="container mx-auto flex flex-wrap justify-center gap-6 md:gap-16 text-white text-sm font-semibold">
            <span className="flex items-center gap-2 opacity-90"><TruckIcon className="w-4 h-4 text-dame-orange" /> Livraison garantie</span>
            <span className="flex items-center gap-2 opacity-90"><FlameIcon className="w-4 h-4 text-dame-orange" /> Servi chaud</span>
            <span className="flex items-center gap-2 opacity-90"><StarIcon className="w-4 h-4 text-dame-orange" /> +200 clients satisfaits</span>
            <span className="flex items-center gap-2 opacity-90"><CreditCardIcon className="w-4 h-4 text-dame-orange" /> Paiement MTN MoMo</span>
          </div>
        </div>
      </section>

      {/* ── PROMESSE ── */}
      <section className="bg-dame-brown text-white py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-dame-orange font-semibold uppercase tracking-widest text-xs mb-6">Notre engagement</p>
          <h2 className="font-title text-3xl md:text-5xl italic mb-6 leading-snug">
            "L'excellence des mignardises pour<br className="hidden md:block" /> vos événements les plus précieux."
          </h2>
          <p className="text-lg opacity-80 leading-relaxed mb-12 max-w-2xl mx-auto">
            Chaque bouchée est préparée avec soin, des ingrédients frais et une recette transmise avec amour. Parce que votre fête mérite le meilleur.
          </p>
          {/* 3 piliers */}
          <div className="grid md:grid-cols-3 gap-8 mb-14 text-left">
            {[
              { icon: <FlameIcon className="w-6 h-6 text-dame-orange" />, titre: 'Cuisiné avec passion', desc: 'Préparé avec soin le jour même — chaud, croustillant et irrésistible.' },
              { icon: <TruckIcon className="w-6 h-6 text-dame-orange" />, titre: 'Livré chez vous', desc: 'Emballages premium pour que vos mignardises arrivent chaudes et croustillantes.' },
              { icon: <StarIcon className="w-6 h-6 text-dame-orange" />, titre: 'Satisfaction totale', desc: '+200 familles satisfaites à Cotonou. Votre bonheur est notre fierté.' },
            ].map((p, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="mb-4">{p.icon}</div>
                <h3 className="font-bold text-white text-lg mb-2">{p.titre}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => onSelectPack('Pack Anniversaire', 19900)}
            className="inline-flex items-center justify-center gap-3 bg-dame-orange text-white font-bold text-lg px-10 py-4 rounded-2xl shadow-xl shadow-dame-orange/30 hover:bg-dame-orange-light hover:-translate-y-0.5 smooth-transition cta-button min-h-[56px]"
          >
            <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
            Je veux ce service
          </button>
        </div>
      </section>

      {/* ── PACKS ── */}
      <section id="packs" className="py-24 md:py-32" style={{ background: '#FAF7F2' }}>
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-dame-orange font-semibold uppercase tracking-widest text-xs mb-4">Nos formules</p>
            <h2 className="font-title text-4xl md:text-5xl text-dame-brown mb-4">Choisissez votre pack</h2>
            <p className="text-dame-brown/50 max-w-md mx-auto">Des quantités pensées pour chaque type d'événement, à des prix justes.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            {packs.map((pack, i) => (
              <div
                key={i}
                className={`rounded-3xl relative overflow-hidden smooth-transition group ${
                  pack.highlight
                    ? 'bg-dame-brown text-white shadow-2xl shadow-dame-brown/30 scale-105 md:scale-105'
                    : 'bg-white border border-dame-beige/40 shadow-lg hover:-translate-y-1'
                }`}
              >
                {/* Bande top colorée */}
                {pack.badge && (
                  <div className={`px-6 py-3 text-xs font-bold uppercase tracking-widest flex items-center gap-2 ${pack.highlight ? 'bg-dame-orange text-white' : 'bg-dame-beige/40 text-dame-brown'}`}>
                    <StarIcon className="w-3.5 h-3.5" /> {pack.badge}
                  </div>
                )}

                <div className="p-7">
                  <h3 className={`text-2xl font-bold mb-1 ${pack.highlight ? 'text-white' : 'text-dame-brown'}`}>{pack.name}</h3>
                  <p className={`text-sm mb-6 ${pack.highlight ? 'text-white/60' : 'text-dame-brown/50'}`}>{pack.subtitle}</p>

                  {/* Prix */}
                  <div className="mb-6">
                    {pack.promoLabel && (
                      <span className="inline-block bg-dame-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-2">
                        {pack.promoLabel}
                      </span>
                    )}
                    {pack.originalTotal && (
                      <p className={`text-sm line-through mb-0.5 ${pack.highlight ? 'text-white/40' : 'text-dame-brown/35'}`}>
                        {pack.originalTotal.toLocaleString('fr-FR')} F CFA
                      </p>
                    )}
                    <p className={`text-4xl font-bold ${pack.highlight ? 'text-dame-orange' : 'text-dame-orange'}`}>
                      {pack.total.toLocaleString('fr-FR')}
                      <span className="text-lg font-semibold ml-1">F CFA</span>
                    </p>
                    {pack.originalTotal && (
                      <p className="text-xs text-green-400 font-bold mt-1">
                        Vous économisez {(pack.originalTotal - pack.total).toLocaleString('fr-FR')} F CFA
                      </p>
                    )}
                    {pack.people && <p className={`text-sm mt-1 ${pack.highlight ? 'text-white/50' : 'text-dame-brown/40'}`}>pour {pack.people} personnes</p>}
                  </div>

                  {/* Items */}
                  <ul className="space-y-3 mb-8">
                    {pack.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm">
                        <CheckIcon />
                        <span className={pack.highlight ? 'text-white/80' : 'text-dame-brown/70'}>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => onSelectPack(pack.name, pack.total)}
                    className="w-full inline-flex items-center justify-center gap-3 bg-dame-orange text-white font-bold py-4 text-base rounded-2xl shadow-xl shadow-dame-orange/30 hover:-translate-y-0.5 smooth-transition cta-button min-h-[52px]"
                  >
                    <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
                    Commander ce pack
                  </button>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-dame-brown/40 mt-10 text-sm flex items-center justify-center gap-2">
            <WhatsAppIcon className="w-4 h-4 text-dame-orange" />
            Plus de 50 personnes ? Contactez-nous pour un devis personnalisé.
          </p>
        </div>
      </section>

      {/* ── TÉMOIGNAGES ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-dame-orange font-semibold uppercase tracking-widest text-xs mb-4">Avis clients</p>
            <h2 className="font-title text-4xl text-dame-brown">Ce que disent nos clients</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-dame-white border border-dame-beige/40 p-8 rounded-3xl shadow-sm hover:-translate-y-1 smooth-transition">
                {/* Stars */}
                <div className="flex gap-1 text-dame-orange mb-5">
                  {Array.from({ length: t.stars }).map((_, k) => <StarIcon key={k} className="w-4 h-4" />)}
                </div>
                <p className="text-dame-brown/75 italic mb-6 leading-relaxed text-[15px]">"{t.text}"</p>
                {/* Avatar + nom */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-dame-orange flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-bold text-dame-brown text-sm">{t.name}</p>
                    <p className="text-dame-brown/40 text-xs">{t.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-28 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #4A1F0F 0%, #6B2D12 100%)' }}>
        {/* Décor cercle */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10" style={{ background: '#E66A1A' }} />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full opacity-10" style={{ background: '#F28C28' }} />

        <div className="container mx-auto px-6 text-center max-w-2xl relative z-10">
          <img src="/logo.png" alt="Dame Samoussa" className="h-24 w-auto object-contain mx-auto mb-8 drop-shadow-2xl" />
          <h2 className="font-title text-4xl md:text-5xl text-white mb-5">Prêt(e) à passer commande ?</h2>
          <p className="text-white/75 text-lg mb-10 leading-relaxed">
            Écrivez-nous sur WhatsApp. Notre équipe vous répond en moins de 5 minutes et s'occupe de tout.
          </p>
          <button
            onClick={() => onSelectPack('Pack Anniversaire', 19900)}
            className="inline-flex items-center justify-center gap-3 bg-dame-orange text-white font-bold text-lg px-10 py-5 rounded-2xl shadow-2xl hover:-translate-y-1 hover:bg-dame-orange-light smooth-transition"
          >
            <WhatsAppIcon className="w-6 h-6" /> Réserver maintenant
          </button>
          <p className="text-white/40 text-sm mt-6">Réponse en moins de 5 min · MTN MoMo · Moov Money</p>
          <div className="mt-8">
            <ShareButton />
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24" style={{ background: '#FAF7F2' }}>
        <div className="container mx-auto px-6 max-w-2xl">
          <div className="text-center mb-14">
            <p className="text-dame-orange font-semibold uppercase tracking-widest text-xs mb-4">FAQ</p>
            <h2 className="font-title text-4xl text-dame-brown">Questions fréquentes</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((item, i) => (
              <details key={i} className="group bg-white border border-dame-beige/40 rounded-2xl overflow-hidden cursor-pointer">
                <summary className="font-semibold text-base flex justify-between items-center px-6 py-5 list-none hover:text-dame-orange smooth-transition text-dame-brown select-none">
                  {item.q}
                  <ChevronDown className="w-5 h-5 text-dame-orange flex-shrink-0 group-open:rotate-180 smooth-transition" />
                </summary>
                <p className="px-6 pb-5 text-dame-brown/65 leading-relaxed text-sm">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── STICKY MOBILE CTA ── */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40"
           style={{ background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)', borderTop: '1px solid rgba(243,214,164,0.5)', padding: '0.75rem 1rem', paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}>
        <button
          onClick={() => onSelectPack('Pack Anniversaire', 19900)}
          className="w-full inline-flex items-center justify-center gap-3 bg-dame-orange text-white font-bold text-base py-4 rounded-2xl shadow-xl shadow-dame-orange/30 hover:-translate-y-0.5 smooth-transition cta-button min-h-[56px]"
        >
          <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
          Réserver sur WhatsApp
        </button>
      </div>

    </div>
  );
};

export default LandingPage;
