import React, { useState } from 'react';
import SlideNavigation from './SlideNavigation';
import TitleSlide from './slides/TitleSlide';
import ProblemSlide from './slides/ProblemSlide';
import SolutionSlide from './slides/SolutionSlide';
import ProductOverviewSlide from './slides/ProductOverviewSlide';
import MarketOpportunitySlide from './slides/MarketOpportunitySlide';
import BusinessModelSlide from './slides/BusinessModelSlide';
import CompetitiveSlide from './slides/CompetitiveSlide';
import FreedomBrokerSlide from './slides/FreedomBrokerSlide';
import TractionSlide from './slides/TractionSlide';
import FundingSlide from './slides/FundingSlide';
import ThankYouSlide from './slides/ThankYouSlide';
import { Toaster } from "sonner"; 

const slides = [
  { id: 'title', component: TitleSlide },
  { id: 'problem', component: ProblemSlide },
  { id: 'solution', component: SolutionSlide },
  { id: 'product', component: ProductOverviewSlide },
  { id: 'market', component: MarketOpportunitySlide },
  { id: 'business', component: BusinessModelSlide },
  { id: 'competitive', component: CompetitiveSlide },
  { id: 'traction', component: TractionSlide },
  { id: 'funding', component: FundingSlide },
  { id: 'freedom-broker', component: FreedomBrokerSlide },
  { id: 'thank-you', component: ThankYouSlide },
];

const PitchDeck: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  };

  const handleNavigate = (index: number) => {
    setCurrentSlide(index);
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrevious();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Get current slide component
  const CurrentSlide = slides[currentSlide].component;

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-neoquant-dark to-neoquant-dark/90 text-neoquant-light">
      {/* Create hidden slides for PDF export with proper styling */}
      <div id="pdf-slide-container" className="hidden">
        {slides.map((slide, index) => {
          const SlideComponent = slide.component;
          return (
            <div 
              key={`pdf-slide-${index}`} 
              id={`pdf-slide-${index}`}
              className="slide-content w-[1200px] h-[675px] bg-neoquant-dark overflow-hidden"
              style={{ 
                display: 'none',
                position: 'absolute', 
                top: 0,
                left: 0,
                visibility: 'hidden',
                opacity: 0
              }}
            >
              <SlideComponent />
            </div>
          );
        })}
      </div>

      {/* Visible current slide */}
      <div 
        className="transition-all duration-500 ease-in-out animate-fade-in slide-content"
        key={`slide-${currentSlide}`}
      >
        <CurrentSlide />
      </div>
      
      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onNavigate={handleNavigate}
      />
      
      {/* Remove duplicate Toaster - we already have one in the Index.tsx */}
    </div>
  );
};

export default PitchDeck;
