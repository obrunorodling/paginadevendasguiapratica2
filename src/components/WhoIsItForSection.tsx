import React from 'react';
import { WHO_CAN_USE } from '../data/content';

interface WhoIsItForSectionProps {
  onCtaClick?: () => void;
}

export const WhoIsItForSection: React.FC<WhoIsItForSectionProps> = () => {
  return (
    <section className="relative bg-[#1D1E20] text-white py-16 md:py-24 px-4 overflow-hidden border-b border-[#2D3035]">
      {/* Background subtle radial texture */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Title */}
        <span className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.2em] text-[#ECEFF3] uppercase block mb-2">
          VERSATILIDAD Y APLICACIÓN
        </span>
        <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-12">
          ¿Para Quién es la Guía Práctica?
        </h2>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 text-left">
          {WHO_CAN_USE.map((item, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-none bg-white shadow-xl transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Photo */}
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              {/* Bottom Label Box */}
              <div className="p-5 bg-white text-[#211E1B]">
                <h3 className="font-bold text-base sm:text-lg text-[#1A1816] mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5C554D] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
