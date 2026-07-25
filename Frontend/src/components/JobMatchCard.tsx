import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  DollarSign, 
  CheckCircle2, 
  AlertCircle, 
  ChevronDown, 
  ChevronUp, 
  MessageSquareCode, 
  Sparkles,
  ShieldCheck,
  Building,
  GraduationCap
} from 'lucide-react';
import type { JobMatchResult } from '../types/resume';

interface JobMatchCardProps {
  matchResult: JobMatchResult;
  onSelectForInterview: (match: JobMatchResult) => void;
}

export const JobMatchCard: React.FC<JobMatchCardProps> = ({
  matchResult,
  onSelectForInterview
}) => {
  const [expanded, setExpanded] = useState(false);
  const { 
    job, 
    matchPercentage, 
    matchedSkills, 
    missingRequiredSkills, 
    matchLevel, 
    eligibilityStatus,
    eligibilityBreakdown,
    recommendationReason 
  } = matchResult;

  const getEligibilityBadgeStyle = (status: JobMatchResult['eligibilityStatus']) => {
    if (status === 'OFFICIALLY ELIGIBLE') return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/40';
    if (status === 'PARTIALLY ELIGIBLE') return 'bg-amber-500/10 text-amber-400 border-amber-500/40';
    return 'bg-rose-500/10 text-rose-400 border-rose-500/40';
  };

  return (
    <div className="glass-panel rounded-2xl p-6 border border-[var(--color-border)] space-y-4 relative overflow-hidden group">
      
      {/* Top Banner Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[var(--color-border)]">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider rounded-md bg-[var(--color-bg-dark)] text-slate-300 border border-[var(--color-border)] flex items-center gap-1">
              <Building className="w-3 h-3 text-[var(--color-accent)]" />
              {job.company}
            </span>
            <span className="text-xs text-slate-400">{job.department}</span>
          </div>

          <h3 className="text-xl font-extrabold text-white mt-1 group-hover:text-[var(--color-accent)] transition-colors">
            {job.title}
          </h3>
        </div>

        {/* Company Official Eligibility Decision Badge */}
        <div className="flex items-center gap-3">
          <div className={`px-4 py-2 rounded-xl border flex flex-col items-center justify-center ${getEligibilityBadgeStyle(eligibilityStatus)}`}>
            <span className="text-sm font-black tracking-tight flex items-center gap-1">
              <ShieldCheck className="w-4 h-4" /> {eligibilityStatus}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider mt-0.5">{matchPercentage}% Match ({matchLevel})</span>
          </div>
        </div>
      </div>

      {/* Meta Row: Location, Salary, Experience & Degree */}
      <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
        <span className="flex items-center gap-1">
          <MapPin className="w-3.5 h-3.5 text-[var(--color-accent)]" />
          {job.location} ({job.type})
        </span>
        <span className="flex items-center gap-1">
          <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
          {job.salaryRange}
        </span>
        <span className="flex items-center gap-1">
          <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
          Company Req: {job.experienceYears}+ Years
        </span>
        {job.minDegreeRequired && (
          <span className="flex items-center gap-1 text-slate-300">
            <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
            {job.minDegreeRequired}
          </span>
        )}
      </div>

      {/* AI Recommendation Box */}
      <div className="p-3 rounded-xl bg-[var(--color-bg-dark)]/80 border border-[var(--color-border)] text-xs text-slate-300 flex items-start gap-2">
        <Sparkles className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
        <span>{recommendationReason}</span>
      </div>

      {/* Company Specific Eligibility Checklist Breakdown */}
      <div className="p-3.5 rounded-xl bg-[var(--color-bg-surface)] border border-[var(--color-border)] space-y-2">
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
          {job.company} Criteria Evaluation Checklist:
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {eligibilityBreakdown.criteriaChecklist.map((item, idx) => (
            <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-300">
              {item.satisfied ? (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              ) : (
                <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              )}
              <span className={item.satisfied ? 'text-slate-200' : 'text-amber-300 font-medium'}>
                {item.criterion}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Skill Match Tags Row */}
      <div className="space-y-3">
        {matchedSkills.length > 0 && (
          <div>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
              Matching Candidate Skills ({matchedSkills.length})
            </span>
            <div className="flex flex-wrap gap-1.5">
              {matchedSkills.map(skill => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 rounded-lg"
                >
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {missingRequiredSkills.length > 0 && (
          <div>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
              Missing Skills to Acquire ({missingRequiredSkills.length})
            </span>
            <div className="flex flex-wrap gap-1.5">
              {missingRequiredSkills.map(skill => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30 rounded-lg"
                >
                  <AlertCircle className="w-3 h-3 text-amber-400" />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Expandable Section */}
      {expanded && (
        <div className="pt-4 border-t border-[var(--color-border)] space-y-3 text-xs text-slate-300">
          {job.companyCriteriaNotes && (
            <div className="p-3 rounded-lg bg-[var(--color-badge-bg)] border border-[var(--color-badge-border)]">
              <h4 className="font-bold text-[var(--color-accent)] mb-1">Company-Specific Hiring Criteria</h4>
              <ul className="list-disc list-inside space-y-1 text-slate-300">
                {job.companyCriteriaNotes.map((note, idx) => (
                  <li key={idx}>{note}</li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h4 className="font-bold text-white mb-1">Role Description</h4>
            <p className="text-slate-400">{job.description}</p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-1">Key Responsibilities</h4>
            <ul className="list-disc list-inside space-y-1 text-slate-400">
              {job.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Action Footer Bar */}
      <div className="flex items-center justify-between pt-3 border-t border-[var(--color-border)]">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs text-slate-400 hover:text-[var(--color-accent)] flex items-center gap-1 transition-colors font-medium"
        >
          {expanded ? (
            <>Less Details <ChevronUp className="w-3.5 h-3.5" /></>
          ) : (
            <>View Company Criteria & Responsibilities <ChevronDown className="w-3.5 h-3.5" /></>
          )}
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onSelectForInterview(matchResult)}
            className="theme-btn-primary font-bold text-xs px-3.5 py-1.5 rounded-xl shadow-md flex items-center gap-1.5 transition-all"
          >
            <MessageSquareCode className="w-3.5 h-3.5" />
            Interview Questions for Role
          </button>
        </div>
      </div>

    </div>
  );
};
