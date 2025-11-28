import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Services } from './components/Services';
import { Methodology } from './components/Methodology';
import { Intelligence } from './components/Intelligence';
import { Contact } from './components/Contact';
import { Terminal } from './components/Terminal';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { Careers } from './components/Careers';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { ServiceDetail } from './components/ServiceDetail';
import { PortfolioDetail } from './components/PortfolioDetail';
import { servicesData, portfolioData } from './data/content';
import { PageView } from './types';

const App: React.FC = () => {
  const [currentView, setView] = useState<PageView>('home');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView, selectedId]);

  const handleSetView = (view: PageView, id?: string) => {
      setView(view);
      if (id) {
          setSelectedId(id);
      }
  };

  // Helper to find selected items
  const selectedService = servicesData.find(s => s.id === selectedId);
  const selectedPortfolio = portfolioData.find(p => p.id === selectedId);

  return (
    <div className="min-h-screen bg-black text-neutral-200 selection:bg-red-900 selection:text-white flex flex-col font-mono">
      <div className="scanlines"></div> {/* CRT Effect Overlay */}
      <Navbar currentView={currentView} setView={handleSetView} />
      
      <main className="flex-grow">
        {currentView === 'home' && <Home setView={handleSetView} />}
        
        {currentView === 'services' && (
          <div className="pt-20">
             <Services showHeader={true} setView={handleSetView} />
             <div className="py-20 bg-neutral-900 text-center">
                <h3 className="text-2xl text-white font-bold mb-4 uppercase">Ready to secure your infrastructure?</h3>
                <button onClick={() => handleSetView('contact')} className="px-8 py-3 bg-red-700 text-white font-bold uppercase tracking-widest hover:bg-red-600">
                    Initiate Engagement
                </button>
             </div>
          </div>
        )}
        
        {currentView === 'service-detail' && selectedService && (
            <ServiceDetail 
                service={selectedService} 
                onBack={() => handleSetView('services')} 
            />
        )}

        {currentView === 'portfolio' && (
             <Portfolio setView={handleSetView} />
        )}

        {currentView === 'portfolio-detail' && selectedPortfolio && (
            <PortfolioDetail 
                study={selectedPortfolio}
                onBack={() => handleSetView('portfolio')}
            />
        )}
        
        {currentView === 'methodology' && <Methodology />}
        {currentView === 'intelligence' && <Intelligence />}
        {currentView === 'about' && <About />}
        {currentView === 'careers' && <Careers />}
        {currentView === 'faq' && <FAQ />}
        
        {currentView === 'terminal' && (
           <div className="pt-24 pb-20 min-h-screen flex flex-col items-center justify-center bg-black relative">
               <div className="absolute inset-0 bg-red-900/5 pointer-events-none"></div>
               <div className="mb-8 text-center relative z-10">
                   <h1 className="text-4xl font-bold text-white uppercase tracking-widest">Command Center</h1>
                   <p className="text-red-500 font-mono text-sm mt-2">SECURE CONNECTION ESTABLISHED</p>
               </div>
               <Terminal />
           </div>
        )}
        
        {currentView === 'contact' && (
            <div className="pt-20 min-h-screen flex flex-col justify-center">
                <Contact />
            </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;