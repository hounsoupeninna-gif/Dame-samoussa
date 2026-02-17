
import React, { useState } from 'react';

interface OrderPageProps {
  orderDetails: any;
  onConfirm: (userData: any) => void;
}

const OrderPage: React.FC<OrderPageProps> = ({ orderDetails, onConfirm }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    birthday: '',
    city: 'Dakar',
    address: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirm(formData);
  };

  return (
    <div className="pt-32 pb-12 bg-dame-white min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-3xl font-bold text-dame-brown mb-8 text-center">Finalisez votre réservation VIP</h1>
        
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-dame-beige/30">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-dame-orange text-white flex items-center justify-center text-sm">1</span>
                Vos informations
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-dame-brown mb-1 italic">Nom complet</label>
                    <input 
                      required
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border border-dame-beige focus:ring-2 focus:ring-dame-orange outline-none transition-all"
                      placeholder="Ex: Fatou Diome"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-dame-brown mb-1 italic">Email</label>
                    <input 
                      required
                      type="email" 
                      className="w-full px-4 py-3 rounded-xl border border-dame-beige focus:ring-2 focus:ring-dame-orange outline-none transition-all"
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-dame-brown mb-1 italic">Téléphone (WhatsApp)</label>
                  <input 
                    required
                    type="tel" 
                    className="w-full px-4 py-3 rounded-xl border border-dame-beige focus:ring-2 focus:ring-dame-orange outline-none transition-all"
                    placeholder="+221 ..."
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-dame-brown mb-1 italic">Date de l'événement</label>
                    <input 
                      required
                      type="date" 
                      className="w-full px-4 py-3 rounded-xl border border-dame-beige focus:ring-2 focus:ring-dame-orange outline-none transition-all"
                      value={formData.birthday}
                      onChange={e => setFormData({...formData, birthday: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-dame-brown mb-1 italic">Ville</label>
                    <select 
                      className="w-full px-4 py-3 rounded-xl border border-dame-beige focus:ring-2 focus:ring-dame-orange outline-none transition-all"
                      value={formData.city}
                      onChange={e => setFormData({...formData, city: e.target.value})}
                    >
                      <option>Dakar</option>
                      <option>Saint-Louis</option>
                      <option>Thies</option>
                      <option>Mbour</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-dame-brown mb-1 italic">Adresse précise de livraison</label>
                  <textarea 
                    required
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-dame-beige focus:ring-2 focus:ring-dame-orange outline-none transition-all"
                    placeholder="Quartier, rue, villa..."
                    value={formData.address}
                    onChange={e => setFormData({...formData, address: e.target.value})}
                  ></textarea>
                </div>

                <div className="mt-8 pt-8 border-t border-dame-beige/50">
                   <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-dame-orange text-white flex items-center justify-center text-sm">2</span>
                    Paiement Mobile Money
                  </h3>
                  <div className="bg-dame-beige/10 p-4 rounded-xl border-2 border-dashed border-dame-brown/20 space-y-3">
                    <p className="text-sm font-semibold">Instructions :</p>
                    <ol className="text-xs space-y-2 text-dame-brown/80 list-decimal pl-4">
                      <li>Envoyez le montant total au <strong className="text-dame-orange font-bold">77 000 00 00</strong> (Orange Money / Wave)</li>
                      <li>Indiquez votre nom en référence</li>
                      <li>Une fois le transfert effectué, cliquez sur le bouton ci-dessous</li>
                    </ol>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-dame-orange text-white py-5 rounded-2xl font-bold text-xl shadow-lg shadow-dame-orange/40 hover:scale-105 transition-all mt-8"
                >
                  Confirmer ma réservation VIP
                </button>
              </form>
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-2">
            <div className="bg-dame-brown text-white p-8 rounded-3xl shadow-xl sticky top-32">
              <h3 className="text-2xl font-bold mb-8 italic">Votre Panier VIP</h3>
              <div className="space-y-6 mb-8">
                {orderDetails.basePack && (
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold">Pack Anniversaire VIP</p>
                      <p className="text-xs opacity-60">8 personnes + Bonus</p>
                    </div>
                    <span className="font-semibold">23 000 F</span>
                  </div>
                )}
                {orderDetails.premiumPack && (
                  <div className="flex justify-between items-start text-dame-orange-light">
                    <div>
                      <p className="font-bold">UPGRADE PREMIUM</p>
                      <p className="text-xs opacity-60">50 pers + Décoration</p>
                    </div>
                    <span className="font-semibold">175 000 F</span>
                  </div>
                )}
                {orderDetails.snackTray && (
                  <div className="flex justify-between items-start text-dame-beige">
                    <div>
                      <p className="font-bold">Plateau Découverte</p>
                      <p className="text-xs opacity-60">20 pièces mixtes</p>
                    </div>
                    <span className="font-semibold">5 000 F</span>
                  </div>
                )}
              </div>
              
              <div className="pt-6 border-t border-white/10 space-y-4">
                <div className="flex justify-between text-lg">
                  <span>Sous-total</span>
                  <span>{orderDetails.total} F</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-dame-orange-light border-t border-white/10 pt-4">
                  <span>TOTAL À PAYER</span>
                  <span className="text-2xl">{orderDetails.total} F CFA</span>
                </div>
              </div>

              <div className="mt-12 flex flex-col items-center gap-4">
                <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
                  <span className="text-xs font-bold border px-2 py-1 rounded">WAVE</span>
                  <span className="text-xs font-bold border px-2 py-1 rounded">ORANGE MONEY</span>
                </div>
                <p className="text-[10px] text-center opacity-40">Transaction sécurisée via Mobile Money Sénégal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
