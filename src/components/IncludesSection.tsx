import React from 'react';
import { useMockup } from '../context/MockupContext';
import { IMAGES } from '../data/content';
import { BookOpen, Layers, Clock, FileText, HelpCircle, Calendar, Users, Gift, CheckCircle } from 'lucide-react';

interface IncludesSectionProps {
  onCtaClick?: () => void;
}

export const IncludesSection: React.FC<IncludesSectionProps> = () => {
  const { mockupImage } = useMockup();

  const coreItems = [
    {
      title: 'Ebook Digital: Guía Práctica para Comprender la Biblia',
      description: 'Más de 120 páginas de enseñanza clara, directa y práctica, sin rodeos académicos. Disponible para leer al instante en celular, tablet, computadora o Kindle.',
      icon: <BookOpen className="w-5 h-5 text-amber-600" />,
      badge: 'Material Principal',
      badgeColor: 'text-amber-700 bg-amber-100',
    },
    {
      title: 'El Método MAPA 5D de Estudio Bíblico',
      description: 'Aprende a formular con precisión las 5 dimensiones clave: Quién, Cuándo, Dónde, Por Qué y Conexión en cualquier pasaje del Antiguo y Nuevo Testamento.',
      icon: <Layers className="w-5 h-5 text-blue-600" />,
      badge: 'Metodología Exclusiva',
      badgeColor: 'text-blue-700 bg-blue-100',
    },
    {
      title: 'El Proceso de Estudio en 10 Etapas',
      description: 'Una estructura paso a paso que te guía desde la preparación y lectura del texto hasta el análisis, resumen personal y aplicación espiritual genuina.',
      icon: <FileText className="w-5 h-5 text-emerald-600" />,
      badge: 'Guía Paso a Paso',
      badgeColor: 'text-emerald-700 bg-emerald-100',
    },
    {
      title: 'La Rutina de 20 Minutos al Día',
      description: 'Diseñada para creyentes ocupados que no disponen de horas libres pero desean un estudio diario consistente, edificante y transformador.',
      icon: <Clock className="w-5 h-5 text-rose-600" />,
      badge: 'Práctico & Rápido',
      badgeColor: 'text-rose-700 bg-rose-100',
    },
  ];

  const bonusItems = [
    {
      id: 1,
      title: 'Ficha de Estudio Bíblico — Crece en tu Fe',
      image: IMAGES.bonusFichaEstudio,
    },
    {
      id: 2,
      title: '50 Preguntas para Profundizar en Cualquier Pasaje Bíblico',
      image: IMAGES.bonusPreguntas,
    },
    {
      id: 3,
      title: 'Línea del Tiempo Bíblica: A Través de la Historia',
      image: IMAGES.bonusLineaTiempo,
    },
    {
      id: 4,
      title: 'Guía de los Principales Personajes Bíblicos',
      image: IMAGES.bonusPersonajes,
    },
    {
      id: 5,
      title: 'Desafío Bíblico Mapa 5D — 21 Días',
      image: IMAGES.bonusDesafio,
    },
  ];

  return (
    <section className="bg-[#FAF7F2] text-[#2C2926] py-16 md:py-24 px-4 border-b border-[#E8E0D0]">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1A1816] mb-4">
          ¿Qué incluye este Material Completo?
        </h2>

        {/* Subtitle description */}
        <p className="text-sm sm:text-base md:text-lg text-[#5A544C] max-w-xl mx-auto leading-relaxed mb-10">
          Al adquirir tu acceso hoy, recibirás de forma inmediata el libro principal y los 5 bonos complementarios:
        </p>

        {/* Big visual product shot */}
        <div className="max-w-md mx-auto mb-12">
          <img
            src={mockupImage}
            alt="Kit Guía Práctica para Comprender la Biblia"
            referrerPolicy="no-referrer"
            className="w-full h-auto object-contain drop-shadow-2xl mx-auto rounded-none"
          />
        </div>

        {/* Core Items Header */}
        <div className="text-left mb-3">
          <h3 className="font-cinzel text-base sm:text-lg font-bold text-stone-900 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-amber-600" />
            <span>El Contenido Principal del Libro:</span>
          </h3>
        </div>

        {/* Core items list */}
        <div className="space-y-3.5 mb-12 text-left">
          {coreItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-4 sm:p-5 rounded-none border border-[#ECE2D2] shadow-xs flex items-start gap-4 hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-none bg-stone-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                {item.icon}
              </div>
              <div className="flex-1">
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-none inline-block mb-1 ${item.badgeColor}`}>
                  {item.badge}
                </span>
                <h4 className="font-bold text-sm sm:text-base text-stone-900 mb-1 leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bonus Items Header */}
        <div className="text-left mb-6 pt-4 border-t border-[#E8DFD0]">
          <h3 className="font-cinzel text-lg sm:text-xl font-bold text-emerald-800 flex items-center gap-2">
            <Gift className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span>Los 5 Bonos de Regalo Incluidos Gratis:</span>
          </h3>
        </div>

        {/* Bonus items grid — Imagens grandes em destaque, sem descrição, apenas o nome */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 text-center">
          {bonusItems.map((item, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-none p-5 border border-emerald-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center group ${
                idx === 4 ? 'sm:col-span-2 lg:col-span-1 lg:col-start-2' : ''
              }`}
            >
              {/* Imagem do Bônus em Grande Formato */}
              <div className="w-full h-60 sm:h-64 md:h-72 flex items-center justify-center p-2 mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="max-h-full max-w-full object-contain drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Identificação e Nome do Bônus (sem descrição) */}
              <div className="w-full pt-3 border-t border-emerald-100">
                <span className="block font-extrabold text-xs text-[#C68D25] uppercase tracking-wider mb-1.5">
                  BONO {item.id}
                </span>

                <h4 className="font-bold text-sm sm:text-base text-stone-900 leading-snug mb-2">
                  {item.title}
                </h4>

                <span className="inline-block text-xs font-extrabold text-[#18A957] bg-emerald-50 px-2.5 py-1 rounded-none border border-emerald-200">
                  HOY GRATIS
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
