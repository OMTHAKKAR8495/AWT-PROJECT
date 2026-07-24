export type DepartmentCategory =
  | 'All'
  | 'Software & AI'
  | 'Engineering & Hardware'
  | 'Finance & Accounting'
  | 'Healthcare & Biotech'
  | 'Marketing & Communications'
  | 'HR & Talent'
  | 'Operations & Logistics'
  | 'Legal & Compliance'
  | 'Sales & Key Accounts'
  | 'Product & UX Design';

export type WorkMode = 'All' | 'Remote' | 'Hybrid' | 'Onsite';

export interface Job {
  id: string;
  title: string;
  department: DepartmentCategory;
  location: string;
  country: string;
  workMode: 'Remote' | 'Hybrid' | 'Onsite';
  type: 'Full-Time' | 'Contract' | 'Executive' | 'Lead / Director';
  experienceLevel: 'Entry-Level' | 'Mid-Senior' | 'Lead / Director' | 'Executive';
  salaryRange: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  urgentHiring: boolean;
  postedDate: string;
}

export interface DepartmentInfo {
  category: DepartmentCategory;
  title: string;
  icon: string;
  openRolesCount: number;
  summary: string;
}

export interface LeadershipMember {
  id: string;
  name: string;
  title: string;
  division: string;
  location: string;
  bio: string;
  image: string;
}

export interface GlobalHub {
  city: string;
  country: string;
  region: 'Americas' | 'EMEA' | 'APAC';
  type: 'Global HQ' | 'Regional HQ' | 'R&D Center' | 'Innovation Hub';
  address: string;
  employees: number;
  phone: string;
}

export interface NewsArticle {
  id: string;
  category: 'Corporate' | 'AI & Tech' | 'Sustainability' | 'Financial';
  title: string;
  date: string;
  readTime: string;
  summary: string;
  image: string;
}

export interface JobApplicationForm {
  jobId: string;
  jobTitle: string;
  fullName: string;
  email: string;
  phone: string;
  currentCompany?: string;
  linkedinUrl: string;
  portfolioUrl?: string;
  experienceYears: string;
  workModePreference: string;
  coverLetter: string;
  resumeFile?: File | null;
  resumeFileName?: string;
}
