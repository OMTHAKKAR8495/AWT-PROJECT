import React from 'react';
import { Sparkles, GraduationCap, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/90 text-slate-400 text-xs py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-sm">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-bold text-white text-base">CareerMatch AI</span>
            </div>
            <p className="text-slate-400 max-w-md leading-relaxed text-xs">
              AI-Powered Resume Analyzer, Automated Job Matching Engine, and Role-Tailored Interview Question Generator. Designed for college submission and seamless career page integration.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-white uppercase text-[11px] tracking-wider">Core Modules</h4>
            <ul className="space-y-1.5 text-slate-400">
              <li>• Resume ATS Scoring Engine</li>
              <li>• Automated Skill Matcher</li>
              <li>• Interview Question Studio</li>
              <li>• Career Bot Embed Widget</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-white uppercase text-[11px] tracking-wider flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-sky-400" /> College Submission
            </h4>
            <p className="text-slate-400 text-xs">Advanced Web Technology (AWT) Capstone Project</p>
            <div className="pt-2 flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[10px]">React 18</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[10px]">TypeScript</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[10px]">Tailwind</span>
            </div>
          </div>

        </div>

        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>© 2026 CareerMatch AI • Advanced Web Tech Submission</p>
          <div className="flex items-center gap-1">
            Built with <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" /> for College Evaluation
          </div>
        </div>

      </div>
    </footer>
  );
};
