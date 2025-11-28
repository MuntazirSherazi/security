import React from 'react';
import { Users } from './Icons';

export const Team: React.FC = () => {
  const operatives = [
    { code: 'OP_ZERO', role: 'Lead Architect', special: 'Zero-Day Research' },
    { code: 'OP_VENOM', role: 'Red Team Lead', special: 'Social Engineering' },
    { code: 'OP_GHOST', role: 'Cryptanalyst', special: 'Reverse Engineering' },
  ];

  return (
    <section className="py-20 bg-black border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-2 mb-12">
                <Users className="text-red-600 w-6 h-6" />
                <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Active Operatives</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {operatives.map((op, i) => (
                    <div key={i} className="group border border-neutral-800 bg-neutral-950 p-6 hover:border-red-600 transition-colors relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-red-900/10 -mr-8 -mt-8 rotate-45"></div>
                        <div className="w-20 h-20 bg-neutral-800 rounded-full mb-4 flex items-center justify-center border-2 border-neutral-700 group-hover:border-red-600">
                            <span className="font-mono text-3xl text-neutral-500 group-hover:text-red-500">?</span>
                        </div>
                        <h3 className="text-xl font-bold text-red-500 font-mono mb-1">{op.code}</h3>
                        <div className="text-white font-bold uppercase text-sm mb-4">{op.role}</div>
                        <div className="text-xs font-mono text-neutral-500 bg-black p-2 border border-neutral-800">
                            SPEC: {op.special}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};