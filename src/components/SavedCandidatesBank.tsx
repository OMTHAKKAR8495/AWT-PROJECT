import React from 'react';
import { Trash2, ExternalLink } from 'lucide-react';
import type { SavedCandidateRecord, CandidateProfile } from '../types/resume';

interface SavedCandidatesBankProps {
  candidates: SavedCandidateRecord[];
  onSelectCandidate: (profile: CandidateProfile) => void;
  onDeleteCandidate: (id: string) => void;
}

export const SavedCandidatesBank: React.FC<SavedCandidatesBankProps> = ({
  candidates,
  onSelectCandidate,
  onDeleteCandidate
}) => {
  if (candidates.length === 0) {
    return (
      <div className="glass-panel p-6 rounded-2xl border border-[var(--color-border)] text-center text-xs text-slate-400">
        No candidate records saved yet. Upload a resume to automatically save candidate evaluations.
      </div>
    );
  }

  return (
    <div className="glass-panel p-6 rounded-2xl border border-[var(--color-border)] space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider">
          Saved Candidates Bank ({candidates.length})
        </h3>
        <span className="text-[10px] text-slate-400">Click candidate to inspect evaluation</span>
      </div>

      <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
        {candidates.map(cand => (
          <div
            key={cand.id}
            className="p-3 rounded-xl bg-[var(--color-bg-dark)] border border-[var(--color-border)] flex items-center justify-between hover:border-[var(--color-accent)] transition-all group"
          >
            <div
              className="flex items-center gap-3 cursor-pointer flex-1"
              onClick={() => onSelectCandidate(cand.profile)}
            >
              <div className="w-8 h-8 rounded-lg theme-btn-primary text-white font-bold flex items-center justify-center text-xs">
                {cand.candidateName.charAt(0)}
              </div>
              <div>
                <h4 className="text-xs font-bold text-white group-hover:text-[var(--color-accent)] transition-colors">
                  {cand.candidateName}
                </h4>
                <div className="text-[10px] text-slate-400">
                  {cand.profile.title} • ATS: {cand.ats.overallScore}%
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className={`px-2 py-0.5 text-[9px] font-bold rounded ${
                cand.finalResult === 'PASS (SELECTED)' 
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : cand.finalResult === 'PASS (NEEDS IMPROVEMENT)'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                  : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
              }`}>
                {cand.finalResult}
              </span>

              <button
                onClick={() => onSelectCandidate(cand.profile)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-[var(--color-accent)] hover:bg-white/10"
                title="View Evaluation"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onDeleteCandidate(cand.id)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-white/10"
                title="Delete Record"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
