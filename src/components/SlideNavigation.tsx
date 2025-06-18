
import React from 'react';
import { exportToPDF } from '@/utils/exportPDF';

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onNavigate: (index: number) => void;
}

const SlideNavigation: React.FC<SlideNavigationProps> = ({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  onNavigate,
}) => {
  return (
    <div className="fixed bottom-4 left-0 right-0 flex items-center justify-center px-6 z-30">
      <div className="flex space-x-1 items-center">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onNavigate(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              currentSlide === index 
                ? 'bg-neoquant-accent scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SlideNavigation;
