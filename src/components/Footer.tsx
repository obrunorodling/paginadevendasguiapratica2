import React from 'react';
import { Lock, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#18191B] text-[#9E9EA0] py-12 px-4 text-center text-xs border-t border-neutral-800">
      <div className="max-w-2xl mx-auto space-y-4">
        {/* Brand (fonte com serifa Cinzel) */}
        <div className="font-cinzel text-lg font-bold tracking-[0.14em] text-[#ECEFF3]">
          GUÍA PRÁCTICA PARA COMPRENDER LA BIBLIA
        </div>

        {/* Security badges */}
        <div className="flex items-center justify-center gap-4 text-[11px] text-stone-400">
          <span className="flex items-center gap-1">
            <Lock className="w-3.5 h-3.5 text-emerald-400" /> Compra 100% Segura y Encriptada
          </span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Garantía de Reembolso
          </span>
        </div>

        {/* Disclaimer */}
        <p className="text-[#786F62] leading-relaxed max-w-lg mx-auto">
          Este sitio no está afiliado con Facebook, Instagram, Google ni ninguna de sus entidades.
          Todos los derechos reservados. El contenido es un material digital educativo y teológico.
        </p>

        {/* Copyright */}
        <div className="pt-4 border-t border-stone-800 text-[11px] text-[#635B50] flex items-center justify-center">
          <span>© {new Date().getFullYear()} Guía Práctica para Comprender la Biblia. Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  );
};
