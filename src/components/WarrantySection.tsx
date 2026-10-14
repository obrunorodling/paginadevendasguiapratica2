import React from 'react';
import { IMAGES } from '../data/content';
import { ShieldCheck } from 'lucide-react';

export const WarrantySection: React.FC = () => {
  return (
    <section className="bg-white text-[#2C2926] py-16 md:py-24 px-4 border-b border-[#E8E0D0]">
      <div className="max-w-xl mx-auto text-center">
        {/* Gold Seal Image */}
        <div className="w-28 sm:w-36 h-28 sm:h-36 mx-auto mb-6 relative">
          <img
            src={IMAGES.sealWarranty}
            alt="Sello Garantía 100% 7 Días"
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain filter drop-shadow-md"
          />
        </div>

        {/* Title */}
        <h2 className="font-cinzel text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1A1816] mb-3">
          Garantía Incondicional de 7 Días
        </h2>

        <h3 className="font-cinzel text-base sm:text-xl font-bold text-stone-700 mb-5">
          ¿Aún tienes dudas? Tu compra está 100% protegida.
        </h3>

        {/* Guarantee text */}
        <div className="text-xs sm:text-sm md:text-base text-[#574F46] leading-relaxed space-y-3 max-w-lg mx-auto">
          <p>
            Queremos que leas la <strong>Guía Práctica para Comprender la Biblia</strong> con total tranquilidad. Si en los próximos <strong>7 días</strong> sientes que el método no te ayudó a leer y comprender las Escrituras con mayor claridad, simplemente solicita el reembolso total.
          </p>
          <p>
            Sin preguntas ni explicaciones. Recibes el 100% de tu dinero de vuelta de inmediato.
          </p>
        </div>

        <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 px-4 py-2 rounded-none border border-emerald-200">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Prueba el Método MAPA 5D con Riesgo Cero</span>
        </div>
      </div>
    </section>
  );
};
