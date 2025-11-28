import React from 'react';
import { Hero } from './Hero';
import { Mission } from './Mission';
import { GlobalThreats } from './GlobalThreats';
import { Services } from './Services';
import { Team } from './Team';
import { Terminal } from './Terminal';
import { Contact } from './Contact';
import { Partners } from './Partners';
import { Portfolio } from './Portfolio';
import { Testimonials } from './Testimonials';
import { CTA } from './CTA';
import { Cpu, ChevronRight } from './Icons';
import { PageView } from '../types';

interface HomeProps {
  setView: (view: PageView) => void;
}

export const Home: React.FC<HomeProps> = ({ setView }) => {
  return (
    <>
      <Hero setView={setView} />
      <Partners />
      <Mission />
      <GlobalThreats />
      
      {/* Services Preview Section */}
      <div className="relative">
          <Services limit={3} showHeader={true} />
          <div className="bg-neutral-950 pb-16 flex justify-center">
              <button 
                onClick={() => setView('services')}
                className="px-6 py-2 bg-transparent border border-neutral-700 text-neutral-300 uppercase font-bold tracking-widest hover:border-red-600 hover:text-red-500 transition-all flex items-center gap-2 text-sm"
              >
                  View Full Capability List <ChevronRight className="w-4 h-4" />
              </button>
          </div>
      </div>

      <Portfolio limit={2} showButton={true} setView={setView} />
      
      <Testimonials />

      <Team />

      {/* Tech Stack / Tools */}
      <section className="py-20 bg-neutral-950 border-t border-neutral-900 text-center">
          <div className="max-w-6xl mx-auto px-4">
             <div className="flex items-center justify-center gap-2 mb-8 text-neutral-500">
                <Cpu className="w-5 h-5" />
                <span className="uppercase tracking-widest text-sm font-mono">Deployment Arsenal</span>
             </div>
             <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                {['METASPLOIT', 'COBALT STRIKE', 'BURP SUITE', 'WIRESHARK', 'NMAP', 'HASHCAT', 'BLOODHOUND'].map(tool => (
                    <span key={tool} className="text-xl md:text-2xl font-black text-neutral-300 font-mono tracking-tighter hover:text-red-600 cursor-default">
                        {tool}
                    </span>
                ))}
             </div>
          </div>
      </section>

      <CTA setView={setView} />

      {/* Terminal Teaser */}
      <section className="py-20 bg-black border-y border-red-900/20 relative">
          <div className="text-center mb-8 px-4 relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 font-mono uppercase">
              <span className="text-red-600">AI</span> Security Consultant
            </h2>
            <p className="text-neutral-500 text-sm font-mono">
              // INTERACTIVE THREAT ANALYSIS SYSTEM
            </p>
          </div>
          <div className="scale-90 opacity-80 hover:opacity-100 hover:scale-95 transition-all duration-500 origin-center">
            <Terminal />
          </div>
      </section>

      <Contact />
    </>
  );
};