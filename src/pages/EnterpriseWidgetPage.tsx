import React from 'react';
import type { JobMatchResult } from '../types/resume';
import { CareerWidgetDemo } from '../components/CareerWidgetDemo';

interface EnterpriseWidgetPageProps {
  onSelectJobForInterview: (match: JobMatchResult) => void;
}

export const EnterpriseWidgetPage: React.FC<EnterpriseWidgetPageProps> = ({
  onSelectJobForInterview
}) => {
  return (
    <div className="animate-in fade-in duration-300">
      <CareerWidgetDemo onSelectJobForInterview={onSelectJobForInterview} />
    </div>
  );
};
