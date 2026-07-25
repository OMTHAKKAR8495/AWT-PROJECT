import React from 'react';
import { 
  Cpu, 
  Landmark, 
  Activity, 
  ArrowRight, 
  CheckCircle2,
  Zap,
  Layers
} from 'lucide-react';

interface ServicesPageProps {
  setActiveTab: (tab: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ setActiveTab }) => {
  const divisions = [
    {
      id: 'ai-cloud',
      icon: Cpu,
      title: 'Artificial Intelligence & Enterprise Cloud',
      subtitle: 'Multimodal AI Foundation Models & Autonomous Infrastructure',
      badge: 'Flagship Tech Division',
      description: 'We build enterprise-grade large multimodal neural networks and cloud orchestration platforms powering real-time industrial automation, predictive maintenance, and autonomous logistics for Fortune 500 partners.',
      keyCapabilities: [
        'Atlas 4.0 Neural Intelligence Engine',
        'High-Throughput GPU Cluster Orchestration (10,000+ nodes)',
        'Zero-Trust Sovereign Enterprise Cloud',
        'Industrial IoT Real-Time Telemetry'
      ],
      impact: '34% Energy Cost Reduction across 140+ Partner Industrial Plants'
    },
    {
      id: 'clean-energy',
      icon: Zap,
      title: 'Renewable Power & Smart Microgrids',
      subtitle: 'Utility-Scale Solar, Wind & Smart Grid Storage',
      badge: 'ESG Clean Tech',
      description: 'Designing and operating multi-gigawatt renewable installations across North America, Europe, and Asia to power manufacturing grids and data centers with 100% clean power.',
      keyCapabilities: [
        'Multi-Gigawatt Utility Solar & Offshore Wind Integration',
        'AI-Optimized Battery Energy Storage Systems (BESS)',
        'Smart Grid Dynamic Load Balancing',
        'Cross-Border Power Purchase Agreements (PPAs)'
      ],
      impact: '4.2 Million Metric Tons CO2 Emissions Prevented Annually'
    },
    {
      id: 'healthcare-bio',
      icon: Activity,
      title: 'Healthcare Systems & Bio-Informatics',
      subtitle: 'Computational Genomics & Hospital IoT Infrastructure',
      badge: 'Med-Tech Innovation',
      description: 'Applying deep learning algorithms to high-throughput genomic sequencing pipelines, accelerating targeted drug discovery and personalized patient diagnostic platforms.',
      keyCapabilities: [
        'Cloud-Native Multi-Omics Sequencing Analysis',
        'Clinical Trial Predictive Patient Matching',
        'Hospital Smart Device Telemetry & HIPAA Vault',
        'AI-Assisted Structural Protein Folding Models'
      ],
      impact: 'Accelerated Clinical Trial Pipeline Timelines by 45%'
    },
    {
      id: 'financial-advisory',
      icon: Landmark,
      title: 'Global Capital, M&A & Risk Advisory',
      subtitle: 'Multinational Financial Strategy & Cross-Border Corporate Restructuring',
      badge: 'Financial Services',
      description: 'Managing high-stakes corporate acquisitions, structured cross-border finance, risk analytics, and global capital allocation for multinational clients.',
      keyCapabilities: [
        'Multi-Hundred-Million-Dollar M&A Transaction Execution',
        'Quantitative Risk Analytics & Tax Structuring',
        'ESG Green Bond Underwriting & Sustainable Finance',
        'Global Sovereign Debt & Treasury Management'
      ],
      impact: 'Advised on $18B+ in Completed Cross-Border Transactions'
    }
  ];

  return (
    <div className="space-y-20 pb-16">
      
      {/* PAGE HERO */}
      <section className="relative pt-12 pb-16 hero-glow border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-[var(--color-badge-bg)] border border-[var(--color-badge-border)] px-3.5 py-1 rounded-full text-xs font-semibold text-[var(--color-badge-text)]">
            <Layers className="w-3.5 h-3.5 text-[var(--color-accent)]" />
            Global Enterprise Capabilities
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight">
            Divisions & <span className="gradient-text">Enterprise Solutions</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Delivering multi-sector technological leadership, capital advice, and sustainable infrastructure across 65+ countries.
          </p>
        </div>
      </section>

      {/* DIVISIONS LIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {divisions.map((div) => {
          const IconComp = div.icon;
          return (
            <div key={div.id} className="glass-panel p-8 sm:p-10 rounded-3xl border border-[var(--color-border)] space-y-6 relative overflow-hidden">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl theme-btn-primary text-white border border-white/20 flex items-center justify-center shrink-0">
                    <IconComp className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-accent)] bg-[var(--color-badge-bg)] px-2.5 py-0.5 rounded border border-[var(--color-badge-border)]">
                      {div.badge}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mt-1">
                      {div.title}
                    </h2>
                    <div className="text-xs text-slate-400 font-medium">{div.subtitle}</div>
                  </div>
                </div>

                <button
                  onClick={() => setActiveTab('careers')}
                  className="bg-[var(--color-bg-surface)] hover:bg-white/10 text-[var(--color-accent)] border border-[var(--color-border)] font-semibold text-xs px-5 py-3 rounded-xl flex items-center gap-2 transition-colors shrink-0"
                >
                  View Roles in this Division
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed max-w-4xl">
                {div.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-[var(--color-bg-dark)]/80 p-5 rounded-2xl border border-[var(--color-border)] space-y-2">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Key Division Capabilities</h4>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {div.keyCapabilities.map((cap, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[var(--color-bg-surface)] p-5 rounded-2xl border border-[var(--color-border)] flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] font-bold text-[var(--color-accent)] uppercase tracking-wider">Division Impact Metric</div>
                    <div className="text-lg font-display font-bold text-white mt-2 leading-snug">
                      {div.impact}
                    </div>
                  </div>
                  <div className="text-[11px] text-slate-400 pt-3 border-t border-[var(--color-border)]">
                    Verified Q2 2026 Audit Report
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </section>

      {/* ENTERPRISE PARTNERSHIP CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] p-8 sm:p-10 rounded-3xl text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Interested in Partnering With Nexus Dynamics?
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Contact our corporate development and partnership advisory teams to discuss custom enterprise AI, clean grid installations, or financial solutions.
          </p>
          <div>
            <button
              onClick={() => setActiveTab('contact')}
              className="theme-btn-primary font-semibold text-xs px-6 py-3 rounded-xl shadow-lg transition-all"
            >
              Contact Global Partnership Advisory
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
