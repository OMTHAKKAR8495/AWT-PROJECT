import React, { useState } from 'react';
import { 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  Play
} from 'lucide-react';
import type { CandidateProfile, InterviewQuestion, JobRole } from '../types/resume';
import { generateTailoredInterviewQuestions } from '../utils/interviewGenerator';
import { PracticeModeModal } from './PracticeModeModal';

interface InterviewPrepProps {
  candidateProfile: CandidateProfile;
  selectedJob?: JobRole;
}

export const InterviewPrep: React.FC<InterviewPrepProps> = ({
  candidateProfile,
  selectedJob
}) => {
  const questions = generateTailoredInterviewQuestions(candidateProfile, selectedJob);

  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [expandedQuestionId, setExpandedQuestionId] = useState<string | null>(null);
  const [practiceQuestion, setPracticeQuestion] = useState<InterviewQuestion | null>(null);

  const filteredQuestions = questions.filter(q => {
    if (activeCategory === 'All') return true;
    return q.category === activeCategory;
  });

  return (
    <div className="space-y-6">
      
      <div className="glass-panel rounded-2xl p-6 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md bg-sky-500/10 text-sky-400 border border-sky-500/30">
              AI Powered Practice Studio
            </span>
            <span className="text-xs text-slate-400">
              Tailored for {selectedJob ? selectedJob.title : candidateProfile.title}
            </span>
          </div>
          <h2 className="text-2xl font-extrabold text-white mt-1">
            Interview Question Generator & Practice Mode
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Questions dynamically tailored to candidate's skills ({candidateProfile.skills.slice(0, 5).join(', ')}).
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800">
          {['All', 'Technical', 'System Design', 'Behavioral', 'HR / Culture'].map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-sky-500 text-slate-950 font-bold shadow-md shadow-sky-500/20'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filteredQuestions.map((q, idx) => {
          const isExpanded = expandedQuestionId === q.id;
          return (
            <div
              key={q.id || idx}
              className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4 hover:border-slate-700 transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    Q{idx + 1}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 text-[10px] font-bold text-sky-400 bg-sky-500/10 rounded border border-sky-500/20">
                        {q.category}
                      </span>
                      <span className="px-2 py-0.5 text-[10px] font-semibold text-purple-400 bg-purple-500/10 rounded border border-purple-500/20">
                        {q.difficulty} Level
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white leading-snug">
                      {q.question}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setPracticeQuestion(q)}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-400 hover:to-indigo-400 text-slate-950 font-bold text-xs rounded-xl shadow-md transition-all shrink-0"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  Practice
                </button>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Key Concepts & Keywords to Address:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {q.keyPointsToInclude.map((kp, kIdx) => (
                    <span key={kIdx} className="px-2.5 py-1 text-[11px] bg-slate-800 text-slate-300 rounded-md border border-slate-700">
                      • {kp}
                    </span>
                  ))}
                </div>
              </div>

              {isExpanded && (
                <div className="pt-3 border-t border-slate-800 space-y-3 animate-in fade-in duration-200">
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <h4 className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" /> High-Scoring Benchmark Answer:
                    </h4>
                    <p className="text-xs text-slate-300 whitespace-pre-line leading-relaxed">
                      {q.suggestedAnswer}
                    </p>
                  </div>

                  {q.starGuide && (
                    <div className="p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/20 text-xs space-y-2">
                      <h4 className="font-bold text-indigo-400 uppercase tracking-wider">
                        STAR Framework Answer Structure:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300">
                        <div><strong className="text-slate-100">S - Situation:</strong> {q.starGuide.situation}</div>
                        <div><strong className="text-slate-100">T - Task:</strong> {q.starGuide.task}</div>
                        <div><strong className="text-slate-100">A - Action:</strong> {q.starGuide.action}</div>
                        <div><strong className="text-slate-100">R - Result:</strong> {q.starGuide.result}</div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <button
                onClick={() => setExpandedQuestionId(isExpanded ? null : q.id)}
                className="text-xs text-slate-400 hover:text-sky-400 flex items-center gap-1 transition-colors font-medium"
              >
                {isExpanded ? (
                  <>Hide Benchmark Answer <ChevronUp className="w-3.5 h-3.5" /></>
                ) : (
                  <>Reveal Suggested Answer & STAR Breakdown <ChevronDown className="w-3.5 h-3.5" /></>
                )}
              </button>

            </div>
          );
        })}
      </div>

      {practiceQuestion && (
        <PracticeModeModal
          question={practiceQuestion}
          onClose={() => setPracticeQuestion(null)}
        />
      )}

    </div>
  );
};
