import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-neutral-900 py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs font-mono text-neutral-600">
        <div className="mb-4 md:mb-0">
          <p>© 2024 PENTEST ELITE. ALL RIGHTS RESERVED.</p>
          <p className="mt-1">UNAUTHORIZED ACCESS IS A FEDERAL OFFENSE.</p>
        </div>
        
        <div className="flex gap-6 uppercase tracking-wider">
           <a href="#" className="hover:text-red-500 transition-colors">Privacy</a>
           <a href="#" className="hover:text-red-500 transition-colors">Terms</a>
           <a href="#" className="hover:text-red-500 transition-colors">PGP Key</a>
        </div>
      </div>
      
      <div className="text-center mt-8 text-[10px] text-neutral-800">
        SYSTEM STATUS: ONLINE | THREAT LEVEL: ELEVATED
      </div>
    </footer>
  );
};