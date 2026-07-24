import React, { useState } from 'react';
import { Database, Trash2, Search, Award, Mail } from 'lucide-react';
import type { SavedCandidateRecord, CandidateProfile } from '../types/resume';
import { getTranslation, type SupportedLanguage } from '../data/translations';

interface CandidateDatabasePageProps {
  candidates: SavedCandidateRecord[];
  onSelectCandidate: (profile: CandidateProfile) => void;
  onDeleteCandidate: (id: string) => void;
  onEmailCandidate: (record: SavedCandidateRecord) => void;
  selectedLanguage?: SupportedLanguage;
}

export const CandidateDatabasePage: React.FC<CandidateDatabasePageProps> = ({
  candidates,
  onSelectCandidate,
  onDeleteCandidate,
  onEmailCandidate,
  selectedLanguage = 'en-US'
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const t = (key: string) => getTranslation(selectedLanguage, key);

  const filtered = candidates.filter(c =>
    c.candidateName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.profile.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.profile.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-300 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      <div className="glass-panel rounded-2xl p-6 border border-[var(--color-border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
            <Database className="w-6 h-6 text-[var(--color-accent)]" />
            {t('db.title')}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            {t('db.subtitle')}
          </p>
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
          <input
            type="text"
            placeholder={t('db.searchPlaceholder')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[var(--color-bg-dark)] border border-[var(--color-border)] rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[var(--color-accent)]"
          />
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(cand => (
            <div
              key={cand.id}
              className="glass-panel rounded-2xl p-6 border border-[var(--color-border)] space-y-4 hover:border-[var(--color-accent)] transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl theme-btn-primary text-white font-bold flex items-center justify-center text-sm shadow-md">
                    {cand.candidateName.charAt(0)}
                  </div>

                  <span className={`px-2.5 py-1 text-[10px] font-extrabold rounded-full ${
                    cand.finalResult === 'PASS (SELECTED)'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                      : cand.finalResult === 'PASS (NEEDS IMPROVEMENT)'
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                      : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                  }`}>
                    {cand.finalResult}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[var(--color-accent)] transition-colors">
                    {cand.candidateName}
                  </h3>
                  <div className="text-xs text-slate-400">{cand.profile.title}</div>
                </div>

                <div className="p-3 rounded-xl bg-[var(--color-bg-dark)] border border-[var(--color-border)] flex items-center justify-between text-xs">
                  <span className="text-slate-400">ATS Overall Score:</span>
                  <span className="font-extrabold text-[var(--color-accent)] flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" /> {cand.ats.overallScore}%
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold text-slate-500 block">Extracted Skills</span>
                  <div className="flex flex-wrap gap-1">
                    {cand.profile.skills.slice(0, 5).map(s => (
                      <span key={s} className="px-2 py-0.5 text-[10px] bg-[var(--color-bg-dark)] text-slate-300 rounded border border-[var(--color-border)]">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--color-border)] flex items-center justify-between text-xs">
                <span className="text-[10px] text-slate-500">Saved: {cand.savedAt}</span>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectCandidate(cand.profile)}
                    className="theme-btn-primary font-bold text-xs px-3 py-1.5 rounded-lg shadow-md"
                  >
                    View Evaluation
                  </button>
                  <button
                    onClick={() => onEmailCandidate(cand)}
                    className="p-1.5 text-slate-400 hover:text-[var(--color-accent)] hover:bg-white/10 rounded-lg transition-colors"
                    title="Email Report"
                  >
                    <Mail className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onDeleteCandidate(cand.id)}
                    className="p-1.5 text-slate-400 hover:text-rose-400 hover:bg-white/10 rounded-lg"
                    title="Delete Candidate"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      ) : (
        <div className="glass-panel p-12 rounded-2xl text-center space-y-3 border border-[var(--color-border)]">
          <Database className="w-12 h-12 text-slate-600 mx-auto" />
          <h3 className="text-lg font-bold text-white">No Candidate Records Found</h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            Upload resumes or test sample candidate presets to build your candidate database.
          </p>
        </div>
      )}

    </div>
  );
};
