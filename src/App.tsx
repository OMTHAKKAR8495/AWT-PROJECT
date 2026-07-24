import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { JobModal } from './components/JobModal';
import { SearchModal } from './components/SearchModal';
import { HomePage } from './pages/HomePage';
import { AboutUsPage } from './pages/AboutUsPage';
import { CareersPage } from './pages/CareersPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { ResumeAnalyzerPage } from './pages/ResumeAnalyzer';
import { JobMatchesPage } from './pages/JobMatches';
import { InterviewStudioPage } from './pages/InterviewStudio';
import { CandidateDatabasePage } from './pages/CandidateDatabasePage';

import type { Job } from './types';
import type { CandidateProfile, ATSAnalysis, JobMatchResult, SavedCandidateRecord, JobRole } from './types/resume';
import type { SupportedLanguage } from './data/translations';
import { SAMPLE_RESUMES } from './data/sampleResumes';
import { parseResumeText, evaluateATS } from './utils/resumeParser';
import { matchResumeWithJobs } from './utils/jobMatcher';
import { getSavedCandidates, saveCandidateRecord, deleteCandidateRecord } from './utils/storage';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [activeTheme, setActiveTheme] = useState<string>(() => {
    return localStorage.getItem('portal_theme') || 'violet';
  });

  const [selectedLanguage, setSelectedLanguage] = useState<SupportedLanguage>(() => {
    return (localStorage.getItem('portal_lang') as SupportedLanguage) || 'en-US';
  });

  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);

  // Resume Analyzer & Candidate Management State
  const [candidateProfile, setCandidateProfile] = useState<CandidateProfile | null>(
    SAMPLE_RESUMES.software_engineer
  );

  const [atsAnalysis, setAtsAnalysis] = useState<ATSAnalysis | null>(() => 
    evaluateATS(SAMPLE_RESUMES.software_engineer)
  );

  const [jobMatches, setJobMatches] = useState<JobMatchResult[]>(() => 
    matchResumeWithJobs(SAMPLE_RESUMES.software_engineer)
  );

  const [savedCandidates, setSavedCandidates] = useState<SavedCandidateRecord[]>(() => 
    getSavedCandidates()
  );

  const [selectedJobForInterview, setSelectedJobForInterview] = useState<JobRole | undefined>(undefined);

  // Sync Dark/Light & Color Theme attribute to html root element
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    root.setAttribute('data-theme', activeTheme);
    localStorage.setItem('portal_theme', activeTheme);
  }, [darkMode, activeTheme]);

  // Persist language selection
  useEffect(() => {
    localStorage.setItem('portal_lang', selectedLanguage);
  }, [selectedLanguage]);

  // Keyboard shortcut Cmd/Ctrl + K for search modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Resume Parsing Handlers
  const handleParseResume = (text: string, filename?: string) => {
    const profile = parseResumeText(text, filename);
    const ats = evaluateATS(profile);
    const matches = matchResumeWithJobs(profile);

    setCandidateProfile(profile);
    setAtsAnalysis(ats);
    setJobMatches(matches);

    const updated = saveCandidateRecord(profile, ats, matches);
    setSavedCandidates(updated);
  };

  const handleSelectPreset = (profile: CandidateProfile) => {
    const ats = evaluateATS(profile);
    const matches = matchResumeWithJobs(profile);

    setCandidateProfile(profile);
    setAtsAnalysis(ats);
    setJobMatches(matches);

    const updated = saveCandidateRecord(profile, ats, matches);
    setSavedCandidates(updated);
  };

  const handleSaveCandidate = () => {
    if (candidateProfile && atsAnalysis) {
      const updated = saveCandidateRecord(candidateProfile, atsAnalysis, jobMatches);
      setSavedCandidates(updated);
    }
  };

  const handleDeleteCandidate = (id: string) => {
    const updated = deleteCandidateRecord(id);
    setSavedCandidates(updated);
  };

  const handleUpdateCandidateName = (newName: string) => {
    if (!candidateProfile) return;
    const updatedProfile = { ...candidateProfile, name: newName };
    setCandidateProfile(updatedProfile);

    if (atsAnalysis) {
      const updatedCandidates = saveCandidateRecord(updatedProfile, atsAnalysis, jobMatches);
      setSavedCandidates(updatedCandidates);
    }
  };

  const handleUpdateCandidateEmail = (newEmail: string) => {
    if (!candidateProfile) return;
    const updatedProfile = { ...candidateProfile, email: newEmail };
    setCandidateProfile(updatedProfile);

    if (atsAnalysis) {
      const updatedCandidates = saveCandidateRecord(updatedProfile, atsAnalysis, jobMatches);
      setSavedCandidates(updatedCandidates);
    }
  };

  const handleSelectForInterview = (match: JobMatchResult) => {
    setSelectedJobForInterview(match.job);
    setActiveTab('interview-studio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll to top on tab change
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg-dark)] text-slate-100 transition-colors duration-300">
      
      {/* Sticky Header Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeTheme={activeTheme}
        setActiveTheme={setActiveTheme}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
        openSearch={() => setSearchOpen(true)}
      />

      {/* Main View Area */}
      <main className="flex-grow">
        {activeTab === 'home' && (
          <HomePage setActiveTab={handleTabChange} />
        )}

        {activeTab === 'about' && (
          <AboutUsPage setActiveTab={handleTabChange} />
        )}

        {activeTab === 'careers' && (
          <CareersPage 
            onSelectJob={(job) => setSelectedJob(job)} 
            setActiveTab={handleTabChange}
            selectedLanguage={selectedLanguage}
          />
        )}

        {activeTab === 'services' && (
          <ServicesPage setActiveTab={handleTabChange} />
        )}

        {activeTab === 'contact' && (
          <ContactPage />
        )}

        {activeTab === 'resume-analyzer' && (
          <ResumeAnalyzerPage
            candidateProfile={candidateProfile}
            atsAnalysis={atsAnalysis}
            jobMatches={jobMatches}
            savedCandidates={savedCandidates}
            onParseResume={handleParseResume}
            onSelectPreset={handleSelectPreset}
            onSaveCandidate={handleSaveCandidate}
            onDeleteCandidate={handleDeleteCandidate}
            onUpdateCandidateName={handleUpdateCandidateName}
            onUpdateCandidateEmail={handleUpdateCandidateEmail}
            selectedLanguage={selectedLanguage}
          />
        )}

        {activeTab === 'job-matches' && (
          <JobMatchesPage
            jobMatches={jobMatches}
            onSelectForInterview={handleSelectForInterview}
            selectedLanguage={selectedLanguage}
          />
        )}

        {activeTab === 'interview-studio' && candidateProfile && (
          <InterviewStudioPage
            candidateProfile={candidateProfile}
            selectedJob={selectedJobForInterview}
          />
        )}

        {activeTab === 'candidate-db' && (
          <CandidateDatabasePage
            candidates={savedCandidates}
            onSelectCandidate={handleSelectPreset}
            onDeleteCandidate={handleDeleteCandidate}
            selectedLanguage={selectedLanguage}
          />
        )}
      </main>

      {/* Footer */}
      <Footer setActiveTab={handleTabChange} />

      {/* Job Details & Application Modal */}
      {selectedJob && (
        <JobModal
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
        />
      )}

      {/* Quick Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectJob={(job) => setSelectedJob(job)}
        setActiveTab={handleTabChange}
      />

    </div>
  );
}

export default App;
