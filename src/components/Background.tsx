import React from 'react';
import { Settings, Wrench, Zap, Cog, Cpu, CircuitBoard } from 'lucide-react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated Gears - More Dynamic */}
      <div className="absolute top-20 left-10 animate-spin-slow opacity-5">
        <Settings className="w-24 h-24 text-blue-300" />
      </div>
      <div className="absolute top-40 right-20 animate-spin-reverse opacity-5">
        <Cog className="w-16 h-16 text-blue-400" />
      </div>
      <div className="absolute bottom-40 left-20 animate-spin-slow opacity-5">
        <Settings className="w-32 h-32 text-blue-300" />
      </div>
      <div className="absolute bottom-20 right-10 animate-spin-reverse opacity-5">
        <Cog className="w-20 h-20 text-blue-400" />
      </div>
      <div className="absolute top-1/2 left-1/4 animate-spin-slow opacity-5">
        <CircuitBoard className="w-28 h-28 text-blue-300" />
      </div>
      
      {/* Moving Circuit Elements */}
      <div className="absolute top-60 left-1/4 animate-float opacity-10">
        <Wrench className="w-12 h-12 text-blue-500" />
      </div>
      <div className="absolute top-80 right-1/3 animate-pulse opacity-10">
        <Zap className="w-14 h-14 text-blue-400" />
      </div>
      <div className="absolute bottom-60 right-1/4 animate-float opacity-10">
        <Cpu className="w-16 h-16 text-blue-500" />
      </div>
      
      {/* Flowing Circuit Lines */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-5" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1e40af" />
            </linearGradient>
          </defs>
          <path
            d="M100,200 L300,200 L300,400 L500,400 L500,600 L700,600"
            stroke="url(#circuitGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M200,100 L200,300 L400,300 L400,500 L600,500 L600,700"
            stroke="url(#circuitGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: '1s' }}
          />
          <circle cx="300" cy="200" r="4" fill="#3b82f6" className="animate-ping" />
          <circle cx="500" cy="400" r="4" fill="#3b82f6" className="animate-ping" style={{ animationDelay: '0.5s' }} />
          <circle cx="400" cy="300" r="4" fill="#3b82f6" className="animate-ping" style={{ animationDelay: '1.5s' }} />
        </svg>
      </div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-3"></div>
    </div>
  );
};

export default Background;