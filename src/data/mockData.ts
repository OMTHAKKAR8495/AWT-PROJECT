import type { Job, LeadershipMember, GlobalHub, NewsArticle, DepartmentInfo } from '../types';

export const COMPANY_STATS = [
  { label: 'Annual Revenue', value: '$52.4 Billion', trend: '+14.2% YoY' },
  { label: 'Global Workforce', value: '124,000+', trend: 'Across 65+ Nations' },
  { label: 'R&D Investment', value: '$6.8 Billion', trend: 'In Next-Gen AI & Tech' },
  { label: 'ESG Net-Zero Goal', value: '100% Clean', trend: 'Target Year 2030' },
];

export const DEPARTMENT_INFOS: DepartmentInfo[] = [
  {
    category: 'Software & AI',
    title: 'Software, Cloud & Artificial Intelligence',
    icon: 'Cpu',
    openRolesCount: 42,
    summary: 'Building quantum-ready AI models, cloud infrastructure, and enterprise data platforms.'
  },
  {
    category: 'Engineering & Hardware',
    title: 'Advanced Engineering & Infrastructure',
    icon: 'HardHat',
    openRolesCount: 28,
    summary: 'Designing sustainable grid infrastructure, aerospace hardware, and robotics.'
  },
  {
    category: 'Finance & Accounting',
    title: 'Global Finance, M&A & Risk Management',
    icon: 'Landmark',
    openRolesCount: 19,
    summary: 'Managing multinational capital allocations, enterprise risk, and strategic acquisitions.'
  },
  {
    category: 'Healthcare & Biotech',
    title: 'Healthcare Systems & Bio-Informatics',
    icon: 'Activity',
    openRolesCount: 15,
    summary: 'Pioneering genomic analysis algorithms, hospital IoT platforms, and med-tech.'
  },
  {
    category: 'Marketing & Communications',
    title: 'Global Brand & Digital Communications',
    icon: 'Megaphone',
    openRolesCount: 12,
    summary: 'Crafting brand narratives, global media strategies, and digital growth campaigns.'
  },
  {
    category: 'HR & Talent',
    title: 'Human Resources & Global Talent Acquisition',
    icon: 'Users',
    openRolesCount: 16,
    summary: 'Nurturing 120,000+ team members with inclusive workplace programs and career growth.'
  },
  {
    category: 'Operations & Logistics',
    title: 'Supply Chain, Logistics & Procurement',
    icon: 'Truck',
    openRolesCount: 22,
    summary: 'Optimizing global logistics routes, ethical sourcing, and automated fulfillment.'
  },
  {
    category: 'Legal & Compliance',
    title: 'Legal Counsel, Regulatory & IP Law',
    icon: 'Scale',
    openRolesCount: 10,
    summary: 'Ensuring global corporate governance, international patent protection, and AI ethics.'
  },
  {
    category: 'Sales & Key Accounts',
    title: 'Enterprise Solutions & Business Development',
    icon: 'TrendingUp',
    openRolesCount: 25,
    summary: 'Partnering with Fortune 500 organizations to deploy Nexus enterprise suites.'
  },
  {
    category: 'Product & UX Design',
    title: 'Product Management & Experience Design',
    icon: 'Layout',
    openRolesCount: 14,
    summary: 'Architecting seamless user experiences and defining strategic product roadmaps.'
  }
];

export const JOBS_LIST: Job[] = [
  {
    id: 'JOB-AI-801',
    title: 'Principal AI Research Scientist - Large Multimodal Models',
    department: 'Software & AI',
    location: 'New York, NY',
    country: 'United States',
    workMode: 'Hybrid',
    type: 'Full-Time',
    experienceLevel: 'Lead / Director',
    salaryRange: '$280,000 - $380,000 USD / year + Equity',
    urgentHiring: true,
    postedDate: '2 days ago',
    description: 'Lead our flagship AI research division developing next-generation multimodal neural networks for autonomous industrial reasoning and enterprise automation.',
    responsibilities: [
      'Architect and train frontier neural networks across vision, text, and sensor telemetry data.',
      'Publish high-impact research papers in NeurIPS, ICML, and CVPR on behalf of Nexus AI Labs.',
      'Collaborate with cloud infrastructure teams to optimize distributed cluster performance across 10,000+ H100 GPUs.',
      'Mentor senior AI scientists and establish ethical AI alignment standards across global projects.'
    ],
    requirements: [
      'Ph.D. in Computer Science, Artificial Intelligence, Robotics, or related quantitative field.',
      '7+ years experience in deep learning, PyTorch/JAX, and large language model pre-training.',
      'Track record of publications in top-tier machine learning conferences.',
      'Proven expertise in CUDA kernel optimization and distributed compute clusters.'
    ]
  },
  {
    id: 'JOB-ENG-402',
    title: 'Director of Renewable Energy Grid Infrastructure',
    department: 'Engineering & Hardware',
    location: 'Zurich',
    country: 'Switzerland',
    workMode: 'Onsite',
    type: 'Full-Time',
    experienceLevel: 'Executive',
    salaryRange: 'CHF 240,000 - CHF 310,000 / year',
    urgentHiring: false,
    postedDate: '3 days ago',
    description: 'Oversee multi-gigawatt solar, wind, and smart-grid storage installations across Europe and North America to power Nexus industrial facilities and partner cities.',
    responsibilities: [
      'Direct $1.2B annual capital expenditure for clean power grid installations.',
      'Manage multi-disciplinary engineering teams across Switzerland, Germany, and the UK.',
      'Negotiate power purchase agreements (PPAs) with national energy grids and municipal authorities.',
      'Implement IoT real-time monitoring systems for predictive grid maintenance.'
    ],
    requirements: [
      'Master’s degree in Electrical, Mechanical, or Energy Systems Engineering.',
      '12+ years of senior leadership in utility-scale energy projects or microgrid developments.',
      'In-depth knowledge of European Union energy directives and high-voltage transmission safety.',
      'Fluent in English and German.'
    ]
  },
  {
    id: 'JOB-FIN-209',
    title: 'VP of Global M&A & Strategic Corporate Finance',
    department: 'Finance & Accounting',
    location: 'London',
    country: 'United Kingdom',
    workMode: 'Hybrid',
    type: 'Executive',
    experienceLevel: 'Executive',
    salaryRange: '£220,000 - £300,000 / year + Performance Bonus',
    urgentHiring: true,
    postedDate: 'Just now',
    description: 'Shape Nexus Global’s growth strategy through strategic cross-border acquisitions, corporate venture capital investments, and financial restructuring.',
    responsibilities: [
      'Lead end-to-end execution of $500M+ M&A transactions in technology, biotech, and renewable sectors.',
      'Perform financial modeling, valuation analysis, synergy estimation, and due diligence.',
      'Present strategic deal rationale to the Board of Directors and Executive Committee.',
      'Oversee post-merger integration plans with global cross-functional leadership.'
    ],
    requirements: [
      'MBA from a premier business school or CFA designation.',
      '10+ years in Investment Banking, Private Equity, or Corporate M&A at a Tier-1 MNC.',
      'Expertise in cross-border tax structured finance and regulatory filings (SEC, FCA).',
      'Demonstrated track record of executing multi-hundred-million-dollar tech acquisitions.'
    ]
  },
  {
    id: 'JOB-BIO-105',
    title: 'Lead Bio-Informatics Specialist - Genomics & AI',
    department: 'Healthcare & Biotech',
    location: 'Boston, MA',
    country: 'United States',
    workMode: 'Hybrid',
    type: 'Full-Time',
    experienceLevel: 'Mid-Senior',
    salaryRange: '$165,000 - $210,000 USD / year',
    urgentHiring: false,
    postedDate: '5 days ago',
    description: 'Apply deep learning to high-throughput genomic sequencing pipelines to accelerate targeted therapeutic discovery and personalized medicine platforms.',
    responsibilities: [
      'Analyze multi-omics data streams using cloud pipeline tools (Nextflow, Snakemake, Python).',
      'Develop machine learning classifiers for variant calling, structural analysis, and gene editing target prediction.',
      'Collaborate with bio-engineers and clinical trial trialists in our Cambridge Innovation Center.',
      'Ensure HIPAA and GDPR compliance for patient genomic datasets.'
    ],
    requirements: [
      'Ph.D. or Master’s in Bioinformatics, Computational Biology, or Biostatistics.',
      '5+ years experience processing RNA-seq, WGS, and single-cell sequencing datasets.',
      'Proficiency with Python, R, Bioconductor, and AWS HealthOmics / GCP Genomics.'
    ]
  },
  {
    id: 'JOB-MKT-304',
    title: 'VP of Global Brand Strategy & Enterprise Communications',
    department: 'Marketing & Communications',
    location: 'Singapore',
    country: 'Singapore',
    workMode: 'Hybrid',
    type: 'Executive',
    experienceLevel: 'Executive',
    salaryRange: '$190,000 - $240,000 SGD / year',
    urgentHiring: true,
    postedDate: '1 day ago',
    description: 'Architect the global public narrative for Nexus Dynamics, steering international media relations, brand identity, and executive thought leadership across APAC & Europe.',
    responsibilities: [
      'Oversee global brand campaigns reaching 50M+ enterprise decision makers worldwide.',
      'Manage corporate reputation, crisis communications, and key press relations with FT, WSJ, and Bloomberg.',
      'Lead digital growth marketing initiatives, podcast sponsorships, and global summits (WEF, Davos, CES).',
      'Direct a team of 45 creative strategists, PR managers, and content producers.'
    ],
    requirements: [
      'Bachelor’s or Master’s degree in Marketing, Public Relations, or Mass Communications.',
      '10+ years driving global brand strategy for Fortune 500 tech or B2B enterprise firms.',
      'Exceptional crisis navigation skills and deep network of global media editors.',
      'Demonstrated experience balancing localized regional messaging with unified global brand guidelines.'
    ]
  },
  {
    id: 'JOB-HR-701',
    title: 'Global Head of Talent Acquisition & Future of Work',
    department: 'HR & Talent',
    location: 'Bengaluru',
    country: 'India',
    workMode: 'Hybrid',
    type: 'Lead / Director',
    experienceLevel: 'Lead / Director',
    salaryRange: '₹45,000,000 - ₹65,000,000 / year',
    urgentHiring: false,
    postedDate: '4 days ago',
    description: 'Drive high-volume talent acquisition strategies across our global hubs, scaling our AI, engineering, and business teams by 15,000+ hires annually.',
    responsibilities: [
      'Transform global recruiting operations through AI applicant tracking, video screening, and skills assessment.',
      'Partner with regional HR leaders in the US, Europe, India, and Japan to establish competitive compensation bands.',
      'Drive university relationship programs with MIT, Stanford, IITs, Oxford, and ETH Zurich.',
      'Implement data-driven diversity, equity, and inclusion (DEI) hiring benchmarks.'
    ],
    requirements: [
      'Master’s degree in Human Resource Management, Business Administration, or Organizational Psychology.',
      '10+ years leading large scale global recruitment teams in MNC environments.',
      'Expertise in global labor laws, visa immigration sponsorship workflows, and executive compensation.'
    ]
  },
  {
    id: 'JOB-OPS-602',
    title: 'Global Supply Chain & Logistics Operations Director',
    department: 'Operations & Logistics',
    location: 'Tokyo',
    country: 'Japan',
    workMode: 'Onsite',
    type: 'Lead / Director',
    experienceLevel: 'Lead / Director',
    salaryRange: '¥18,000,000 - ¥24,000,000 / year',
    urgentHiring: true,
    postedDate: '1 day ago',
    description: 'Engineered resilient supply chains across 60+ countries, incorporating predictive digital twins, automated warehousing, and carbon-neutral transit.',
    responsibilities: [
      'Optimize multi-modal freight operations (ocean, air, rail, last-mile) for $5B in annual hardware shipments.',
      'Negotiate carrier contracts with top global maritime and cargo logistics providers.',
      'Implement real-time shipment tracking with IoT satellite telemetry.',
      'Mitigate geopolitical supply chain risks through multi-region vendor sourcing.'
    ],
    requirements: [
      'Degree in Supply Chain Management, Industrial Engineering, or Global Logistics.',
      '8+ years leading complex international logistics networks in electronics, automotive, or industrial sectors.',
      'Six Sigma Black Belt certification preferred.',
      'Bilingual fluency in English and Japanese or Mandarin.'
    ]
  },
  {
    id: 'JOB-LEG-901',
    title: 'Enterprise General Counsel - Artificial Intelligence & Data Privacy',
    department: 'Legal & Compliance',
    location: 'Washington, D.C.',
    country: 'United States',
    workMode: 'Remote',
    type: 'Lead / Director',
    experienceLevel: 'Lead / Director',
    salaryRange: '$250,000 - $320,000 USD / year',
    urgentHiring: false,
    postedDate: '6 days ago',
    description: 'Serve as primary legal advisor on AI regulation compliance (EU AI Act, US Executive Orders), global data privacy laws (GDPR, CCPA), and IP licensing.',
    responsibilities: [
      'Advise executive leadership and product developers on AI model governance and risk mitigation.',
      'Draft and negotiate complex enterprise software licenses, cloud agreements, and vendor contracts.',
      'Represent Nexus in discussions with international regulatory bodies and industry coalitions.',
      'Manage external litigation counsel and global IP patent filing strategies.'
    ],
    requirements: [
      'Juris Doctor (J.D.) from an accredited law school and active state bar license.',
      '8+ years practicing technology law, intellectual property, or regulatory compliance.',
      'Deep mastery of global privacy frameworks (GDPR, CCPA, HIPAA, Cross-Border Transfer Rules).'
    ]
  },
  {
    id: 'JOB-SAL-503',
    title: 'Senior Enterprise Account Executive - Fortune 100 Financial Sector',
    department: 'Sales & Key Accounts',
    location: 'New York, NY',
    country: 'United States',
    workMode: 'Hybrid',
    type: 'Full-Time',
    experienceLevel: 'Mid-Senior',
    salaryRange: '$180,000 Base / $360,000 OTE + Uncapped Commission',
    urgentHiring: true,
    postedDate: 'Just now',
    description: 'Drive high-ARR enterprise sales of Nexus Cloud & AI solutions to global tier-1 investment banks, hedge funds, and insurance giants.',
    responsibilities: [
      'Own executive relationships (CIO, CTO, CISO) across top global financial institutions.',
      'Manage multi-million dollar sales cycles from initial discovery to contract closing.',
      'Partner with pre-sales solution architects to build bespoke enterprise software proposals.',
      'Exceed annual quota of $12M+ net new ARR.'
    ],
    requirements: [
      'Bachelor’s degree in Business, Computer Science, or related field.',
      '6+ years of quota-carrying enterprise SaaS sales targeting global banking and financial services.',
      'Consistent history of President’s Club achievement and multi-million dollar deal closures.'
    ]
  },
  {
    id: 'JOB-PRD-108',
    title: 'Principal Product Manager - Autonomous Enterprise Cloud',
    department: 'Product & UX Design',
    location: 'San Francisco, CA',
    country: 'United States',
    workMode: 'Hybrid',
    type: 'Lead / Director',
    experienceLevel: 'Lead / Director',
    salaryRange: '$210,000 - $275,000 USD / year + Stock Grants',
    urgentHiring: false,
    postedDate: '3 days ago',
    description: 'Define the roadmap for Nexus Autonomous Cloud, empowering enterprises to automatically scale compute, optimize workloads, and secure multi-cloud environments.',
    responsibilities: [
      'Define 3-year vision, quarterly roadmaps, and key metrics for autonomous cloud orchestration features.',
      'Conduct customer interviews with enterprise CIOs and DevOps leaders worldwide.',
      'Partner closely with 80+ software engineers, UX designers, and product analysts.',
      'Drive competitive market positioning and go-to-market execution with product marketing.'
    ],
    requirements: [
      'BS/MS in Computer Science or equivalent technical field.',
      '7+ years in cloud infrastructure product management (AWS, GCP, Azure, or Kubernetes ecosystem).',
      'Strong quantitative background with experience analyzing product telemetry and customer feedback.'
    ]
  },
  {
    id: 'JOB-AI-805',
    title: 'Senior Software Engineer - Distributed AI Cloud Infrastructure',
    department: 'Software & AI',
    location: 'London',
    country: 'United Kingdom',
    workMode: 'Remote',
    type: 'Full-Time',
    experienceLevel: 'Mid-Senior',
    salaryRange: '£110,000 - £145,000 / year',
    urgentHiring: false,
    postedDate: '4 days ago',
    description: 'Build fault-tolerant distributed systems that orchestrate model training across tens of thousands of accelerated compute nodes.',
    responsibilities: [
      'Write ultra-low latency C++ and Rust networking libraries for distributed GPU clusters.',
      'Improve cluster resource utilization and job scheduling efficiency by 30%+.',
      'Participate in on-call rotations for high-priority production infrastructure alerts.'
    ],
    requirements: [
      '5+ years experience building low-level distributed systems in Go, Rust, or C++.',
      'Deep understanding of Linux kernel networking, RDMA, Infiniband, and TCP/IP stack.',
      'Experience with Kubernetes operators and custom resource definitions (CRDs).'
    ]
  },
  {
    id: 'JOB-DES-902',
    title: 'Lead Product Designer - Next-Gen Enterprise Design System',
    department: 'Product & UX Design',
    location: 'Berlin',
    country: 'Germany',
    workMode: 'Hybrid',
    type: 'Lead / Director',
    experienceLevel: 'Lead / Director',
    salaryRange: '€95,000 - €125,000 / year',
    urgentHiring: true,
    postedDate: '1 day ago',
    description: 'Lead the design architecture for Nexus Design System (NDS) used by over 600 internal developers and 100 million end-users globally.',
    responsibilities: [
      'Craft elegant, accessible UI components and design tokens in Figma and React code repositories.',
      'Establish global accessibility guidelines (WCAG 2.1 AAA) across mobile and web platforms.',
      'Conduct interactive usability testing sessions with global enterprise users.'
    ],
    requirements: [
      '6+ years of UI/UX design experience with a stellar portfolio showing complex enterprise tools.',
      'Expertise in design system architecture, component libraries, and motion design.',
      'Strong front-end coding capabilities (HTML, CSS, React, Figma API).'
    ]
  }
];

export const LEADERSHIP_TEAM: LeadershipMember[] = [
  {
    id: 'LEAD-1',
    name: 'Dr. Elena Rostova',
    title: 'Global Chief Executive Officer (CEO)',
    division: 'Executive Board',
    location: 'New York HQ',
    bio: 'With over 25 years of global executive leadership, Dr. Rostova transformed Nexus from a regional technology firm into a $50B+ global powerhouse pioneering clean technology and enterprise AI.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'LEAD-2',
    name: 'Marcus Vance',
    title: 'Chief Technology Officer (CTO)',
    division: 'R&D & Global Labs',
    location: 'Zurich Innovation Hub',
    bio: 'Former head of quantum computing labs at MIT, Marcus leads Nexus’s 22,000 R&D engineers across AI models, autonomous systems, and sustainable energy grids.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'LEAD-3',
    name: 'Sophia Chen-O’Connor',
    title: 'Chief Financial Officer (CFO)',
    division: 'Global Capital & Finance',
    location: 'London Financial Center',
    bio: 'Sophia manages Nexus’s global financial strategy, capital allocation, and investor relations, delivering 14 consecutive quarters of double-digit revenue growth.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'LEAD-4',
    name: 'Arjun Nambiar',
    title: 'Chief Human Resources Officer (CHRO)',
    division: 'Global Talent & Culture',
    location: 'Singapore Regional HQ',
    bio: 'Arjun champions human-first corporate leadership, overseeing global diversity programs, talent mobility, and employee wellness for our 124,000 workforce.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600'
  }
];

export const GLOBAL_HUBS: GlobalHub[] = [
  {
    city: 'New York',
    country: 'United States',
    region: 'Americas',
    type: 'Global HQ',
    address: 'One Nexus Plaza, Manhattan, NY 10001',
    employees: 18500,
    phone: '+1 (212) 555-0190'
  },
  {
    city: 'London',
    country: 'United Kingdom',
    region: 'EMEA',
    type: 'Regional HQ',
    address: '30 St Mary Axe, City of London, EC3A 8EP',
    employees: 14200,
    phone: '+44 20 7946 0912'
  },
  {
    city: 'Singapore',
    country: 'Singapore',
    region: 'APAC',
    type: 'Regional HQ',
    address: 'Marina Bay Financial Centre Tower 2, Singapore 018983',
    employees: 11800,
    phone: '+65 6789 0100'
  },
  {
    city: 'Zurich',
    country: 'Switzerland',
    region: 'EMEA',
    type: 'R&D Center',
    address: 'Technoparkstrasse 1, 8005 Zürich',
    employees: 8400,
    phone: '+41 44 234 5678'
  },
  {
    city: 'Bengaluru',
    country: 'India',
    region: 'APAC',
    type: 'Innovation Hub',
    address: 'Outer Ring Road, Manyata Tech Park, Bengaluru 560045',
    employees: 24500,
    phone: '+91 80 4000 1234'
  },
  {
    city: 'Tokyo',
    country: 'Japan',
    region: 'APAC',
    type: 'Innovation Hub',
    address: 'Roppongi Hills Mori Tower, Minato-ku, Tokyo 106-6108',
    employees: 9200,
    phone: '+81 3 5555 0143'
  }
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'NEWS-101',
    category: 'AI & Tech',
    title: 'Nexus Launches Breakthrough Enterprise AI Platform "Atlas 4.0" for Autonomous Industrial Operations',
    date: 'July 20, 2026',
    readTime: '4 min read',
    summary: 'Atlas 4.0 unifies multimodal AI telemetry with industrial IoT grids, reducing energy waste by up to 34% for automotive and pharmaceutical plants.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'NEWS-102',
    category: 'Sustainability',
    title: 'Nexus Dynamics Achieves 80% Renewable Energy Target 4 Years Ahead of ESG Roadmap',
    date: 'July 14, 2026',
    readTime: '3 min read',
    summary: 'Through major microgrid installations in North America and Western Europe, Nexus now powers all manufacturing and data centers with certified green power.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'NEWS-103',
    category: 'Financial',
    title: 'Nexus Dynamics Reports Q2 Fiscal 2026 Revenue of $13.8B, Up 16% Year-Over-Year',
    date: 'July 02, 2026',
    readTime: '5 min read',
    summary: 'Strong demand for AI cloud services and high-capacity electrical grid components drives record quarterly earnings and expanded dividend payouts.',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800'
  }
];

export const LIFE_AT_NEXUS_PERKS = [
  {
    title: 'Global Health & Wellness',
    description: '100% company-paid healthcare, dental, vision, mental health coaching, and wellness stipends.',
    icon: 'Heart'
  },
  {
    title: 'Equity & Financial Security',
    description: 'Competitive RSUs, 401(k) / pension matching up to 8%, and annual performance bonus structures.',
    icon: 'DollarSign'
  },
  {
    title: 'Continuous Learning Stipend',
    description: '$4,000 annual budget for conferences, executive certifications, Ph.D. tuition assistance, and books.',
    icon: 'BookOpen'
  },
  {
    title: 'Flexible & Hybrid Work',
    description: 'Choose remote, hybrid, or office-based setups with ergonomic home-office hardware stipends.',
    icon: 'Globe'
  },
  {
    title: 'Parental & Family Care',
    description: '20 weeks fully paid parental leave for all birth and adoptive parents globally.',
    icon: 'Smile'
  },
  {
    title: 'Global Career Mobility',
    description: 'Transfer opportunities across our 65+ international hubs with full relocation support.',
    icon: 'Zap'
  }
];
