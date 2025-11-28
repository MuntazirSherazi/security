import React from 'react';
import { Target, SearchCode, Bug, Lock } from './Icons';

export const Methodology: React.FC = () => {
  const steps = [
    { 
      title: "Reconnaissance", 
      desc: "Passive and active information gathering to map the attack surface.",
      icon: <SearchCode className="w-8 h-8" />
    },
    { 
      title: "Weaponization", 
      desc: "Developing custom payloads tailored to identified vulnerabilities.",
      icon: <Bug className="w-8 h-8" />
    },
    { 
      title: "Exploitation", 
      desc: "Executing the attack vector to gain unauthorized access.",
      icon: <Target className="w-8 h-8" />
    },
    { 
      title: "Exfiltration & Reporting", 
      desc: "Proof of concept data extraction followed by comprehensive remediation reporting.",
      icon: <Lock className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter mb-4">
                Engagement <span className="text-red-600">Protocol</span>
            </h1>
            <p className="text-neutral-400 font-mono max-w-2xl mx-auto">
                We strictly adhere to the Cyber Kill Chain methodology to simulate realistic advanced persistent threats (APT).
            </p>
        </div>

        <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-red-900/30 -translate-x-1/2"></div>

            <div className="space-y-12">
                {steps.map((step, index) => (
                    <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                             <div className={`relative p-8 bg-neutral-900/50 border border-neutral-700 hover:border-red-500 transition-colors w-full max-w-md group ${index % 2 !== 0 ? 'md:text-right' : ''}`}>
                                <div className="absolute top-0 left-0 text-6xl font-black text-neutral-800 -mt-6 -ml-4 z-0 opacity-50 select-none">0{index + 1}</div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold text-white uppercase mb-2 group-hover:text-red-500 transition-colors">{step.title}</h3>
                                    <p className="text-neutral-400 text-sm font-mono leading-relaxed">{step.desc}</p>
                                </div>
                             </div>
                        </div>
                        
                        <div className="relative z-10 bg-black border-4 border-neutral-800 rounded-full p-4 shadow-xl shadow-red-900/20">
                            <div className="text-red-600">
                                {step.icon}
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 hidden md:block"></div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};