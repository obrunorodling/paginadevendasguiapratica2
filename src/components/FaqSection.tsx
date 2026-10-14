import React, { useState } from 'react';
import { FAQS } from '../data/content';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  // Questions start closed until user clicks
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggle = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="bg-white text-[#2C2926] py-16 md:py-24 px-4 border-b border-[#E8E0D0]">
      <div className="max-w-2xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mx-auto mb-3">
            <HelpCircle className="w-5 h-5" />
          </div>
          <h2 className="font-cinzel text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1A1816]">
            Preguntas Frecuentes (FAQ)
          </h2>
        </div>

        {/* Questions list */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndices.includes(index);
            return (
              <div
                key={index}
                className="border border-[#E5DAC6] rounded-none overflow-hidden transition-all bg-[#FAF7F2]"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4 hover:bg-[#F5EFE3] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-bold text-base sm:text-lg text-[#1A1816] leading-snug">
                    {faq.question}
                  </h3>
                  <div
                    className={`flex-shrink-0 w-7 h-7 rounded-full bg-white flex items-center justify-center text-stone-600 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-amber-100 text-amber-900' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-[#574F46] leading-relaxed border-t border-[#EDE4D2] pt-3 bg-white/70">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
