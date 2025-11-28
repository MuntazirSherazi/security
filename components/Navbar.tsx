import React, { useState } from 'react';
import { TerminalIcon } from './Icons';
import { PageView } from '../types';

interface NavbarProps {
  currentView: PageView;
  setView: (view: PageView) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageView; label: string }[] = [
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Work' },
    { id: 'about', label: 'Agency' },
    { id: 'careers', label: 'Careers' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/95 backdrop-blur-md border-b border-red-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div 
            className="flex items-center gap-2 group cursor-pointer"
            onClick={() => setView('home')}
          >
            <div className="p-1 bg-red-900/20 border border-red-600 rounded">
                <TerminalIcon className="w-6 h-6 text-red-600 group-hover:text-red-400 transition-colors" />
            </div>
            <span className="text-white font-bold tracking-widest text-lg font-mono">
              PENTEST<span className="text-red-600">_ELITE</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setView(item.id)}
                  className={`px-3 py-2 text-xs font-bold uppercase tracking-widest transition-colors duration-300 font-mono ${
                    currentView === item.id 
                    ? 'text-red-500 border-b-2 border-red-600' 
                    : 'text-neutral-400 hover:text-red-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => setView('terminal')}
                className={`ml-4 border px-4 py-1 text-xs font-bold uppercase tracking-wider transition-all ${
                  currentView === 'terminal'
                  ? 'bg-red-600 text-white border-red-600'
                  : 'bg-red-900/20 border-red-600 text-red-500 hover:bg-red-600 hover:text-white'
                }`}
              >
                ACCESS_TERMINAL
              </button>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
             <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-red-500">
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
             </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-b border-red-900/30">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setView(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-white hover:text-red-500 hover:bg-neutral-900"
                >
                  {item.label}
                </button>
             ))}
             <button
                onClick={() => {
                  setView('terminal');
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-base font-bold text-red-500 hover:bg-neutral-900"
             >
                TERMINAL ACCESS
             </button>
          </div>
        </div>
      )}
    </nav>
  );
};