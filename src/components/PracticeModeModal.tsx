import React, { useState } from 'react';
import { 
  X, 
  Send, 
  ShieldCheck
} from 'lucide-react';
import type { InterviewQuestion } from '../types/resume';

interface PracticeModeModalProps {
  question: InterviewQuestion;
  onClose: () => void;
}

export const PracticeModeModal: React.FC<PracticeModeModalProps> = ({
  question,
  onClose
}) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isEvaluating, setIsEvaluating] = useState(false);

  const handleEvaluateAnswer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userAnswer.trim()) return;

    setIsEvaluating(true);
    setTimeout(() => {
      setIsEvaluating(false);
      setFeedback(`Excellent effort! Your answer covers key concepts. Highlight quantifiable results (e.g. % performance increase) to score even higher in executive interviews.`);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[var(--color-bg-dark)]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl relative my-8">
        
        <div className="p-6 border-b border-[var(--color-border)] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md theme-btn-primary text-white">
              AI Interview Practice Mode
            </span>
            <span className="text-xs text-slate-400">{question.category}</span>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div className="bg-[var(--color-bg-dark)] p-4 rounded-xl border border-[var(--color-border)]">
            <span className="text-[10px] font-bold uppercase text-[var(--color-accent)] block mb-1">
              Interview Question:
            </span>
            <h3 className="text-base font-bold text-white leading-snug">
              {question.question}
            </h3>
          </div>

          <form onSubmit={handleEvaluateAnswer} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Type Your Answer Below (Simulated Live Response)
              </label>
              <textarea
                rows={5}
                required
                placeholder="Structure your answer using Situation, Task, Action, and Result (STAR)..."
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                className="w-full bg-[var(--color-bg-dark)] border border-[var(--color-border)] rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[var(--color-accent)] font-mono"
              />
            </div>

            <button
              type="submit"
              disabled={isEvaluating || !userAnswer.trim()}
              className="w-full theme-btn-primary font-bold text-xs py-3 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50"
            >
              {isEvaluating ? (
                <>Evaluating Answer Quality...</>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Evaluate My Response with AI
                </>
              )}
            </button>
          </form>

          {feedback && (
            <div className="p-4 rounded-xl bg-[var(--color-badge-bg)] border border-[var(--color-badge-border)] text-xs text-slate-200 space-y-2 animate-in fade-in">
              <div className="font-bold text-[var(--color-accent)] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                AI Interviewer Feedback:
              </div>
              <p className="leading-relaxed">{feedback}</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
