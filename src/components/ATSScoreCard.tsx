import React from 'react';
import { 
  Award, 
  CheckCircle2, 
  AlertTriangle, 
  TrendingUp, 
  Zap, 
  ShieldCheck, 
  Layers, 
  Target 
} from 'lucide-react';
import type { ATSAnalysis } from '../types/resume';

interface ATSScoreCardProps {
  ats: ATSAnalysis;
}

export const ATSScoreCard: React.FC<ATSScoreCardProps> = ({ ats }) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10';
    if (score >= 60) return 'text-sky-400 border-sky-500/40 bg-sky-500/10';
    return 'text-amber-400 border-amber-500/40 bg-amber-500/10';
  };

  const getScoreGradient = (score: number) => {
    if (score >= 80) return 'from-emerald-500 to-teal-400';
    if (score >= 60) return 'from-sky-500 to-indigo-500';
    return 'from-amber-500 to-orange-500';
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      
      <div className="lg:col-span-5 glass-panel rounded-2xl p-6 border border-slate-800 flex flex-col justify-between relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Award className="w-40 h-40 text-sky-400" />
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              ATS System Compatibility
            </span>
            <span className={`px-2.5 py-1 text-xs font-bold rounded-full border ${getScoreColor(ats.overallScore)}`}>
              {ats.overallScore >= 80 ? 'ATS Optimized' : 'Needs Optimization'}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center my-6">
            <div className="relative w-44 h-44 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  className="text-slate-800"
                  strokeWidth="8"
                  stroke="currentColor"
                  fill="transparent"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  className="text-sky-400 transition-all duration-1000 ease-out"
                  strokeWidth="8"
                  strokeDasharray={264}
                  strokeDashoffset={264 - (264 * ats.overallScore) / 100}
                  strokeLinecap="round"
                  stroke="url(#atsGradient)"
                  fill="transparent"
                />
                <defs>
                  <linearGradient id="atsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#818cf8" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="absolute flex flex-col items-center text-center">
                <span className="text-4xl font-extrabold text-white tracking-tight">
                  {ats.overallScore}<span className="text-xl text-slate-400">%</span>
                </span>
                <span className="text-[11px] font-semibold text-slate-400 mt-0.5">
                  Overall ATS Score
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800/80">
          <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800/60">
            <span className="text-[10px] text-slate-400 font-medium">Action Verbs</span>
            <p className="text-base font-bold text-emerald-400 mt-0.5">{ats.actionVerbsFound.length} Found</p>
          </div>
          <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800/60">
            <span className="text-[10px] text-slate-400 font-medium">Formatting Grade</span>
            <p className="text-base font-bold text-sky-400 mt-0.5">{ats.formattingScore}/100</p>
          </div>
        </div>
      </div>

      <div className="lg:col-span-7 space-y-6">
        
        <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <Layers className="w-4 h-4 text-sky-400" />
            Core Resume Scoring Pillars
          </h3>

          {[
            { label: 'Technical Keyword Density', score: ats.keywordScore, icon: Target },
            { label: 'Impact Action Verbs & Metrics', score: ats.impactScore, icon: TrendingUp },
            { label: 'Formatting & ATS Parsing Structure', score: ats.formattingScore, icon: ShieldCheck },
            { label: 'Contact & Section Completeness', score: ats.completenessScore, icon: Zap },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                    <Icon className="w-3.5 h-3.5 text-sky-400" />
                    {item.label}
                  </span>
                  <span className="font-bold text-slate-200">{item.score}%</span>
                </div>
                <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                  <div
                    className={`h-full bg-gradient-to-r ${getScoreGradient(item.score)} transition-all duration-700`}
                    style={{ width: `${item.score}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div className="glass-panel p-5 rounded-xl border border-emerald-500/20 bg-emerald-500/5">
            <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-4 h-4" /> Key Resume Strengths
            </h4>
            <ul className="space-y-2">
              {ats.strengths.map((str, idx) => (
                <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                  {str}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-panel p-5 rounded-xl border border-amber-500/20 bg-amber-500/5">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2 mb-3">
              <AlertTriangle className="w-4 h-4" /> Recommended Action Items
            </h4>
            <ul className="space-y-2">
              {ats.improvements.map((imp, idx) => (
                <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                  {imp}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

    </div>
  );
};
