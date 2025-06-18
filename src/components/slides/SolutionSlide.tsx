import React from 'react';
import { MessageSquareText, BarChart, Rocket, CheckCircle, TrendingUp, ExternalLink } from 'lucide-react';
import SlideArrowIndicator from './SlideArrowIndicator';

const SolutionSlide: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="max-w-5xl w-full animate-slide-up">
        <h2 className="text-4xl font-bold mb-2">2. Solution</h2>
        <div className="w-20 h-1 bg-neoquant-accent mb-8"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-neoquant-dark/80 to-neoquant-dark border border-neoquant-light/10 p-8">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-neoquant-accent/20 rounded-full blur-3xl"></div>
            <div className="flex items-center mb-6">
              <h3 className="text-3xl font-semibold relative z-10">Neo<span className="text-green-500">Quant</span></h3>
            </div>
            <p className="text-xl mb-6 relative z-10">
              The first no-code backtesting and deployment platform powered by Natural Language Processing (NLP).
            </p>
            <div className="space-y-6 relative z-10">
              <div className="flex items-start">
                <MessageSquareText className="text-neoquant-accent mr-3 mt-1 flex-shrink-0" />
                <p className="text-xl">Write your trading ideas in plain English.</p>
              </div>
              <div className="flex items-start">
                <BarChart className="text-neoquant-green mr-3 mt-1 flex-shrink-0" />
                <p className="text-xl">Instantly backtest strategies across markets.</p>
              </div>
              <div className="flex items-start">
                <Rocket className="text-neoquant-accent mr-3 mt-1 flex-shrink-0" />
                <p className="text-xl">Demo trade and deploy to wallets and exchanges — no coding, no barriers.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-black/30 rounded-2xl border border-neoquant-light/10 p-6 flex flex-col justify-center min-h-[420px]">
            <div className="flex items-start mb-4">
              <div className="bg-white/80 text-black px-4 py-2 rounded-2xl rounded-bl-none shadow-md max-w-[80%]">
                Buy ETH when 50 SMA crosses above 200 SMA. Use 5% Stop Loss and 10% Take Profit.
              </div>
            </div>
            <div className="flex items-start mb-4">
              <div className="bg-neoquant-light/10 text-neoquant-light px-4 py-3 rounded-2xl rounded-tl-none shadow-md w-full">
                <div className="flex items-center mb-2">
                  
                  <span className="font-semibold text-neoquant-accent">NeoQuant</span>
                </div>
                <div className="mb-2">
                  <span className="font-semibold">Strategy Parsed:</span>
                  <ul className="ml-4 mt-1 text-sm list-disc">
                    <li>Asset: <span className="text-white">ETH</span></li>
                    <li>Buy: <span className="text-white">50 SMA crosses above 200 SMA</span></li>
                    <li>Sell: <span className="text-white">50 SMA crosses below 200 SMA</span></li>
                    <li>Stop Loss: <span className="text-white">5%</span></li>
                    <li>Take Profit: <span className="text-white">10%</span></li>
                  </ul>
                </div>
                <div className="mb-2">
                  <span className="font-semibold">Backtest Results:</span>
                  <div className="grid grid-cols-2 gap-2 mt-1 text-sm">
                    <div className="bg-black/20 p-2 rounded-lg">
                      <TrendingUp className="inline-block mr-1 text-neoquant-accent" size={16} />
                      <span className="text-white">Profit: +87.4%</span>
                    </div>
                    <div className="bg-black/20 p-2 rounded-lg">
                      <CheckCircle className="inline-block mr-1 text-neoquant-green" size={16} />
                      <span className="text-white">Win Rate: 68%</span>
                    </div>
                    <div className="bg-black/20 p-2 rounded-lg">
                      <span className="text-white">Max Drawdown: 23%</span>
                    </div>
                    <div className="bg-black/20 p-2 rounded-lg">
                      <span className="text-white">Sharpe Ratio: 1.15</span>
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <span className="font-semibold">Ready for:</span>
                  <span className="ml-2 inline-flex items-center gap-2">
                    <span className="bg-neoquant-accent/20 text-neoquant-accent px-2 py-1 rounded-full text-xs flex items-center"><Rocket size={14} className="mr-1" /> Demo Trading</span>
                    <span className="bg-neoquant-green/20 text-neoquant-green px-2 py-1 rounded-full text-xs flex items-center"><ExternalLink size={14} className="mr-1" /> Live Deployment</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="text-center mt-4 text-neoquant-light/70 text-xs">
              From idea to backtest in seconds — all in one chat.
            </div>
          </div>
        </div>
      </div>
      <SlideArrowIndicator />
    </div>
  );
};

export default SolutionSlide;
