import React from 'react';
import { CaseStudy } from '../types';
import { ArrowLeft, Crosshair, Layers, CheckCircle } from './Icons';

interface PortfolioDetailProps {
  study: CaseStudy;
  onBack: () => void;
}

export const PortfolioDetail: React.FC<PortfolioDetailProps> = ({ study, onBack }) => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-black text-neutral-200 font-mono">
        <div className="max-w-5xl mx-auto px-4">
             {/* Nav */}
             <button 
                onClick={onBack} 
                className="mb-8 flex items-center gap-2 text-neutral-500 hover:text-white uppercase text-xs font-bold tracking-widest transition-colors"
            >
                <ArrowLeft className="w-4 h-4" /> Back to Operations
            </button>

            {/* Header / Mission Brief */}
            <div className="border border-neutral-800 bg-neutral-950 p-8 md:p-12 mb-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-4 py-1 uppercase tracking-widest">
                    Declassified
                </div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-transparent"></div>

                <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                    <div className="flex-1">
                        <div className="text-red-500 text-xs font-bold uppercase tracking-widest mb-2">Operation ID: {study.id}</div>
                        <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">{study.title}</h1>
                        <p className="text-lg text-neutral-400 leading-relaxed">{study.outcome}</p>
                    </div>
                    <div className="w-full md:w-64 bg-black border border-neutral-800 p-4 text-xs space-y-3">
                        <div className="flex justify-between border-b border-neutral-900 pb-2">
                            <span className="text-neutral-500">CLIENT TYPE</span>
                            <span className="text-white text-right">{study.client}</span>
                        </div>
                        <div className="flex justify-between border-b border-neutral-900 pb-2">
                            <span className="text-neutral-500">DATE</span>
                            <span className="text-white text-right">{study.date}</span>
                        </div>
                        <div className="flex justify-between border-b border-neutral-900 pb-2">
                            <span className="text-neutral-500">DURATION</span>
                            <span className="text-white text-right">{study.duration}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-neutral-500">TEAM SIZE</span>
                            <span className="text-white text-right">{study.teamSize} Operatives</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-neutral-900">
                    <div>
                        <h3 className="text-white font-bold uppercase mb-2 flex items-center gap-2">
                            <Crosshair className="w-4 h-4 text-red-500" /> Mission Objective
                        </h3>
                        <p className="text-neutral-500 text-sm leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                         <h3 className="text-white font-bold uppercase mb-2 flex items-center gap-2">
                            <Layers className="w-4 h-4 text-red-500" /> Attack Vector
                        </h3>
                        <p className="text-neutral-500 text-sm leading-relaxed">{study.execution}</p>
                    </div>
                </div>
            </div>

            {/* Findings Section */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-white uppercase tracking-wider mb-8">Critical Findings</h2>
                <div className="space-y-4">
                    {study.findings.map((finding, idx) => (
                        <div key={idx} className="bg-neutral-900/30 border-l-4 border-red-600 p-6 hover:bg-neutral-900/50 transition-colors">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-bold text-white">{finding.title}</h3>
                                <span className={`text-xs font-bold px-2 py-1 uppercase ${
                                    finding.severity === 'Critical' ? 'bg-red-950 text-red-500' :
                                    finding.severity === 'High' ? 'bg-orange-950 text-orange-500' :
                                    'bg-yellow-950 text-yellow-500'
                                }`}>
                                    {finding.severity}
                                </span>
                            </div>
                            <p className="text-neutral-400 text-sm">{finding.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Technical Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-black border border-neutral-800 p-6">
                    <h3 className="text-white font-bold uppercase mb-4 text-sm">Technical Indicators</h3>
                    <ul className="space-y-2">
                        {study.technicalDetails.map((detail, idx) => (
                            <li key={idx} className="text-neutral-500 text-xs font-mono border-b border-neutral-900 pb-2 last:border-0">
                                > {detail}
                            </li>
                        ))}
                    </ul>
                </div>
                 <div className="bg-green-950/10 border border-green-900/30 p-6 flex flex-col justify-center items-center text-center">
                    <CheckCircle className="w-12 h-12 text-green-600 mb-4" />
                    <h3 className="text-white font-bold uppercase mb-2">Status: Remediated</h3>
                    <p className="text-green-500/70 text-sm">All identified vulnerabilities have been patched and verified via re-testing.</p>
                </div>
            </div>
            
            <div className="text-center">
                 <button className="px-8 py-3 border border-neutral-700 text-neutral-300 font-bold uppercase hover:border-white hover:text-white transition-colors">
                    Download Full PDF Report
                 </button>
            </div>
        </div>
    </div>
  );
};