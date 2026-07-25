import type { InterviewQuestion } from '../types/resume';

export const DEFAULT_INTERVIEW_QUESTIONS: InterviewQuestion[] = [
  {
    id: 'q-1',
    roleTitle: 'Senior Full Stack Engineer',
    category: 'Technical',
    difficulty: 'Hard',
    question: 'How do you optimize a React web application suffering from heavy re-renders and slow initial load times?',
    suggestedAnswer: `I take a systematic approach:
1. **Performance Profiling**: Use React DevTools Profiler & Chrome Lighthouse to pinpoint heavy component trees and LCP bottlenecks.
2. **Code Splitting & Lazy Loading**: Use \`React.lazy()\` and dynamic imports for non-critical route chunks.
3. **Memoization & State Design**: Apply \`useMemo\` and \`useCallback\` to prevent expensive recalculations, and lift state down to avoid re-rendering entire component trees.
4. **Virtualization & Assets**: Virtualize long lists with \`react-window\` or \`tanstack-virtual\`, compress images with Next.js/WebP format, and cache static assets via CDN.`,
    keyPointsToInclude: [
      'React DevTools Profiler & Lighthouse CWV',
      'React.lazy and Dynamic Route Splitting',
      'State Colocation & Memoization (useMemo / useCallback)',
      'DOM Virtualization & Asset Compression'
    ],
    starGuide: {
      situation: 'In my previous project, our dashboard page load time exceeded 4.2 seconds due to unoptimized state management.',
      task: 'My goal was to achieve an LCP under 1.2s and eliminate unnecessary DOM re-renders.',
      action: 'I audited the component graph with React DevTools, split bundle routes dynamically, virtualized dynamic tables with 10k rows, and implemented memoized selectors.',
      result: 'Reduced bundle size by 54% and improved page load performance score from 48 to 96 on Google Lighthouse.'
    }
  },
  {
    id: 'q-2',
    roleTitle: 'Senior Full Stack Engineer',
    category: 'System Design',
    difficulty: 'Medium',
    question: 'Describe how you would design a rate-limiting middleware for a RESTful API service.',
    suggestedAnswer: `I would implement the **Token Bucket** or **Leaky Bucket** algorithm using **Redis**:
1. **Identification**: Track requests by Client IP address or Authenticated User JWT ID.
2. **Redis In-Memory Key Store**: Store key \`rate:user:{id}\` with an atomic increment operation (\`INCR\`) and fixed TTL expiration.
3. **Middleware Flow**:
   - Check if current count > limit (e.g. 100 requests / minute).
   - If exceeded, return HTTP \`429 Too Many Requests\` with \`Retry-After\` header.
   - Otherwise, proceed to controller logic.`,
    keyPointsToInclude: [
      'Token Bucket / Sliding Window Log algorithm',
      'Redis atomic INCR & EXPIRE operations',
      'HTTP 429 Too Many Requests response headers'
    ]
  },
  {
    id: 'q-3',
    roleTitle: 'Senior Full Stack Engineer',
    category: 'Behavioral',
    difficulty: 'Medium',
    question: 'Tell me about a time when you faced a critical bug in production right before a major release. How did you handle it?',
    suggestedAnswer: `During a production release, a race condition caused user session tokens to silently invalidate:
1. **Immediate Triage**: Rolled back to the last stable deployment tag and communicated transparently with stakeholders.
2. **Root Cause Analysis**: Isolated the bug in the token refresh interceptor using Sentry error stack traces.
3. **Fix & Verification**: Wrote a regression unit test, patched the token refreshing queue, and verified locally and in staging.
4. **Post-Mortem**: Documented prevention steps and updated CI/CD pipeline to mandate async token test execution.`,
    keyPointsToInclude: [
      'Calm incident response & immediate rollback',
      'Log/Stack trace triage using error monitoring',
      'Writing regression tests prior to hotfix deployment'
    ]
  },
  {
    id: 'q-4',
    roleTitle: 'AI & Machine Learning Engineer',
    category: 'Technical',
    difficulty: 'Hard',
    question: 'Explain how Self-Attention mechanisms work in Transformer models and why they outperform traditional RNNs.',
    suggestedAnswer: `Self-attention allows a model to calculate relationships between all tokens in a sequence simultaneously:
1. **Queries, Keys, and Values**: Tokens are projected into Query ($Q$), Key ($K$), and Value ($V$) matrices.
2. **Attention Scores**: Calculated as $\\text{Softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right)V$. Scaling by $\\sqrt{d_k}$ prevents vanishing gradients.
3. **Parallel Computation**: Unlike RNNs which process sequentially ($O(N)$ sequential steps), Transformers compute attention in parallel ($O(1)$ sequential steps), allowing massive scale on GPUs.`,
    keyPointsToInclude: [
      'Query, Key, and Value Matrix projections',
      'Scaled Dot-Product Attention formula',
      'Parallel processing advantages over sequential RNN/LSTM steps'
    ]
  },
  {
    id: 'q-5',
    roleTitle: 'Product Designer (UI/UX)',
    category: 'Behavioral',
    difficulty: 'Medium',
    question: 'How do you handle conflicting feedback between product stakeholders and real user testing results?',
    suggestedAnswer: `I ground every design decision in **user evidence and business goals**:
1. **Synthesize Data**: Present clear usability session recordings and analytics metrics alongside stakeholder business requirements.
2. **Collaborative Workshop**: Facilitate a design review to demonstrate how resolving user pain points directly drives business KPIs (retention & conversion).
3. **A/B Testing Experimentation**: When consensus is split, propose a quantitative A/B test in production to let data guide the final choice.`,
    keyPointsToInclude: [
      'Connecting user research to business KPIs',
      'Usability data & session metrics',
      'Objective A/B testing approach'
    ]
  },
  {
    id: 'q-6',
    roleTitle: 'General Career Role',
    category: 'HR / Culture',
    difficulty: 'Easy',
    question: 'Why do you want to join our engineering team, and where do you see yourself in 3 years?',
    suggestedAnswer: `I am drawn to your company's culture of innovation and commitment to high-performance engineering. In 3 years, I aim to master cloud-native architecture, take ownership of core platform initiatives, and mentor junior developers while driving high-impact technical solutions.`,
    keyPointsToInclude: [
      'Alignment with company mission',
      'Desire for continuous technical growth',
      'Long-term commitment to leadership and mentorship'
    ]
  }
];
