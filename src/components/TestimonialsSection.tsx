import React from 'react';
import { TESTIMONIALS } from '../data/content';
import { Star, CheckCircle, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-white text-[#2C2926] py-16 md:py-24 px-4 border-b border-[#E8E0D0]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <span className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.2em] text-stone-500 uppercase block mb-2">
          RESULTADOS Y EXPERIENCIAS REALES
        </span>
        <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#1A1816] mb-3 text-balance">
          Más de 3.200 cristianos ya están transformando su estudio bíblico con nosotros
        </h2>

        <p className="text-xs sm:text-sm text-[#5C554D] max-w-xl mx-auto leading-relaxed mb-12">
          Testimonios reales de personas que ya viven una nueva experiencia espiritual gracias a este método.
        </p>

        {/* Static Grid of Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAF7F2] rounded-none p-6 border border-[#E8DFD0] shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-[#E6B34A] mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#E6B34A] stroke-none" />
                  ))}
                  <span className="ml-1 text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.2 rounded-full flex items-center gap-0.5">
                    <CheckCircle className="w-2.5 h-2.5" /> Verificado
                  </span>
                </div>

                <div className="text-xs font-bold text-amber-900 mb-2">
                  «{item.highlight}»
                </div>

                <p className="text-xs text-[#3A352E] leading-relaxed italic mb-6">
                  "{item.text}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-[#ECE2D2]">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-amber-100 border border-amber-200 flex-shrink-0">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-xs sm:text-sm text-[#1A1816]">
                    {item.name}
                  </h3>
                  <p className="text-[11px] text-[#6B6357]">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
