import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      title: 'Comprensión profunda',
      description: 'Entenderás el contexto histórico, geográfico y narrativo de cada pasaje sin confusiones.',
    },
    {
      title: 'Retención y claridad inmediata',
      description: 'El Método MAPA 5D te ayuda a organizar la información y recordar los principios con facilidad.',
    },
    {
      title: 'Aplicación espiritual responsable',
      description: 'Aprenderás a distinguir entre lo que el texto afirma explícitamente y lo que son meras suposiciones.',
    },
    {
      title: 'Recursos listos para enseñar',
      description: 'Estructuras claras para compartir la Palabra en tu iglesia, célula, familia o discipulado.',
    },
  ];

  return (
    <section className="bg-[#FAF7F2] text-[#2C2926] py-14 px-4 border-b border-[#E8E0D0]">
      <div className="max-w-2xl mx-auto text-center">
        {/* Title */}
        <h2 className="font-cinzel text-2xl sm:text-3xl font-bold tracking-tight text-[#1A1816] mb-8">
          Ventajas de usar el Método MAPA 5D
        </h2>

        {/* Benefits Cards */}
        <div className="space-y-3.5 text-left">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#EBECEE]/80 hover:bg-[#E2E4E8] rounded-none p-4 sm:p-5 flex items-start gap-3.5 transition-colors border border-slate-200/60"
            >
              <div className="flex-shrink-0 text-[#18A957] mt-0.5">
                <CheckCircle2 className="w-5 h-5 fill-[#18A957]/10" />
              </div>
              <div>
                <span className="font-bold text-sm sm:text-base text-[#1E232A] block sm:inline mr-1">
                  {benefit.title}:
                </span>
                <span className="text-xs sm:text-sm text-[#4E5460] leading-relaxed">
                  {benefit.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
