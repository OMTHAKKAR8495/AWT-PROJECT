import { Request, Response } from 'express';
import { Candidate } from '../models/Candidate.js';
import { parseAndEvaluateResume } from '../utils/resumeAnalyzer.js';
import pdfParse from 'pdf-parse';

export const parseResumeAndSave = async (req: Request, res: Response) => {
  try {
    let rawText = '';
    let filename = 'Uploaded_Resume.pdf';

    if (req.file) {
      filename = req.file.originalname;
      if (req.file.mimetype === 'application/pdf') {
        const data = await pdfParse(req.file.buffer);
        rawText = data.text;
      } else {
        rawText = req.file.buffer.toString('utf-8');
      }
    } else if (req.body.text) {
      rawText = req.body.text;
    } else {
      return res.status(400).json({ error: 'Please upload a resume file or paste resume text.' });
    }

    const evaluation = parseAndEvaluateResume(rawText, filename);

    // Save candidate in MongoDB
    const candidate = new Candidate(evaluation);
    await candidate.save();

    res.status(201).json({
      message: 'Resume parsed and saved to MongoDB successfully!',
      candidate
    });
  } catch (error: any) {
    console.error('MongoDB Candidate Creation Error:', error);
    res.status(500).json({ error: 'Failed to process resume in MongoDB', details: error.message });
  }
};

export const getCandidates = async (req: Request, res: Response) => {
  try {
    const candidates = await Candidate.find().sort({ createdAt: -1 });
    res.json({ count: candidates.length, candidates });
  } catch (error: any) {
    res.status(500).json({ error: 'Failed to fetch candidates from MongoDB' });
  }
};

export const getCandidateById = async (req: Request, res: Response) => {
  try {
    const candidate = await Candidate.findById(req.params.id);
    if (!candidate) {
      return res.status(404).json({ error: 'Candidate not found in MongoDB' });
    }
    res.json(candidate);
  } catch (error: any) {
    res.status(500).json({ error: 'Invalid Candidate ID' });
  }
};

export const updateCandidate = async (req: Request, res: Response) => {
  try {
    const candidate = await Candidate.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!candidate) {
      return res.status(404).json({ error: 'Candidate not found in MongoDB' });
    }
    res.json({ message: 'Candidate updated in MongoDB!', candidate });
  } catch (error: any) {
    res.status(500).json({ error: 'Failed to update candidate' });
  }
};

export const deleteCandidate = async (req: Request, res: Response) => {
  try {
    const candidate = await Candidate.findByIdAndDelete(req.params.id);
    if (!candidate) {
      return res.status(404).json({ error: 'Candidate not found in MongoDB' });
    }
    res.json({ message: 'Candidate record deleted from MongoDB successfully!' });
  } catch (error: any) {
    res.status(500).json({ error: 'Failed to delete candidate' });
  }
};
