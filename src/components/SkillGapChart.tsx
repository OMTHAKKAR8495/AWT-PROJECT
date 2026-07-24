import React from 'react';
import type { JobMatchResult } from '../types/resume';

interface SkillGapChartProps {
  jobMatches: JobMatchResult[];
}

export const SkillGapChart: React.FC<SkillGapChartProps> = ({ jobMatches }) => {
  const missingSkillFrequency: Record<string, number> = {};

  jobMatches.forEach(match => {
    match.missingRequiredSkills.forEach(skill => {
      missingSkillFrequency[skill] = (missingSkillFrequency[skill] || 0) + 1;
    });
  });

  const sortedGaps = Object.entries(missingSkillFrequency)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  if (sortedGaps.length === 0) {
    return (
      <div className="glass-panel rounded-2xl p-6 border border-[var(--color-border)] text-center text-xs text-slate-400">
        🎉 Phenomenal Skill Coverage! No critical skill gaps identified across target positions.
      </div>
    );
  }

  return (
    <div className="glass-panel rounded-2xl p-6 border border-[var(--color-border)] space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider">
          Top Identified Skill Gaps Across Market
        </h3>
        <span className="text-[10px] text-slate-400 bg-[var(--color-bg-dark)] px-2.5 py-1 rounded-full border border-[var(--color-border)]">
          Actionable Career Upgrades
        </span>
      </div>

      <div className="space-y-3">
        {sortedGaps.map(([skill, count]) => {
          const percentage = Math.round((count / Math.max(jobMatches.length, 1)) * 100);
          return (
            <div key={skill} className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="font-semibold text-slate-200">{skill}</span>
                <span className="text-amber-400 font-bold">Missing in {count} Jobs ({percentage}%)</span>
              </div>
              <div className="h-2 bg-[var(--color-bg-dark)] rounded-full overflow-hidden border border-[var(--color-border)]">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-rose-500 transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
