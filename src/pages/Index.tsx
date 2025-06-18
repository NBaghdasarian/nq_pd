
import React, { useEffect } from 'react';
import PitchDeck from '@/components/PitchDeck';
import { Toaster } from "sonner";

const Index: React.FC = () => {
  // Add styles to make the PDF container properly sized
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      #pdf-slide-container {
        position: fixed; 
        z-index: -9999;
        pointer-events: none;
      }
      #pdf-slide-container .slide-content {
        width: 1200px !important;
        height: 675px !important;
        background-color: black;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-neoquant-dark to-neoquant-dark/80">
      <PitchDeck />
      <Toaster position="bottom-center" richColors closeButton />
    </div>
  );
};

export default Index;
