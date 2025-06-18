
import React from 'react';
import { Users, TrendingUp, Briefcase } from 'lucide-react';
import SlideArrowIndicator from './SlideArrowIndicator';

const MarketOpportunitySlide: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="max-w-5xl w-full animate-slide-up">
        <h2 className="text-4xl font-bold mb-2">4. Market Opportunity</h2>
        <div className="w-20 h-1 bg-neoquant-accent mb-8"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white/5 border border-white/10 p-6 rounded-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-neoquant-accent/10 rounded-full blur-2xl"></div>
            <TrendingUp className="text-neoquant-accent mb-4" size={32} />
            <h3 className="text-2xl font-bold mb-2">$3T+</h3>
            <p className="text-neoquant-light relative z-10">Assets traded daily across crypto, forex, and equities</p>
          </div>
          
          <div className="bg-white/5 border border-white/10 p-6 rounded-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-neoquant-accent/10 rounded-full blur-2xl"></div>
            <Users className="text-neoquant-accent mb-4" size={32} />
            <h3 className="text-2xl font-bold mb-2">300M+</h3>
            <p className="text-neoquant-light relative z-10">Retail traders globally</p>
          </div>
          
          <div className="bg-white/5 border border-white/10 p-6 rounded-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-neoquant-accent/10 rounded-full blur-2xl"></div>
            <Briefcase className="text-neoquant-accent mb-4" size={32} />
            <h3 className="text-2xl font-bold mb-2">Growing</h3>
            <p className="text-neoquant-light relative z-10">Demand for no-code trading tools</p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-neoquant-dark to-neoquant-dark/80 p-8 rounded-xl border border-white/10">
          <h3 className="text-2xl font-semibold mb-4">Market Trends</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-neoquant-accent rounded-full mr-2"></div>
                <p>Surging demand for automation and no-code tools</p>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-neoquant-accent rounded-full mr-2"></div>
                <p>Institutions seeking cost-efficient strategy deployment</p>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-neoquant-accent rounded-full mr-2"></div>
                <p>Growing adoption of algorithmic trading</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-neoquant-accent rounded-full mr-2"></div>
                <p>Expanding crypto market with millions of new users</p>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-neoquant-accent rounded-full mr-2"></div>
                <p>Rise of no-code platforms across industries</p>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-neoquant-accent rounded-full mr-2"></div>
                <p>Retail traders seeking professional-grade tools</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SlideArrowIndicator />
    </div>
    

  );
};

export default MarketOpportunitySlide;
