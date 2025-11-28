import React from 'react';
import { servicesData } from '../data/content';
import { ChevronRight } from './Icons';

interface ServicesProps {
  limit?: number;
  showHeader?: boolean;
  setView?: (view: any, id?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ limit, showHeader = true, setView }) => {
  const displayServices = limit ? servicesData.slice(0, limit) : servicesData;

  return (
    <section id="services" className="py-20 px-4 bg-neutral-950 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(30,0,0,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(30,0,0,0.3)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {showHeader && (
            <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase tracking-tighter">
                Operational <span className="text-red-600">Capabilities</span>
            </h2>
            <div className="h-1 w-24 bg-red-600 mx-auto"></div>
            <p className="mt-4 text-neutral-400 max-w-2xl mx-auto font-mono text-sm">
                // DEPLOYING ADVANCED COUNTERMEASURES
                <br/>
                Select a vector to fortify your digital perimeter.
            </p>
            </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayServices.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-black border border-neutral-800 p-8 hover:border-red-600 transition-colors duration-300 flex flex-col h-full cursor-pointer"
              onClick={() => setView && setView('service-detail', service.id)}
            >
              <div className="absolute top-0 right-0 p-2 opacity-20 text-red-600 font-mono text-xs">
                0{index + 1}
              </div>
              
              <div className="text-red-600 mb-6 group-hover:scale-110 transition-transform duration-300 inline-block p-3 border border-red-900/30 rounded bg-red-950/10 w-fit">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide group-hover:text-red-500 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-neutral-400 mb-6 leading-relaxed text-sm flex-grow">
                {service.description}
              </p>
              
              <ul className="space-y-2 pt-4 border-t border-neutral-900 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-xs text-neutral-500 font-mono">
                    <span className="w-1.5 h-1.5 bg-red-900 mr-2 group-hover:bg-red-500 transition-colors"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto flex items-center text-red-600 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                 Details <ChevronRight className="w-4 h-4 ml-1" />
              </div>

              <div className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};