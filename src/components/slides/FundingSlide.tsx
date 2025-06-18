import React from 'react';
import { PieChart, DollarSign, TrendingUp, Lock, Code, Brain, Zap, MessageSquare } from 'lucide-react';
import SlideArrowIndicator from './SlideArrowIndicator';

const FundingSlide: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="max-w-6xl w-full animate-slide-up">
        <h2 className="text-4xl font-bold mb-2">8. Roadmap & Funding </h2>
        <div className="w-20 h-1 bg-neoquant-accent mb-8"></div>
        
        <div className="bg-white/5 border border-white/10 p-8 rounded-xl mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative flex flex-col items-center justify-center">
              <div className="w-48 h-48 relative">
                {/* Simple pie chart visualization */}
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Development - 70% (Blue) */}
                  <circle 
                    cx="50" cy="50" r="45" fill="transparent" 
                    stroke="#3B82F6" strokeWidth="10" strokeDasharray="197.89 84.81" 
                    strokeDashoffset="0" transform="rotate(-90 50 50)" 
                  />
                  {/* Marketing - 10% (Green) */}
                  <circle 
                    cx="50" cy="50" r="45" fill="transparent" 
                    stroke="#10B981" strokeWidth="10" strokeDasharray="28.27 254.43" 
                    strokeDashoffset="-197.89" transform="rotate(-90 50 50)" 
                  />
                  {/* Operations - 10% (Yellow) */}
                  <circle 
                    cx="50" cy="50" r="45" fill="transparent" 
                    stroke="#F59E0B" strokeWidth="10" strokeDasharray="28.27 254.43" 
                    strokeDashoffset="-226.16" transform="rotate(-90 50 50)" 
                  />
                  {/* Other - 10% (Red) */}
                  <circle 
                    cx="50" cy="50" r="45" fill="transparent" 
                    stroke="#EF4444" strokeWidth="10" strokeDasharray="28.27 254.43" 
                    strokeDashoffset="-254.43" transform="rotate(-90 50 50)" 
                  />
                </svg>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <PieChart size={24} className="mx-auto text-neoquant-accent mb-1" />
                  <p className="text-sm font-semibold">Allocation</p>
                </div>
              </div>
              <div className="mt-4 text-center">
                <span className="text-2xl font-bold text-green-500">$350K</span>
                <div className="text-sm text-neoquant-light">Pre-Seed Round</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-500 mr-3"></div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Development (Team of 5)</span>
                    <span>70%</span>
                  </div>
                  <div className="text-sm text-neoquant-light">AI/LLM engine, product infrastructure, and team salaries</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 mr-3"></div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Marketing & SEO</span>
                    <span>10%</span>
                  </div>
                  <div className="text-sm text-neoquant-light">Digital marketing channels and search engine optimization</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-4 h-4 bg-yellow-500 mr-3"></div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Operations & Infrastructure</span>
                    <span>10%</span>
                  </div>
                  <div className="text-sm text-neoquant-light">Server costs and operational overhead</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-4 h-4 bg-red-500 mr-3"></div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Other</span>
                    <span>10%</span>
                  </div>
                  <div className="text-sm text-neoquant-light">Legal, compliance, and miscellaneous expenses</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Roadmap Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-semibold mb-6 text-center">Product Development Roadmap</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="bg-neoquant-accent rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mr-3">
                  1
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Phase 1: Core Engine</h4>
                  <p className="text-sm text-neoquant-light">6 Months</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Code size={16} className="text-neoquant-accent mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Advanced LLM model for comprehensive backtesting across all technical indicators</span>
                </div>
                <div className="flex items-start">
                  <Zap size={16} className="text-neoquant-accent mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Multi-market, multi-timeframe optimization engine</span>
                </div>
                <div className="flex items-start">
                  <TrendingUp size={16} className="text-neoquant-accent mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Demo & live trading integration with Freedom Broker API</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="bg-neoquant-accent rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mr-3">
                  2
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Phase 2: Intelligence</h4>
                  <p className="text-sm text-neoquant-light">6 Months</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Brain size={16} className="text-neoquant-accent mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">AI-powered pattern recognition across all markets and timeframes</span>
                </div>
                <div className="flex items-start">
                  <MessageSquare size={16} className="text-neoquant-accent mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Intelligent advisory model with market insights</span>
                </div>
                <div className="flex items-start">
                  <Zap size={16} className="text-neoquant-accent mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Hybrid technical + pattern-based strategy engine</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="bg-neoquant-accent rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mr-3">
                  3
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Phase 3: Innovation</h4>
                  <p className="text-sm text-neoquant-light">6 Months</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Code size={16} className="text-neoquant-accent mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Natural language to code conversion (any idea to executable strategy)</span>
                </div>
                <div className="flex items-start">
                  <TrendingUp size={16} className="text-neoquant-accent mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Advanced backtesting with machine learning optimization</span>
                </div>
                <div className="flex items-start">
                  <Zap size={16} className="text-neoquant-accent mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Comprehensive API development for third-party integrations</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SlideArrowIndicator />

      </div>
    </div>
  );
};

export default FundingSlide;
