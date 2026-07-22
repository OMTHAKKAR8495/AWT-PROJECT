import React from 'react';
import { Target, TrendingUp, Sparkles, Award } from 'lucide-react';
import type { CandidateProfile, JobMatchResult } from '../types/resume';

interface SkillGapChartProps {
  candidateProfile: CandidateProfile;
  matches: JobMatchResult[];
}

export const SkillGapChart: React.FC<SkillGapChartProps> = ({
  candidateProfile,
  matches
}) => {
  const topMatches = matches.slice(0, 3);
  const missingMap: Record<string, number> = {};

  topMatches.forEach(m => {
    m.missingRequiredSkills.concat(m.missingPreferredSkills).forEach(skill => {
      missingMap[skill] = (missingMap[skill] || 0) + 1;
    });
  });

  const recommendedSkillsToLearn = Object.entries(missingMap)
    .sort((a, b) => b[1] - a[1])
    .map(entry => entry[0]);

  return (
    <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-6">
      
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Target className="w-5 h-5 text-sky-400" />
            Skill Gap & Market Demand Analytics
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Automated analysis of your current skill matrix vs. target enterprise roles.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800/80">
          <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2 mb-3">
            <Award className="w-4 h-4" /> Validated Technical Skills ({candidateProfile.skills.length})
          </h4>
          <div className="flex flex-wrap gap-2">
            {candidateProfile.skills.map(skill => (
              <span
                key={skill}
                className="px-3 py-1 text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 rounded-lg"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800/80">
          <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2 mb-3">
            <TrendingUp className="w-4 h-4" /> Recommended Next Skills to Learn
          </h4>
          {recommendedSkillsToLearn.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {recommendedSkillsToLearn.map(skill => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30 rounded-lg flex items-center gap-1.5"
                >
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  {skill}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-xs text-emerald-400 font-semibold">
              🎉 Outstanding! Your skill portfolio matches all required technologies in the job directory!
            </p>
          )}
        </div>

      </div>

    </div>
  );
};
