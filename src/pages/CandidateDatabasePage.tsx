import React, { useState } from 'react';
import { Database, Search, Download, Mail, UserCheck, Trash2 } from 'lucide-react';
import type { SavedCandidateRecord, CandidateProfile, ATSAnalysis, JobMatchResult } from '../types/resume';
import { generatePDFReport } from '../utils/exportPdf';
import { EmailReportModal } from '../components/EmailReportModal';

interface CandidateDatabasePageProps {
  candidates: SavedCandidateRecord[];
  onSelectCandidate: (profile: CandidateProfile) => void;
  onDeleteCandidate: (id: string) => void;
}

export const CandidateDatabasePage: React.FC<CandidateDatabasePageProps> = ({
  candidates,
  onSelectCandidate,
  onDeleteCandidate
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterResult, setFilterResult] = useState('All');
  const [emailModalCandidate, setEmailModalCandidate] = useState<{
    profile: CandidateProfile;
    ats: ATSAnalysis;
    matches: JobMatchResult[];
  } | null>(null);

  const filteredCandidates = candidates.filter(record => {
    const matchesSearch = 
      record.candidateName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.profile.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.profile.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesResult = filterResult === 'All' || record.finalResult.includes(filterResult);

    return matchesSearch && matchesResult;
  });

  const getResultBadgeStyle = (result: string) => {
    if (result.includes('SELECTED')) return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
    if (result.includes('NEEDS IMPROVEMENT')) return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
    return 'bg-rose-500/10 text-rose-400 border-rose-500/30';
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      <div className="glass-panel rounded-2xl p-6 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md bg-purple-500/10 text-purple-400 border border-purple-500/30">
              Candidate Resume Storage Bank
            </span>
            <span className="text-xs text-slate-400">
              Database History ({candidates.length} Stored Resumes)
            </span>
          </div>
          <h2 className="text-2xl font-extrabold text-white mt-1">
            Persisted Candidate Database & History
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Access stored resumes, ATS scores, eligibility decisions, single-page PDF reports, and direct email dispatching.
          </p>
        </div>
      </div>

      <div className="glass-panel rounded-2xl p-4 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-96">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search database by candidate name or skill..."
            className="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-xs text-slate-400 shrink-0 font-medium">Filter Decision:</span>
          <select
            value={filterResult}
            onChange={(e) => setFilterResult(e.target.value)}
            className="px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-purple-500 cursor-pointer w-full sm:w-auto"
          >
            <option value="All">All Results</option>
            <option value="SELECTED">PASS (SELECTED)</option>
            <option value="NEEDS IMPROVEMENT">PASS (NEEDS IMPROVEMENT)</option>
            <option value="FAIL">FAIL (NOT ELIGIBLE)</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCandidates.length > 0 ? (
          filteredCandidates.map(record => (
            <div
              key={record.id}
              className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-purple-500/50 space-y-4 transition-all group relative overflow-hidden"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-base border border-purple-500/30">
                    {record.candidateName.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-white text-base group-hover:text-purple-400 transition-colors">
                      {record.candidateName}
                    </h4>
                    <p className="text-xs text-slate-400">{record.profile.title}</p>
                  </div>
                </div>

                <button
                  onClick={() => onDeleteCandidate(record.id)}
                  className="p-1.5 text-slate-500 hover:text-rose-400 hover:bg-slate-800 rounded-lg transition-colors"
                  title="Delete Candidate Record"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px] p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <div>
                  <span className="text-slate-500 block">ATS Score:</span>
                  <span className="font-bold text-sky-400 text-xs">{record.ats.overallScore}%</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Words Scanned:</span>
                  <span className="font-bold text-slate-200 text-xs">{record.ats.totalWordsScanned}</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <span className="text-[10px] text-slate-500">Saved Date: {record.savedAt}</span>
                <span className={`px-2.5 py-1 text-[10px] font-bold rounded-lg border ${getResultBadgeStyle(record.finalResult)}`}>
                  {record.finalResult}
                </span>
              </div>

              <div className="flex flex-wrap gap-1">
                {record.profile.skills.slice(0, 5).map(s => (
                  <span key={s} className="px-2 py-0.5 text-[10px] bg-slate-900 text-slate-300 rounded border border-slate-800">
                    {s}
                  </span>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectCandidate(record.profile)}
                  className="flex items-center gap-1 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 transition-colors"
                >
                  <UserCheck className="w-3.5 h-3.5 text-sky-400" />
                  Load Profile
                </button>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => generatePDFReport(record.profile, record.ats, record.jobMatches)}
                    className="p-2 bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 rounded-xl border border-sky-500/30 transition-colors"
                    title="Download 1-Page PDF Report"
                  >
                    <Download className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setEmailModalCandidate({
                      profile: record.profile,
                      ats: record.ats,
                      matches: record.jobMatches
                    })}
                    className="p-2 bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 rounded-xl border border-purple-500/30 transition-colors"
                    title="Dispatch Email Report"
                  >
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          ))
        ) : (
          <div className="col-span-full glass-panel rounded-2xl p-12 text-center border border-slate-800">
            <Database className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <h3 className="text-base font-bold text-white">No Saved Candidate Records Found</h3>
            <p className="text-xs text-slate-400 mt-1">Upload resumes in the Resume Analyzer tab to automatically store candidates in history.</p>
          </div>
        )}
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
