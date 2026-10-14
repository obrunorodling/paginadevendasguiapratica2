import React from 'react';
import { Compass, Lightbulb } from 'lucide-react';

export const LostReadingSection: React.FC = () => {
  return (
    <section className="bg-[#DFD3BE] text-[#2C2926] py-14 px-4 border-b border-[#CEBF9F]">
      <div className="max-w-3xl mx-auto text-center">
        <div className="w-12 h-12 rounded-full bg-[#CEBD9C] text-[#5A4518] flex items-center justify-center mx-auto mb-4 shadow-xs">
          <Lightbulb className="w-6 h-6 text-amber-900" />
        </div>

        <h2 className="font-cinzel text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#1E1B18] mb-4">
          «El objetivo no es estudiar más por obligación. <br />
          <span className="italic">Es estudiar mejor, con más claridad y propósito.»</span>
        </h2>

        <p className="text-xs sm:text-sm md:text-base text-[#473F35] leading-relaxed max-w-2xl mx-auto font-normal">
          Muchos creyentes intentan leer la Biblia acumulando información o forzándose a leer 5 capítulos al día, solo para terminar desmotivados. La <strong className="font-semibold text-[#1F1C18]">Guía Práctica para Comprender la Biblia</strong> te enseña la regla del pasaje pequeño y las 5 preguntas que abren las Escrituras con asombro y reverencia.
        </p>
      </div>
    </section>
  );
};
