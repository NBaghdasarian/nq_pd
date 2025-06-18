import React from 'react';
import { CheckCircle } from 'lucide-react';
import SlideArrowIndicator from './SlideArrowIndicator';

interface PricingPlanProps {
  title: string;
  price: string;
  period: string;
  features: string[];
  isPrimary?: boolean;
}

const PricingPlan: React.FC<PricingPlanProps> = ({ title, price, period, features, isPrimary = false }) => {
  return (
    <div 
      className={`p-6 rounded-xl border ${
        isPrimary 
          ? 'bg-neoquant-accent/20 border-neoquant-accent/40' 
          : 'bg-white/5 border-white/10'
      } transform transition-all hover:-translate-y-1 hover:shadow-lg`}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="flex items-end mb-4">
        <span className="text-3xl font-bold">{price}</span>
        {period && <span className="text-neoquant-light ml-1">/{period}</span>}
      </div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <CheckCircle size={16} className="text-green-500 mr-2" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const BusinessModelSlide: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="max-w-5xl w-full animate-slide-up">
        <h2 className="text-4xl font-bold mb-2">5. Business Model</h2>
        <div className="w-20 h-1 bg-neoquant-accent mb-8"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PricingPlan 
            title="Freemium"
            price="$0"
            period=""
            features={[
              "Free basic backtesting",
              "Limited history",
              "Community support",
            ]}
          />
          
          <PricingPlan 
            title="Pro Subscription"
            price="$29-$299"
            period="month"
            features={[
              "Premium backtesting",
              "Demo trading",
              "Live deployment",
              "Full market history",
              "Advanced features",
              "Priority support"
            ]}
            isPrimary
          />
          
          <PricingPlan 
            title="Enterprise"
            price="Custom"
            period=""
            features={[
              "White-label solutions",
              "Volume trading",
              "Dedicated support",
              "Custom integrations",
              "SLA guarantees",
              "API access"
            ]}
          />
        </div>
        
                
        <div className="bg-white/5 border border-white/10 p-6 rounded-xl mt-8">
          <p className="text-xl text-neoquant-light">
            <span className="font-semibold text-neoquant-accent">Opportunity:</span> As NeoQuant evolves, it is positioned to become the world's leading quant research AI - capable of being "hired" by other companies, funds, and institutions to power their own trading, research, and automation. This opens up a massive B2B and licensing market beyond the core platform.
          </p>
        </div>
      </div>
      <SlideArrowIndicator />
    </div>
  );
};

export default BusinessModelSlide;
