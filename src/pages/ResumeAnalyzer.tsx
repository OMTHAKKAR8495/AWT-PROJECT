import React, { useState } from 'react';
import { UserCheck, ShieldCheck, Database, Check, Award, Mail, Download, Edit3 } from 'lucide-react';
import type { CandidateProfile, ATSAnalysis, JobMatchResult, SavedCandidateRecord } from '../types/resume';
import { ResumeUploader } from '../components/ResumeUploader';
import { ATSScoreCard } from '../components/ATSScoreCard';
import { SavedCandidatesBank } from '../components/SavedCandidatesBank';
import { generatePDFReport } from '../utils/exportPdf';
import { EmailReportModal } from '../components/EmailReportModal';
import { getTranslation, type SupportedLanguage } from '../data/translations';

interface ResumeAnalyzerProps {
  candidateProfile: CandidateProfile | null;
  atsAnalysis: ATSAnalysis | null;
  jobMatches: JobMatchResult[];
  savedCandidates: SavedCandidateRecord[];
  onParseResume: (text: string, filename?: string) => void;
  onSelectPreset: (profile: CandidateProfile) => void;
  onSaveCandidate: () => void;
  onDeleteCandidate: (id: string) => void;
  onUpdateCandidateName: (newName: string) => void;
  onUpdateCandidateEmail: (newEmail: string) => void;
  selectedLanguage?: SupportedLanguage;
}

export const ResumeAnalyzerPage: React.FC<ResumeAnalyzerProps> = ({
  candidateProfile,
  atsAnalysis,
  jobMatches,
  savedCandidates,
  onParseResume,
  onSelectPreset,
  onSaveCandidate,
  onDeleteCandidate,
  onUpdateCandidateName,
  onUpdateCandidateEmail,
  selectedLanguage = 'en-US'
}) => {
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  
  const [isEditingName, setIsEditingName] = useState(false);
  const [nameInput, setNameInput] = useState('');

  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  const t = (key: string) => getTranslation(selectedLanguage, key);

  const topMatch = jobMatches[0];
  const finalResult = topMatch ? topMatch.finalResult : 'PASS (NEEDS IMPROVEMENT)';

  const handleSaveClick = () => {
    onSaveCandidate();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  const handleStartEditingName = () => {
    if (candidateProfile) {
      setNameInput(candidateProfile.name);
      setIsEditingName(true);
    }
  };

  const handleSaveName = () => {
    if (nameInput.trim().length > 0) {
      onUpdateCandidateName(nameInput.trim());
    }
    setIsEditingName(false);
  };

  const handleStartEditingEmail = () => {
    if (candidateProfile) {
      setEmailInput(candidateProfile.email);
      setIsEditingEmail(true);
    }
  };

  const handleSaveEmail = () => {
    if (emailInput.trim().length > 0) {
      onUpdateCandidateEmail(emailInput.trim());
    }
    setIsEditingEmail(false);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      <ResumeUploader
        onParseResume={onParseResume}
        onSelectPreset={onSelectPreset}
        currentProfile={candidateProfile}
      />

      {candidateProfile && atsAnalysis && (
        <div className="glass-panel rounded-2xl p-6 border border-[var(--color-border)] space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-2 border-b border-[var(--color-border)]">
            <div>
              <div className="flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-[var(--color-accent)]" />
                <span className="text-xs font-semibold text-slate-400">Extracted Candidate Name:</span>
              </div>

              {!isEditingName ? (
                <div className="flex items-center gap-3 mt-1">
                  <h3 className="text-2xl font-extrabold text-white tracking-tight">
                    {candidateProfile.name}
                  </h3>
                  <button
                    onClick={handleStartEditingName}
                    className="flex items-center gap-1 text-xs text-[var(--color-accent)] hover:text-white bg-[var(--color-badge-bg)] px-2.5 py-1 rounded-lg border border-[var(--color-badge-border)] transition-colors"
                    title="Edit Candidate Name"
                  >
                    <Edit3 className="w-3.5 h-3.5" /> Edit Name
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2 mt-1">
                  <input
                    type="text"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    placeholder="Enter Candidate Full Name (e.g. Om Thakkar)..."
                    className="px-3 py-1.5 bg-[var(--color-bg-dark)] border border-[var(--color-accent)] rounded-lg text-sm text-white font-bold focus:outline-none w-64"
                    autoFocus
                  />
                  <button
                    onClick={handleSaveName}
                    className="px-3 py-1.5 theme-btn-primary font-bold text-xs rounded-lg transition-colors"
                  >
                    Save Name
                  </button>
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={handleSaveClick}
                className="flex items-center gap-1.5 px-3.5 py-2 bg-[var(--color-bg-surface)] hover:bg-white/10 text-slate-200 font-bold text-xs rounded-xl border border-[var(--color-border)] transition-colors"
              >
                {savedSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" /> Saved!
                  </>
                ) : (
                  <>
                    <Database className="w-4 h-4 text-[var(--color-accent)]" /> {t('analyzer.saveCandidate')}
                  </>
                )}
              </button>

              <button
                onClick={() => generatePDFReport(candidateProfile, atsAnalysis, jobMatches)}
                className="flex items-center gap-1.5 px-3.5 py-2 theme-btn-primary font-bold text-xs rounded-xl shadow-md transition-colors"
              >
                <Download className="w-4 h-4" /> {t('analyzer.downloadPdf')}
              </button>

              <button
                onClick={() => setShowEmailModal(true)}
                className="flex items-center gap-1.5 px-3.5 py-2 theme-btn-primary font-bold text-xs rounded-xl shadow-md transition-colors"
              >
                <Mail className="w-4 h-4" /> {t('analyzer.mailReport')}
              </button>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[var(--color-bg-dark)] border border-[var(--color-border)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                Final Selection Decision for {candidateProfile.name}:
              </span>
              <h4 className="text-xl font-extrabold text-amber-400 mt-0.5 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" /> {finalResult}
              </h4>
            </div>

            <div className="max-w-md text-xs text-slate-300">
              Candidate fulfills core foundational requirements. Company condition is favorable for hiring with targeted on-the-job improvement.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-3 bg-[var(--color-bg-surface)] rounded-xl border border-[var(--color-border)]">
              <span className="text-slate-400 block font-medium">Candidate Name</span>
              <span className="font-bold text-white text-sm mt-0.5 block">{candidateProfile.name}</span>
            </div>

            <div className="p-3 bg-[var(--color-bg-surface)] rounded-xl border border-[var(--color-border)]">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 block font-medium">Contact Email & Phone</span>
                <button
                  onClick={handleStartEditingEmail}
                  className="text-[10px] text-[var(--color-accent)] hover:text-white font-semibold flex items-center gap-0.5"
                >
                  <Edit3 className="w-3 h-3" /> Edit Email
                </button>
              </div>

              {!isEditingEmail ? (
                <span className="font-semibold text-slate-200 mt-0.5 block truncate">
                  {candidateProfile.email}
                </span>
              ) : (
                <div className="flex items-center gap-1.5 mt-1">
                  <input
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Enter email..."
                    className="px-2 py-1 bg-[var(--color-bg-dark)] border border-[var(--color-accent)] rounded text-xs text-white focus:outline-none w-full font-mono"
                    autoFocus
                  />
                  <button
                    onClick={handleSaveEmail}
                    className="px-2 py-1 theme-btn-primary font-bold text-[10px] rounded shrink-0"
                  >
                    Save
                  </button>
                </div>
              )}
            </div>

            <div className="p-3 bg-[var(--color-bg-surface)] rounded-xl border border-[var(--color-border)]">
              <span className="text-slate-400 block font-medium">Professional Title</span>
              <span className="font-bold text-[var(--color-accent)] mt-0.5 block">{candidateProfile.title}</span>
            </div>
          </div>

          <div className="p-4 bg-[var(--color-bg-surface)] rounded-xl border border-[var(--color-border)] space-y-2">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
              Extracted Technical Skills Matrix ({candidateProfile.skills.length})
            </span>
            <div className="flex flex-wrap gap-1.5">
              {candidateProfile.skills.map(skill => (
                <span
                  key={skill}
                  className="px-2.5 py-1 text-xs font-semibold bg-[var(--color-badge-bg)] text-[var(--color-badge-text)] border border-[var(--color-badge-border)] rounded-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {atsAnalysis && (
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[var(--color-accent)]" />
            {t('analyzer.atsScore')}
          </h3>
          <ATSScoreCard ats={atsAnalysis} />
        </div>
      )}

      <SavedCandidatesBank
        candidates={savedCandidates}
        onSelectCandidate={onSelectPreset}
        onDeleteCandidate={onDeleteCandidate}
      />

      {showEmailModal && candidateProfile && atsAnalysis && (
        <EmailReportModal
          profile={candidateProfile}
          ats={atsAnalysis}
          jobMatches={jobMatches}
          onClose={() => setShowEmailModal(false)}
        />
      )}

    </div>
  );
};
