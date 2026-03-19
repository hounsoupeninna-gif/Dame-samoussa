
import React, { useState } from 'react';
import { WhatsAppIcon, CheckIcon } from '../constants';
import { OrderDetails, UserData } from '../types';

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxcSt_jXRRqUDqkfVfH3lDLZejVQhrxPL85eTPM55OJaoCdLsmFGIOFYA9COnI17qir/exec';

const sendToSheets = (userData: UserData) => {
  const params = new URLSearchParams({
    name: userData.name,
    whatsapp: userData.whatsapp,
    email: userData.email || '',
    eventType: userData.eventType,
    eventDate: userData.eventDate,
    quartier: userData.quartier,
    packName: userData.packName,
    packTotal: userData.packTotal.toString(),
  });
  new Image().src = `${APPS_SCRIPT_URL}?${params.toString()}`;
};

interface OrderPageProps {
  orderDetails: OrderDetails;
  onSubmit: (userData: UserData) => void;
  onBack: () => void;
}

const EVENT_TYPES = ['Anniversaire', 'Mariage', 'Baptême', 'Conférence / Séminaire', 'Soirée privée', 'Autre'];
const QUARTIERS = ['Cotonou Centre', 'Akpakpa', 'Fidjrossè', 'Cadjèhoun', 'Agla', 'Calavi', 'Godomey', 'Zogbohouè', 'Autre'];

const MTN_MOMO_NUMBER = '+229 67 82 32 34';

const OrderPage: React.FC<OrderPageProps> = ({ orderDetails, onSubmit, onBack }) => {
  const [form, setForm] = useState({
    name: '',
    whatsapp: '',
    email: '',
    eventType: '',
    eventDate: '',
    quartier: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Veuillez entrer votre nom complet.';
    if (!form.whatsapp.trim() || form.whatsapp.replace(/\D/g, '').length < 8)
      e.whatsapp = 'Numéro WhatsApp invalide.';
    if (form.email && !/\S+@\S+\.\S+/.test(form.email))
      e.email = 'Adresse email invalide.';
    if (!form.eventType) e.eventType = 'Choisissez un type d\'événement.';
    if (!form.eventDate) e.eventDate = 'Choisissez une date.';
    if (!form.quartier) e.quartier = 'Choisissez votre quartier.';
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(prev => ({ ...prev, [e.target.name]: '' }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(true);
    const userData: UserData = {
      name: form.name.trim(),
      whatsapp: form.whatsapp.trim(),
      email: form.email.trim(),
      eventType: form.eventType,
      eventDate: form.eventDate,
      quartier: form.quartier,
      packName: orderDetails.packName,
      packTotal: orderDetails.total,
    };
    sendToSheets(userData);
    setTimeout(() => onSubmit(userData), 300);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="pt-40 pb-24 bg-dame-white min-h-screen">
      <div className="container mx-auto px-4 max-w-2xl">

        {/* En-tête */}
        <div className="text-center mb-10">
          <span className="inline-block bg-dame-orange/10 text-dame-orange font-bold px-5 py-2 rounded-full text-xs uppercase tracking-widest border border-dame-orange/20 mb-4">
            Étape finale
          </span>
          <h2 className="font-title text-3xl md:text-4xl text-dame-brown mb-3 leading-tight">
            Complétez votre réservation
          </h2>
          <p className="text-dame-brown/55 text-base">
            Remplissez ce formulaire et nous vous contactons sous 5 minutes.
          </p>
        </div>

        {/* Récap commande */}
        <div className="bg-dame-brown rounded-2xl px-6 py-5 flex items-center justify-between mb-8">
          <div>
            <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-0.5">Votre commande</p>
            <p className="text-white font-bold text-lg">{orderDetails.packName}</p>
          </div>
          <div className="text-right">
            <p className="text-dame-orange font-bold text-2xl">{orderDetails.total.toLocaleString('fr-FR')}</p>
            <p className="text-white/50 text-sm font-semibold">F CFA</p>
          </div>
        </div>

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl border border-dame-beige/40 p-8 md:p-10 space-y-6">

          {/* Nom */}
          <div>
            <label className="block text-sm font-bold text-dame-brown mb-2">
              Nom complet <span className="text-dame-orange">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Ex : Fifamè Adagbenon"
              className={`w-full border rounded-xl px-4 py-3.5 text-dame-brown placeholder-dame-brown/30 focus:outline-none focus:ring-2 focus:ring-dame-orange/40 transition-all ${errors.name ? 'border-red-400 bg-red-50' : 'border-dame-beige focus:border-dame-orange'}`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1.5">{errors.name}</p>}
          </div>

          {/* WhatsApp */}
          <div>
            <label className="block text-sm font-bold text-dame-brown mb-2">
              Numéro WhatsApp <span className="text-dame-orange">*</span>
            </label>
            <input
              type="tel"
              name="whatsapp"
              value={form.whatsapp}
              onChange={handleChange}
              placeholder="+229 67 XX XX XX"
              className={`w-full border rounded-xl px-4 py-3.5 text-dame-brown placeholder-dame-brown/30 focus:outline-none focus:ring-2 focus:ring-dame-orange/40 transition-all ${errors.whatsapp ? 'border-red-400 bg-red-50' : 'border-dame-beige focus:border-dame-orange'}`}
            />
            {errors.whatsapp && <p className="text-red-500 text-xs mt-1.5">{errors.whatsapp}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-bold text-dame-brown mb-2">
              Email <span className="text-dame-brown/30 font-normal">(optionnel)</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="vous@exemple.com"
              className={`w-full border rounded-xl px-4 py-3.5 text-dame-brown placeholder-dame-brown/30 focus:outline-none focus:ring-2 focus:ring-dame-orange/40 transition-all ${errors.email ? 'border-red-400 bg-red-50' : 'border-dame-beige focus:border-dame-orange'}`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email}</p>}
          </div>

          {/* Type d'événement */}
          <div>
            <label className="block text-sm font-bold text-dame-brown mb-2">
              Type d'événement <span className="text-dame-orange">*</span>
            </label>
            <select
              name="eventType"
              value={form.eventType}
              onChange={handleChange}
              className={`w-full border rounded-xl px-4 py-3.5 text-dame-brown focus:outline-none focus:ring-2 focus:ring-dame-orange/40 transition-all bg-white appearance-none ${errors.eventType ? 'border-red-400 bg-red-50' : 'border-dame-beige focus:border-dame-orange'} ${!form.eventType ? 'text-dame-brown/30' : ''}`}
            >
              <option value="" disabled>Choisir le type d'événement</option>
              {EVENT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
            {errors.eventType && <p className="text-red-500 text-xs mt-1.5">{errors.eventType}</p>}
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-bold text-dame-brown mb-2">
              Date de l'événement <span className="text-dame-orange">*</span>
            </label>
            <input
              type="date"
              name="eventDate"
              value={form.eventDate}
              min={today}
              onChange={handleChange}
              className={`w-full border rounded-xl px-4 py-3.5 text-dame-brown focus:outline-none focus:ring-2 focus:ring-dame-orange/40 transition-all ${errors.eventDate ? 'border-red-400 bg-red-50' : 'border-dame-beige focus:border-dame-orange'}`}
            />
            {errors.eventDate && <p className="text-red-500 text-xs mt-1.5">{errors.eventDate}</p>}
          </div>

          {/* Quartier */}
          <div>
            <label className="block text-sm font-bold text-dame-brown mb-2">
              Quartier de livraison <span className="text-dame-orange">*</span>
            </label>
            <select
              name="quartier"
              value={form.quartier}
              onChange={handleChange}
              className={`w-full border rounded-xl px-4 py-3.5 text-dame-brown focus:outline-none focus:ring-2 focus:ring-dame-orange/40 transition-all bg-white appearance-none ${errors.quartier ? 'border-red-400 bg-red-50' : 'border-dame-beige focus:border-dame-orange'} ${!form.quartier ? 'text-dame-brown/30' : ''}`}
            >
              <option value="" disabled>Choisir votre quartier</option>
              {QUARTIERS.map(q => <option key={q} value={q}>{q}</option>)}
            </select>
            {errors.quartier && <p className="text-red-500 text-xs mt-1.5">{errors.quartier}</p>}
          </div>

          {/* Paiement MTN MoMo */}
          <div className="bg-[#FFF8E7] border border-[#FFD700]/40 rounded-2xl p-5">
            <p className="text-xs font-bold text-dame-brown uppercase tracking-widest mb-3">Mode de paiement</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#FFD700' }}>
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" style={{ color: '#0A0A0A' }}>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
                </svg>
              </div>
              <div>
                <p className="font-bold text-dame-brown text-sm">MTN Mobile Money uniquement</p>
                <p className="text-dame-brown/55 text-xs mt-0.5">Numéro MoMo : <strong className="text-dame-brown">{MTN_MOMO_NUMBER}</strong></p>
                <p className="text-dame-brown/40 text-xs mt-0.5">Nous vous enverrons les instructions sur WhatsApp.</p>
              </div>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={submitted}
            className="w-full inline-flex items-center justify-center gap-3 bg-dame-orange text-white font-bold text-lg py-5 rounded-2xl shadow-xl shadow-dame-orange/30 hover:-translate-y-0.5 smooth-transition disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {submitted ? (
              <>
                <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="40" strokeDashoffset="10" /></svg>
                Envoi en cours…
              </>
            ) : (
              <>
                <WhatsAppIcon className="w-5 h-5" />
                Confirmer ma réservation
              </>
            )}
          </button>

          <button
            type="button"
            onClick={onBack}
            className="w-full text-dame-brown/40 text-sm font-medium hover:text-dame-brown smooth-transition"
          >
            ← Retour
          </button>
        </form>

        {/* Réassurance */}
        <div className="grid grid-cols-3 gap-4 mt-8 text-center">
          {[
            { icon: '🔒', label: 'Données sécurisées' },
            { icon: '⚡', label: 'Réponse < 5 min' },
            { icon: '✅', label: 'Satisfaction garantie' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border border-dame-beige/40 p-4">
              <div className="text-2xl mb-1">{item.icon}</div>
              <p className="text-dame-brown/60 text-xs font-semibold">{item.label}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default OrderPage;
