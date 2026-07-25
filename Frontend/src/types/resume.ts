export interface CandidateProfile {
  id?: string;
  name: string;
  email: string;
  phone: string;
  title: string;
  summary: string;
  skills: string[];
  experienceYears: number;
  experienceItems: {
    role: string;
    company: string;
    period: string;
    description: string;
  }[];
  education: {
    degree: string;
    institution: string;
    year: string;
  }[];
  rawText: string;
}

export interface ATSAnalysis {
  overallScore: number;
  formattingScore: number;
  keywordScore: number;
  impactScore: number;
  completenessScore: number;
  totalWordsScanned: number;
  technicalSkillsCount: number;
  strengths: string[];
  improvements: string[];
  missingKeywords: string[];
  actionVerbsFound: string[];
}

export interface JobRole {
  id: string;
  title: string;
  department: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Remote' | 'Hybrid' | 'Contract';
  experienceYears: number;
  minDegreeRequired?: string;
  requiredSkills: string[];
  preferredSkills: string[];
  salaryRange: string;
  description: string;
  responsibilities: string[];
  companyCriteriaNotes?: string[];
  benefits?: string[];
}

export type FinalResultStatus = 
  | 'PASS (SELECTED)' 
  | 'PASS (NEEDS IMPROVEMENT)' 
  | 'FAIL (NOT ELIGIBLE)';

export interface JobMatchResult {
  job: JobRole;
  matchPercentage: number;
  matchedSkills: string[];
  missingRequiredSkills: string[];
  missingPreferredSkills: string[];
  matchLevel: 'High Match' | 'Good Fit' | 'Potential Fit' | 'Low Match';
  eligibilityStatus: 'OFFICIALLY ELIGIBLE' | 'PARTIALLY ELIGIBLE' | 'NEEDS SKILL UPGRADE';
  finalResult: FinalResultStatus;
  eligibilityBreakdown: {
    experienceMatch: boolean;
    educationMatch: boolean;
    skillsMatchPercentage: number;
    criteriaChecklist: { criterion: string; satisfied: boolean }[];
  };
  recommendationReason: string;
}

export interface SavedCandidateRecord {
  id: string;
  candidateName: string;
  profile: CandidateProfile;
  ats: ATSAnalysis;
  jobMatches: JobMatchResult[];
  finalResult: FinalResultStatus;
  savedAt: string;
}

export interface InterviewQuestion {
  id: string;
  roleId?: string;
  roleTitle?: string;
  category: 'Technical' | 'System Design' | 'Behavioral' | 'HR / Culture';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  question: string;
  suggestedAnswer: string;
  keyPointsToInclude: string[];
  starGuide?: {
    situation: string;
    task: string;
    action: string;
    result: string;
  };
}
