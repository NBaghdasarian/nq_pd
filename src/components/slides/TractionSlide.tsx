import React from 'react';
import { Users, MessageSquare, Calendar, TrendingUp, Code, Brain, Zap } from 'lucide-react';
import SlideArrowIndicator from './SlideArrowIndicator';

const TractionSlide: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="max-w-6xl w-full animate-slide-up">
        <h2 className="text-4xl font-bold mb-2">7. Go-To-Market Strategy</h2>
        <div className="w-20 h-1 bg-neoquant-accent mb-8"></div>
        
        
        {/* Go-to-Market Strategy Section */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-neoquant-accent rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mr-3">1</div>
                  <div>
                    <h4 className="text-xl font-semibold">Community Launch</h4>
                    <p className="text-sm text-neoquant-light">Phase 1</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Users size={16} className="text-neoquant-accent mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Crypto & forex community outreach</span>
                  </div>
                  <div className="flex items-start">
                    <MessageSquare size={16} className="text-neoquant-accent mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Early access programs</span>
                  </div>
                  <div className="flex items-start">
                    <TrendingUp size={16} className="text-neoquant-accent mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Beta testing with select users</span>
                  </div>
                  <div className="ml-6 mt-2">
                    <span className="text-xs text-neoquant-light/80">Channels: YouTube, Slack, Discord</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-xs text-neoquant-green text-center">Building trust and engagement in grassroots communities</div>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-neoquant-accent rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mr-3">2</div>
                  <div>
                    <h4 className="text-xl font-semibold">Partnerships</h4>
                    <p className="text-sm text-neoquant-light">Phase 2</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Zap size={16} className="text-neoquant-accent mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Top exchanges integration</span>
                  </div>
                  <div className="flex items-start">
                    <Code size={16} className="text-neoquant-accent mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Brokerage partnerships</span>
                  </div>
                  <div className="flex items-start">
                    <TrendingUp size={16} className="text-neoquant-accent mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Seamless platform integration</span>
                  </div>
                  <div className="ml-6 mt-2">
                    <span className="text-xs text-neoquant-light/80">Influencer marketing, email marketing</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-xs text-neoquant-green text-center">Leveraging partner credibility for rapid user growth</div>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-neoquant-accent rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mr-3">3</div>
                  <div>
                    <h4 className="text-xl font-semibold">Content Marketing</h4>
                    <p className="text-sm text-neoquant-light">Phase 3</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MessageSquare size={16} className="text-neoquant-accent mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Educational webinars</span>
                  </div>
                  <div className="flex items-start">
                    <TrendingUp size={16} className="text-neoquant-accent mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Trading competitions</span>
                  </div>
                  <div className="flex items-start">
                    <Brain size={16} className="text-neoquant-accent mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Platform capability showcase</span>
                  </div>
                  <div className="ml-6 mt-2">
                    <span className="text-xs text-neoquant-light/80">Courses: Udemy, Coursera<br/>SEO, email marketing</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-xs text-neoquant-green text-center">Education-driven organic growth and authority building</div>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-neoquant-accent rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mr-3">4</div>
                  <div>
                    <h4 className="text-xl font-semibold">Institutional</h4>
                    <p className="text-sm text-neoquant-light">Phase 4</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Users size={16} className="text-neoquant-accent mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Prop trading firms</span>
                  </div>
                  <div className="flex items-start">
                    <TrendingUp size={16} className="text-neoquant-accent mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Family offices</span>
                  </div>
                  <div className="flex items-start">
                    <Zap size={16} className="text-neoquant-accent mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Hedge funds outreach</span>
                  </div>
                  <div className="ml-6 mt-2">
                    <span className="text-xs text-neoquant-light/80">Direct sales, industry events, whitepapers</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-xs text-neoquant-green text-center">Institutional trust and high-value client onboarding</div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-4 mb-10">
            <div className="flex flex-col items-center">
              <div className="w-full max-w-3xl">
                <div className="flex justify-between items-center text-xs text-neoquant-light/80">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-neoquant-accent mb-1 border-2 border-white"></div>
                    <span>Q4 2025</span>
                    <span className="font-semibold text-neoquant-accent">Community</span>
                  </div>
                  <div className="flex-1 h-1 bg-neoquant-accent/30 mx-1"></div>
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-neoquant-accent mb-1 border-2 border-white"></div>
                    <span>Q1 2026</span>
                    <span className="font-semibold text-neoquant-accent">Partnerships</span>
                  </div>
                  <div className="flex-1 h-1 bg-neoquant-accent/30 mx-1"></div>
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-neoquant-accent mb-1 border-2 border-white"></div>
                    <span>Q2 2026</span>
                    <span className="font-semibold text-neoquant-accent">Content</span>
                  </div>
                  <div className="flex-1 h-1 bg-neoquant-accent/30 mx-1"></div>
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-neoquant-accent mb-1 border-2 border-white"></div>
                    <span>Q3 2026</span>
                    <span className="font-semibold text-neoquant-accent">Institutional</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8 flex flex-col items-center">
          <div className="flex items-center gap-2 bg-neoquant-accent/10 px-6 py-3 rounded-2xl shadow-sm">
            <Users size={20} className="text-white" />
            <span className="text-base text-white font-semibold"> <span className='text-green-500'> Target: </span> Retail crypto/forex traders, small prop firms, and fintech enthusiasts.</span>
          </div>
        </div>

         

        </div>
      </div>
      <SlideArrowIndicator />
    </div>
  );
};

export default TractionSlide;
