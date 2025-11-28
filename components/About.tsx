import React from 'react';
import { Partners } from './Partners';
import { Team } from './Team';

export const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-black min-h-screen">
       <div className="max-w-4xl mx-auto px-4 text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6">
             The <span className="text-red-600">Agency</span>
          </h1>
          <p className="text-neutral-400 text-lg font-mono leading-relaxed">
             Founded by former military intelligence officers and elite ethical hackers, Pentest Elite exists to bridge the gap between compliance and actual security. We don't just check boxes; we break them.
          </p>
       </div>

       <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
             <img src="https://picsum.photos/800/600?grayscale&blur=2" alt="Server Room" className="w-full h-auto border border-neutral-800 rounded opacity-70" />
          </div>
          <div className="space-y-6">
             <div>
                <h3 className="text-2xl font-bold text-white uppercase mb-2">Our Philosophy</h3>
                <p className="text-neutral-500 font-mono text-sm leading-relaxed">
                   The only way to defend against a wolf is to think like a wolf. Our methodologies are derived from real-world APT (Advanced Persistent Threat) tactics. We operate in the shadows to shed light on your weaknesses.
                </p>
             </div>
             <div>
                <h3 className="text-2xl font-bold text-white uppercase mb-2">Global Reach</h3>
                <p className="text-neutral-500 font-mono text-sm leading-relaxed">
                   Operating from secure undisclosed locations, our team provides 24/7 offensive security services to clients in 15 countries across Finance, Defense, Healthcare, and Technology sectors.
                </p>
             </div>
          </div>
       </div>

       <Partners />
       <Team />
    </div>
  );
};