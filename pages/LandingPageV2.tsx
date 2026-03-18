
import React from 'react';
import { WhatsAppIcon, ShareIcon, TruckIcon, FlameIcon, StarIcon, CreditCardIcon, CheckIcon } from '../constants';

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

const WaBtn: React.FC<{ label?: string; dark?: boolean; className?: string }> = ({
  label = 'Réserver sur WhatsApp',
  dark = false,
  className = '',
}) => (
  <a
    href={getWhatsAppLink()}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-3 font-bold rounded-full px-8 py-4 smooth-transition min-h-[52px] ${
      dark
        ? 'bg-white text-dame-brown hover:bg-dame-beige shadow-xl'
        : 'bg-dame-orange text-white hover:bg-dame-orange-light shadow-xl shadow-dame-orange/30'
    } ${className}`}
  >
    <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
    <span>{label}</span>
  </a>
);

const packs = [
  {
    name: 'Pack Anniversaire',
    subtitle: 'Idéal pour les petites fêtes',
    total: 24000,
    items: ['10 Samoussas', '10 Mini Pizzas', '10 Friands', '10 Crêpes', '10 Nems'],
    highlight: true,
  },
  {
    name: 'Pack Végétarien',
    subtitle: 'Saveurs végétales généreuses',
    total: 23000,
    items: ['20 Samoussas épinards/pomme de terre', '20 Mini Pizzas champignon', '20 Crêpes'],
    highlight: false,
  },
  {
    name: 'Pack Événement',
    subtitle: 'Pour 250 personnes',
    total: 77250,
    items: ['50 Samoussas', '50 Mini Pizzas', '50 Friands', '50 Nems', '50 Croissants jambon'],
    highlight: false,
  },
];

const testimonials = [
  { name: 'Vanessa T.', initials: 'VT', city: 'Cotonou', text: 'Les petits fours étaient incroyables ! Tous mes invités en redemandaient. Je recommande à 100%.', stars: 5 },
  { name: 'Rodrigue K.', initials: 'RK', city: 'PK 10', text: "Dame Samoussa a transformé l'anniversaire de mon fils. Zéro stress, tout était parfait.", stars: 5 },
  { name: 'Tatiana H.', initials: 'TH', city: 'Cotonou', text: "La qualité est au rendez-vous à chaque commande. C'est notre traiteur officiel.", stars: 5 },
];

const faqs = [
  { q: 'Comment se passe la livraison ?', a: 'Nous livrons partout à Cotonou et environs. Vos mignardises arrivent chaudes et croustillantes dans des emballages premium.' },
  { q: 'Puis-je choisir le type de samoussa ?', a: 'Oui ! Viande, poulet ou poisson — vous choisissez lors de la discussion sur WhatsApp.' },
  { q: 'Quand dois-je commander ?', a: "Nous recommandons une réservation 48h à l'avance pour garantir la fraîcheur artisanale." },
  { q: 'Comment se passe le paiement ?', a: 'Paiement via MTN MoMo ou Moov Money. Notre équipe vous guide directement sur WhatsApp.' },
];

const LandingPageV2: React.FC = () => {
  return (
    <div className="pb-20 md:pb-0" style={{ fontFamily: "'Poppins', sans-serif" }}>

      {/* ── HERO FULL SCREEN ── */}
      <section style={{ height: '100svh', minHeight: '640px', marginTop: '-5rem', position: 'relative', overflow: 'hidden', background: '#0D0905' }}>
        <video src="/hero.mp4" autoPlay muted loop playsInline
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }} />

        {/* Overlay dégradé latéral */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(13,9,5,0.95) 40%, rgba(13,9,5,0.2) 100%)' }} />

        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', zIndex: 10, padding: '0 2rem' }}>
          <div className="container mx-auto max-w-6xl">
            <div style={{ maxWidth: '580px' }}>

              {/* Tag */}
              <div className="inline-flex items-center gap-2 mb-8" style={{ background: 'rgba(230,106,26,0.15)', border: '1px solid rgba(230,106,26,0.35)', borderRadius: '100px', padding: '6px 16px' }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#E66A1A' }} />
                <span style={{ color: '#E66A1A', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Traiteur événementiel · Cotonou</span>
              </div>

              {/* Titre */}
              <h1 style={{ color: '#fff', fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', lineHeight: 1.1, marginBottom: '1.5rem', fontWeight: 400 }}>
                Soyez l'invité d'honneur,
                <br />
                <span style={{ color: '#E66A1A', fontStyle: 'italic' }}>de votre propre fête.</span>
              </h1>

              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '2.5rem', maxWidth: '440px' }}>
                Nous préparons chaque mignardise avec soin pour que vous profitiez pleinement de chaque instant — sans jamais passer une minute en cuisine.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <WaBtn label="Réserver maintenant" />
                <a href="#packs-v2" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '4px' }}>
                  Voir les formules
                </a>
              </div>

              {/* Stats */}
              <div style={{ display: 'flex', gap: '2rem', marginTop: '3.5rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                {[
                  { val: '+200', label: 'Familles satisfaites' },
                  { val: '48h', label: 'Délai de réservation' },
                  { val: '5 min', label: 'Réponse WhatsApp' },
                ].map((s, i) => (
                  <div key={i}>
                    <p style={{ color: '#E66A1A', fontSize: '1.5rem', fontWeight: 700, fontFamily: "'DM Serif Display', serif" }}>{s.val}</p>
                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem' }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bande bas */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 10, borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(13,9,5,0.8)', backdropFilter: 'blur(8px)', padding: '0.875rem 1.5rem' }}>
          <div className="container mx-auto flex flex-wrap justify-center gap-8 md:gap-16" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', fontWeight: 600 }}>
            <span className="flex items-center gap-2"><TruckIcon className="w-4 h-4" style={{ color: '#E66A1A' }} /> Livraison garantie</span>
            <span className="flex items-center gap-2"><FlameIcon className="w-4 h-4" style={{ color: '#E66A1A' }} /> Servi chaud</span>
            <span className="flex items-center gap-2"><StarIcon className="w-4 h-4" style={{ color: '#E66A1A' }} /> +200 clients satisfaits</span>
            <span className="flex items-center gap-2"><CreditCardIcon className="w-4 h-4" style={{ color: '#E66A1A' }} /> MTN MoMo · Moov Money</span>
          </div>
        </div>
      </section>

      {/* ── SECTION PROMESSE ── */}
      <section style={{ background: '#FAF7F2', padding: '6rem 1.5rem' }}>
        <div className="container mx-auto max-w-5xl">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            {/* Texte */}
            <div>
              <p style={{ color: '#E66A1A', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>Notre savoir-faire</p>
              <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: '#4A1F0F', lineHeight: 1.2, marginBottom: '1.5rem' }}>
                L'artisanat culinaire au service de vos moments précieux.
              </h2>
              <p style={{ color: '#4A1F0F', opacity: 0.6, lineHeight: 1.8, marginBottom: '2rem' }}>
                Chaque bouchée est préparée le jour même, avec des ingrédients frais sélectionnés avec soin. Parce que vos invités méritent ce qu'il y a de mieux.
              </p>
              <WaBtn label="Nous contacter" />
            </div>
            {/* Piliers */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { icon: <FlameIcon className="w-5 h-5" />, titre: 'Fait maison', desc: 'Préparé artisanalement le jour même.' },
                { icon: <TruckIcon className="w-5 h-5" />, titre: 'Livré chez vous', desc: 'Emballages premium, mignardises chaudes à l\'arrivée.' },
                { icon: <StarIcon className="w-5 h-5" />, titre: '+200 familles ravies', desc: 'Notre réputation, construite événement après événement.' },
              ].map((p, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1.25rem', background: '#fff', borderRadius: '16px', border: '1px solid rgba(243,214,164,0.4)' }}>
                  <div style={{ width: 40, height: 40, borderRadius: '10px', background: 'rgba(230,106,26,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#E66A1A', flexShrink: 0 }}>
                    {p.icon}
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, color: '#4A1F0F', marginBottom: '0.25rem', fontSize: '0.95rem' }}>{p.titre}</p>
                    <p style={{ color: '#4A1F0F', opacity: 0.5, fontSize: '0.85rem', lineHeight: 1.6 }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PACKS ── */}
      <section id="packs-v2" style={{ background: '#fff', padding: '6rem 1.5rem' }}>
        <div className="container mx-auto max-w-6xl">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{ color: '#E66A1A', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>Nos formules</p>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#4A1F0F', marginBottom: '0.75rem' }}>Choisissez votre pack</h2>
            <p style={{ color: '#4A1F0F', opacity: 0.5, fontSize: '0.95rem' }}>Des quantités pensées pour chaque type d'événement.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', alignItems: 'start' }}>
            {packs.map((pack, i) => (
              <div key={i} style={{
                borderRadius: '24px',
                overflow: 'hidden',
                border: pack.highlight ? 'none' : '1px solid rgba(243,214,164,0.5)',
                background: pack.highlight ? '#4A1F0F' : '#FAF7F2',
                boxShadow: pack.highlight ? '0 24px 48px rgba(74,31,15,0.25)' : '0 4px 16px rgba(0,0,0,0.04)',
                transform: pack.highlight ? 'scale(1.03)' : 'none',
              }}>
                {pack.highlight && (
                  <div style={{ background: '#E66A1A', padding: '0.6rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <StarIcon className="w-3.5 h-3.5" style={{ color: '#fff' }} />
                    <span style={{ color: '#fff', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Le plus populaire</span>
                  </div>
                )}
                <div style={{ padding: '2rem' }}>
                  <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.4rem', color: pack.highlight ? '#fff' : '#4A1F0F', marginBottom: '0.25rem' }}>{pack.name}</h3>
                  <p style={{ fontSize: '0.8rem', color: pack.highlight ? 'rgba(255,255,255,0.5)' : 'rgba(74,31,15,0.4)', marginBottom: '1.5rem' }}>{pack.subtitle}</p>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <span style={{ fontSize: '2.4rem', fontWeight: 800, color: '#E66A1A' }}>{pack.total.toLocaleString('fr-FR')}</span>
                    <span style={{ fontSize: '0.9rem', fontWeight: 600, color: pack.highlight ? 'rgba(255,255,255,0.5)' : 'rgba(74,31,15,0.4)', marginLeft: '6px' }}>F CFA</span>
                  </div>

                  <ul style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {pack.items.map((item, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.85rem', color: pack.highlight ? 'rgba(255,255,255,0.7)' : 'rgba(74,31,15,0.65)' }}>
                        <CheckIcon />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <WaBtn label="Commander" dark={!pack.highlight} className="w-full justify-center py-3 text-sm" />
                </div>
              </div>
            ))}
          </div>

          <p style={{ textAlign: 'center', color: 'rgba(74,31,15,0.4)', fontSize: '0.85rem', marginTop: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <WhatsAppIcon className="w-4 h-4" style={{ color: '#E66A1A' }} />
            Plus de 50 personnes ? Contactez-nous pour un devis personnalisé.
          </p>
        </div>
      </section>

      {/* ── TÉMOIGNAGES ── */}
      <section style={{ background: '#FAF7F2', padding: '6rem 1.5rem' }}>
        <div className="container mx-auto max-w-5xl">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{ color: '#E66A1A', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>Témoignages</p>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: '#4A1F0F' }}>Ce que disent nos clients</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '20px', padding: '2rem', border: '1px solid rgba(243,214,164,0.4)' }}>
                <div style={{ display: 'flex', gap: '3px', marginBottom: '1rem' }}>
                  {Array.from({ length: t.stars }).map((_, k) => <StarIcon key={k} className="w-4 h-4" style={{ color: '#E66A1A' }} />)}
                </div>
                <p style={{ color: 'rgba(74,31,15,0.7)', fontStyle: 'italic', lineHeight: 1.7, marginBottom: '1.5rem', fontSize: '0.9rem' }}>"{t.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: 38, height: 38, borderRadius: '50%', background: '#E66A1A', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '0.8rem', flexShrink: 0 }}>
                    {t.initials}
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, color: '#4A1F0F', fontSize: '0.85rem' }}>{t.name}</p>
                    <p style={{ color: 'rgba(74,31,15,0.35)', fontSize: '0.75rem' }}>{t.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section style={{ background: '#0D0905', padding: '7rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-6rem', right: '-6rem', width: '28rem', height: '28rem', borderRadius: '50%', background: 'radial-gradient(circle, rgba(230,106,26,0.15) 0%, transparent 70%)' }} />
        <div className="container mx-auto max-w-xl" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <img src="/logo.png" alt="Dame Samoussa" style={{ height: '7rem', objectFit: 'contain', margin: '0 auto 2rem' }} />
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#fff', marginBottom: '1rem' }}>
            Prêt(e) à passer commande ?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', lineHeight: 1.75, marginBottom: '2.5rem' }}>
            Écrivez-nous sur WhatsApp. Notre équipe vous répond en moins de 5 minutes et s'occupe de tout.
          </p>
          <WaBtn label="Réserver maintenant" className="text-lg px-10 py-5" />
          <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.8rem', marginTop: '1.5rem' }}>
            Réponse en moins de 5 min · MTN MoMo · Moov Money
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: '#fff', padding: '6rem 1.5rem' }}>
        <div className="container mx-auto" style={{ maxWidth: '640px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p style={{ color: '#E66A1A', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>FAQ</p>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: '#4A1F0F' }}>Questions fréquentes</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {faqs.map((item, i) => (
              <details key={i} style={{ background: '#FAF7F2', borderRadius: '16px', border: '1px solid rgba(243,214,164,0.4)', overflow: 'hidden', cursor: 'pointer' }}>
                <summary style={{ padding: '1.25rem 1.5rem', fontWeight: 600, color: '#4A1F0F', fontSize: '0.95rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', listStyle: 'none' }}>
                  {item.q}
                  <svg style={{ width: 18, height: 18, color: '#E66A1A', flexShrink: 0 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 9l-7 7-7-7"/></svg>
                </summary>
                <p style={{ padding: '0 1.5rem 1.25rem', color: 'rgba(74,31,15,0.6)', fontSize: '0.875rem', lineHeight: 1.75 }}>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── STICKY MOBILE ── */}
      <div className="md:hidden" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 40, background: 'rgba(13,9,5,0.95)', backdropFilter: 'blur(12px)', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '0.75rem 1rem', paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}>
        <WaBtn label="Réserver sur WhatsApp" className="w-full justify-center py-4" />
      </div>
    </div>
  );
};

export default LandingPageV2;
