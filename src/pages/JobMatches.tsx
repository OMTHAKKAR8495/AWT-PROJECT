import React, { useState } from 'react';
import { Target, Sparkles, Filter } from 'lucide-react';
import type { JobMatchResult } from '../types/resume';
import { JobMatchCard } from '../components/JobMatchCard';
import { SkillGapChart } from '../components/SkillGapChart';
import { getTranslation, type SupportedLanguage } from '../data/translations';

interface JobMatchesPageProps {
  jobMatches: JobMatchResult[];
  onSelectForInterview: (match: JobMatchResult) => void;
  selectedLanguage?: SupportedLanguage;
}

export const JobMatchesPage: React.FC<JobMatchesPageProps> = ({
  jobMatches,
  onSelectForInterview,
  selectedLanguage = 'en-US'
}) => {
  const [filter, setFilter] = useState<'All' | 'High Match' | 'Good Fit' | 'Eligible Only'>('All');

  const t = (key: string) => getTranslation(selectedLanguage, key);

  const filteredMatches = jobMatches.filter(m => {
    if (filter === 'High Match') return m.matchLevel === 'High Match';
    if (filter === 'Good Fit') return m.matchLevel === 'Good Fit';
    if (filter === 'Eligible Only') return m.eligibilityStatus === 'OFFICIALLY ELIGIBLE';
    return true;
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-300 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      <div className="glass-panel rounded-2xl p-6 border border-[var(--color-border)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md bg-[var(--color-badge-bg)] text-[var(--color-badge-text)] border border-[var(--color-badge-border)] flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[var(--color-accent)] animate-pulse" />
              AI Matching Engine
            </span>
            <span className="text-xs text-slate-400">
              Evaluated against Nexus & Corporate Jobs
            </span>
          </div>

          <h2 className="text-2xl font-extrabold text-white mt-1">
            {t('jobMatches.title')}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            {t('jobMatches.subtitle')}
          </p>
        </div>

        <div className="flex items-center gap-2 bg-[var(--color-bg-surface)] p-1.5 rounded-xl border border-[var(--color-border)]">
          <Filter className="w-4 h-4 text-[var(--color-accent)] ml-2 shrink-0" />
          <div className="flex flex-wrap gap-1">
            {(['All', 'Eligible Only', 'High Match', 'Good Fit'] as const).map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  filter === f
                    ? 'theme-btn-primary font-bold shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      <SkillGapChart jobMatches={jobMatches} />

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Target className="w-5 h-5 text-[var(--color-accent)]" />
            Ranked Job Match Openings ({filteredMatches.length})
          </h3>
          <span className="text-xs text-slate-400">Sorted by % Skills Match</span>
        </div>

        {filteredMatches.length > 0 ? (
          <div className="grid grid-cols-1 gap-6">
            {filteredMatches.map((match) => (
              <JobMatchCard
                key={match.job.id}
                matchResult={match}
                onSelectForInterview={onSelectForInterview}
              />
            ))}
          </div>
        ) : (
          <div className="glass-panel p-12 rounded-2xl text-center space-y-3 border border-[var(--color-border)]">
            <p className="text-sm font-semibold text-slate-300">No job openings match the selected filter choice.</p>
            <button
              onClick={() => setFilter('All')}
              className="px-4 py-2 theme-btn-primary text-white text-xs font-bold rounded-xl shadow-md"
            >
              Reset Filter to View All Jobs
            </button>
          </div>
        )}
      </div>

    </div>
  );
};
