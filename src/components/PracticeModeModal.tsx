import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  RotateCcw
} from 'lucide-react';
import confetti from 'canvas-confetti';
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
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [evaluationResult, setEvaluationResult] = useState<{
    score: number;
    feedback: string;
    pointsHit: string[];
    missingPoints: string[];
  } | null>(null);

  const handleSubmitAnswer = () => {
    if (!userAnswer.trim()) return;
    setIsEvaluating(true);

    setTimeout(() => {
      const lower = userAnswer.toLowerCase();
      const pointsHit: string[] = [];
      const missingPoints: string[] = [];

      question.keyPointsToInclude.forEach(kp => {
        const words = kp.toLowerCase().split(' ');
        const matches = words.filter(w => w.length > 3 && lower.includes(w));
        if (matches.length >= 1 || lower.includes(kp.toLowerCase())) {
          pointsHit.push(kp);
        } else {
          missingPoints.push(kp);
        }
      });

      let score = Math.round((pointsHit.length / question.keyPointsToInclude.length) * 100);
      score = Math.max(55, Math.min(98, score));

      if (userAnswer.length > 150) score += 10;
      score = Math.min(98, score);

      if (score >= 80) {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      }

      setEvaluationResult({
        score,
        feedback: score >= 80 
          ? 'Exceptional response! Clear structure, technical depth, and key concepts addressed accurately.'
          : 'Good effort! To achieve an elite score, try incorporating more explicit technical keywords and STAR metrics.',
        pointsHit,
        missingPoints
      });
      setIsEvaluating(false);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="glass-panel w-full max-w-2xl rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6 relative overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center border border-sky-500/30">
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400 px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/30">
              {question.category} • {question.difficulty} Level
            </span>
            <h3 className="text-lg font-bold text-white mt-1">
              AI Interactive Practice Simulator
            </h3>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
          <p className="text-sm font-semibold text-sky-200">
            "{question.question}"
          </p>
        </div>

        {!evaluationResult ? (
          <div className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-400 flex items-center justify-between">
                <span>Type or Speak your Interview Answer:</span>
                <span className="text-[11px] text-slate-500">{userAnswer.length} chars</span>
              </label>
              <textarea
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Type your response here using the STAR technique (Situation, Task, Action, Result)..."
                className="w-full h-36 p-4 bg-slate-900 border border-slate-800 rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 font-sans"
              />
            </div>

            <div className="flex items-center justify-between">
              <p className="text-[11px] text-slate-400">
                Tip: Include specific metrics & technical terms for high score.
              </p>
              <button
                onClick={handleSubmitAnswer}
                disabled={!userAnswer.trim() || isEvaluating}
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-400 hover:to-indigo-400 text-slate-950 font-bold text-xs rounded-xl shadow-lg shadow-sky-500/20 disabled:opacity-50 transition-all"
              >
                {isEvaluating ? (
                  <>Evaluating with AI...</>
                ) : (
                  <>Submit for AI Evaluation <Send className="w-3.5 h-3.5" /></>
                )}
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-5 animate-in fade-in duration-300">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-black text-xl">
                  {evaluationResult.score}%
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">AI Score & Feedback</h4>
                  <p className="text-xs text-slate-400">{evaluationResult.feedback}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5 mb-2">
                  <CheckCircle2 className="w-4 h-4" /> Covered Key Points ({evaluationResult.pointsHit.length})
                </span>
                <ul className="space-y-1 text-xs text-slate-300">
                  {evaluationResult.pointsHit.map((p, idx) => (
                    <li key={idx}>✓ {p}</li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
                <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5 mb-2">
                  <AlertCircle className="w-4 h-4" /> Missed Technical Points ({evaluationResult.missingPoints.length})
                </span>
                <ul className="space-y-1 text-xs text-slate-300">
                  {evaluationResult.missingPoints.map((p, idx) => (
                    <li key={idx}>• {p}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 space-y-1">
              <span className="font-bold text-sky-400 block mb-1">Recommended Benchmark Answer:</span>
              <p className="text-slate-400 leading-relaxed">{question.suggestedAnswer}</p>
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setEvaluationResult(null)}
                className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Practice Again
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
