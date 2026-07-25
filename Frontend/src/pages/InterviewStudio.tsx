import React from 'react';
import type { CandidateProfile, JobRole } from '../types/resume';
import { InterviewPrep } from '../components/InterviewPrep';

interface InterviewStudioPageProps {
  candidateProfile: CandidateProfile;
  selectedJob?: JobRole;
}

export const InterviewStudioPage: React.FC<InterviewStudioPageProps> = ({
  candidateProfile,
  selectedJob
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <InterviewPrep
        candidateProfile={candidateProfile}
        selectedJob={selectedJob}
      />
    </div>
  );
};
