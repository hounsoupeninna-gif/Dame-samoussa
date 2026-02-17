
import React from 'react';

const AutomationView: React.FC = () => {
  const automations = [
    {
      title: "Email 1 : Confirmation Immédiate (Hormozi Style)",
      subject: "C'est confirmé ! Votre anniversaire va être légendaire 🎉",
      content: `Salut [Prénom],

C’est Dame Samoussa.

Félicitations. Vous venez de prendre la meilleure décision pour votre anniversaire. Pendant que d'autres stresseront en cuisine, vous, vous serez en train de briller.

Voici ce qui se passe maintenant :
1. Notre chef a reçu votre commande.
2. Nous sélectionnons les meilleurs ingrédients frais demain matin.
3. Votre créneau est verrouillé.

Préparez-vous à recevoir les compliments de tous vos invités. Ils vont vous demander : "Mais où as-tu trouvé ces snacks ?"

À très vite pour le festin,
L'équipe Dame Samoussa`
    },
    {
      title: "Script WhatsApp : Rappel J-1",
      subject: "Confirmation de livraison pour demain",
      content: `Bonjour [Nom] ! 👋 Ici Dame Samoussa. 

Votre Pack VIP est en cours de préparation artisanale. 👩‍🍳 
Tout est prêt pour demain vers [Heure]. 

Confirmez-moi juste par un "OK" que vous êtes toujours disponible à cette adresse : [Adresse]. 

On a hâte de vous régaler ! 🥟✨`
    },
    {
      title: "Email 2 : Offre de Fidélité (Post-Anniversaire)",
      subject: "Alors, ce gâteau ? 🎂",
      content: `Bonjour [Prénom],

On espère que vous avez passé un moment inoubliable ! 

Toute l'équipe se demandait si vos invités avaient tout fini... (généralement, il ne reste pas une miette).

Parce qu'on vous adore, voici un cadeau de remerciement :
-15% sur votre prochaine commande avec le code : VIPFOREVER

Valable sur tous nos plateaux événementiels.

Dites-nous quel a été votre snack préféré en répondant à cet email !`
    }
  ];

  return (
    <div className="pt-32 pb-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-dame-brown font-title">Stratégie d'Automation Marketing</h1>
        <p className="mb-12 text-gray-600 italic">Copywriting conçu pour maximiser la rétention et l'engagement émotionnel.</p>
        
        <div className="space-y-12">
          {automations.map((a, i) => (
            <div key={i} className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-dame-beige/20 p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-dame-brown">{a.title}</h3>
                <p className="text-sm text-dame-orange font-semibold mt-1">Objet : {a.subject}</p>
              </div>
              <div className="p-8">
                <pre className="whitespace-pre-wrap font-sans text-gray-700 leading-relaxed bg-gray-50 p-6 rounded-xl border border-gray-100">
                  {a.content}
                </pre>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutomationView;
