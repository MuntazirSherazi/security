import React, { useEffect, useState } from 'react';
import { Globe } from './Icons';

export const GlobalThreats: React.FC = () => {
  const [threats, setThreats] = useState<{id: number, src: string, dst: string, type: string}[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newThreat = {
        id: Date.now(),
        src: `IP: 192.168.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`,
        dst: `TARGET: CORP_HQ_${Math.floor(Math.random() * 99)}`,
        type: ['DDoS', 'SQLi', 'XSS', 'Brute Force', 'Malware'][Math.floor(Math.random() * 5)]
      };
      setThreats(prev => [newThreat, ...prev].slice(0, 5));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-black border-y border-red-900/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-red-950/5 opacity-50"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="flex items-center gap-4 text-red-600">
            <Globe className="w-16 h-16 animate-pulse" />
            <div>
                <h3 className="text-xl font-bold uppercase tracking-widest text-white">Live Threat Intelligence</h3>
                <p className="text-xs font-mono text-red-500">MONITORING GLOBAL ATTACK VECTORS</p>
            </div>
        </div>

        <div className="w-full md:w-2/3 bg-neutral-900/80 border border-red-900/30 p-4 rounded font-mono text-xs">
            <div className="flex justify-between border-b border-neutral-700 pb-2 mb-2 text-neutral-500 uppercase">
                <span>Source</span>
                <span>Attack Type</span>
                <span>Target</span>
            </div>
            <div className="space-y-2">
                {threats.map(t => (
                    <div key={t.id} className="flex justify-between text-green-500 animate-pulse">
                        <span className="w-1/3">{t.src}</span>
                        <span className="w-1/3 text-red-500">{t.type}</span>
                        <span className="w-1/3 text-right text-neutral-400">{t.dst}</span>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};