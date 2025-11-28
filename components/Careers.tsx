import React from 'react';
import { Job } from '../types';
import { Briefcase, ChevronRight } from './Icons';

const jobs: Job[] = [
  { id: 'JOB-01', title: 'Senior Red Team Operator', department: 'Offensive Ops', location: 'Remote / Global', type: 'Full-Time' },
  { id: 'JOB-02', title: 'Exploit Researcher (Zero-Day)', department: 'R&D', location: 'London, UK', type: 'Contract' },
  { id: 'JOB-03', title: 'Security Consultant (Cloud)', department: 'Consulting', location: 'New York, USA', type: 'Full-Time' },
  { id: 'JOB-04', title: 'Python/Go Tooling Developer', department: 'Engineering', location: 'Remote', type: 'Full-Time' },
];

export const Careers: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-black min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-12 border-b border-red-900/30 pb-8">
            <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
               Join the <span className="text-red-600">Unit</span>
            </h1>
            <p className="text-neutral-400 font-mono">
               We are looking for the outliers. The obsessives. The ones who see code in their sleep.
               If you want to work on the bleeding edge of offensive security, report for duty.
            </p>
        </div>

        <div className="space-y-4">
            {jobs.map((job) => (
                <div key={job.id} className="group bg-neutral-900/20 border border-neutral-800 p-6 flex flex-col md:flex-row items-center justify-between hover:bg-neutral-900/50 hover:border-red-600 transition-all cursor-pointer">
                    <div className="flex items-start gap-4 mb-4 md:mb-0 w-full md:w-auto">
                        <div className="p-3 bg-neutral-800 rounded group-hover:bg-red-900/20 transition-colors">
                            <Briefcase className="w-6 h-6 text-neutral-400 group-hover:text-red-500" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">{job.title}</h3>
                            <div className="flex flex-wrap gap-3 mt-2 text-xs font-mono text-neutral-500">
                                <span>{job.department}</span>
                                <span className="text-red-900">•</span>
                                <span>{job.location}</span>
                                <span className="text-red-900">•</span>
                                <span>{job.type}</span>
                            </div>
                        </div>
                    </div>
                    
                    <button className="w-full md:w-auto px-6 py-2 border border-neutral-700 text-neutral-300 font-bold uppercase text-xs tracking-widest group-hover:bg-red-600 group-hover:border-red-600 group-hover:text-white transition-all flex items-center justify-center gap-2">
                        Apply <ChevronRight className="w-3 h-3" />
                    </button>
                </div>
            ))}
        </div>
        
        <div className="mt-16 p-8 bg-neutral-900/30 border border-dashed border-neutral-800 text-center">
            <p className="text-neutral-500 font-mono text-sm mb-4">Don't see your role? Send your encrypted resume.</p>
            <a href="mailto:careers@pentest.elite" className="text-red-500 hover:text-red-400 font-bold uppercase tracking-widest border-b border-red-500 pb-1">careers@pentest.elite</a>
        </div>
      </div>
    </div>
  );
};