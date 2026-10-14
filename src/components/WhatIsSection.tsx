import React from 'react';
import { Check } from 'lucide-react';

interface WhatIsSectionProps {
  onCtaClick?: () => void;
}

export const WhatIsSection: React.FC<WhatIsSectionProps> = () => {
  const points = [
    'Quieres comprender verdaderamente cada capítulo y versículo de la Biblia sin sentirte frustrado.',
    'Deseas un método claro y paso a paso para estudiar cualquier pasaje en solo 15 a 20 minutos al día.',
    'Buscas entender el contexto real (quién hablaba, en qué época y por qué) antes de sacar conclusiones.',
    'Quieres enseñar y compartir la Palabra con tu familia, iglesia, célula o discipulado con total seguridad.',
    'Te cansaste de leer la Biblia por obligación y deseas disfrutar de una lectura viva, profunda y transformadora.',
  ];

  return (
    <section className="bg-[#EFE8D9] text-[#2D2A26] py-16 md:py-24 px-4 border-b border-[#DFD5C0]">
      <div className="max-w-3xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1A1816] mb-6">
          ¿Qué es la Guía Práctica?
        </h2>

        {/* Narrative paragraph */}
        <p className="text-base sm:text-lg text-[#4A453F] leading-relaxed mb-12 max-w-2xl mx-auto">
          Es una herramienta práctica y estructurada diseñada para enseñarte a estudiar cualquier pasaje de las Escrituras con contexto, profundidad y conexión. A través del Método MAPA 5D, aprenderás a hacer las preguntas correctas para que la Palabra de Dios hable con toda su riqueza y poder a tu vida.
        </p>

        {/* Feature Box (Container com border-radius: 0px) */}
        <div className="bg-white rounded-none p-6 sm:p-10 shadow-lg border border-[#E5DAC6] max-w-xl mx-auto mb-10 text-left">
          <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1F1C18] text-center mb-6">
            Este material es para ti si:
          </h3>

          <ul className="space-y-4">
            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-3.5">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#EBF3FF] flex items-center justify-center mt-0.5 text-[#3267E3]">
                  <Check className="w-4 h-4 stroke-[2.5]" />
                </div>
                <span className="text-sm sm:text-base text-[#3A352F] leading-snug font-medium">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
