import type { JobRole } from '../types/resume';

export const COMPANY_JOBS: JobRole[] = [
  {
    id: 'job-101',
    title: 'Senior Full Stack Engineer',
    department: 'Software Engineering',
    company: 'Apex Technologies',
    location: 'Remote / Bangalore',
    type: 'Full-time',
    experienceYears: 3,
    minDegreeRequired: 'Bachelor of Technology (B.Tech / B.E. / B.S. in CS)',
    requiredSkills: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'REST APIs', 'Git'],
    preferredSkills: ['Docker', 'AWS', 'GraphQL', 'Tailwind CSS', 'CI/CD'],
    salaryRange: '₹14,000,000 - ₹22,000,000 / year ($90k - $130k)',
    description: 'We are seeking an ambitious Senior Full Stack Engineer to build next-generation web platforms. You will architect robust web applications, optimize frontend rendering performance, and scale cloud microservices.',
    responsibilities: [
      'Architect and deliver responsive web applications with React and TypeScript.',
      'Develop secure, scalable backend microservices using Node.js, Express, and PostgreSQL.',
      'Collaborate with product managers and UI designers to ship seamless user features.',
      'Maintain automated unit & integration testing suites.'
    ],
    companyCriteriaNotes: [
      'Apex Technologies requires candidate to possess 3+ years relevant software development experience.',
      'Must have strong proficiency in React and Node.js backend integration.',
      'Degree in Computer Science or equivalent IT background required.'
    ],
    benefits: ['Full Health Insurance', 'Flexible Remote Work', 'Learning & Certification Allowance', 'Stock Options']
  },
  {
    id: 'job-102',
    title: 'Frontend Engineer (React / Next.js)',
    department: 'Frontend Engineering',
    company: 'CloudVentures Tech',
    location: 'Hybrid / Mumbai',
    type: 'Full-time',
    experienceYears: 2,
    minDegreeRequired: 'Bachelor Degree in CS / IT / Software Systems',
    requiredSkills: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Git'],
    preferredSkills: ['Next.js', 'Redux', 'Jest', 'Accessibility (a11y)', 'Figma'],
    salaryRange: '₹10,000,000 - ₹16,000,000 / year ($65k - $100k)',
    description: 'Join our dynamic frontend team to craft visually stunning, highly interactive web applications. You will turn design mockups into pixel-perfect React components.',
    responsibilities: [
      'Build reusable, modern UI components with React, TypeScript, and Tailwind CSS.',
      'Optimize web performance, dynamic imports, and Lighthouse CWV scores.',
      'Ensure high accessibility standards across desktop and mobile devices.'
    ],
    companyCriteriaNotes: [
      'CloudVentures requires candidates to pass frontend performance & React state management test.',
      'Must have published web applications or verifiable GitHub project portfolio.',
      'Minimum 2+ years hands-on frontend web framework experience.'
    ]
  },
  {
    id: 'job-103',
    title: 'AI & Machine Learning Engineer',
    department: 'Data & Artificial Intelligence',
    company: 'DataGenix AI Corp',
    location: 'Remote',
    type: 'Full-time',
    experienceYears: 3,
    minDegreeRequired: 'Master Degree (M.Tech / M.S. in AI, Data Science or Mathematics)',
    requiredSkills: ['Python', 'PyTorch', 'Machine Learning', 'Deep Learning', 'FastAPI', 'SQL'],
    preferredSkills: ['TensorFlow', 'NLP', 'GCP', 'Docker', 'Pandas', 'Scikit-learn'],
    salaryRange: '₹16,000,000 - ₹26,000,000 / year ($100k - $150k)',
    description: 'Looking for a passionate AI engineer to train, fine-tune, and deploy state-of-the-art NLP models and predictive pipelines on cloud infrastructure.',
    responsibilities: [
      'Train machine learning and deep neural network models using PyTorch & HuggingFace.',
      'Develop real-time inference microservices with FastAPI and Docker.',
      'Perform data feature engineering and pipeline automation.'
    ],
    companyCriteriaNotes: [
      'DataGenix AI requires candidates with M.Tech or postgraduate background in Machine Learning / AI.',
      'Must have hands-on experience in PyTorch deep learning and Transformer models.',
      'High proficiency in Python and model deployment via Docker.'
    ]
  },
  {
    id: 'job-104',
    title: 'Product Designer (UI/UX)',
    department: 'Design & UX',
    company: 'CreativePulse Studio',
    location: 'Hybrid / Delhi NCR',
    type: 'Full-time',
    experienceYears: 3,
    minDegreeRequired: 'Bachelor of Design (B.Des / Human Computer Interaction)',
    requiredSkills: ['Figma', 'UI Design', 'UX Research', 'Wireframing', 'Prototyping'],
    preferredSkills: ['Design Systems', 'User Personas', 'HTML/CSS', 'Adobe XD'],
    salaryRange: '₹12,000,000 - ₹18,000,000 / year ($75k - $110k)',
    description: 'Create beautiful, intuitive digital experiences across our enterprise software suites. You will lead user research, prototype web flows, and maintain our global design system.',
    responsibilities: [
      'Design comprehensive wireframes, user journeys, and interactive prototypes in Figma.',
      'Conduct usability interviews with real users to iteratively improve application flow.',
      'Collaborate closely with frontend engineers during UI handoff.'
    ],
    companyCriteriaNotes: [
      'CreativePulse Studio requires a verifiable Figma design system portfolio.',
      'Demonstrated experience in user research and wireframe prototyping.',
      'Minimum 3+ years experience in product UX design.'
    ]
  },
  {
    id: 'job-105',
    title: 'Cloud & DevOps Engineer',
    department: 'Infrastructure & Operations',
    company: 'Global Infrastructure Systems',
    location: 'Remote',
    type: 'Full-time',
    experienceYears: 4,
    minDegreeRequired: 'B.Tech / B.E. in IT, CS, or Electronics',
    requiredSkills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Linux', 'Terraform'],
    preferredSkills: ['Python', 'Bash', 'Prometheus', 'Grafana', 'GCP'],
    salaryRange: '₹15,000,000 - ₹24,000,000 / year ($95k - $140k)',
    description: 'Scale and secure multi-region Kubernetes clusters on AWS. Manage automated GitHub Actions CI/CD deployment pipelines.',
    responsibilities: [
      'Manage container orchestration with Kubernetes and Helm charts.',
      'Automate infrastructure provisioning using Terraform.',
      'Set up zero-downtime deployment pipelines and monitoring alerts.'
    ],
    companyCriteriaNotes: [
      'Global Infrastructure Systems mandates AWS / Kubernetes cloud certification or equivalent experience.',
      'Must have managed multi-region production Kubernetes clusters.',
      'Minimum 4+ years DevOps & infrastructure automation experience.'
    ]
  },
  {
    id: 'JOB-AI-801',
    title: 'Principal AI Research Scientist - Large Multimodal Models',
    department: 'Software & AI',
    company: 'Nexus Dynamics',
    location: 'New York, NY',
    type: 'Full-time',
    experienceYears: 7,
    minDegreeRequired: 'Ph.D. in Computer Science, AI or Robotics',
    requiredSkills: ['Python', 'PyTorch', 'Large Language Models', 'Deep Learning', 'CUDA', 'Git'],
    preferredSkills: ['JAX', 'Distributed Systems', 'Transformer Models', 'HPC'],
    salaryRange: '$280,000 - $380,000 USD / year + Equity',
    description: 'Lead our flagship AI research division developing next-generation multimodal neural networks for autonomous industrial reasoning and enterprise automation.',
    responsibilities: [
      'Architect and train frontier neural networks across vision, text, and sensor telemetry data.',
      'Publish high-impact research papers in NeurIPS, ICML, and CVPR on behalf of Nexus AI Labs.',
      'Collaborate with cloud infrastructure teams to optimize distributed cluster performance across 10,000+ H100 GPUs.'
    ],
    companyCriteriaNotes: [
      'Ph.D. degree required with publications in NeurIPS/ICML/CVPR.',
      '7+ years experience in deep learning and LLM pre-training.',
      'Expertise in PyTorch and distributed GPU clusters.'
    ],
    benefits: ['Full Executive Health Plan', '100% Employer Matched Equity', 'Relocation Package']
  }
];
