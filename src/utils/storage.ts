import type { SavedCandidateRecord, CandidateProfile, ATSAnalysis, JobMatchResult } from '../types/resume';
import { SAMPLE_RESUMES } from '../data/sampleResumes';
import { evaluateATS } from './resumeParser';
import { matchResumeWithJobs } from './jobMatcher';

const STORAGE_KEY = 'careermatch_saved_candidates_v1';

export function getSavedCandidates(): SavedCandidateRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.error('Failed to read saved candidates from localStorage:', e);
  }

  // Pre-seed default candidates if none stored yet
  const defaultRecords: SavedCandidateRecord[] = Object.values(SAMPLE_RESUMES).map(prof => {
    const ats = evaluateATS(prof);
    const matches = matchResumeWithJobs(prof);
    const topMatch = matches[0];
    const finalResult = topMatch ? topMatch.finalResult : 'PASS (NEEDS IMPROVEMENT)';

    return {
      id: `cand-${prof.name.toLowerCase().replace(/\s+/g, '-')}`,
      candidateName: prof.name,
      profile: prof,
      ats,
      jobMatches: matches,
      finalResult,
      savedAt: new Date().toLocaleDateString()
    };
  });

  saveCandidatesList(defaultRecords);
  return defaultRecords;
}

export function saveCandidateRecord(
  profile: CandidateProfile,
  ats: ATSAnalysis,
  matches: JobMatchResult[]
): SavedCandidateRecord[] {
  const currentList = getSavedCandidates();
  const topMatch = matches[0];
  const finalResult = topMatch ? topMatch.finalResult : 'PASS (NEEDS IMPROVEMENT)';

  const newRecord: SavedCandidateRecord = {
    id: `cand-${Date.now()}`,
    candidateName: profile.name,
    profile,
    ats,
    jobMatches: matches,
    finalResult,
    savedAt: new Date().toLocaleDateString()
  };

  // Replace existing record if candidate with same name exists, else append
  const existingIdx = currentList.findIndex(
    r => r.candidateName.toLowerCase() === profile.name.toLowerCase()
  );

  let updatedList: SavedCandidateRecord[] = [];
  if (existingIdx >= 0) {
    updatedList = [...currentList];
    updatedList[existingIdx] = newRecord;
  } else {
    updatedList = [newRecord, ...currentList];
  }

  saveCandidatesList(updatedList);
  return updatedList;
}

export function deleteCandidateRecord(id: string): SavedCandidateRecord[] {
  const currentList = getSavedCandidates();
  const updatedList = currentList.filter(r => r.id !== id);
  saveCandidatesList(updatedList);
  return updatedList;
}

function saveCandidatesList(list: SavedCandidateRecord[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch (e) {
    console.error('Failed to save candidates to localStorage:', e);
  }
}
