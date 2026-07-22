import React, { useState } from 'react';
import { Briefcase, Search } from 'lucide-react';
import type { JobMatchResult } from '../types/resume';
import { JobMatchCard } from '../components/JobMatchCard';

interface JobMatchesProps {
  jobMatches: JobMatchResult[];
  onSelectForInterview: (match: JobMatchResult) => void;
}

export const JobMatchesPage: React.FC<JobMatchesProps> = ({
  jobMatches,
  onSelectForInterview
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [minMatchScore, setMinMatchScore] = useState(0);

  const departments = ['All', 'Software Engineering', 'Frontend Engineering', 'Data & Artificial Intelligence', 'Design & UX', 'Infrastructure & Operations'];

  const filteredMatches = jobMatches.filter(m => {
    const matchesSearch = 
      m.job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.job.requiredSkills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesDept = selectedDepartment === 'All' || m.job.department === selectedDepartment;
    const matchesScore = m.matchPercentage >= minMatchScore;

    return matchesSearch && matchesDept && matchesScore;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      <div className="glass-panel rounded-2xl p-6 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              Automated Job Matching Engine
            </span>
            <span className="text-xs text-slate-400">
              Zero Manual Job Search Required
            </span>
          </div>
          <h2 className="text-2xl font-extrabold text-white mt-1">
            Company Open Job Opportunities ({filteredMatches.length})
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Matched directly against candidate's parsed skills & experience level.
          </p>
        </div>
      </div>

      <div className="glass-panel rounded-2xl p-4 border border-slate-800 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        
        <div className="md:col-span-5 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by job title, skill (e.g. React, Python, AWS)..."
            className="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 font-sans"
          />
        </div>

        <div className="md:col-span-4">
          <select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-sky-500 cursor-pointer"
          >
            {departments.map(dept => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
        </div>

        <div className="md:col-span-3 flex items-center gap-2">
          <span className="text-[11px] text-slate-400 font-medium shrink-0">Min Fit: {minMatchScore}%</span>
          <input
            type="range"
            min="0"
            max="80"
            step="10"
            value={minMatchScore}
            onChange={(e) => setMinMatchScore(Number(e.target.value))}
            className="w-full accent-sky-500 cursor-pointer"
          />
        </div>

      </div>

      <div className="space-y-4">
        {filteredMatches.length > 0 ? (
          filteredMatches.map(match => (
            <JobMatchCard
              key={match.job.id}
              matchResult={match}
              onSelectForInterview={onSelectForInterview}
            />
          ))
        ) : (
          <div className="glass-panel rounded-2xl p-12 text-center border border-slate-800">
            <Briefcase className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <h3 className="text-base font-bold text-white">No Matching Jobs Found</h3>
            <p className="text-xs text-slate-400 mt-1">Try broadening your search keywords or lowering the minimum match fit filter.</p>
          </div>
        )}
      </div>

    </div>
  );
};
