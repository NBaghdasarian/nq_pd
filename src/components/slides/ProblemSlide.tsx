import React from 'react';
import { CircleDashed, Code2, Layers, Zap } from 'lucide-react';
import SlideArrowIndicator from './SlideArrowIndicator';

const ProblemSlide: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 relative">
      <div className="max-w-5xl w-full animate-slide-up">
        <h2 className="text-4xl font-bold mb-2">1. Problem</h2>
        <div className="w-20 h-1 bg-neoquant-accent mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Complexity & Accessibility */}
          <div className="bg-neoquant-light/5 border border-neoquant-light/10 p-6 rounded-xl flex flex-col items-center text-center">
            <div className="mb-4 p-3 bg-neoquant-accent/20 rounded-full">
              <Code2 size={32} className="text-neoquant-accent" />
            </div>
            <h3 className="text-xl font-bold mb-3">Complexity & Accessibility</h3>
            <ul className="list-disc list-inside text-base space-y-2 text-neoquant-light text-left">
              <li>Most traders lack coding skills, making algorithmic trading inaccessible.</li>
              <li>Existing tools are designed for developers, not for intuitive, idea-driven users.</li>
              <li>Steep learning curves discourage experimentation and innovation.</li>
            </ul>
          </div>
          {/* Fragmented & Inefficient Workflow */}
          <div className="bg-neoquant-light/5 border border-neoquant-light/10 p-6 rounded-xl flex flex-col items-center text-center">
            <div className="mb-4 p-3 bg-neoquant-accent/20 rounded-full">
              <Layers size={32} className="text-neoquant-accent" />
            </div>
            <h3 className="text-xl font-bold mb-3"> Inefficient Workflow</h3>
            <ul className="list-disc list-inside text-base space-y-2 text-neoquant-light text-left">
              <li>Creating, testing, and deploying strategies requires juggling multiple platforms.</li>
              <li>Manual processes and tool-switching waste time and introduce errors.</li>
              <li>Slow iteration cycles hinder rapid strategy improvement.</li>
            </ul>
          </div>
          {/* Barriers to Speed & Real-World Impact */}
          <div className="bg-neoquant-light/5 border border-neoquant-light/10 p-6 rounded-xl flex flex-col items-center text-center">
            <div className="mb-4 p-3 bg-neoquant-accent/20 rounded-full">
              <Zap size={32} className="text-neoquant-accent" />
            </div>
            <h3 className="text-xl font-bold mb-3">Barriers to Scale</h3>
            <ul className="list-disc list-inside text-base space-y-2 text-neoquant-light text-left">
              <li>Backtesting and optimization are slow, repetitive, and often require external tools.</li>
              <li>Transitioning from backtest to live trading is cumbersome and delayed.</li>
              <li>Scaling strategies quickly is nearly impossible for most traders.</li>
            </ul>
          </div>
        </div>
        {/* Summary section */}
        <div className="bg-neoquant-light/5 border border-neoquant-light/10 p-6 rounded-xl">
          <div className="flex items-start">
            <CircleDashed className="text-neoquant-accent mt-1 mr-3 flex-shrink-0" />
            <p className="text-xl">
              The trading industry needs accessible tools that bridge the gap between ideas and implementation, empowering traders of all skill levels.
            </p>
          </div>
        </div>
      </div>
      <SlideArrowIndicator />
    </div>
  );
};

export default ProblemSlide;
