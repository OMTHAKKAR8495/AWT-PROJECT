import { Schema, model, Document } from 'mongoose';

export interface IJob extends Document {
  title: string;
  company: string;
  location: string;
  department: string;
  requiredSkills: string[];
  preferredSkills: string[];
  experienceYears: number;
  minDegreeRequired: string;
  salaryRange: string;
  description: string;
  createdAt: Date;
}

const JobSchema = new Schema<IJob>(
  {
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, default: 'Remote / On-site' },
    department: { type: String, default: 'Engineering' },
    requiredSkills: [{ type: String }],
    preferredSkills: [{ type: String }],
    experienceYears: { type: Number, default: 2 },
    minDegreeRequired: { type: String, default: 'Bachelor Degree in CS / IT' },
    salaryRange: { type: String, default: '$90,000 - $130,000' },
    description: { type: String }
  },
  { timestamps: true }
);

export const Job = model<IJob>('Job', JobSchema);
