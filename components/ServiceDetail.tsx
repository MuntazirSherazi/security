import React from 'react';
import { ServiceItem } from '../types';
import { ArrowLeft, Check, AlertTriangle, ShieldAlert } from './Icons';

interface ServiceDetailProps {
  service: ServiceItem;
  onBack: () => void;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack }) => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-black text-neutral-200">
        <div className="max-w-6xl mx-auto px-4">
            {/* Nav */}
            <button 
                onClick={onBack} 
                className="mb-8 flex items-center gap-2 text-red-500 hover:text-white uppercase text-xs font-bold tracking-widest transition-colors"
            >
                <ArrowLeft className="w-4 h-4" /> Back to Services
            </button>

            {/* Header */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
                <div className="lg:col-span-2">
                    <div className="inline-flex items-center gap-2 border border-red-600/30 bg-red-950/20 px-3 py-1 rounded text-red-500 text-xs font-mono mb-6">
                        <ShieldAlert className="w-4 h-4" />
                        OPERATIONAL CAPABILITY
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6">
                        {service.title}
                    </h1>
                    <p className="text-xl text-neutral-400 font-mono leading-relaxed border-l-4 border-red-600 pl-6">
                        {service.fullDescription}
                    </p>
                </div>
                <div className="bg-neutral-900/30 border border-neutral-800 p-8 rounded relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10 text-red-600">
                        {service.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white uppercase mb-6">Key Benefits</h3>
                    <ul className="space-y-4">
                        {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-neutral-400">
                                <Check className="w-5 h-5 text-red-600 flex-shrink-0" />
                                <span>{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="h-px w-full bg-neutral-800 mb-16"></div>

            {/* Methodology */}
            <div className="mb-20">
                <h2 className="text-3xl font-bold text-white uppercase tracking-wider mb-12 flex items-center gap-4">
                    <span className="w-2 h-8 bg-red-600"></span>
                    Execution Protocol
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {service.methodology.map((step, idx) => (
                        <div key={idx} className="group flex gap-6">
                            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-neutral-900 border border-neutral-700 text-neutral-500 font-mono text-xl font-bold group-hover:border-red-600 group-hover:text-red-500 transition-colors">
                                0{idx + 1}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white uppercase mb-2 group-hover:text-red-500 transition-colors">{step.title}</h3>
                                <p className="text-neutral-400 text-sm leading-relaxed font-mono">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Deliverables */}
            <div className="bg-neutral-900/20 border-y border-neutral-800 py-16 mb-16">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white uppercase text-center mb-8">Intelligence Deliverables</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.deliverables.map((item, idx) => (
                            <div key={idx} className="bg-black border border-neutral-800 p-4 flex items-center gap-3">
                                <div className="w-1.5 h-1.5 bg-red-600"></div>
                                <span className="text-neutral-300 font-mono text-sm">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* FAQ */}
            <div className="max-w-3xl mx-auto mb-16">
                <h2 className="text-2xl font-bold text-white uppercase mb-8 text-center">Protocol FAQ</h2>
                <div className="space-y-6">
                    {service.faq.map((f, idx) => (
                        <div key={idx} className="border-b border-neutral-800 pb-6">
                            <h4 className="text-lg font-bold text-red-500 mb-2 flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4" /> {f.q}
                            </h4>
                            <p className="text-neutral-400 text-sm">{f.a}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="bg-red-900/20 border border-red-900/50 p-12 text-center rounded relative overflow-hidden">
                <div className="relative z-10">
                    <h2 className="text-3xl font-black text-white uppercase mb-4">Ready to Deploy?</h2>
                    <p className="text-neutral-300 mb-8 max-w-xl mx-auto">
                        Secure your infrastructure with {service.title} today. Our operatives are standing by.
                    </p>
                    <button className="px-8 py-3 bg-red-600 text-white font-bold uppercase tracking-widest hover:bg-red-700 transition-colors">
                        Request Quote
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};