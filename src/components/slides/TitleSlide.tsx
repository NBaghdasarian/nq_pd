import React from 'react';
import { ArrowRight } from 'lucide-react';

const TitleSlide: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-8 text-center slide-content bg-neoquant-dark text-neoquant-light overflow-hidden">
      {/* Subtle trading/AI background SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Trading chart lines */}
        <polyline points="0,700 200,600 400,650 600,500 800,550 1000,400 1200,450 1440,300" stroke="#3B82F6" strokeWidth="2" fill="none" />
        <polyline points="0,800 180,750 360,800 540,700 720,750 900,600 1080,650 1260,500 1440,600" stroke="#10B981" strokeWidth="2" fill="none" />
        {/* AI/Network motif */}
        <circle cx="300" cy="200" r="60" stroke="#F59E0B" strokeWidth="1.5" fill="none" />
        <circle cx="1200" cy="300" r="40" stroke="#EF4444" strokeWidth="1.5" fill="none" />
        <line x1="300" y1="200" x2="1200" y2="300" stroke="#F59E0B" strokeWidth="1" />
        <line x1="300" y1="200" x2="400" y2="650" stroke="#3B82F6" strokeWidth="1" />
        <line x1="1200" y1="300" x2="1000" y2="400" stroke="#EF4444" strokeWidth="1" />
      </svg>
      <div className="animate-slide-up relative z-10">
        <h1 className="text-7xl md:text-9xl font-bold mb-8">
          <span className="text-white">Neo</span>
          <span className="text-green-500">Q</span>
          <span className="text-green-500">uant</span>
          

          
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
          Empowering traders to build, test, and deploy strategies in minutes.
        </p>
      </div>
      {/* Arrow indicator at bottom right */}
      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 opacity-70 animate-bounce z-10">
        <ArrowRight className="w-10 h-10 text-green-500" />
      </div>
    </div>
  );
};

export default TitleSlide;
