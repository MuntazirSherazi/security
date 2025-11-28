import React from 'react';
import { Award } from './Icons';

export const Partners: React.FC = () => {
  const certs = ["OSCP", "CISSP", "CEH", "CISA", "ISO 27001", "COMPTIA+"];

  return (
    <section className="py-10 bg-black border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-xs font-mono text-neutral-500 mb-6 uppercase tracking-widest">
            <span className="text-red-900 mx-2">●</span> Certified Defensive & Offensive Operations <span className="text-red-900 mx-2">●</span>
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {certs.map((cert) => (
            <div key={cert} className="group flex items-center gap-2 cursor-default">
              <Award className="w-5 h-5 text-neutral-700 group-hover:text-red-600 transition-colors duration-500" />
              <span className="text-xl md:text-2xl font-black text-neutral-800 font-mono tracking-tighter group-hover:text-neutral-500 transition-colors duration-500">
                {cert}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};