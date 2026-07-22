import React from 'react';
import { 
  Sparkles, 
  FileText, 
  Briefcase, 
  Zap, 
  Award, 
  ArrowRight,
  TrendingUp,
  Bot
} from 'lucide-react';
import type { CandidateProfile, ATSAnalysis, JobMatchResult } from '../types/resume';
import { ATSScoreCard } from '../components/ATSScoreCard';
import { JobMatchCard } from '../components/JobMatchCard';
import { SkillGapChart } from '../components/SkillGapChart';

interface DashboardProps {
  candidateProfile: CandidateProfile | null;
  atsAnalysis: ATSAnalysis | null;
  jobMatches: JobMatchResult[];
  onNavigateTab: (tab: string) => void;
  onSelectJobForInterview: (match: JobMatchResult) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  candidateProfile,
  atsAnalysis,
  jobMatches,
  onNavigateTab,
  onSelectJobForInterview
}) => {
  const topMatch = jobMatches.length > 0 ? jobMatches[0] : null;

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-slate-800 relative overflow-hidden bg-mesh">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-bold border border-sky-500/30">
            <Sparkles className="w-3.5 h-3.5" /> AI-POWERED CAREER MATCHING PLATFORM
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Automated <span className="text-gradient">Resume Analysis</span> & Job Opportunities
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Upload your resume once and instantly discover all applicable company job opportunities—eliminating manual search while preparing role-specific interview questions.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigateTab('analyzer')}
              className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-400 hover:to-indigo-400 text-slate-950 font-bold text-xs rounded-xl shadow-lg shadow-sky-500/25 transition-all hover:scale-105"
            >
              <FileText className="w-4 h-4" /> Upload & Analyze Resume
            </button>

            <button
              onClick={() => onNavigateTab('jobs')}
              className="flex items-center gap-2 px-5 py-3 bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold text-xs rounded-xl border border-slate-800 transition-all"
            >
              <Briefcase className="w-4 h-4 text-sky-400" /> View Matched Jobs ({jobMatches.length})
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="glass-panel p-5 rounded-2xl border border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400 font-semibold block">ATS Score</span>
            <span className="text-2xl font-black text-white mt-1 block">
              {atsAnalysis ? `${atsAnalysis.overallScore}%` : 'N/A'}
            </span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 flex items-center justify-center font-bold">
            <Award className="w-6 h-6" />
          </div>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400 font-semibold block">Matched Job Openings</span>
            <span className="text-2xl font-black text-emerald-400 mt-1 block">
              {jobMatches.length} Roles
            </span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold">
            <Briefcase className="w-6 h-6" />
          </div>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400 font-semibold block">Top Role Fit</span>
            <span className="text-2xl font-black text-indigo-400 mt-1 block">
              {topMatch ? `${topMatch.matchPercentage}%` : 'N/A'}
            </span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 flex items-center justify-center font-bold">
            <TrendingUp className="w-6 h-6" />
          </div>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400 font-semibold block">Career Widget</span>
            <span className="text-2xl font-black text-purple-400 mt-1 block">
              Embed Ready
            </span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center font-bold">
            <Bot className="w-6 h-6" />
          </div>
        </div>

      </div>

      {atsAnalysis && (
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Zap className="w-5 h-5 text-sky-400" />
            Resume Health & Automated Job Recommendation
          </h2>

          <ATSScoreCard ats={atsAnalysis} />

          {topMatch && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-400" /> #1 Recommended Job Match
                </h3>
                <button
                  onClick={() => onNavigateTab('jobs')}
                  className="text-xs text-sky-400 hover:text-sky-300 font-semibold flex items-center gap-1"
                >
                  View All Open Jobs ({jobMatches.length}) <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              <JobMatchCard
                matchResult={topMatch}
                onSelectForInterview={onSelectJobForInterview}
              />
            </div>
          )}
        </div>
      )}

      {candidateProfile && (
        <SkillGapChart
          candidateProfile={candidateProfile}
          matches={jobMatches}
        />
      )}

    </div>
  );
};
