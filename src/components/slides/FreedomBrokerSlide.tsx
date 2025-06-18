import React from 'react';
import { Handshake, ArrowRightLeft } from 'lucide-react';
import SlideArrowIndicator from './SlideArrowIndicator';

const FreedomBrokerSlide: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="max-w-5xl w-full animate-slide-up">
        <h2 className="text-4xl font-bold mb-2 text-center"> 9. Strategic Partnership: <span className='text-green-500'> Freedom Broker</span> & Neo<span className="text-green-500">Quant</span></h2>
        <div className="w-20 h-1 bg-neoquant-accent mb-8 mx-auto"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Benefits for Freedom Broker */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-xl flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center"><Handshake className="text-neoquant-accent mr-2" size={22}/> Benefits for  Freedom Broker </h3>
              
              <ul className="space-y-3 text-base text-neoquant-light">
                <li><span className="font-bold text-neoquant-accent">Access to AI Trading Tools:</span> Exclusive features for your 20,000+ retail investors.</li>
                <li><span className="font-bold text-neoquant-accent">User Engagement & Retention:</span> Boost activity and loyalty with unique, value-added tools.</li>
                <li><span className="font-bold text-neoquant-accent">Brand Differentiation:</span> Stand out as the first to offer conversational, no-code quant tools.</li>
                <li><span className="font-bold text-neoquant-accent">Revenue Sharing & Upsell:</span> New premium features and subscription models.</li>
                <li><span className="font-bold text-neoquant-accent">Thought Leadership:</span> Position as an innovator in fintech.</li>
                <li><span className="font-bold text-neoquant-accent">Increased Trading Volume:</span> More trades as users leverage AI-powered automation.</li>
                <li><span className="font-bold text-neoquant-accent">AI Assistant for Support:</span> Reduces need for advisory staff, lowering costs.</li>
                <li><span className="font-bold text-neoquant-accent">Strategic Investor Revenue:</span> Share in all NeoQuant revenue streams, not just from your own userbase.</li>
              </ul>
            </div>
           
          </div>
          {/* Expected Impact Example */}
          <div className="bg-neoquant-accent/10 border border-neoquant-accent/30 p-6 rounded-xl flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-center mb-4 text-white">Expected Impact Example</h3>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="bg-white/10 p-4 rounded-xl text-center">
                  <div className="text-lg font-bold text-neoquant-accent mb-1">+10%</div>
                  <div className="text-xs text-neoquant-light">Userbase Growth<br/>(+2,000 users)</div>
                </div>
                <div className="bg-white/10 p-4 rounded-xl text-center">
                  <div className="text-lg font-bold text-neoquant-accent mb-1">+1,000</div>
                  <div className="text-xs text-neoquant-light">New Customers<br/>($50K new revenue)</div>
                </div>
                <div className="bg-white/10 p-4 rounded-xl text-center">
                  <div className="text-lg font-bold text-neoquant-accent mb-1">+10%</div>
                  <div className="text-xs text-neoquant-light">Trade Volume Growth<br/>(+40,000 trades/year)</div>
                </div>
                <div className="bg-white/10 p-4 rounded-xl text-center">
                  <div className="text-lg font-bold text-neoquant-accent mb-1">$100K</div>
                  <div className="text-xs text-neoquant-light">Annual Trading Revenue<br/>(from extra trades)</div>
                </div>
                <div className="bg-white/10 p-4 rounded-xl text-center">
                  <div className="text-lg font-bold text-neoquant-accent mb-1">$150K</div>
                  <div className="text-xs text-neoquant-light">Annual Support Cost Savings<br/>(5 advisors)</div>
                </div>

                <div className="bg-white/10 p-4 rounded-xl text-center">
                  <div className="text-lg font-bold text-neoquant-accent mb-1"> <span className='text-green-500'>$300K+</span></div>
                  <div className="text-xs text-neoquant-light">Total Estimated Annual Benefits</div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-xs text-neoquant-light">
              <div className="mb-1 font-semibold text-neoquant-accent">Assumptions:</div>
              <ul className="list-disc ml-5">
               
                <li>Trading fee: $1.25 per trade</li>
                <li>20,000 users × 20 trades/year = 400,000 trades/year</li>
                <li>10% increase in trades = 440,000 trades/year (extra 40,000 trades)</li>
                <li>1,000 new customers × $50/year = $50,000 new revenue</li>
                <li>100 advisory/support employees, $30K avg. salary</li>
                <li>10% reduction in advisory roles = 5 positions saved</li>
              </ul>
            </div>

          </div>
        </div>
        <div className="bg-neoquant-accent/10 border border-neoquant-accent/30 p-6 rounded-xl text-center mt-4">
          <span className="text-base text-white font-semibold">Cooperation details, revenue models, and integration roadmap can be discussed and tailored to mutual goals.</span>
        </div>
      </div>
      <SlideArrowIndicator />
    </div>
  );
};

export default FreedomBrokerSlide; 