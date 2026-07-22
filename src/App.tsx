import { useState, useEffect } from 'react';
import type { CandidateProfile, ATSAnalysis, JobMatchResult, JobRole, SavedCandidateRecord } from './types/resume';
import { SAMPLE_RESUMES } from './data/sampleResumes';
import { parseResumeText, evaluateATS } from './utils/resumeParser';
import { matchResumeWithJobs } from './utils/jobMatcher';
import { generatePDFReport } from './utils/exportPdf';
import { getSavedCandidates, saveCandidateRecord, deleteCandidateRecord } from './utils/storage';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import { Dashboard } from './pages/Dashboard';
import { ResumeAnalyzerPage } from './pages/ResumeAnalyzer';
import { JobMatchesPage } from './pages/JobMatches';
import { InterviewStudioPage } from './pages/InterviewStudio';
import { CandidateDatabasePage } from './pages/CandidateDatabasePage';
import { EnterpriseWidgetPage } from './pages/EnterpriseWidgetPage';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [candidateProfile, setCandidateProfile] = useState<CandidateProfile | null>(SAMPLE_RESUMES.software_engineer);
  const [atsAnalysis, setAtsAnalysis] = useState<ATSAnalysis | null>(null);
  const [jobMatches, setJobMatches] = useState<JobMatchResult[]>([]);
  const [selectedJobForInterview, setSelectedJobForInterview] = useState<JobRole | undefined>(undefined);
  const [savedCandidates, setSavedCandidates] = useState<SavedCandidateRecord[]>([]);

  useEffect(() => {
    const list = getSavedCandidates();
    setSavedCandidates(list);

    if (candidateProfile) {
      const ats = evaluateATS(candidateProfile);
      const matches = matchResumeWithJobs(candidateProfile);
      setAtsAnalysis(ats);
      setJobMatches(matches);
    }
  }, [candidateProfile]);

  const handleParseResume = (rawText: string, filename?: string) => {
    const parsed = parseResumeText(rawText, filename);
    const ats = evaluateATS(parsed);
    const matches = matchResumeWithJobs(parsed);

    setCandidateProfile(parsed);
    setAtsAnalysis(ats);
    setJobMatches(matches);

    const updated = saveCandidateRecord(parsed, ats, matches);
    setSavedCandidates(updated);
  };

  const handleSelectSampleResume = (key: string) => {
    const selected = SAMPLE_RESUMES[key];
    if (selected) {
      setCandidateProfile(selected);
      const ats = evaluateATS(selected);
      const matches = matchResumeWithJobs(selected);
      setAtsAnalysis(ats);
      setJobMatches(matches);
    }
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
    if (candidateProfile) {
      const updatedProfile = { ...candidateProfile, name: newName };
      setCandidateProfile(updatedProfile);
      if (atsAnalysis) {
        const updatedMatches = matchResumeWithJobs(updatedProfile);
        setJobMatches(updatedMatches);
        const updatedSaved = saveCandidateRecord(updatedProfile, atsAnalysis, updatedMatches);
        setSavedCandidates(updatedSaved);
      }
    }
  };

  const handleSelectJobForInterview = (match: JobMatchResult) => {
    setSelectedJobForInterview(match.job);
    setActiveTab('interview');
  };

  const handleExportPdf = () => {
    if (candidateProfile && atsAnalysis) {
      generatePDFReport(candidateProfile, atsAnalysis, jobMatches);
    }
  };

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col font-sans selection:bg-sky-500 selection:text-slate-950">
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        candidateProfile={candidateProfile}
        atsAnalysis={atsAnalysis}
        jobMatches={jobMatches}
        onExportPdf={handleExportPdf}
        onSelectSampleResume={handleSelectSampleResume}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'dashboard' && (
          <Dashboard
            candidateProfile={candidateProfile}
            atsAnalysis={atsAnalysis}
            jobMatches={jobMatches}
            onNavigateTab={setActiveTab}
            onSelectJobForInterview={handleSelectJobForInterview}
          />
        )}

        {activeTab === 'analyzer' && (
          <ResumeAnalyzerPage
            candidateProfile={candidateProfile}
            atsAnalysis={atsAnalysis}
            jobMatches={jobMatches}
            savedCandidates={savedCandidates}
            onParseResume={handleParseResume}
            onSelectPreset={setCandidateProfile}
            onSaveCandidate={handleSaveCandidate}
            onDeleteCandidate={handleDeleteCandidate}
            onUpdateCandidateName={handleUpdateCandidateName}
          />
        )}

        {activeTab === 'jobs' && (
          <JobMatchesPage
            jobMatches={jobMatches}
            onSelectForInterview={handleSelectJobForInterview}
          />
        )}

        {activeTab === 'interview' && candidateProfile && (
          <InterviewStudioPage
            candidateProfile={candidateProfile}
            selectedJob={selectedJobForInterview}
          />
        )}

        {activeTab === 'database' && (
          <CandidateDatabasePage
            candidates={savedCandidates}
            onSelectCandidate={(prof) => {
              setCandidateProfile(prof);
              setActiveTab('analyzer');
            }}
            onDeleteCandidate={handleDeleteCandidate}
          />
        )}

        {activeTab === 'widget' && (
          <EnterpriseWidgetPage
            onSelectJobForInterview={handleSelectJobForInterview}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
