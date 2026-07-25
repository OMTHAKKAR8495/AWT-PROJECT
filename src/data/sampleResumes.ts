import type { CandidateProfile } from '../types/resume';

export const SAMPLE_RESUMES: Record<string, CandidateProfile> = {
  software_engineer: {
    name: 'Aarav Sharma',
    email: 'aarav.sharma@example.com',
    phone: '+91 98765 43210',
    title: 'Full Stack Software Engineer',
    summary: 'Passionate Full Stack Engineer with 3+ years of experience building scalable web applications using React, Node.js, TypeScript, and Cloud Infrastructure (AWS, Docker). Proven track record of optimizing frontend performance and microservices architecture.',
    experienceYears: 3,
    skills: [
      'React',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'Express',
      'MongoDB',
      'PostgreSQL',
      'REST APIs',
      'GraphQL',
      'Docker',
      'AWS',
      'Git',
      'Tailwind CSS',
      'Jest',
      'CI/CD'
    ],
    experienceItems: [
      {
        role: 'Software Developer',
        company: 'NexTech Solutions',
        period: '2023 - Present',
        description: 'Developed scalable microservices using Node.js & React. Reduced page load latency by 42% through web performance optimization, code splitting, and browser caching.'
      },
      {
        role: 'Frontend Developer Intern',
        company: 'CloudVentures',
        period: '2022 - 2023',
        description: 'Built responsive UI dashboards using React, Redux Toolkit, and Tailwind CSS. Implemented automated end-to-end unit test suites with Jest.'
      }
    ],
    education: [
      {
        degree: 'B.Tech in Computer Science & Engineering',
        institution: 'Indian Institute of Technology (IIT) / State University',
        year: '2019 - 2023'
      }
    ],
    rawText: `AARAV SHARMA
Full Stack Software Engineer | aarav.sharma@example.com | +91 98765 43210

SUMMARY
Passionate Full Stack Engineer with 3+ years of experience building scalable web applications using React, Node.js, TypeScript, and Cloud Infrastructure (AWS, Docker). Proven track record of optimizing frontend performance and microservices architecture.

SKILLS
React, TypeScript, JavaScript, Node.js, Express, MongoDB, PostgreSQL, REST APIs, GraphQL, Docker, AWS, Git, Tailwind CSS, Jest, CI/CD

EXPERIENCE
Software Developer | NexTech Solutions (2023 - Present)
- Developed scalable microservices using Node.js & React.
- Reduced page load latency by 42% through web performance optimization, code splitting, and browser caching.
- Integrated PostgreSQL database schemas with Prisma ORM.

Frontend Developer Intern | CloudVentures (2022 - 2023)
- Built responsive UI dashboards using React, Redux Toolkit, and Tailwind CSS.
- Implemented automated end-to-end unit test suites with Jest.

EDUCATION
B.Tech in Computer Science & Engineering (2019 - 2023)`
  },

  ai_data_scientist: {
    name: 'Priya Patel',
    email: 'priya.patel@example.com',
    phone: '+91 98123 45678',
    title: 'AI & Data Science Specialist',
    summary: 'Data Scientist with expertise in Machine Learning, Deep Learning, Natural Language Processing (NLP), Python, and PyTorch. Experienced in training LLM models, predictive analytics, and deploying ML pipelines on GCP.',
    experienceYears: 4,
    skills: [
      'Python',
      'PyTorch',
      'TensorFlow',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'Machine Learning',
      'Deep Learning',
      'NLP',
      'SQL',
      'GCP',
      'FastAPI',
      'Docker',
      'Data Visualization'
    ],
    experienceItems: [
      {
        role: 'Machine Learning Engineer',
        company: 'DataGenix AI',
        period: '2023 - Present',
        description: 'Trained transformer-based NLP models for document classification with 94.8% accuracy. Built high-throughput API endpoints with FastAPI and Docker.'
      },
      {
        role: 'Data Analyst',
        company: 'Analytics Corp',
        period: '2021 - 2023',
        description: 'Designed SQL queries and automated ETL pipelines processing 5M+ daily user records. Built interactive dashboards in Tableau.'
      }
    ],
    education: [
      {
        degree: 'M.Tech in Data Science & Artificial Intelligence',
        institution: 'National Institute of Technology',
        year: '2019 - 2021'
      }
    ],
    rawText: `PRIYA PATEL
AI & Data Science Specialist | priya.patel@example.com | +91 98123 45678

SUMMARY
Data Scientist with expertise in Machine Learning, Deep Learning, Natural Language Processing (NLP), Python, and PyTorch. Experienced in training LLM models, predictive analytics, and deploying ML pipelines on GCP.

SKILLS
Python, PyTorch, TensorFlow, Scikit-learn, Pandas, NumPy, Machine Learning, Deep Learning, NLP, SQL, GCP, FastAPI, Docker, Data Visualization

EXPERIENCE
Machine Learning Engineer | DataGenix AI (2023 - Present)
- Trained transformer-based NLP models for document classification with 94.8% accuracy.
- Built high-throughput API endpoints with FastAPI and Docker.

Data Analyst | Analytics Corp (2021 - 2023)
- Designed SQL queries and automated ETL pipelines processing 5M+ daily user records.

EDUCATION
M.Tech in Data Science & Artificial Intelligence (2019 - 2021)`
  },

  ui_ux_designer: {
    name: 'Rohan Mehta',
    email: 'rohan.mehta@example.com',
    phone: '+91 97654 32109',
    title: 'Senior UI/UX & Product Designer',
    summary: 'Creative Product Designer with 5+ years of experience designing intuitive user journeys, high-converting web interfaces, wireframes, and design systems in Figma. Strong background in user research and prototyping.',
    experienceYears: 5,
    skills: [
      'Figma',
      'UI Design',
      'UX Research',
      'Wireframing',
      'Prototyping',
      'Design Systems',
      'User Personas',
      'Adobe XD',
      'HTML/CSS',
      'Accessibility (a11y)',
      'Design Thinking'
    ],
    experienceItems: [
      {
        role: 'Lead UI/UX Designer',
        company: 'CreativePulse Studio',
        period: '2022 - Present',
        description: 'Spearheaded end-to-end design system used by 20+ product developers. Conducted usability testing sessions improving checkout conversion rate by 28%.'
      }
    ],
    education: [
      {
        degree: 'Bachelor of Design (B.Des) in Interaction Design',
        institution: 'National Institute of Design',
        year: '2017 - 2021'
      }
    ],
    rawText: `ROHAN MEHTA
Senior UI/UX & Product Designer | rohan.mehta@example.com

SUMMARY
Creative Product Designer with 5+ years of experience designing intuitive user journeys, high-converting web interfaces, wireframes, and design systems in Figma.

SKILLS
Figma, UI Design, UX Research, Wireframing, Prototyping, Design Systems, User Personas, Adobe XD, HTML/CSS, Accessibility (a11y), Design Thinking`
  }
};
