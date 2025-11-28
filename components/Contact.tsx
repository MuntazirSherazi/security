import React from 'react';
import { ChevronRight } from './Icons';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-black relative border-t border-red-900/30">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-neutral-900/50 border border-neutral-800 p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-red-700"></div>
            
            <h2 className="text-3xl font-bold text-white mb-2 font-mono uppercase">Request Secure Channel</h2>
            <p className="text-neutral-500 mb-8 font-mono text-sm">Communication is encrypted. 2048-bit RSA keys required for engagement.</p>
            
            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-red-500 text-xs font-bold uppercase mb-2 font-mono">Codename / ID</label>
                        <input type="text" className="w-full bg-black border border-neutral-700 text-white p-3 focus:border-red-600 focus:outline-none transition-colors font-mono text-sm" placeholder="OPERATOR_X" />
                    </div>
                    <div>
                        <label className="block text-red-500 text-xs font-bold uppercase mb-2 font-mono">Frequency / Email</label>
                        <input type="email" className="w-full bg-black border border-neutral-700 text-white p-3 focus:border-red-600 focus:outline-none transition-colors font-mono text-sm" placeholder="encrypted@relay.net" />
                    </div>
                </div>
                
                <div>
                    <label className="block text-red-500 text-xs font-bold uppercase mb-2 font-mono">Mission Parameters</label>
                    <textarea rows={4} className="w-full bg-black border border-neutral-700 text-white p-3 focus:border-red-600 focus:outline-none transition-colors font-mono text-sm" placeholder="Describe target scope and engagement rules..."></textarea>
                </div>

                <button className="w-full md:w-auto px-8 py-3 bg-red-700 text-white font-bold uppercase tracking-widest hover:bg-red-600 transition-colors flex items-center justify-center gap-2 group">
                    Transmit
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
            </form>
        </div>
      </div>
    </section>
  );
};
