import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import SlideArrowIndicator from './SlideArrowIndicator';

const CompetitiveSlide: React.FC = () => {
  const competitors = [
    { name: 'Traditional Quants', noCode: false, realTime: false, smartInsights: false, fullCycle: false },
    { name: 'Data Platforms', noCode: false, realTime: true, smartInsights: false, fullCycle: false },
    { name: 'QuantConnect', noCode: false, realTime: true, smartInsights: false, fullCycle: false },
    { name: 'MetaTrader', noCode: false, realTime: true, smartInsights: false, fullCycle: false },
    { name: 'TradingView', noCode: false, realTime: true, smartInsights: false, fullCycle: false },
    { name: 'NeoQuant', noCode: true, realTime: true, smartInsights: true, fullCycle: true },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="max-w-5xl w-full animate-slide-up">
        <h2 className="text-4xl font-bold mb-2">6. Competitive Landscape</h2>
        <div className="w-20 h-1 bg-neoquant-accent mb-8"></div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left py-4 px-6 bg-neoquant-light/5 border-b border-neoquant-light/10">Platform</th>
                <th className="py-4 px-6 bg-neoquant-light/5 border-b border-neoquant-light/10">No Code</th>
                <th className="py-4 px-6 bg-neoquant-light/5 border-b border-neoquant-light/10">Real-time Analysis</th>
                <th className="py-4 px-6 bg-neoquant-light/5 border-b border-neoquant-light/10">Smart Insights</th>
                <th className="py-4 px-6 bg-neoquant-light/5 border-b border-neoquant-light/10">Idea to Live Full Cycle</th>
              </tr>
            </thead>
            <tbody>
              {competitors.map((comp, index) => (
                <tr 
                  key={index}
                  className={comp.name === 'NeoQuant' ? 'bg-neoquant-accent/10 border-neoquant-accent/30' : ''}
                >
                  <td className={`py-4 px-6 border-b border-neoquant-light/10 ${comp.name === 'NeoQuant' ? 'font-semibold text-neoquant-accent' : ''}`}>
                    {comp.name}
                  </td>
                  <td className="py-4 px-6 border-b border-neoquant-light/10 text-center">
                    {comp.noCode ? 
                      <CheckCircle size={20} className="text-neoquant-green mx-auto" /> : 
                      <XCircle size={20} className="text-neoquant-accent mx-auto" />
                    }
                  </td>
                  <td className="py-4 px-6 border-b border-neoquant-light/10 text-center">
                    {comp.realTime ? 
                      <CheckCircle size={20} className="text-neoquant-green mx-auto" /> : 
                      <XCircle size={20} className="text-neoquant-accent mx-auto" />
                    }
                  </td>
                  <td className="py-4 px-6 border-b border-neoquant-light/10 text-center">
                    {comp.smartInsights ? 
                      <CheckCircle size={20} className="text-neoquant-green mx-auto" /> : 
                      <XCircle size={20} className="text-neoquant-accent mx-auto" />
                    }
                  </td>
                  <td className="py-4 px-6 border-b border-neoquant-light/10 text-center">
                    {comp.fullCycle ? 
                      <CheckCircle size={20} className="text-neoquant-green mx-auto" /> : 
                      <XCircle size={20} className="text-neoquant-accent mx-auto" />
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-lg text-neoquant-light leading-relaxed">
            While we offer unique capabilities, we see significant opportunities to partner with existing platforms. 
            NeoQuant can serve as an intelligent layer on top of current solutions.
          </p>
        </div>
      </div>
      <SlideArrowIndicator />
    </div>
  );
};

export default CompetitiveSlide;
