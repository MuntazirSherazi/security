import React from 'react';
import { portfolioData } from '../data/content';
import { ChevronRight, FileText } from './Icons';

interface PortfolioProps {
  limit?: number;
  showButton?: boolean;
  setView?: (view: any, id?: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ limit, showButton, setView }) => {
  const displayCases = limit ? portfolioData.slice(0, limit) : portfolioData;

  return (
    <section className={`bg-neutral-950 ${limit ? 'py-20' : 'pt-24 pb-20'} relative border-t border-neutral-900`}>
       {!limit && (
           <div className="max-w-6xl mx-auto px-4 mb-16">
               <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
                   Mission <span className="text-red-600">Logs</span>
               </h1>
               <p className="text-neutral-500 font-mono mt-4 max-w-2xl">
                   Archived reports of successful engagements. Client identities redacted for confidentiality protocols.
               </p>
           </div>
       )}
       
       {limit && (
         <div className="max-w-6xl mx-auto px-4 mb-12 flex items-end justify-between">
            <h2 className="text-3xl font-bold text-white uppercase tracking-wider">
               Recent <span className="text-red-600">Operations</span>
            </h2>
            <div className="hidden md:block h-px flex-1 bg-neutral-800 mx-8 mb-2"></div>
         </div>
       )}

       <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayCases.map((item) => (
            <div 
                key={item.id} 
                className="group relative bg-black border border-neutral-800 overflow-hidden hover:border-red-600 transition-colors duration-500 cursor-pointer"
                onClick={() => setView && setView('portfolio-detail', item.id)}
            >
               {/* Image Overlay */}
               <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-red-900/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-50 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700" />
                  <div className="absolute top-4 right-4 z-20 bg-black/80 border border-red-900/50 px-3 py-1">
                      <span className="text-red-500 font-mono text-xs">{item.id}</span>
                  </div>
               </div>
               
               <div className="p-8">
                  <div className="text-xs font-mono text-neutral-500 mb-2 uppercase tracking-widest">{item.type}</div>
                  <h3 className="text-2xl font-bold text-white mb-2 uppercase group-hover:text-red-500 transition-colors">{item.title}</h3>
                  <p className="text-sm font-mono text-neutral-400 mb-4"><span className="text-red-900">TARGET:</span> {item.client}</p>
                  
                  <div className="border-t border-neutral-900 pt-4 mt-4">
                      <p className="text-neutral-400 text-sm leading-relaxed">
                          <span className="text-red-600 font-bold mr-2">OUTCOME:</span>
                          {item.outcome}
                      </p>
                      <div className="mt-4 flex items-center text-red-600 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                         View Declassified Report <ChevronRight className="w-4 h-4 ml-1" />
                      </div>
                  </div>
               </div>
            </div>
          ))}
       </div>

       {showButton && setView && (
          <div className="text-center mt-12">
             <button 
                onClick={() => setView('portfolio')}
                className="px-8 py-3 bg-transparent border border-neutral-700 text-white font-bold uppercase tracking-widest hover:border-red-600 hover:text-red-500 transition-all inline-flex items-center gap-2"
             >
                Access Full Archives <FileText className="w-4 h-4" />
             </button>
          </div>
       )}
    </section>
  );
};