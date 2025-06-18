import React from 'react';
import { MessageSquare, LineChart, Sparkles, ExternalLink, ShieldCheck } from 'lucide-react';
import SlideArrowIndicator from './SlideArrowIndicator';

interface ProductFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ProductFeature: React.FC<ProductFeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-neoquant-light/5 backdrop-blur-sm border border-neoquant-light/10 p-6 rounded-xl hover:bg-neoquant-light/10 transition-all">
      <div className="bg-neoquant-accent/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-neoquant-light/80">{description}</p>
    </div>
  );
};

const ProductOverviewSlide: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="max-w-5xl w-full animate-slide-up">
        <h2 className="text-4xl font-bold mb-2">3. Product Overview</h2>
        <div className="w-20 h-1 bg-neoquant-accent mb-8"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <ProductFeature 
            icon={<MessageSquare size={24} className="text-neoquant-accent" />}
            title="Natural Language Strategy Builder"
            description="Create complex trading strategies using plain English commands - no coding required."
          />
          <ProductFeature 
            icon={<LineChart size={24} className="text-neoquant-green" />}
            title="Backtesting Engine"
            description="Test strategies across crypto, forex, and stocks with comprehensive performance metrics."
          />
          <ProductFeature 
            icon={<Sparkles size={24} className="text-neoquant-accent" />}
            title="Demo Trading"
            description="Simulate trading on real-time market data before risking actual capital."
          />
          <ProductFeature 
            icon={<ExternalLink size={24} className="text-neoquant-green" />}
            title="Live Deployment"
            description="Connect directly to wallets and brokerage accounts with seamless integrations."
          />
          <ProductFeature 
            icon={<ShieldCheck size={24} className="text-neoquant-accent" />}
            title="Risk Management"
            description="Built-in safeguards and position sizing to protect your capital during live trading."
          />
          <ProductFeature 
            icon={<Sparkles size={24} className="text-neoquant-green" />}
            title="Auto-Optimization"
            description="AI-powered tools to refine and enhance your trading strategies for better performance."
          />
        </div>
        
        <div className="bg-neoquant-accent/20 p-6 rounded-xl border border-neoquant-accent/30 mt-8">
          <p className="text-xl text-center">
            <span className="font-semibold">NeoQuant</span> transforms trading strategy development from a 
            technical challenge to a simple conversation, making algorithmic trading accessible to everyone.
          </p>
        </div>
      </div>
      <SlideArrowIndicator />
    </div>
  );
};

export default ProductOverviewSlide;
