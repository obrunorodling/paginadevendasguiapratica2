import React, { useState, useRef } from 'react';
import { useMockup } from '../context/MockupContext';
import { X, Upload, Link2, Image as ImageIcon, RotateCcw, Check } from 'lucide-react';

export const MockupUploaderModal: React.FC = () => {
  const { mockupImage, setMockupImage, resetMockupImage, isUploaderOpen, closeUploader } = useMockup();
  const [urlInput, setUrlInput] = useState('');
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [activeTab, setActiveTab] = useState<'upload' | 'url'>('upload');
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isUploaderOpen) return null;

  const currentEffective = previewImage || mockupImage;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setErrorMsg('Por favor, selecione um arquivo de imagem válido (PNG, JPG, WEBP).');
      return;
    }

    // Limit file size to 10MB
    if (file.size > 10 * 1024 * 1024) {
      setErrorMsg('A imagem é muito grande. Escolha uma imagem de até 10MB.');
      return;
    }

    setErrorMsg('');
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      setPreviewImage(result);
    };
    reader.readAsDataURL(file);
  };

  const handleApplyUrl = () => {
    if (!urlInput.trim()) {
      setErrorMsg('Insira o link da imagem.');
      return;
    }
    setErrorMsg('');
    setPreviewImage(urlInput.trim());
  };

  const handleSave = () => {
    if (previewImage) {
      setMockupImage(previewImage);
    }
    closeUploader();
  };

  const handleReset = () => {
    resetMockupImage();
    setPreviewImage(null);
    setUrlInput('');
    closeUploader();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#181512] text-white rounded-none border border-amber-500/40 shadow-2xl overflow-hidden my-6">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-none bg-amber-500/20 text-[#E5B558] flex items-center justify-center">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-cinzel text-base sm:text-lg font-bold text-white">
                Adicionar Mockup do Produto
              </h3>
              <p className="text-xs text-stone-400">
                Personalize a imagem principal em toda a página de vendas
              </p>
            </div>
          </div>

          <button
            onClick={closeUploader}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-stone-300 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-5 sm:p-6 space-y-5">
          {/* Method tabs */}
          <div className="flex rounded-none bg-black/40 p-1 border border-white/10 text-xs font-semibold">
            <button
              type="button"
              onClick={() => {
                setActiveTab('upload');
                setErrorMsg('');
              }}
              className={`flex-1 py-2 rounded-none flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'upload'
                  ? 'bg-[#E5B558] text-black shadow-md font-bold'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Enviar do Computador</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab('url');
                setErrorMsg('');
              }}
              className={`flex-1 py-2 rounded-none flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'url'
                  ? 'bg-[#E5B558] text-black shadow-md font-bold'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              <Link2 className="w-3.5 h-3.5" />
              <span>Colar Link da Imagem</span>
            </button>
          </div>

          {/* Tab 1: Upload */}
          {activeTab === 'upload' && (
            <div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-amber-500/40 hover:border-amber-400 rounded-none p-6 text-center cursor-pointer transition-colors bg-white/5 hover:bg-white/10"
              >
                <div className="w-12 h-12 rounded-full bg-amber-500/10 text-[#E5B558] flex items-center justify-center mx-auto mb-3">
                  <Upload className="w-6 h-6" />
                </div>
                <span className="text-sm font-bold text-white block mb-1">
                  Clique aqui para selecionar seu mockup
                </span>
                <span className="text-xs text-stone-400 block">
                  Formatos suportados: PNG, JPG, WEBP (Mockup 3D com fundo transparente ou escuro)
                </span>
              </div>
            </div>
          )}

          {/* Tab 2: URL */}
          {activeTab === 'url' && (
            <div className="space-y-2">
              <label className="block text-xs font-medium text-stone-300">
                URL da Imagem do Mockup:
              </label>
              <div className="flex gap-2">
                <input
                  type="url"
                  placeholder="https://exemplo.com/meu-mockup.png"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  className="flex-1 px-3.5 py-2.5 text-xs sm:text-sm rounded-none border border-white/20 bg-black/50 text-white focus:outline-none focus:ring-2 focus:ring-[#E5B558]"
                />
                <button
                  type="button"
                  onClick={handleApplyUrl}
                  className="px-4 py-2 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 rounded-none text-xs font-bold border border-amber-500/40 cursor-pointer"
                >
                  Carregar
                </button>
              </div>
            </div>
          )}

          {/* Error Message */}
          {errorMsg && (
            <div className="p-3 rounded-none bg-red-900/30 border border-red-500/40 text-red-300 text-xs">
              {errorMsg}
            </div>
          )}

          {/* Live Preview Box */}
          <div className="border border-white/10 rounded-none p-4 bg-black/40 text-center">
            <span className="text-xs text-stone-400 block mb-2 font-medium">
              Prévia do Mockup Atual:
            </span>
            <div className="max-h-56 overflow-hidden rounded-none bg-stone-900/80 p-2 flex items-center justify-center">
              <img
                src={currentEffective}
                alt="Prévia do Mockup"
                className="max-h-48 w-auto object-contain mx-auto rounded-none drop-shadow-md"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between gap-3 pt-2">
            <button
              type="button"
              onClick={handleReset}
              className="px-4 py-2.5 rounded-none border border-white/20 text-xs font-semibold text-stone-400 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Restaurar Padrão</span>
            </button>

            <button
              type="button"
              onClick={handleSave}
              className="px-6 py-2.5 bg-[#18A957] hover:bg-[#15944c] active:scale-[0.98] text-white font-bold text-xs sm:text-sm rounded-none transition-all duration-200 cta-green-shadow flex items-center gap-1.5 cursor-pointer"
            >
              <Check className="w-4 h-4" />
              <span>Aplicar na Página</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
