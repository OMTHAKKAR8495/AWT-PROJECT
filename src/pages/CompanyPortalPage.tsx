import React, { useState } from 'react';
import { 
  Search, Sparkles, CheckCircle2, 
  Users, TrendingUp, Award, ShieldCheck, MapPin, DollarSign, Clock
} from 'lucide-react';
import type { JobRole } from '../types/resume';
import { COMPANY_JOBS } from '../data/jobsData';

interface CompanyPortalPageProps {
  onApplyForJob: (job: JobRole) => void;
}

export const CompanyPortalPage: React.FC<CompanyPortalPageProps> = ({ onApplyForJob }) => {
  const [activeSection, setActiveSection] = useState<'home' | 'careers' | 'about'>('careers');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const departments = ['All', 'Software Engineering', 'Frontend Engineering', 'Data & Artificial Intelligence', 'Design & UX', 'Infrastructure & Operations'];

  const filteredJobs = COMPANY_JOBS.filter((job: JobRole) => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          job.requiredSkills.some((s: string) => s.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesDept = selectedDepartment === 'All' || job.department === selectedDepartment;
    return matchesSearch && matchesDept;
  });

  return (
    <div className="space-y-10 animate-in fade-in duration-300">
      
      {/* Sub-Header Navigation Banner */}
      <div className="glass-panel rounded-2xl p-6 border border-slate-800 relative overflow-hidden bg-gradient-to-r from-slate-900 via-sky-950/40 to-slate-900">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-sky-500/20 text-sky-400 text-xs font-bold rounded-full border border-sky-500/30 uppercase tracking-wider">
                Enterprise Talent Portal
              </span>
              <span className="text-xs text-slate-400">Apex Tech Systems Inc.</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Build the Future of AI Software with Us
            </h1>
            <p className="text-slate-300 text-sm max-w-2xl">
              Welcome to Apex Tech Systems. Explore open engineering positions and instantly run an AI ATS Resume Eligibility Check before applying!
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-950/80 p-1.5 rounded-xl border border-slate-800 shrink-0">
            <button
              onClick={() => setActiveSection('careers')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                activeSection === 'careers'
                  ? 'bg-sky-500 text-slate-950 shadow-lg'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              💼 Open Careers ({COMPANY_JOBS.length})
            </button>
            <button
              onClick={() => setActiveSection('about')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                activeSection === 'about'
                  ? 'bg-sky-500 text-slate-950 shadow-lg'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              🏢 About Apex Tech
            </button>
            <button
              onClick={() => setActiveSection('home')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                activeSection === 'home'
                  ? 'bg-sky-500 text-slate-950 shadow-lg'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              🌐 Company Culture
            </button>
          </div>
        </div>
      </div>

      {/* SECTION 1: CAREERS & JOB LISTINGS WITH AI RESUME SCAN TRIGGER */}
      {activeSection === 'careers' && (
        <div className="space-y-6">
          
          {/* Search & Filter Bar */}
          <div className="glass-panel rounded-2xl p-5 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search jobs, tech stack, or skills (e.g. React, Python)..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
              />
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1">
                Department:
              </span>
              {departments.map(dept => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg shrink-0 transition-colors ${
                    selectedDepartment === dept
                      ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40'
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Job Listings Grid */}
          <div className="grid grid-cols-1 gap-5">
            {filteredJobs.map((job: JobRole) => (
              <div
                key={job.id}
                className="glass-panel rounded-2xl p-6 border border-slate-800 hover:border-sky-500/50 transition-all duration-300 group hover:shadow-xl hover:shadow-sky-500/5 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                <div className="space-y-3 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 bg-sky-500/10 text-sky-400 text-[10px] font-bold rounded-md border border-sky-500/30 uppercase tracking-wider">
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-slate-400 bg-slate-900 px-2.5 py-0.5 rounded-md border border-slate-800">
                      <MapPin className="w-3 h-3 text-slate-400" /> {job.location}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-md border border-emerald-500/20">
                      <DollarSign className="w-3 h-3 text-emerald-400" /> {job.salaryRange}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-md border border-amber-500/20">
                      <Clock className="w-3 h-3 text-amber-400" /> Min {job.experienceYears}+ Yrs Experience
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-white group-hover:text-sky-300 transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 line-clamp-2 leading-relaxed">
                      {job.description}
                    </p>
                  </div>

                  {/* Skills badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mr-1 py-1">Required Tech Stack:</span>
                    {job.requiredSkills.map((skill: string) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 text-[11px] font-semibold bg-slate-900 text-slate-200 border border-slate-800 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 1-Click AI Resume Match Action */}
                <div className="flex flex-col sm:flex-row lg:flex-col items-stretch lg:items-end justify-center gap-3 shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-800">
                  <button
                    onClick={() => onApplyForJob(job)}
                    className="flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg shadow-sky-500/20 transition-all duration-200 hover:scale-[1.02]"
                  >
                    <Sparkles className="w-4 h-4 fill-slate-950" /> Test AI Resume Fit & Apply
                  </button>
                  <span className="text-[10px] text-slate-400 text-center lg:text-right flex items-center justify-center lg:justify-end gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" /> Instant ATS Match Score (0–100%)
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      )}

      {/* SECTION 2: ABOUT APEX TECH */}
      {activeSection === 'about' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-3">
              <Users className="w-8 h-8 text-sky-400" />
              <h3 className="text-lg font-bold text-white">Global Talent Pool</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Join over 450+ engineers, AI specialists, and product builders across 18 countries delivering cloud systems for Fortune 500 enterprises.
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-3">
              <TrendingUp className="w-8 h-8 text-emerald-400" />
              <h3 className="text-lg font-bold text-white">Rapid Growth & Impact</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Scaling 140% YoY with cutting-edge tech stacks: React, TypeScript, Python AI, LLMs, Docker, and Kubernetes microservices.
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-3">
              <Award className="w-8 h-8 text-amber-400" />
              <h3 className="text-lg font-bold text-white">Top Employer Award 2026</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Voted Top Workplace for Developer Experience, offering 100% remote options, competitive ESOP equity, and $3,000 annual learning stipend.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 3: COMPANY CULTURE */}
      {activeSection === 'home' && (
        <div className="glass-panel rounded-2xl p-8 border border-slate-800 space-y-6">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-2xl font-extrabold text-white">Life at Apex Tech Systems</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              We empower software engineers to innovate, automate, and build AI products that touch millions of users worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 space-y-1.5">
              <CheckCircle2 className="w-5 h-5 text-sky-400" />
              <h4 className="text-sm font-bold text-white">Remote-First Culture</h4>
              <p className="text-xs text-slate-400">Work from anywhere with flexible operating hours.</p>
            </div>
            <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 space-y-1.5">
              <CheckCircle2 className="w-5 h-5 text-purple-400" />
              <h4 className="text-sm font-bold text-white">Modern Tech Stack</h4>
              <p className="text-xs text-slate-400">React, TypeScript, Python LLMs, Vite, Tailwind CSS.</p>
            </div>
            <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 space-y-1.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <h4 className="text-sm font-bold text-white">Competitive Pay & ESOPs</h4>
              <p className="text-xs text-slate-400">Industry leading salary packages + company equity.</p>
            </div>
            <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 space-y-1.5">
              <CheckCircle2 className="w-5 h-5 text-amber-400" />
              <h4 className="text-sm font-bold text-white">Annual Tech Retreats</h4>
              <p className="text-xs text-slate-400">All-expenses paid team hackathons and retreats.</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
