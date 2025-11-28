import React from 'react';
import { PageView } from '../types';
import { ShieldAlert } from './Icons';

interface CTAProps {
  setView: (view: PageView) => void;
}

export const CTA: React.FC<CTAProps> = ({ setView }) => {
  return (
    <section className="py-20 bg-red-900 relative overflow-hidden group">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60"></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
         <div className="inline-flex items-center justify-center p-3 bg-red-950/50 border border-red-500 rounded-full mb-6">
            <ShieldAlert className="text-white w-6 h-6 animate-pulse" />
         </div>
         
         <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6 drop-shadow-lg">
            Is Your Perimeter <br/>
            Truly Secure?
         </h2>
         
         <p className="text-red-100 text-lg mb-10 max-w-2xl mx-auto font-mono">
            Hackers don't wait for business hours. Vulnerabilities don't ask for permission.
            Launch a preemptive strike on your security flaws today.
         </p>
         
         <button 
            onClick={() => setView('contact')}
            className="px-10 py-5 bg-black border-2 border-white text-white font-bold text-xl uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 shadow-xl shadow-black/50"
         >
            Initialize Lockdown
         </button>
      </div>
    </section>
  );
};