import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useMockup } from '../context/MockupContext';
import { IMAGES, CHECKOUT_URL } from '../data/content';

interface HeroProps {
  onCtaClick?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const { mockupImage } = useMockup();

  return (
    <section className="relative overflow-hidden bg-[#100D0B] text-white pt-[22px] sm:pt-[34px] md:pt-[42px] pb-8 sm:pb-16 border-b border-amber-900/30">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-screen pointer-events-none">
        <img
          src={IMAGES.cloudsBg}
          alt="Luz divina sobre las Escrituras"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-radial from-transparent via-[#100D0B]/85 to-[#100D0B] pointer-events-none" />

      <div className="relative z-10 w-[90%] max-w-5xl mx-auto px-0 sm:px-4 text-center">
        {/* 1. Headline (cores neutras e claras, uniforme, sem diferenciar cores) */}
        <h1 className="font-montserrat text-xl min-[360px]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.12] sm:leading-[1.15] text-white w-full max-w-4xl mx-auto mb-2 sm:mb-3 text-balance uppercase">
          COMPRENDE LA BIBLIA DE PRINCIPIO A FIN CON CLARIDAD, PROFUNDIDAD Y PODER ESPIRITUAL
        </h1>

        {/* 2. Mockup em destaque com tamanho aumentado */}
        <div className="relative w-full max-w-[340px] min-[360px]:max-w-[400px] sm:max-w-xl md:max-w-2xl mx-auto mb-3 sm:mb-5 group">
          <div className="absolute -inset-4 bg-gradient-to-t from-amber-600/25 to-transparent blur-3xl rounded-full opacity-80 pointer-events-none" />
          <div className="relative">
            <img
              src={mockupImage}
              alt="Kit Guía Práctica para Comprender la Biblia y 5 Bonos de Regalo"
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-72 min-[360px]:max-h-80 sm:max-h-96 md:max-h-[460px] lg:max-h-[520px] object-contain mx-auto transform transition-transform duration-500 group-hover:scale-[1.02] drop-shadow-2xl"
            />
          </div>
        </div>

        {/* 3. Subheadline (90% da largura, cores neutras e claras) */}
        <p className="text-sm min-[360px]:text-base sm:text-lg md:text-xl text-[#ECEFF3] w-full max-w-3xl mx-auto leading-tight sm:leading-snug mb-4 sm:mb-6 font-normal text-balance">
          Aprende un método sencillo en 5 dimensiones para estudiar cualquier pasaje bíblico con contexto, claridad histórica y profunda aplicación devocional.
        </p>

        {/* 4. Botão CTA */}
        <div className="w-full max-w-md sm:max-w-lg mx-auto">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full box-border inline-flex items-center justify-center gap-2 px-4 sm:px-8 py-3.5 sm:py-4 bg-[#18A957] hover:bg-[#15934c] text-white font-extrabold text-xs min-[360px]:text-sm sm:text-base md:text-lg rounded-full shadow-[0_10px_25px_-5px_rgba(24,169,87,0.45)] hover:shadow-[0_15px_30px_-5px_rgba(24,169,87,0.6)] transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 uppercase tracking-wider text-center"
          >
            <span>QUIERO COMPRENDER LA BIBLIA</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
          </a>

          <p className="text-[10px] sm:text-xs text-stone-300 mt-2 flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            <span>🔒 Acceso Inmediato</span>
            <span>•</span>
            <span>⚡ Garantía de 7 Días</span>
            <span>•</span>
            <span className="text-white font-bold">Por solo $6.90 USD</span>
          </p>
        </div>
      </div>
    </section>
  );
};
