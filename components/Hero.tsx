import React from 'react';
import { Skull } from './Icons';
import { PageView } from '../types';

interface HeroProps {
  setView: (view: PageView) => void;
}

export const Hero: React.FC<HeroProps> = ({ setView }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/80 z-10"></div>
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Data Center" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 border border-red-600/50 bg-red-950/30 text-red-500 px-4 py-1 rounded-full mb-8 animate-pulse">
           <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
           <span className="text-xs font-mono uppercase tracking-widest">System Warning: Security Breach Imminent</span>
        </div>

        <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase glitch-text" data-text="SECURE YOUR ASSETS">
          SECURE YOUR <br/>
          <span className="text-red-600">ASSETS</span>
        </h1>

        <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-mono leading-relaxed">
          We identify the weak points in your infrastructure before the enemy does. 
          Elite penetration testing and vulnerability assessment for high-risk environments.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <button 
            onClick={() => setView('contact')}
            className="group relative px-8 py-4 bg-red-700 text-white font-bold uppercase tracking-widest overflow-hidden hover:bg-red-600 transition-all clip-path-polygon"
          >
            <span className="relative z-10 flex items-center gap-2">
              Initialize Audit <Skull className="w-5 h-5" />
            </span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
          
          <button 
            onClick={() => setView('methodology')}
            className="px-8 py-4 bg-transparent border border-neutral-700 text-neutral-300 font-bold uppercase tracking-widest hover:border-red-600 hover:text-red-500 transition-all"
          >
            View Protocol
          </button>
        </div>

        {/* Stats Strip */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-neutral-800 pt-8">
            <div className="text-center">
                <div className="text-3xl font-bold text-white font-mono">500+</div>
                <div className="text-xs text-red-600 uppercase tracking-widest mt-1">Breaches Simulated</div>
            </div>
            <div className="text-center">
                <div className="text-3xl font-bold text-white font-mono">0</div>
                <div className="text-xs text-red-600 uppercase tracking-widest mt-1">Undetected Intrusions</div>
            </div>
            <div className="text-center">
                <div className="text-3xl font-bold text-white font-mono">24/7</div>
                <div className="text-xs text-red-600 uppercase tracking-widest mt-1">SOC Monitoring</div>
            </div>
            <div className="text-center">
                <div className="text-3xl font-bold text-white font-mono">100%</div>
                <div className="text-xs text-red-600 uppercase tracking-widest mt-1">Client Confidentiality</div>
            </div>
        </div>
      </div>
    </div>
  );
};