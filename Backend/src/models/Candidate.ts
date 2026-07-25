import { Schema, model, Document } from 'mongoose';

export interface ICandidate extends Document {
  name: string;
  email: string;
  phone: string;
  title: string;
  summary: string;
  skills: string[];
  experienceYears: number;
  atsScore: number;
  formattingScore: number;
  keywordScore: number;
  impactScore: number;
  completenessScore: number;
  totalWordsScanned: number;
  technicalSkillsCount: number;
  strengths: string[];
  improvements: string[];
  finalResult: string;
  topRoleFit: string;
  rawText: string;
  createdAt: Date;
  updatedAt: Date;
}

const CandidateSchema = new Schema<ICandidate>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, default: '+1 (555) 019-2834' },
    title: { type: String, default: 'Software & Tech Professional' },
    summary: { type: String },
    skills: [{ type: String }],
    experienceYears: { type: Number, default: 1 },
    atsScore: { type: Number, default: 75 },
    formattingScore: { type: Number, default: 80 },
    keywordScore: { type: Number, default: 70 },
    impactScore: { type: Number, default: 75 },
    completenessScore: { type: Number, default: 90 },
    totalWordsScanned: { type: Number, default: 450 },
    technicalSkillsCount: { type: Number, default: 8 },
    strengths: [{ type: String }],
    improvements: [{ type: String }],
    finalResult: { type: String, default: 'PASS (NEEDS IMPROVEMENT)' },
    topRoleFit: { type: String, default: 'Senior Full Stack Engineer' },
    rawText: { type: String }
  },
  { timestamps: true }
);

export const Candidate = model<ICandidate>('Candidate', CandidateSchema);
