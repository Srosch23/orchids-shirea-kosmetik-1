'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

export function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const STORAGE_KEY = 'byonik-promo-dismissed';

  useEffect(() => {
    const isDismissed = localStorage.getItem(STORAGE_KEY);
    if (!isDismissed) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem(STORAGE_KEY, 'true');
  };

  const handleWhatsApp = () => {
    const phoneNumber = '<DEINE_NUMMER_IM_INTERNATIONALEN_FORMAT>';
    const message = encodeURIComponent(
      'Hi, ich interessiere mich für das BYONIK® Laser Angebot für 139 €. Ist noch ein Termin frei?'
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        aria-hidden="true"
      />

      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white transition-all shadow-md"
          aria-label="Schließen"
        >
          <X className="h-5 w-5 text-gray-700" />
        </button>

        <div className="p-8 md:p-12 text-center">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              BYONIK® Laser – Angebot
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Exklusives Angebot – jetzt direkt per WhatsApp anfragen.
            </p>
          </div>

          <div className="mb-8 py-6 px-4 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl">
            <div className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-600 to-rose-600">
              139 €
            </div>
            <div className="mt-2 text-gray-600 text-sm">
              BYONIK® LIFT PTL FACIAL • 75 Minuten
            </div>
          </div>

          <button
            onClick={handleWhatsApp}
            className="w-full py-4 px-6 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
          >
            Jetzt per WhatsApp anfragen
          </button>

          <p className="mt-6 text-xs text-gray-500">
            Limitierte Verfügbarkeit • Nur für kurze Zeit
          </p>
        </div>
      </div>
    </div>
  );
}
