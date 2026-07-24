import { Request, Response } from 'express';
import { Job } from '../models/Job';

export const getJobs = async (req: Request, res: Response) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.json({ count: jobs.length, jobs });
  } catch (error: any) {
    res.status(500).json({ error: 'Failed to fetch jobs from MongoDB' });
  }
};

export const createJob = async (req: Request, res: Response) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.status(201).json({ message: 'Job created in MongoDB successfully!', job });
  } catch (error: any) {
    res.status(500).json({ error: 'Failed to create job opening' });
  }
};
