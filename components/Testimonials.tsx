import React from 'react';
import { Quote } from './Icons';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      text: "Pentest Elite didn't just find vulnerabilities; they showed us exactly how a nation-state actor would dismantle our infrastructure. The report was terrifyingly thorough.",
      author: "REDACTED",
      role: "CISO",
      company: "Fortune 500 Financial Corp"
    },
    {
      text: "We thought our cloud environment was secure. Their Red Team breached our perimeter in under 6 hours. Essential service for any high-risk organization.",
      author: "J. D.",
      role: "VP of Engineering",
      company: "HealthTech Solutions"
    },
    {
      text: "Professional, discreet, and devastatingly effective. They exposed gaps our previous three audits missed completely.",
      author: "REDACTED",
      role: "Director of Security",
      company: "Government Contractor"
    }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-900/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-900/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white uppercase tracking-wider mb-2">Declassified <span className="text-red-600">Commendations</span></h2>
            <p className="text-neutral-500 font-mono text-xs">// CLIENT FEEDBACK [SENSITIVE DATA REDACTED]</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
                <div key={i} className="bg-neutral-900/30 border border-neutral-800 p-8 relative hover:bg-neutral-900/50 transition-colors">
                    <Quote className="absolute top-4 right-4 text-neutral-800 w-8 h-8" />
                    <div className="font-mono text-sm text-neutral-400 mb-6 leading-relaxed relative">
                        <span className="text-red-900 absolute -left-2 -top-2 text-2xl">"</span>
                        {review.text}
                    </div>
                    
                    <div className="flex items-center gap-4 mt-auto border-t border-neutral-800 pt-4">
                        <div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center">
                            <span className="text-neutral-600 text-xs">UNK</span>
                        </div>
                        <div>
                            <div className="text-white font-bold text-sm uppercase bg-neutral-800 px-1 inline-block mb-1">
                                {review.author}
                            </div>
                            <div className="text-red-500 text-xs font-mono">
                                {review.role}
                            </div>
                            <div className="text-neutral-600 text-[10px] uppercase tracking-wider">
                                {review.company}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};