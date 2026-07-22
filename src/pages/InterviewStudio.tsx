import React from 'react';
import type { CandidateProfile, JobRole } from '../types/resume';
import { InterviewPrep } from '../components/InterviewPrep';

interface InterviewStudioProps {
  candidateProfile: CandidateProfile;
  selectedJob?: JobRole;
}

export const InterviewStudioPage: React.FC<InterviewStudioProps> = ({
  candidateProfile,
  selectedJob
}) => {
  return (
    <div className="animate-in fade-in duration-300">
      <InterviewPrep
        candidateProfile={candidateProfile}
        selectedJob={selectedJob}
      />
    </div>
  );
};
