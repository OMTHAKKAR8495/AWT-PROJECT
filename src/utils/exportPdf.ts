import { jsPDF } from 'jspdf';
import type { CandidateProfile, ATSAnalysis, JobMatchResult } from '../types/resume';

export function generatePDFReport(
  profile: CandidateProfile,
  ats: ATSAnalysis,
  matches: JobMatchResult[]
) {
  // Always single page A4 (210mm x 297mm)
  const doc = new jsPDF();
  const topMatch = matches[0];
  
  // Clean Candidate Name
  let candidateName = profile.name || 'Candidate Profile';
  if (candidateName.startsWith('%PDF') || candidateName.includes('%PDF') || candidateName.length < 2) {
    candidateName = 'Candidate Profile';
  }
  const candidateNameUpper = candidateName.toUpperCase();
  const overallResult = topMatch ? topMatch.finalResult : 'PASS (NEEDS IMPROVEMENT)';

  // 1. Dark Header Banner (Compact Height: 30mm)
  doc.setFillColor(8, 12, 20);
  doc.rect(0, 0, 210, 32, 'F');

  doc.setTextColor(56, 189, 248); // Sky blue
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(15);
  doc.text('CAREERMATCH AI - RESUME EVALUATION REPORT', 14, 14);

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(11);
  doc.text(`CANDIDATE NAME: ${candidateNameUpper}`, 14, 22);

  doc.setTextColor(180, 180, 180);
  doc.setFontSize(8);
  doc.text(`Email: ${profile.email} | Title: ${profile.title} | Date: ${new Date().toLocaleDateString()}`, 14, 28);

  let y = 39;

  // 2. Candidate Overview & Scanned Metrics (Compact Height)
  doc.setTextColor(15, 23, 42);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('1. CANDIDATE METRICS & SKILLS', 14, y);
  y += 5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.text(`• Title: ${profile.title}`, 14, y);
  doc.text(`• Experience Level: ~${profile.experienceYears} Years`, 110, y);
  y += 4;
  doc.text(`• Words Scanned: ${ats.totalWordsScanned} words`, 14, y);
  doc.text(`• Technical Keywords: ${ats.technicalSkillsCount} skills`, 110, y);
  y += 4;
  doc.text(`• Extracted Skills: ${profile.skills.slice(0, 10).join(', ')}`, 14, y);
  y += 8;

  // 3. ATS Score Audit
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text(`2. ATS SCORE AUDIT: ${ats.overallScore} / 100`, 14, y);
  y += 5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.text(`• Technical Keyword Density: ${ats.keywordScore}%`, 14, y);
  doc.text(`• Section Formatting & Structure: ${ats.formattingScore}%`, 110, y);
  y += 4;
  doc.text(`• Action Verbs & Impact Metrics: ${ats.impactScore}%`, 14, y);
  doc.text(`• Contact Completeness: ${ats.completenessScore}%`, 110, y);
  y += 6;

  // Strengths & Improvements
  doc.setFont('helvetica', 'bold');
  doc.text('Key Strengths:', 14, y);
  doc.setFont('helvetica', 'normal');
  doc.text(ats.strengths.slice(0, 2).map(s => `- ${s}`).join('  |  '), 42, y);
  y += 4;

  doc.setFont('helvetica', 'bold');
  doc.text('Action Items:', 14, y);
  doc.setFont('helvetica', 'normal');
  doc.text(ats.improvements.slice(0, 2).map(i => `- ${i}`).join('  |  '), 42, y);
  y += 9;

  // 4. Company-Specific Job Eligibility Matrix (Compact 3 Roles)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('3. COMPANY JOB MATCH & ELIGIBILITY MATRIX', 14, y);
  y += 6;

  matches.slice(0, 3).forEach((m, idx) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(2, 109, 199);
    doc.text(`#${idx + 1} ${m.job.title} — ${m.job.company} (${m.matchPercentage}% Fit)`, 14, y);
    y += 4;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    if (m.finalResult === 'PASS (SELECTED)') {
      doc.setTextColor(16, 185, 129); // Green
    } else if (m.finalResult === 'PASS (NEEDS IMPROVEMENT)') {
      doc.setTextColor(217, 119, 6); // Amber
    } else {
      doc.setTextColor(220, 38, 38); // Red
    }
    doc.text(`► DECISION: ${m.finalResult}`, 18, y);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(60, 60, 60);
    doc.setFontSize(8);
    doc.text(`| Exp Req: ${m.job.experienceYears}+ yrs | Degree: ${m.job.minDegreeRequired || 'B.Tech / B.S.'}`, 80, y);
    y += 4;

    doc.text(`Matching Skills: ${m.matchedSkills.join(', ')}`, 18, y);
    y += 4;
    if (m.missingRequiredSkills.length > 0) {
      doc.text(`Missing Skills to Learn: ${m.missingRequiredSkills.join(', ')}`, 18, y);
      y += 4;
    }
    y += 2;
  });

  y += 3;

  // 5. Final Selection Result Banner at End of Report (Guaranteed on Page 1)
  doc.setFillColor(15, 23, 42); // Dark Box
  doc.rect(14, y, 182, 32, 'F');

  doc.setTextColor(56, 189, 248);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text(`FINAL SELECTION RESULT FOR CANDIDATE: ${candidateNameUpper}`, 20, y + 8);

  doc.setFontSize(12);
  if (overallResult === 'PASS (SELECTED)') {
    doc.setTextColor(52, 211, 153);
    doc.text(`FINAL RESULT: PASS (SELECTED / FULLY ELIGIBLE)`, 20, y + 16);
  } else if (overallResult === 'PASS (NEEDS IMPROVEMENT)') {
    doc.setTextColor(251, 191, 36);
    doc.text(`FINAL RESULT: PASS (NEEDS IMPROVEMENT)`, 20, y + 16);
  } else {
    doc.setTextColor(248, 113, 113);
    doc.text(`FINAL RESULT: FAIL (NOT YET ELIGIBLE)`, 20, y + 16);
  }

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(210, 210, 210);
  if (overallResult === 'PASS (NEEDS IMPROVEMENT)') {
    doc.text(
      `Summary: Candidate ${candidateName} fulfills foundational criteria. Company condition is favorable for hiring`,
      20, y + 23
    );
    doc.text(
      `with targeted skill improvement in missing modules.`,
      20, y + 27
    );
  } else if (overallResult === 'PASS (SELECTED)') {
    doc.text(
      `Summary: Candidate ${candidateName} satisfies all essential technical & experience requirements. Fully recommended.`,
      20, y + 24
    );
  } else {
    doc.text(
      `Summary: Candidate ${candidateName} requires further skill development prior to final hiring consideration.`,
      20, y + 24
    );
  }

  // Footer on Page 1
  doc.setFontSize(7.5);
  doc.setTextColor(130, 130, 130);
  doc.text(`CareerMatch AI Official Report | Candidate: ${candidateName} | Advanced Web Technology Project`, 14, 287);

  doc.save(`${candidateName.replace(/\s+/g, '_')}_Career_Eligibility_Report.pdf`);
}
