import React from 'react';
import { FileText } from './Icons';
import { ThreadIntel } from '../types';

export const Intelligence: React.FC = () => {
  const intel: ThreadIntel[] = [
    { id: '1', severity: 'CRITICAL', title: 'Apache Log4j RCE Vulnerability', date: '2024-03-15', code: 'CVE-2024-XXXX' },
    { id: '2', severity: 'HIGH', title: 'Exchange Server Privilege Escalation', date: '2024-03-14', code: 'CVE-2024-YYYY' },
    { id: '3', severity: 'MEDIUM', title: 'Chrome V8 Engine Out-of-Bounds Write', date: '2024-03-12', code: 'CVE-2024-ZZZZ' },
    { id: '4', severity: 'CRITICAL', title: 'Industrial Control System Firmware Backdoor', date: '2024-03-10', code: 'ICS-CERT-2024' },
    { id: '5', severity: 'HIGH', title: 'Kubernetes API Server Bypass', date: '2024-03-08', code: 'K8S-SEC-01' },
  ];

  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-12 border-b border-red-900/30 pb-4">
            <div>
                <h1 className="text-4xl font-bold text-white uppercase tracking-tighter">
                    Threat <span className="text-red-600">Intelligence</span>
                </h1>
                <p className="text-neutral-500 font-mono mt-2 text-sm">
                    // CLASSIFIED: INTERNAL USE ONLY
                </p>
            </div>
            <div className="hidden md:block">
                <div className="flex gap-2 text-xs font-mono">
                    <span className="px-2 py-1 bg-red-900/20 text-red-500 border border-red-900">LIVE FEED</span>
                    <span className="px-2 py-1 bg-green-900/20 text-green-500 border border-green-900">ENCRYPTED</span>
                </div>
            </div>
        </div>

        <div className="grid gap-4">
            {intel.map((item) => (
                <div key={item.id} className="bg-neutral-900/30 border-l-4 border-neutral-700 p-6 hover:bg-neutral-900/50 hover:border-red-600 transition-all cursor-pointer group">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-start gap-4">
                            <FileText className="w-6 h-6 text-neutral-600 group-hover:text-red-500 transition-colors mt-1" />
                            <div>
                                <h3 className="text-lg font-bold text-white group-hover:text-red-100 transition-colors">{item.title}</h3>
                                <div className="flex items-center gap-3 mt-1">
                                    <span className="text-xs font-mono text-neutral-400">{item.code}</span>
                                    <span className="text-xs font-mono text-neutral-600">|</span>
                                    <span className="text-xs font-mono text-neutral-400">{item.date}</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className={`px-3 py-1 text-xs font-bold border ${
                            item.severity === 'CRITICAL' 
                            ? 'bg-red-950 text-red-500 border-red-900 animate-pulse' 
                            : item.severity === 'HIGH' 
                                ? 'bg-orange-950 text-orange-500 border-orange-900' 
                                : 'bg-yellow-950 text-yellow-500 border-yellow-900'
                        }`}>
                            {item.severity}
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};