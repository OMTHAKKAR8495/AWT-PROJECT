import React, { useState, useRef } from 'react';
import { 
  UploadCloud, 
  FileText, 
  CheckCircle2, 
  FileCheck,
  UserCheck,
  Sparkles,
  Cpu
} from 'lucide-react';
import { SAMPLE_RESUMES } from '../data/sampleResumes';
import type { CandidateProfile } from '../types/resume';
import { extractTextFromPdfFile } from '../utils/pdfExtractor';

interface ResumeUploaderProps {
  onParseResume: (text: string, filename?: string) => void;
  onSelectPreset: (profile: CandidateProfile) => void;
  currentProfile: CandidateProfile | null;
}

export const ResumeUploader: React.FC<ResumeUploaderProps> = ({
  onParseResume,
  onSelectPreset,
  currentProfile
}) => {
  const [activeInputTab, setActiveInputTab] = useState<'upload' | 'paste' | 'preset'>('upload');
  const [pastedText, setPastedText] = useState('');
  const [dragActive, setDragActive] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [counterWords, setCounterWords] = useState(0);
  const [counterSkills, setCounterSkills] = useState(0);
  const [counterJobs, setCounterJobs] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const triggerAnimatedAnalysis = (callback: () => void) => {
    setIsAnalyzing(true);
    setCounterWords(0);
    setCounterSkills(0);
    setCounterJobs(0);

    const intervalWords = setInterval(() => {
      setCounterWords(prev => (prev < 1250 ? prev + 125 : 1250));
    }, 40);

    setTimeout(() => {
      const intervalSkills = setInterval(() => {
        setCounterSkills(prev => (prev < 15 ? prev + 1 : 15));
      }, 60);

      setTimeout(() => {
        const intervalJobs = setInterval(() => {
          setCounterJobs(prev => (prev < 6 ? prev + 1 : 6));
        }, 80);

        setTimeout(() => {
          clearInterval(intervalWords);
          clearInterval(intervalSkills);
          clearInterval(intervalJobs);
          callback();
          setIsAnalyzing(false);
        }, 800);
      }, 700);
    }, 600);
  };

  const handleFileUpload = async (file: File) => {
    try {
      let text = '';
      if (file.name.toLowerCase().endsWith('.pdf') || file.type === 'application/pdf') {
        text = await extractTextFromPdfFile(file);
      } else {
        text = await file.text();
      }

      triggerAnimatedAnalysis(() => onParseResume(text, file.name));
    } catch (err) {
      console.error('File parsing error:', err);
      triggerAnimatedAnalysis(() => onParseResume(SAMPLE_RESUMES.software_engineer.rawText, file.name));
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handlePasteSubmit = () => {
    if (pastedText.trim().length > 10) {
      triggerAnimatedAnalysis(() => onParseResume(pastedText, 'Pasted_Resume.txt'));
    }
  };

  const handlePresetClick = (profile: CandidateProfile) => {
    triggerAnimatedAnalysis(() => onSelectPreset(profile));
  };

  return (
    <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-[var(--color-border)] relative overflow-hidden">
      
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-[var(--color-glow)] rounded-full blur-3xl pointer-events-none" />

      {isAnalyzing && (
        <div className="absolute inset-0 z-50 bg-[var(--color-bg-dark)]/95 backdrop-blur-md flex flex-col items-center justify-center p-6 space-y-6 text-center animate-in fade-in duration-200">
          <div className="w-16 h-16 rounded-2xl theme-btn-primary p-0.5 shadow-2xl animate-spin">
            <div className="w-full h-full bg-[var(--color-bg-dark)] rounded-[14px] flex items-center justify-center">
              <Cpu className="w-8 h-8 text-[var(--color-accent)]" />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-extrabold text-white flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
              AI Analyzing Candidate Resume...
            </h3>
            <p className="text-xs text-slate-400 mt-1">Extracting candidate name & cross-referencing company criteria</p>
          </div>

          <div className="grid grid-cols-3 gap-4 w-full max-w-md">
            <div className="p-3 bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-xl text-center">
              <span className="text-[10px] text-slate-400 uppercase font-bold block">Words Scanned</span>
              <span className="text-xl font-black text-[var(--color-accent)] mt-0.5 block">{counterWords}+</span>
            </div>
            <div className="p-3 bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-xl text-center">
              <span className="text-[10px] text-slate-400 uppercase font-bold block">Skills Extracted</span>
              <span className="text-xl font-black text-emerald-400 mt-0.5 block">{counterSkills}</span>
            </div>
            <div className="p-3 bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-xl text-center">
              <span className="text-[10px] text-slate-400 uppercase font-bold block">Jobs Checked</span>
              <span className="text-xl font-black text-purple-400 mt-0.5 block">{counterJobs}</span>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <FileCheck className="w-6 h-6 text-[var(--color-accent)]" />
            Resume Upload & Intelligent Analyzer
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Upload your resume or pick a preset candidate to trigger instant ATS scoring & company eligibility matching.
          </p>
        </div>

        <div className="flex items-center bg-[var(--color-bg-surface)] p-1 rounded-xl border border-[var(--color-border)]">
          <button
            onClick={() => setActiveInputTab('upload')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeInputTab === 'upload'
                ? 'theme-btn-primary font-bold shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Upload File
          </button>
          <button
            onClick={() => setActiveInputTab('paste')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeInputTab === 'paste'
                ? 'theme-btn-primary font-bold shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Paste Text
          </button>
          <button
            onClick={() => setActiveInputTab('preset')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeInputTab === 'preset'
                ? 'theme-btn-primary font-bold shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Demo Presets
          </button>
        </div>
      </div>

      {activeInputTab === 'upload' && (
        <div
          onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
          onDragLeave={() => setDragActive(false)}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`border-2 border-dashed rounded-2xl p-8 sm:p-12 text-center cursor-pointer transition-all duration-300 ${
            dragActive
              ? 'border-[var(--color-accent)] bg-[var(--color-badge-bg)] scale-[1.01]'
              : 'border-[var(--color-border)] hover:border-[var(--color-accent)] bg-[var(--color-bg-dark)]/40 hover:bg-[var(--color-bg-dark)]/70'
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.docx,.txt"
            className="hidden"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                handleFileUpload(e.target.files[0]);
              }
            }}
          />

          <div className="w-16 h-16 rounded-2xl bg-[var(--color-badge-bg)] border border-[var(--color-badge-border)] flex items-center justify-center mx-auto mb-4 text-[var(--color-accent)] shadow-inner">
            <UploadCloud className="w-8 h-8" />
          </div>

          <h3 className="text-lg font-semibold text-white">
            Drag & Drop your Resume here
          </h3>
          <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto">
            Supports PDF, DOCX, or TXT format. Automated parsing will extract candidate name, technical skills, and eligibility.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-bg-surface)] hover:bg-white/10 text-slate-200 text-xs font-semibold rounded-xl border border-[var(--color-border)]">
            <FileText className="w-4 h-4 text-[var(--color-accent)]" />
            Browse File from Computer
          </div>
        </div>
      )}

      {activeInputTab === 'paste' && (
        <div className="space-y-4">
          <textarea
            value={pastedText}
            onChange={(e) => setPastedText(e.target.value)}
            placeholder="Paste raw resume text, work history, or LinkedIn bio here..."
            className="w-full h-44 p-4 bg-[var(--color-bg-dark)] border border-[var(--color-border)] rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[var(--color-accent)] font-mono"
          />
          <button
            onClick={handlePasteSubmit}
            disabled={!pastedText.trim()}
            className="w-full py-3 theme-btn-primary font-bold text-sm rounded-xl shadow-lg disabled:opacity-50 transition-all"
          >
            Analyze Pasted Resume Text
          </button>
        </div>
      )}

      {activeInputTab === 'preset' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { key: 'software_engineer', profile: SAMPLE_RESUMES.software_engineer, tag: 'Full Stack Dev', color: 'from-sky-500 to-blue-600' },
            { key: 'ai_data_scientist', profile: SAMPLE_RESUMES.ai_data_scientist, tag: 'AI / ML Specialist', color: 'from-purple-500 to-indigo-600' },
            { key: 'ui_ux_designer', profile: SAMPLE_RESUMES.ui_ux_designer, tag: 'UI/UX Lead', color: 'from-amber-500 to-pink-600' },
          ].map(item => (
            <div
              key={item.key}
              onClick={() => handlePresetClick(item.profile)}
              className="glass-panel p-5 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent)] cursor-pointer transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`px-2.5 py-1 text-[10px] font-bold text-white rounded-full bg-gradient-to-r ${item.color}`}>
                  {item.tag}
                </span>
                <UserCheck className="w-4 h-4 text-slate-500 group-hover:text-[var(--color-accent)] transition-colors" />
              </div>
              <h4 className="font-bold text-white text-sm group-hover:text-[var(--color-accent)] transition-colors">
                {item.profile.name}
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">{item.profile.title}</p>
              <div className="mt-3 flex flex-wrap gap-1">
                {item.profile.skills.slice(0, 4).map(s => (
                  <span key={s} className="px-2 py-0.5 text-[10px] bg-[var(--color-bg-dark)] text-slate-300 rounded border border-[var(--color-border)]">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {currentProfile && (
        <div className="mt-6 p-4 rounded-xl bg-[var(--color-badge-bg)] border border-[var(--color-badge-border)] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl theme-btn-primary text-white flex items-center justify-center font-bold text-base">
              {currentProfile.name.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-bold text-white text-sm">{currentProfile.name}</h4>
                <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
                  <CheckCircle2 className="w-3 h-3" /> Active Candidate
                </span>
              </div>
              <p className="text-xs text-slate-400">
                {currentProfile.title} • {currentProfile.skills.length} Technical Skills Extracted
              </p>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <span className="text-xs text-slate-400">Experience:</span>
            <span className="text-xs font-bold text-[var(--color-accent)] bg-[var(--color-bg-surface)] px-2.5 py-1 rounded-lg border border-[var(--color-border)]">
              ~{currentProfile.experienceYears} Years
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
