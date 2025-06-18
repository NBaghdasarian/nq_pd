import React from 'react';
import { ArrowRight } from 'lucide-react';

const SlideArrowIndicator: React.FC = () => (
  <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 opacity-70 animate-bounce pointer-events-none select-none">
    <ArrowRight className="w-10 h-10 text-green-500" />
  </div>
);

export default SlideArrowIndicator; 