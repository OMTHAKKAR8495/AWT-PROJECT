import React, { useState } from 'react';
import { 
  Bot, 
  Sparkles, 
  Code, 
  X, 
  ArrowRight
} from 'lucide-react';
import type { JobMatchResult } from '../types/resume';
import { matchResumeWithJobs } from '../utils/jobMatcher';
import { SAMPLE_RESUMES } from '../data/sampleResumes';
import { EmbedCodeModal } from './EmbedCodeModal';

interface CareerWidgetDemoProps {
  onSelectJobForInterview: (match: JobMatchResult) => void;
}

export const CareerWidgetDemo: React.FC<CareerWidgetDemoProps> = ({
  onSelectJobForInterview
}) => {
  const [isWidgetOpen, setIsWidgetOpen] = useState(true);
  const [showEmbedModal, setShowEmbedModal] = useState(false);
  const [messages, setMessages] = useState<Array<{ sender: 'bot' | 'user'; text: string; matches?: JobMatchResult[] }>>([
    {
      sender: 'bot',
      text: '👋 Welcome to Apex Technologies Careers! Drop your resume here, and I will automatically match you with open jobs across our engineering, product, and AI departments.'
    }
  ]);

  const handleSimulateUpload = (key: string) => {
    const selected = SAMPLE_RESUMES[key];
    const newMatches = matchResumeWithJobs(selected);

    setMessages(prev => [
      ...prev,
      {
        sender: 'user',
        text: `Uploaded resume: ${selected.name} (${selected.title})`
      },
      {
        sender: 'bot',
        text: `🎉 Analysis Complete for ${selected.name}! Based on your resume, I matched you with ${newMatches.filter(m => m.matchPercentage >= 60).length} prime roles at Apex Technologies:`,
        matches: newMatches.slice(0, 3)
      }
    ]);
  };

  return (
    <div className="space-y-6">
      
      <div className="glass-panel rounded-2xl p-6 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              Enterprise Web Integration
            </span>
            <span className="text-xs text-slate-400">Plug-and-Play Career Bot Widget</span>
          </div>
          <h2 className="text-2xl font-extrabold text-white mt-1">
            Career Page Embedded Bot Simulator
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Experience how candidates use this AI Assistant directly on any company's Career Page.
          </p>
        </div>

        <button
          onClick={() => setShowEmbedModal(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-400 hover:to-indigo-400 text-slate-950 font-bold text-xs rounded-xl shadow-lg shadow-sky-500/20 transition-all shrink-0"
        >
          <Code className="w-4 h-4" /> Get HTML Embed Script
        </button>
      </div>

      <div className="relative rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden shadow-2xl min-h-[600px] flex flex-col">
        
        <div className="bg-slate-900 border-b border-slate-800 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500" />
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
          </div>
          <div className="bg-slate-950 px-6 py-1.5 rounded-lg border border-slate-800 text-xs text-slate-400 font-mono flex items-center gap-2 w-full max-w-md justify-center">
            <span>https://careers.apextechnologies.com/open-roles</span>
          </div>
          <div className="text-xs text-slate-500 font-semibold">Live Preview</div>
        </div>

        <div className="p-8 sm:p-12 space-y-8 flex-1 bg-mesh">
          <div className="max-w-2xl space-y-4">
            <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-bold border border-sky-500/30">
              WE ARE HIRING 2026
            </span>
            <h1 className="text-4xl font-extrabold text-white tracking-tight leading-tight">
              Build the Future of Cloud & AI Engineering
            </h1>
            <p className="text-slate-400 text-sm leading-relaxed">
              Skip traditional job searching. Upload your resume to our AI Career Bot on the bottom right to automatically discover all positions matching your exact skill set!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <h4 className="font-bold text-white text-sm">Remote First</h4>
              <p className="text-xs text-slate-400 mt-1">Flexible hybrid & worldwide remote roles.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <h4 className="font-bold text-white text-sm">Competitive Salary</h4>
              <p className="text-xs text-slate-400 mt-1">Top tier equity & learning stipends.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <h4 className="font-bold text-white text-sm">Fast Track Hiring</h4>
              <p className="text-xs text-slate-400 mt-1">Instant ATS scoring & interview prep.</p>
            </div>
          </div>
        </div>

        {!isWidgetOpen && (
          <button
            onClick={() => setIsWidgetOpen(true)}
            className="absolute bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-tr from-sky-500 via-indigo-500 to-purple-500 p-0.5 shadow-2xl shadow-sky-500/40 hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
          >
            <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
              <Bot className="w-7 h-7 text-sky-400 group-hover:rotate-12 transition-transform" />
            </div>
          </button>
        )}

        {isWidgetOpen && (
          <div className="absolute bottom-6 right-6 w-full max-w-md glass-panel rounded-2xl border border-sky-500/40 shadow-2xl overflow-hidden flex flex-col h-[520px] animate-in slide-in-from-bottom duration-300">
            
            <div className="p-4 bg-gradient-to-r from-sky-900/90 to-indigo-900/90 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center border border-sky-500/30">
                  <Bot className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm flex items-center gap-1.5">
                    Apex Career Bot <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  </h4>
                  <span className="text-[10px] text-sky-300 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Online • Ready to match jobs
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsWidgetOpen(false)}
                className="p-1 text-slate-400 hover:text-white rounded-lg transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 flex-1 overflow-y-auto space-y-3 text-xs">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-xl leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-sky-500 text-slate-950 font-semibold rounded-br-none'
                        : 'bg-slate-900 text-slate-200 border border-slate-800 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>

                  {msg.matches && (
                    <div className="w-full mt-3 space-y-2">
                      {msg.matches.map(m => (
                        <div
                          key={m.job.id}
                          className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-sky-500/50 transition-colors space-y-2"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-white text-xs">{m.job.title}</span>
                            <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold">
                              {m.matchPercentage}% Fit
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-400">{m.job.location} • {m.job.salaryRange}</p>
                          <div className="flex justify-end pt-1">
                            <button
                              onClick={() => onSelectJobForInterview(m)}
                              className="px-2.5 py-1 bg-sky-500 text-slate-950 font-bold text-[10px] rounded-lg hover:bg-sky-400 transition-colors flex items-center gap-1"
                            >
                              Practice Interview <ArrowRight className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="p-3 bg-slate-950 border-t border-slate-800 space-y-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Simulate Uploading Resume:
              </span>
              <div className="grid grid-cols-3 gap-1.5">
                <button
                  onClick={() => handleSimulateUpload('software_engineer')}
                  className="p-1.5 rounded-lg bg-slate-900 hover:bg-sky-500/20 hover:text-sky-400 border border-slate-800 text-[10px] font-medium text-slate-300 transition-all text-center"
                >
                  Full Stack
                </button>
                <button
                  onClick={() => handleSimulateUpload('ai_data_scientist')}
                  className="p-1.5 rounded-lg bg-slate-900 hover:bg-sky-500/20 hover:text-sky-400 border border-slate-800 text-[10px] font-medium text-slate-300 transition-all text-center"
                >
                  AI Engineer
                </button>
                <button
                  onClick={() => handleSimulateUpload('ui_ux_designer')}
                  className="p-1.5 rounded-lg bg-slate-900 hover:bg-sky-500/20 hover:text-sky-400 border border-slate-800 text-[10px] font-medium text-slate-300 transition-all text-center"
                >
                  UI/UX Lead
                </button>
              </div>
            </div>

          </div>
        )}

      </div>

      {showEmbedModal && <EmbedCodeModal onClose={() => setShowEmbedModal(false)} />}
    </div>
  );
};
