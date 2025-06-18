
import React from 'react';

interface NeoQuantLogoProps {
  size?: number;
  className?: string;
}

const NeoQuantLogo: React.FC<NeoQuantLogoProps> = ({ size = 40, className = "" }) => {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <div className="absolute inset-0 rounded-full bg-neoquant-dark border border-neoquant-light/20"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-end h-[60%] space-x-1">
          <div className="w-[15%] h-[40%] bg-neoquant-green rounded-t-sm"></div>
          <div className="w-[15%] h-[70%] bg-neoquant-accent rounded-t-sm"></div>
          <div className="w-[15%] h-[100%] bg-neoquant-green rounded-t-sm"></div>
          <div className="w-[15%] h-[60%] bg-neoquant-accent rounded-t-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default NeoQuantLogo;
