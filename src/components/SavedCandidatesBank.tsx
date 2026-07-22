import React, { useState } from 'react';
import { Database, Download, Mail, UserCheck, Trash2 } from 'lucide-react';
import type { SavedCandidateRecord, CandidateProfile, ATSAnalysis, JobMatchResult } from '../types/resume';
import { generatePDFReport } from '../utils/exportPdf';
import { EmailReportModal } from './EmailReportModal';

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
  const [emailModalCandidate, setEmailModalCandidate] = useState<{
    profile: CandidateProfile;
    ats: ATSAnalysis;
    matches: JobMatchResult[];
  } | null>(null);

  const getResultBadgeStyle = (result: string) => {
    if (result.includes('SELECTED')) return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
    if (result.includes('NEEDS IMPROVEMENT')) return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
    return 'bg-rose-500/10 text-rose-400 border-rose-500/30';
  };

  return (
    <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
      
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Database className="w-5 h-5 text-sky-400" />
            Stored Candidates Database ({candidates.length})
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Persisted candidate records stored in database. Download PDF reports or email directly.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {candidates.map(record => (
          <div
            key={record.id}
            className="glass-panel p-5 rounded-xl border border-slate-800 hover:border-sky-500/50 space-y-3 transition-all group"
          >
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-extrabold text-white text-base group-hover:text-sky-400 transition-colors">
                  {record.candidateName}
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">{record.profile.title}</p>
              </div>

              <button
                onClick={() => onDeleteCandidate(record.id)}
                className="p-1.5 text-slate-500 hover:text-rose-400 hover:bg-slate-800 rounded-lg transition-colors"
                title="Delete Record"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="flex items-center justify-between text-xs pt-1">
              <span className="text-[10px] text-slate-500">Saved: {record.savedAt}</span>
              <span className={`px-2.5 py-0.5 text-[10px] font-bold rounded-md border ${getResultBadgeStyle(record.finalResult)}`}>
                {record.finalResult}
              </span>
            </div>

            <div className="flex flex-wrap gap-1 pt-1">
              {record.profile.skills.slice(0, 4).map(s => (
                <span key={s} className="px-2 py-0.5 text-[10px] bg-slate-900 text-slate-300 rounded border border-slate-800">
                  {s}
                </span>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
              <button
                onClick={() => onSelectCandidate(record.profile)}
                className="flex items-center gap-1 px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg border border-slate-700 transition-colors"
              >
                <UserCheck className="w-3.5 h-3.5 text-sky-400" />
                View Profile
              </button>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => generatePDFReport(record.profile, record.ats, record.jobMatches)}
                  className="p-2 bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 rounded-lg border border-sky-500/30 transition-colors"
                  title="Download PDF Report"
                >
                  <Download className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => setEmailModalCandidate({
                    profile: record.profile,
                    ats: record.ats,
                    matches: record.jobMatches
                  })}
                  className="p-2 bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 rounded-lg border border-purple-500/30 transition-colors"
                  title="Email Report Directly"
                >
                  <Mail className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {emailModalCandidate && (
        <EmailReportModal
          profile={emailModalCandidate.profile}
          ats={emailModalCandidate.ats}
          jobMatches={emailModalCandidate.matches}
          onClose={() => setEmailModalCandidate(null)}
        />
      )}

    </div>
  );
};
