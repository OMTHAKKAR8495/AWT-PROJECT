import React, { useState } from 'react';
import { 
  X, 
  MapPin, 
  DollarSign, 
  Clock, 
  CheckCircle2, 
  Upload, 
  Send,
  User,
  Mail,
  Phone,
  Globe,
  ShieldCheck
} from 'lucide-react';
import type { Job, JobApplicationForm } from '../types';

interface JobModalProps {
  job: Job | null;
  onClose: () => void;
}

export const JobModal: React.FC<JobModalProps> = ({ job, onClose }) => {
  const [step, setStep] = useState<'details' | 'form' | 'success'>('details');
  const [formData, setFormData] = useState<JobApplicationForm>({
    jobId: job?.id || '',
    jobTitle: job?.title || '',
    fullName: '',
    email: '',
    phone: '',
    currentCompany: '',
    linkedinUrl: '',
    portfolioUrl: '',
    experienceYears: '3-5 years',
    workModePreference: 'Hybrid',
    coverLetter: '',
    resumeFileName: ''
  });
  const [uploadingResume, setUploadingResume] = useState(false);
  const [applicationId, setApplicationId] = useState('');

  if (!job) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadingResume(true);
      setTimeout(() => {
        setFormData(prev => ({
          ...prev,
          resumeFile: file,
          resumeFileName: file.name
        }));
        setUploadingResume(false);
      }, 1000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      alert('Please fill in required fields: Full Name, Email, and Phone.');
      return;
    }
    const trackingId = 'NX-' + Math.floor(100000 + Math.random() * 900000);
    setApplicationId(trackingId);
    setStep('success');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[var(--color-bg-dark)]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl relative my-8">
        
        {/* Modal Header */}
        <div className="bg-[var(--color-bg-surface)] p-6 border-b border-[var(--color-border)] flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[var(--color-badge-bg)] text-[var(--color-badge-text)] border border-[var(--color-badge-border)] text-xs px-2.5 py-0.5 rounded-full font-semibold">
                {job.department}
              </span>
              <span className="bg-[var(--color-bg-dark)] text-slate-300 border border-[var(--color-border)] text-xs px-2.5 py-0.5 rounded-full font-medium">
                {job.workMode}
              </span>
              {job.urgentHiring && (
                <span className="bg-amber-500/20 text-amber-300 text-xs px-2.5 py-0.5 rounded-full font-semibold border border-amber-400/30 animate-pulse">
                  Urgent Hiring
                </span>
              )}
            </div>

            <h2 className="text-xl sm:text-2xl font-display font-bold text-white leading-tight">
              {job.title}
            </h2>

            <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-slate-300">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                {job.location}, {job.country}
              </span>
              <span className="flex items-center gap-1">
                <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                {job.salaryRange}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                Posted {job.postedDate}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-xl hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6">
          
          {step === 'details' && (
            <div className="space-y-6">
              {/* Job Overview */}
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Role Overview</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {job.description}
                </p>
              </div>

              {/* Responsibilities */}
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Key Responsibilities</h3>
                <ul className="space-y-2">
                  {job.responsibilities.map((resp, i) => (
                    <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Qualifications & Requirements */}
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Required Skills & Background</h3>
                <ul className="space-y-2">
                  {job.requirements.map((req, i) => (
                    <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Position Tags */}
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Position Metadata</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-[var(--color-bg-dark)] text-slate-300 border border-[var(--color-border)] px-3 py-1 rounded-lg">
                    Employment Type: {job.type}
                  </span>
                  <span className="text-xs bg-[var(--color-bg-dark)] text-slate-300 border border-[var(--color-border)] px-3 py-1 rounded-lg">
                    Seniority: {job.experienceLevel}
                  </span>
                  <span className="text-xs bg-[var(--color-bg-dark)] text-slate-300 border border-[var(--color-border)] px-3 py-1 rounded-lg">
                    Work Arrangement: {job.workMode}
                  </span>
                </div>
              </div>
            </div>
          )}

          {step === 'form' && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-[var(--color-badge-bg)] border border-[var(--color-badge-border)] p-4 rounded-xl text-xs text-[var(--color-badge-text)]">
                You are applying for <strong className="text-white">{job.title}</strong> ({job.department} Division - {job.location}).
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Full Legal Name *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Vance"
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[var(--color-bg-dark)] border border-[var(--color-border)] rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[var(--color-accent)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Email Address *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex.vance@example.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[var(--color-bg-dark)] border border-[var(--color-border)] rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[var(--color-accent)]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Phone Number *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 019-2834"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[var(--color-bg-dark)] border border-[var(--color-border)] rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[var(--color-accent)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Current Company / Organization</label>
                  <input
                    type="text"
                    placeholder="e.g. Acme Corp"
                    value={formData.currentCompany}
                    onChange={e => setFormData({ ...formData, currentCompany: e.target.value })}
                    className="w-full bg-[var(--color-bg-dark)] border border-[var(--color-border)] rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[var(--color-accent)]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Total Relevant Experience</label>
                  <select
                    value={formData.experienceYears}
                    onChange={e => setFormData({ ...formData, experienceYears: e.target.value })}
                    className="w-full bg-[var(--color-bg-dark)] border border-[var(--color-border)] rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[var(--color-accent)]"
                  >
                    <option value="0-2 years">0 - 2 Years (Junior / Graduate)</option>
                    <option value="3-5 years">3 - 5 Years (Mid Level)</option>
                    <option value="5-8 years">5 - 8 Years (Senior)</option>
                    <option value="8+ years">8+ Years (Executive / Principal)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">LinkedIn or Portfolio URL</label>
                  <div className="relative">
                    <Globe className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="url"
                      placeholder="https://linkedin.com/in/username"
                      value={formData.linkedinUrl}
                      onChange={e => setFormData({ ...formData, linkedinUrl: e.target.value })}
                      className="w-full bg-[var(--color-bg-dark)] border border-[var(--color-border)] rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[var(--color-accent)]"
                    />
                  </div>
                </div>
              </div>

              {/* File Upload Resume Section */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Attach Resume / CV (PDF, DOCX)</label>
                <div className="border-2 border-dashed border-[var(--color-border)] rounded-xl p-4 text-center bg-[var(--color-bg-dark)]/50 hover:bg-white/5 transition-colors relative">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileUpload}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                  <div className="space-y-1">
                    <Upload className="w-6 h-6 text-[var(--color-accent)] mx-auto" />
                    <div className="text-xs font-semibold text-white">
                      {formData.resumeFileName ? formData.resumeFileName : 'Click to Upload Resume or Drag File Here'}
                    </div>
                    <div className="text-[10px] text-slate-500">Max file size 10MB</div>
                  </div>
                </div>
                {uploadingResume && (
                  <div className="text-[11px] text-[var(--color-accent)] mt-1 animate-pulse">Uploading file...</div>
                )}
              </div>

              {/* Cover Letter */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Cover Note / Remarks (Optional)</label>
                <textarea
                  rows={3}
                  placeholder="Share a short introduction or highlight your key qualifications..."
                  value={formData.coverLetter}
                  onChange={e => setFormData({ ...formData, coverLetter: e.target.value })}
                  className="w-full bg-[var(--color-bg-dark)] border border-[var(--color-border)] rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[var(--color-accent)]"
                />
              </div>

            </form>
          )}

          {step === 'success' && (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 border border-emerald-400/30 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                <ShieldCheck className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold text-white">Application Submitted!</h3>

              <div className="bg-[var(--color-bg-dark)] border border-[var(--color-border)] p-4 rounded-xl max-w-md mx-auto text-left space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">Tracking Reference ID:</span>
                  <strong className="text-[var(--color-accent)] font-mono">{applicationId}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Position Applied:</span>
                  <span className="text-white font-medium">{job.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Candidate Name:</span>
                  <span className="text-white">{formData.fullName}</span>
                </div>
              </div>

              <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                Your application package has been transmitted to our Executive Talent Acquisition desk. You will receive an automated confirmation email at <strong className="text-white">{formData.email}</strong>.
              </p>

              <button
                onClick={onClose}
                className="theme-btn-primary font-bold text-xs px-6 py-3 rounded-xl shadow-lg"
              >
                Close & Return to Portal
              </button>
            </div>
          )}

        </div>

        {/* Modal Footer CTA */}
        {step !== 'success' && (
          <div className="bg-[var(--color-bg-surface)] p-4 sm:p-6 border-t border-[var(--color-border)] flex items-center justify-between">
            {step === 'details' ? (
              <>
                <button
                  onClick={onClose}
                  className="text-xs text-slate-400 hover:text-white px-4 py-2 rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setStep('form')}
                  className="theme-btn-primary font-bold text-xs px-6 py-3 rounded-xl shadow-lg flex items-center gap-2"
                >
                  Apply for this Position
                  <Send className="w-4 h-4" />
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setStep('details')}
                  className="text-xs text-slate-400 hover:text-white px-4 py-2 rounded-xl transition-colors"
                >
                  Back to Details
                </button>
                <button
                  onClick={handleSubmit}
                  className="theme-btn-primary font-bold text-xs px-6 py-3 rounded-xl shadow-lg flex items-center gap-2"
                >
                  Submit Official Application
                  <ShieldCheck className="w-4 h-4" />
                </button>
              </>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
