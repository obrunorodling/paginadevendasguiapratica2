import React from 'react';
import { BONUSES } from '../data/content';
import { Gift, Calendar, BookOpen, HelpCircle, Users, Clock, Sparkles } from 'lucide-react';

interface BonusesSectionProps {
  onCtaClick?: () => void;
}

export const BonusesSection: React.FC<BonusesSectionProps> = () => {
  const getBonusIcon = (iconName: string) => {
    switch (iconName) {
      case 'book-open':
        return <BookOpen className="w-5 h-5 text-blue-700" />;
      case 'help-circle':
        return <HelpCircle className="w-5 h-5 text-amber-700" />;
      case 'clock':
        return <Clock className="w-5 h-5 text-rose-700" />;
      case 'users':
        return <Users className="w-5 h-5 text-purple-700" />;
      case 'calendar':
        return <Calendar className="w-5 h-5 text-emerald-700" />;
      default:
        return <Gift className="w-5 h-5 text-amber-700" />;
    }
  };

  return (
    <section className="bg-white text-[#2C2926] py-16 md:py-24 px-4 border-b border-[#E8E0D0]">
      <div className="max-w-5xl mx-auto text-center">
        {/* Badge & Title */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-stone-100 text-stone-800 text-xs font-semibold mb-3">
          <Gift className="w-4 h-4 text-stone-600" />
          <span>Regalos Especiales Incluidos con tu Orden Hoy</span>
        </div>

        <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#1A1816] mb-3">
          ¡5 BONOS EXCLUSIVOS POR <br className="hidden sm:inline" />
          TIEMPO LIMITADO!
        </h2>

        <p className="text-xs sm:text-sm text-[#5C554D] max-w-xl mx-auto leading-relaxed mb-8 sm:mb-12">
          Al adquirir la <strong className="text-[#1A1816]">Guía Práctica para Comprender la Biblia</strong> hoy,
          recibirás <strong className="text-[#18A957]">totalmente GRATIS</strong> este paquete complementario
          de 5 herramientas para acelerar tu aprendizaje:
        </p>

        {/* 5 Bonus Cards em Destaque — Imagens Grandes, Sem Descrição, Apenas o Nome */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto mb-12">
          {BONUSES.map((bonus, index) => (
            <div
              key={bonus.id}
              className={`bg-[#FAF7F2] rounded-none p-5 sm:p-6 border border-[#E8DFD0] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group ${
                index === 4 ? 'sm:col-span-2 lg:col-span-1 lg:col-start-2' : ''
              }`}
            >
              {/* Imagem do Bônus em Grande Formato */}
              <div className="w-full h-64 sm:h-72 md:h-80 flex items-center justify-center p-2 mb-4">
                {bonus.image ? (
                  <img
                    src={bonus.image}
                    alt={bonus.title}
                    referrerPolicy="no-referrer"
                    className="max-h-full max-w-full object-contain drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-none bg-white border border-stone-200 flex items-center justify-center shadow-sm">
                    {getBonusIcon(bonus.iconName)}
                  </div>
                )}
              </div>

              {/* Identificação e Nome do Bônus (sem descrição) */}
              <div className="w-full pt-3 border-t border-[#E8DFD0]">
                <span className="block font-extrabold text-xs text-[#C68D25] uppercase tracking-wider mb-1.5">
                  BONO {bonus.id}
                </span>

                <h3 className="font-bold text-base sm:text-lg text-[#1A1816] leading-snug mb-2">
                  {bonus.title}
                </h3>

                <div className="flex items-center justify-center gap-2 text-xs">
                  <span className="text-red-500 line-through font-semibold">
                    {bonus.originalValue}
                  </span>
                  <span className="text-[#18A957] font-extrabold bg-emerald-50 px-2 py-0.5 rounded-none border border-emerald-200">
                    HOY GRATIS
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Value Banner */}
        <div className="bg-[#FAF6F0] border-2 border-dashed border-[#D6C4A2] rounded-none p-6 sm:p-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-amber-600" />
            <span className="font-cinzel font-extrabold text-xl sm:text-2xl text-[#1A1816]">
              ¡Todo este paquete valorado en más de $66 USD...
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#4D4740] max-w-lg mx-auto mb-3">
            ¡Aprovecha esta oportunidad para adquirir la Guía Práctica y los 5 libros complementarios con precio especial de lanzamiento!
          </p>

          <p className="text-xs sm:text-sm font-bold text-[#18A957] uppercase tracking-wide">
            100% GRATIS al ordenar el libro hoy
          </p>
        </div>
      </div>
    </section>
  );
};
