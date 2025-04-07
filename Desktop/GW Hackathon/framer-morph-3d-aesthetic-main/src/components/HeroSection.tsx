
import React from "react";
import ScrollAnimation from "./ScrollAnimation";
import { Shield, Zap, PieChart } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-[80vh] relative flex items-center justify-center pt-16 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-80 h-80 bg-najm-purple/30 rounded-full filter blur-[100px] -z-10" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-najm-blue/20 rounded-full filter blur-[80px] -z-10" />
      
      <div className="container mx-auto px-6 py-12 flex flex-col items-center text-center z-10">
        <ScrollAnimation>
          <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm mb-6">
            Cut through the noise with TrueScan
          </span>
        </ScrollAnimation>
        
        <ScrollAnimation delay={200}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            TRUE<br /><span className="text-gradient">SCAN</span>
          </h1>
        </ScrollAnimation>
        
        <ScrollAnimation delay={400}>
          <p className="text-lg text-white/70 mb-10 max-w-2xl">
            TrueScan employs cutting-edge AI to scan articles, headlines, and social media updates—checking for misinformation, identifying bias, 
            and providing you with an easy-to-understand credibility score. Stay up to date with content you can trust.
          </p>
        </ScrollAnimation>
        
        <ScrollAnimation delay={500}>
          <div className="flex flex-wrap justify-center gap-8 mt-6">
            {/* Vector-based feature highlights */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-najm-purple/20 flex items-center justify-center">
                <Shield className="h-5 w-5 text-najm-purple" />
              </div>
              <span className="text-white/80">Protection</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-najm-purple/20 flex items-center justify-center">
                <Zap className="h-5 w-5 text-najm-blue" />
              </div>
              <span className="text-white/80">Fast Analysis</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-najm-purple/20 flex items-center justify-center">
                <PieChart className="h-5 w-5 text-najm-purple" />
              </div>
              <span className="text-white/80">Accuracy</span>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={600}>
          {/* Hero vector illustration */}
          <div className="mt-12 max-w-lg mx-auto">
            <svg viewBox="0 0 400 200" className="w-full h-auto">
              <defs>
                <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6E59A5" />
                  <stop offset="100%" stopColor="#567FEA" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              
              {/* Large circuit board background */}
              <g opacity="0.2">
                <path d="M10,10 H390 V190 H10 Z" fill="none" stroke="url(#heroGradient)" strokeWidth="1" />
                <path d="M10,50 H390" stroke="url(#heroGradient)" strokeWidth="1" strokeDasharray="5,5" />
                <path d="M10,100 H390" stroke="url(#heroGradient)" strokeWidth="1" strokeDasharray="5,5" />
                <path d="M10,150 H390" stroke="url(#heroGradient)" strokeWidth="1" strokeDasharray="5,5" />
                <path d="M50,10 V190" stroke="url(#heroGradient)" strokeWidth="1" strokeDasharray="5,5" />
                <path d="M100,10 V190" stroke="url(#heroGradient)" strokeWidth="1" strokeDasharray="5,5" />
                <path d="M150,10 V190" stroke="url(#heroGradient)" strokeWidth="1" strokeDasharray="5,5" />
                <path d="M200,10 V190" stroke="url(#heroGradient)" strokeWidth="1" strokeDasharray="5,5" />
                <path d="M250,10 V190" stroke="url(#heroGradient)" strokeWidth="1" strokeDasharray="5,5" />
                <path d="M300,10 V190" stroke="url(#heroGradient)" strokeWidth="1" strokeDasharray="5,5" />
                <path d="M350,10 V190" stroke="url(#heroGradient)" strokeWidth="1" strokeDasharray="5,5" />
              </g>

              {/* Central document/shield icon */}
              <g transform="translate(150, 60)" filter="url(#glow)">
                <path d="M50,0 L100,15 V55 C100,75 80,90 50,95 C20,90 0,75 0,55 V15 L50,0z" 
                  fill="none" 
                  stroke="url(#heroGradient)" 
                  strokeWidth="2" />
                <rect x="25" y="25" width="50" height="50" rx="2" 
                  fill="none" 
                  stroke="url(#heroGradient)" 
                  strokeWidth="2" />
                <line x1="35" y1="40" x2="65" y2="40" stroke="url(#heroGradient)" strokeWidth="2" />
                <line x1="35" y1="50" x2="65" y2="50" stroke="url(#heroGradient)" strokeWidth="2" />
                <line x1="35" y1="60" x2="55" y2="60" stroke="url(#heroGradient)" strokeWidth="2" />
              </g>

              {/* Animated scanning beam */}
              <line x1="130" y1="30" x2="270" y2="30" 
                stroke="url(#heroGradient)" 
                strokeWidth="3" 
                opacity="0.7">
                <animate attributeName="y1" values="30;170;30" dur="5s" repeatCount="indefinite" />
                <animate attributeName="y2" values="30;170;30" dur="5s" repeatCount="indefinite" />
              </line>

              {/* Decorative nodes */}
              <circle cx="100" cy="30" r="5" fill="#6E59A5" />
              <circle cx="300" cy="30" r="5" fill="#567FEA" />
              <circle cx="100" cy="170" r="5" fill="#6E59A5" />
              <circle cx="300" cy="170" r="5" fill="#567FEA" />
              <circle cx="50" cy="100" r="5" fill="#6E59A5" />
              <circle cx="350" cy="100" r="5" fill="#567FEA" />

              {/* Data flow lines */}
              <path d="M100,30 C150,0 250,0 300,30" 
                fill="none" 
                stroke="#6E59A5" 
                strokeWidth="2" 
                strokeDasharray="5,5" />
              <path d="M100,170 C150,200 250,200 300,170" 
                fill="none" 
                stroke="#567FEA" 
                strokeWidth="2" 
                strokeDasharray="5,5" />
              <path d="M50,100 C100,70 300,70 350,100" 
                fill="none" 
                stroke="url(#heroGradient)" 
                strokeWidth="2" 
                strokeDasharray="3,3" />
            </svg>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default HeroSection;
