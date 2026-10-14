import React, { createContext, useContext, useState, useEffect } from 'react';
import { IMAGES } from '../data/content';

interface MockupContextType {
  mockupImage: string;
  setMockupImage: (img: string) => void;
  resetMockupImage: () => void;
  isUploaderOpen: boolean;
  openUploader: () => void;
  closeUploader: () => void;
}

const STORAGE_KEY = 'custom_product_mockup_v6';

const MockupContext = createContext<MockupContextType | undefined>(undefined);

export const MockupProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mockupImage, setMockupImageState] = useState<string>(IMAGES.bundle);

  useEffect(() => {
    // Clear legacy localStorage cache that prevented uploaded images from displaying
    try {
      localStorage.removeItem('custom_product_mockup');
      localStorage.removeItem('custom_product_mockup_v2');
      localStorage.removeItem('custom_product_mockup_v3');
      localStorage.removeItem('custom_product_mockup_v4');
      localStorage.removeItem('custom_product_mockup_v5');
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setMockupImageState(saved);
      }
    } catch (e) {
      console.warn('Could not read localStorage:', e);
    }
  }, []);

  const [isUploaderOpen, setIsUploaderOpen] = useState(false);

  const setMockupImage = (newImg: string) => {
    setMockupImageState(newImg);
    try {
      localStorage.setItem(STORAGE_KEY, newImg);
    } catch (e) {
      console.warn('Could not save to localStorage:', e);
    }
  };

  const resetMockupImage = () => {
    setMockupImageState(IMAGES.bundle);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.warn('Could not remove from localStorage:', e);
    }
  };

  return (
    <MockupContext.Provider
      value={{
        mockupImage,
        setMockupImage,
        resetMockupImage,
        isUploaderOpen,
        openUploader: () => setIsUploaderOpen(true),
        closeUploader: () => setIsUploaderOpen(false),
      }}
    >
      {children}
    </MockupContext.Provider>
  );
};

export const useMockup = () => {
  const context = useContext(MockupContext);
  if (!context) {
    throw new Error('useMockup must be used within a MockupProvider');
  }
  return context;
};
