import type { CandidateProfile, InterviewQuestion, JobRole } from '../types/resume';
import { DEFAULT_INTERVIEW_QUESTIONS } from '../data/defaultQuestions';

export function generateTailoredInterviewQuestions(
  profile: CandidateProfile,
  selectedJob?: JobRole
): InterviewQuestion[] {
  const customQuestions: InterviewQuestion[] = [];
  const candidateSkills = profile.skills;

  if (candidateSkills.some(s => ['React', 'TypeScript', 'JavaScript'].includes(s))) {
    customQuestions.push({
      id: 'q-custom-1',
      roleTitle: selectedJob?.title || profile.title,
      category: 'Technical',
      difficulty: 'Medium',
      question: `Since your resume highlights ${candidateSkills.filter(s => ['React', 'TypeScript', 'JavaScript'].includes(s)).join(', ')}, how do you handle asynchronous data fetching and global state management cleanly?`,
      suggestedAnswer: `I use modern data-fetching abstractions (such as React Query / TanStack Query or RTK Query) to handle caching, background refetching, and loading states automatically. For global application state, I keep transient UI state local and use lightweight stores like Zustand or Redux Toolkit for cross-cutting state.`,
      keyPointsToInclude: [
        'React Query / TanStack Query for server state caching',
        'Zustand or Redux Toolkit for global UI state',
        'Optimistic UI updates and error boundary handling'
      ],
      starGuide: {
        situation: 'In a real-time web platform, multiple components were redundant-fetching user data.',
        task: 'Consolidate API calls and eliminate client-side state latency.',
        action: 'Configured TanStack Query with stale-while-revalidate caching and dedicated query keys.',
        result: 'Reduced backend API load by 60% and made page transitions instant.'
      }
    });
  }

  if (candidateSkills.some(s => ['Node.js', 'Express', 'Python', 'FastAPI', 'Java'].includes(s))) {
    customQuestions.push({
      id: 'q-custom-2',
      roleTitle: selectedJob?.title || profile.title,
      category: 'Technical',
      difficulty: 'Hard',
      question: `How do you secure API endpoints against unauthorized access, SQL injection, and DDoS attacks?`,
      suggestedAnswer: `I apply defense-in-depth:
1. **Authentication & AuthZ**: JWT tokens signed with RS256 with RBAC (Role-Based Access Control) middleware.
2. **Input Sanitation & ORM**: Use parameterized queries / ORMs (like Prisma or SQLAlchemy) to eliminate SQL injections completely.
3. **Traffic Control**: Deploy Rate Limiting with Redis token buckets and CORS policies.`,
      keyPointsToInclude: [
        'JWT RS256 Signature Verification & RBAC',
        'Parameterized Queries & ORMs',
        'Redis Rate Limiting and CORS restrictions'
      ]
    });
  }

  if (candidateSkills.some(s => ['AWS', 'Docker', 'Kubernetes', 'CI/CD'].includes(s))) {
    customQuestions.push({
      id: 'q-custom-3',
      roleTitle: selectedJob?.title || profile.title,
      category: 'System Design',
      difficulty: 'Hard',
      question: `Describe your strategy for setting up automated CI/CD deployment pipelines with Docker and Cloud infrastructure.`,
      suggestedAnswer: `I create GitHub Actions pipelines with multi-stage Docker builds. The pipeline executes automated unit tests, runs static vulnerability scans (Trivy), pushes versioned images to ECR, and triggers zero-downtime rolling updates on AWS / Kubernetes.`,
      keyPointsToInclude: [
        'Multi-stage Docker builds for minimal image size',
        'Automated CI testing & vulnerability scanning',
        'Zero-downtime rolling deployments'
      ]
    });
  }

  if (candidateSkills.some(s => ['Python', 'PyTorch', 'TensorFlow', 'Machine Learning', 'Data Science'].includes(s))) {
    customQuestions.push({
      id: 'q-custom-4',
      roleTitle: selectedJob?.title || profile.title,
      category: 'Technical',
      difficulty: 'Hard',
      question: `How do you prevent overfitting in deep learning models, and how do you evaluate model metrics on imbalanced datasets?`,
      suggestedAnswer: `To prevent overfitting, I use L1/L2 regularization, Dropout layers, Data Augmentation, and Early Stopping. For imbalanced datasets, accuracy is misleading, so I evaluate Precision-Recall AUC, F1-Score, and use SMOTE or class-weighted loss functions.`,
      keyPointsToInclude: [
        'Dropout, L1/L2 Regularization & Early Stopping',
        'F1-Score, PR-AUC vs simple accuracy',
        'SMOTE oversamping and class-weighted cross-entropy'
      ]
    });
  }

  const combined = [...customQuestions, ...DEFAULT_INTERVIEW_QUESTIONS];
  return combined.slice(0, 8);
}
