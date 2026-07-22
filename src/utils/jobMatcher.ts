import type { CandidateProfile, JobRole, JobMatchResult, FinalResultStatus } from '../types/resume';
import { COMPANY_JOBS } from '../data/jobsData';

export function matchResumeWithJobs(
  profile: CandidateProfile,
  jobsList: JobRole[] = COMPANY_JOBS
): JobMatchResult[] {
  const candidateSkillsLower = new Set(profile.skills.map(s => s.toLowerCase()));

  const results: JobMatchResult[] = jobsList.map(job => {
    const requiredSkills = job.requiredSkills;
    const preferredSkills = job.preferredSkills || [];

    const matchedRequired = requiredSkills.filter(s =>
      candidateSkillsLower.has(s.toLowerCase())
    );

    const missingRequired = requiredSkills.filter(s =>
      !candidateSkillsLower.has(s.toLowerCase())
    );

    const matchedPreferred = preferredSkills.filter(s =>
      candidateSkillsLower.has(s.toLowerCase())
    );

    const missingPreferred = preferredSkills.filter(s =>
      !candidateSkillsLower.has(s.toLowerCase())
    );

    const allMatchedSkills = Array.from(new Set([...matchedRequired, ...matchedPreferred]));

    const reqWeight = 0.75;
    const prefWeight = 0.25;

    const reqScore = requiredSkills.length > 0
      ? (matchedRequired.length / requiredSkills.length) * 100
      : 100;

    const prefScore = preferredSkills.length > 0
      ? (matchedPreferred.length / preferredSkills.length) * 100
      : 100;

    let expFactor = 1.0;
    const experienceMatch = profile.experienceYears >= job.experienceYears;
    if (experienceMatch) {
      expFactor = 1.05;
    } else {
      expFactor = Math.max(0.8, profile.experienceYears / Math.max(1, job.experienceYears));
    }

    let matchPercentage = Math.round((reqScore * reqWeight + prefScore * prefWeight) * expFactor);
    matchPercentage = Math.min(98, Math.max(15, matchPercentage));

    let matchLevel: JobMatchResult['matchLevel'] = 'Low Match';
    if (matchPercentage >= 80) matchLevel = 'High Match';
    else if (matchPercentage >= 65) matchLevel = 'Good Fit';
    else if (matchPercentage >= 45) matchLevel = 'Potential Fit';

    // Build Criteria Checklist
    const criteriaChecklist = [
      {
        criterion: `Experience Criteria (${job.experienceYears}+ years required)`,
        satisfied: experienceMatch
      },
      {
        criterion: `Degree Criteria (${job.minDegreeRequired || 'Degree in relevant field'})`,
        satisfied: profile.education.length > 0
      },
      {
        criterion: `Core Skills Coverage (${matchedRequired.length}/${requiredSkills.length} essential skills)`,
        satisfied: matchedRequired.length >= Math.ceil(requiredSkills.length * 0.5)
      }
    ];

    // Determine Official Company Eligibility & Final Pass/Fail Result
    let eligibilityStatus: JobMatchResult['eligibilityStatus'] = 'NEEDS SKILL UPGRADE';
    let finalResult: FinalResultStatus = 'FAIL (NOT ELIGIBLE)';

    if (matchPercentage >= 78 && experienceMatch && matchedRequired.length >= Math.ceil(requiredSkills.length * 0.6)) {
      eligibilityStatus = 'OFFICIALLY ELIGIBLE';
      finalResult = 'PASS (SELECTED)';
    } else if (matchPercentage >= 45 || experienceMatch || matchedRequired.length >= 2) {
      eligibilityStatus = 'PARTIALLY ELIGIBLE';
      finalResult = 'PASS (NEEDS IMPROVEMENT)';
    } else {
      eligibilityStatus = 'NEEDS SKILL UPGRADE';
      finalResult = 'FAIL (NOT ELIGIBLE)';
    }

    let recommendationReason = '';
    if (finalResult === 'PASS (SELECTED)') {
      recommendationReason = `PASS (SELECTED FOR ${job.company.toUpperCase()}): Candidate ${profile.name} meets 100% core company requirements (${matchedRequired.length} essential skills matched).`;
    } else if (finalResult === 'PASS (NEEDS IMPROVEMENT)') {
      recommendationReason = `PASS (NEEDS IMPROVEMENT FOR ${job.company.toUpperCase()}): Candidate ${profile.name} fulfills core foundational skills. Company condition is favorable to hire with targeted skill improvement in ${missingRequired.slice(0, 2).join(', ')}.`;
    } else {
      recommendationReason = `FAIL (NOT ELIGIBLE FOR ${job.company.toUpperCase()}): Candidate ${profile.name} requires further technical skill acquisition in ${missingRequired.slice(0, 3).join(', ')}.`;
    }

    return {
      job,
      matchPercentage,
      matchedSkills: allMatchedSkills,
      missingRequiredSkills: missingRequired,
      missingPreferredSkills: missingPreferred,
      matchLevel,
      eligibilityStatus,
      finalResult,
      eligibilityBreakdown: {
        experienceMatch,
        educationMatch: profile.education.length > 0,
        skillsMatchPercentage: Math.round(reqScore),
        criteriaChecklist
      },
      recommendationReason
    };
  });

  return results.sort((a, b) => b.matchPercentage - a.matchPercentage);
}
