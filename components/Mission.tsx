import React from 'react';

export const Mission: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-950 relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase tracking-tighter leading-none">
                We are the <span className="text-red-700">Shadows</span><br/>
                That Protect the <span className="text-white">Light</span>
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-xl text-neutral-400 font-mono leading-relaxed">
                In an era of relentless digital warfare, standard defense protocols are obsolete. 
                Pentest Elite adopts the mindset of the adversary. We break your systems to build them stronger.
                No automated scanners. No false positives. Only elite human intelligence and ruthless offensive capability.
            </p>
        </div>
    </section>
  );
};