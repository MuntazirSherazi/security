import React from 'react';
import { HelpCircle, ChevronRight } from './Icons';

export const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "Is penetration testing safe for my production environment?",
      a: "Yes. Our operatives strictly adhere to agreed Rules of Engagement (ROE). We simulate attacks without destructive payloads, ensuring business continuity while exposing critical flaws."
    },
    {
      q: "What is the difference between a Vulnerability Scan and a Pen Test?",
      a: "A scan is automated and finds known, low-level issues. A Pen Test is a manual, human-led simulation of a real hacker, capable of chaining vulnerabilities to achieve deep system compromise."
    },
    {
      q: "Do you offer remediation support?",
      a: "Absolutely. We don't just break in; we help you build the walls higher. Every report includes detailed remediation steps, and we offer re-testing to verify fixes."
    },
    {
      q: "How long does an engagement take?",
      a: "Typical engagements last between 2 to 4 weeks, depending on the scope (e.g., number of IPs, application complexity, or social engineering targets)."
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-black min-h-screen">
       <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
             <HelpCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
             <h1 className="text-4xl font-bold text-white uppercase tracking-tighter">Operational <span className="text-red-600">Briefing</span></h1>
             <p className="text-neutral-500 mt-2 font-mono">Frequently Asked Questions</p>
          </div>

          <div className="space-y-6">
             {faqs.map((faq, idx) => (
                <div key={idx} className="bg-neutral-900/20 border border-neutral-800 p-6 rounded hover:border-red-900/50 transition-colors">
                   <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-2">
                      <span className="text-red-600 mt-1"><ChevronRight className="w-4 h-4" /></span>
                      {faq.q}
                   </h3>
                   <p className="text-neutral-400 font-mono text-sm leading-relaxed pl-6">
                      {faq.a}
                   </p>
                </div>
             ))}
          </div>
       </div>
    </div>
  );
};