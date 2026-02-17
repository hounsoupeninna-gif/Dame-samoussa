
import React, { useState, useEffect } from 'react';
import { CheckIcon } from '../constants';

interface LandingPageProps {
  onNext: (data: any) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNext }) => {
  const [timeLeft, setTimeLeft] = useState(7200); // 2 hours

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const benefits = [
    "Libérez-vous du stress de la cuisine et profitez de vos invités",
    "Impressionnez vos proches avec une qualité traiteur premium",
    "Des snacks frais, croustillants et authentiques",
    "Le secret de la convivialité africaine dans votre salon",
    "Une présentation élégante digne des plus grands événements"
  ];

  const menuItems = [
    "1 Gâteau d'anniversaire Signature",
    "10 Samoussas (Viande, Poulet ou Poisson)",
    "10 Mini Pizzas Gourmandes",
    "10 Mini Friands croustillants",
    "10 Crêpes marbrées fondantes",
    "10 Nems artisanaux"
  ];

  return (
    <div className="pt-24 pb-12">
      {/* Urgence Banner */}
      <div className="bg-dame-orange text-white py-3 text-center font-bold animate-fadeIn sticky top-0 z-50 shadow-lg">
        <p className="text-sm md:text-base">
          🔥 Plus que <span className="bg-white text-dame-orange px-2 py-1 rounded mx-1 font-bold">7 places</span> disponibles pour cette semaine !
        </p>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-slideInLeft">
          <span className="inline-block bg-dame-beige/30 text-dame-orange font-bold px-4 py-1 rounded-full text-sm mb-6 uppercase tracking-widest border border-dame-orange/20 badge-shine">
            Offre Exclusive Anniversaire
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-dame-brown leading-tight mb-6 italic animate-fadeIn delay-100">
            Fêtez votre Anniversaire comme une <span className="text-dame-orange animate-pulse-slow inline-block">VIP</span> : Le Festin qui vous met à l'Honneur !
          </h1>
          <p className="text-lg md:text-xl text-dame-brown/80 mb-8 leading-relaxed animate-fadeIn delay-200">
            Savourez chaque instant de votre journée spéciale pendant que <strong>Dame Samoussa</strong> s'occupe de régaler vos invités avec excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn delay-300">
            <button
              onClick={() => onNext({})}
              className="bg-dame-orange text-white text-lg font-bold px-8 py-4 rounded-xl shadow-xl shadow-dame-orange/30 cta-button text-center min-h-[56px] hover:shadow-2xl hover:shadow-dame-orange/40"
            >
              Réserver mon Pack VIP maintenant
            </button>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2 animate-slideInLeft delay-400">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/${i+40}/100/100`} className="w-10 h-10 rounded-full border-2 border-white hover:scale-110 smooth-transition" alt="Avatar" />
                ))}
              </div>
              <div className="animate-fadeIn delay-500">
                <p className="text-xs text-dame-brown font-semibold">⭐ +1,200 clientes satisfaites</p>
                <p className="text-xs text-dame-orange font-bold">Note moyenne : 4.9/5</p>
              </div>
            </div>
          </div>

          {/* Badges de confiance */}
          <div className="grid grid-cols-3 gap-4 mt-8 animate-fadeIn delay-400">
            <div className="flex flex-col items-center text-center p-3 bg-white rounded-xl shadow-sm border border-dame-beige/30 card-hover">
              <span className="text-2xl mb-1">🚚</span>
              <span className="text-xs font-semibold text-dame-brown">Livraison Garantie</span>
            </div>
            <div className="flex flex-col items-center text-center p-3 bg-white rounded-xl shadow-sm border border-dame-beige/30 card-hover">
              <span className="text-2xl mb-1">✓</span>
              <span className="text-xs font-semibold text-dame-brown">100% Frais</span>
            </div>
            <div className="flex flex-col items-center text-center p-3 bg-white rounded-xl shadow-sm border border-dame-beige/30 card-hover">
              <span className="text-2xl mb-1">💳</span>
              <span className="text-xs font-semibold text-dame-brown">Paiement Sécurisé</span>
            </div>
          </div>
        </div>
        <div className="relative animate-slideInRight">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-dame-beige rounded-full blur-3xl opacity-50 -z-10 animate-pulse-slow"></div>
          <div className="image-zoom rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?auto=format&fit=crop&q=80&w=800"
              alt="Plateau Samoussa Premium"
              className="rounded-3xl shadow-2xl border-8 border-white transform md:rotate-2 hover:rotate-0 transition-transform duration-500"
            />
          </div>
          <div className="absolute bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-dame-beige animate-bounce-slow">
            <p className="text-dame-orange font-bold text-xl">23 000 F CFA</p>
            <p className="text-dame-brown/50 text-xs line-through">30 000 F CFA</p>
          </div>
        </div>
      </section>

      {/* Storytelling / Empathy Section */}
      <section className="bg-dame-brown text-dame-white py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl mb-8 font-title italic">"Vous n'êtes pas là pour cuisiner, vous êtes là pour briller."</h2>
          <p className="text-lg md:text-xl font-light opacity-90 leading-relaxed mb-12">
            Imaginez-vous entouré de vos proches, le sourire aux lèvres, profitant pleinement de chaque rire et de chaque témoignage. 
            Vous êtes l'invitée d'honneur pendant que <strong>Dame Samoussa</strong> transforme votre salon en buffet de bonheur. 
            Pas de stress, pas de vaisselle interminable, juste le pur plaisir de la fête.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {benefits.slice(0, 3).map((b, i) => (
              <div key={i} className={`bg-white/5 p-6 rounded-2xl border border-white/10 card-hover animate-fadeIn delay-${(i + 1) * 100}`}>
                <div className="w-10 h-10 bg-dame-orange rounded-lg flex items-center justify-center mb-4 smooth-transition hover:scale-110 hover:rotate-3">
                  <CheckIcon />
                </div>
                <p className="font-semibold">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dame-brown mb-4">Le Pack Anniversaire VIP (8 personnes)</h2>
            <p className="text-dame-orange font-semibold tracking-widest uppercase">Tout ce qu'il vous faut pour un succès total</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              {menuItems.map((item, i) => (
                <div key={i} className={`flex items-center gap-4 p-4 rounded-xl hover:bg-dame-beige/10 smooth-transition border border-transparent hover:border-dame-beige/20 card-hover animate-fadeIn delay-${i * 100}`}>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-dame-beige/20 flex items-center justify-center text-dame-orange font-bold smooth-transition hover:scale-125 hover:bg-dame-orange hover:text-white">
                    {i + 1}
                  </div>
                  <span className="text-lg font-medium text-dame-brown">{item}</span>
                </div>
              ))}
              <div className="mt-8 p-6 bg-dame-beige/20 rounded-2xl border-2 border-dashed border-dame-orange/30">
                <p className="font-bold text-dame-orange mb-2">🎁 BONUS VIP INCLUS :</p>
                <ul className="space-y-2 text-sm text-dame-brown font-semibold">
                  <li className="flex items-center gap-2">• Sauce signature Dame Samoussa (Recette secrète)</li>
                  <li className="flex items-center gap-2">• Carte d’anniversaire personnalisée à votre nom</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-dame-white rounded-3xl p-8 border-2 border-dame-orange shadow-2xl relative animate-scaleIn delay-200 hover:shadow-3xl hover:scale-105 smooth-transition">
              <div className="absolute top-0 right-0 bg-dame-orange text-white px-6 py-2 rounded-bl-3xl rounded-tr-3xl font-bold animate-pulse-slow badge-shine">
                🔥 -23% MAINTENANT
              </div>
              <h3 className="text-2xl font-bold mb-8 text-dame-brown">Détails de votre privilège</h3>
              <div className="space-y-6 mb-8">
                <div className="flex justify-between items-center border-b border-dame-beige pb-4">
                  <span className="text-dame-brown/60">Prix Public</span>
                  <span className="text-xl line-through opacity-50">30 000 F CFA</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-dame-brown font-bold text-xl">Prix Réservation Anticipée</span>
                  <span className="text-3xl font-bold text-dame-orange">23 000 F CFA</span>
                </div>
              </div>
              
              <div className="bg-dame-brown text-white p-4 rounded-xl text-center mb-8 timer-ring">
                <p className="text-sm opacity-80 mb-1">⏰ Cette offre expire dans :</p>
                <p className="text-2xl md:text-3xl font-mono font-bold tracking-widest timer-pulse">{formatTime(timeLeft)}</p>
                <p className="text-xs opacity-60 mt-1">Réservez maintenant avant qu'il ne soit trop tard !</p>
              </div>

              <button
                onClick={() => onNext({})}
                className="w-full bg-dame-orange text-white py-5 rounded-2xl font-bold text-xl shadow-lg shadow-dame-orange/40 hover:scale-105 smooth-transition cta-button mb-4 min-h-[60px] hover:shadow-2xl"
              >
                🎉 Réserver mon Pack VIP maintenant
              </button>
              <p className="text-center text-xs text-dame-brown/60 flex items-center justify-center gap-2">
                <span className="text-green-600">✓</span>
                Garantie satisfaction : Délicieux ou Remboursé !
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-dame-beige/10">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Questions fréquentes</h2>
          <div className="space-y-4">
            {[
              { q: "Comment se passe la livraison ?", a: "Nous livrons partout dans la ville. Les snacks arrivent chauds et croustillants dans des emballages premium." },
              { q: "Puis-je changer les ingrédients ?", a: "Oui, vous pouvez choisir entre viande, poulet ou poisson pour vos samoussas lors de la commande." },
              { q: "À quel moment dois-je commander ?", a: "Le pack VIP nécessite une réservation 48h à l'avance pour garantir la fraîcheur artisanale." }
            ].map((item, i) => (
              <details key={i} className={`group bg-white p-6 rounded-2xl shadow-sm border border-dame-beige/30 cursor-pointer card-hover animate-fadeIn delay-${i * 100}`}>
                <summary className="font-bold text-lg flex justify-between items-center list-none smooth-transition hover:text-dame-orange">
                  {item.q}
                  <span className="text-dame-orange group-open:rotate-180 smooth-transition">↓</span>
                </summary>
                <p className="mt-4 text-dame-brown/70 leading-relaxed animate-fadeIn">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
