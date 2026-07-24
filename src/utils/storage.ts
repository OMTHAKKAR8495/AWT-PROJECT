import type { SavedCandidateRecord, CandidateProfile, ATSAnalysis, JobMatchResult } from '../types/resume';

const STORAGE_KEY = 'nexus_saved_candidates_db';

export function getSavedCandidates(): SavedCandidateRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (err) {
    console.error('Failed reading saved candidates from localStorage:', err);
    return [];
  }
}

export function saveCandidateRecord(
  profile: CandidateProfile,
  ats: ATSAnalysis,
  jobMatches: JobMatchResult[]
): SavedCandidateRecord[] {
  const existing = getSavedCandidates();
  const topMatch = jobMatches[0];
  const finalResult = topMatch ? topMatch.finalResult : 'PASS (NEEDS IMPROVEMENT)';

  const newRecord: SavedCandidateRecord = {
    id: 'cand-' + Date.now() + '-' + Math.floor(Math.random() * 1000),
    candidateName: profile.name || 'Candidate',
    profile,
    ats,
    jobMatches,
    finalResult,
    savedAt: new Date().toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  };

  const filtered = existing.filter(c => c.candidateName.toLowerCase() !== profile.name.toLowerCase());
  const updated = [newRecord, ...filtered];

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed saving candidate to localStorage:', e);
  }

  return updated;
}

export function deleteCandidateRecord(id: string): SavedCandidateRecord[] {
  const existing = getSavedCandidates();
  const updated = existing.filter(c => c.id !== id);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed deleting candidate record:', e);
  }
  return updated;
}
