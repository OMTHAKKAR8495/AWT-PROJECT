import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe2, 
  Send, 
  HelpCircle,
  ChevronDown,
  ShieldCheck
} from 'lucide-react';
import { GLOBAL_HUBS } from '../data/mockData';

export const ContactPage: React.FC = () => {
  const [selectedHub, setSelectedHub] = useState(GLOBAL_HUBS[0]);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    inquiryType: 'Enterprise Partnerships',
    message: ''
  });
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const faqs = [
    {
      q: 'How can candidates apply for roles at Nexus Dynamics?',
      a: 'We are actively hiring across all corporate and technical fields globally. Candidates can browse open roles on our Careers Portal, filter by department or location, and submit applications directly with CV uploads.'
    },
    {
      q: 'How do enterprise clients request custom AI or clean energy consultations?',
      a: 'Select "Enterprise Partnerships" in our contact form below or reach out directly to our corporate headquarters at contact@nexusdynamics.global. Our solution architects will schedule an introductory executive briefing within 24 hours.'
    },
    {
      q: 'Where are Nexus Dynamics’s global regional decision hubs?',
      a: 'Our primary Americas HQ is located in Manhattan, New York; EMEA HQ is in London; APAC HQ is in Singapore; R&D HQ is in Zurich; and key engineering hubs operate in Bengaluru and Tokyo.'
    },
    {
      q: 'What is Nexus Dynamics’s ESG policy regarding supplier ethics?',
      a: 'We mandate strict compliance with our Global Supplier Code of Ethics, covering zero carbon emissions targets, fair labor standards, and data privacy protocols across all 65+ operating nations.'
    }
  ];

  return (
    <div className="space-y-20 pb-16">
      
      {/* HERO */}
      <section className="relative pt-12 pb-16 hero-glow border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-[var(--color-badge-bg)] border border-[var(--color-badge-border)] px-3.5 py-1 rounded-full text-xs font-semibold text-[var(--color-badge-text)]">
            <Mail className="w-3.5 h-3.5 text-[var(--color-accent)]" />
            Global Corporate Contact
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight">
            Get in Touch With <span className="gradient-text">Nexus Dynamics</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Connect with our executive headquarters, regional offices, media relations, or global talent acquisition teams.
          </p>
        </div>
      </section>

      {/* GLOBAL HEADQUARTERS SELECTOR & CONTACT FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Office Locator Tabs (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 rounded-3xl border border-[var(--color-border)] space-y-4">
              <h2 className="text-lg font-display font-bold text-white flex items-center gap-2">
                <Globe2 className="w-5 h-5 text-[var(--color-accent)]" />
                Select Global Office Hub
              </h2>

              <div className="space-y-2">
                {GLOBAL_HUBS.map((hub) => {
                  const isSelected = selectedHub.city === hub.city;
                  return (
                    <button
                      key={hub.city}
                      onClick={() => setSelectedHub(hub)}
                      className={`w-full text-left p-3.5 rounded-xl border text-xs transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-[var(--color-badge-bg)] border-[var(--color-accent)] text-white font-semibold shadow-lg'
                          : 'bg-[var(--color-bg-surface)] border-[var(--color-border)] text-slate-300 hover:bg-white/5'
                      }`}
                    >
                      <div>
                        <div className="font-bold">{hub.city}, {hub.country}</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">{hub.type} • {hub.region}</div>
                      </div>
                      <span className="text-[10px] bg-[var(--color-bg-dark)] px-2 py-1 rounded text-[var(--color-accent)] font-mono border border-[var(--color-border)]">
                        {hub.employees.toLocaleString()} Staff
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Selected Office Details Box */}
              <div className="pt-4 border-t border-[var(--color-border)] space-y-3 text-xs bg-[var(--color-bg-dark)]/80 p-4 rounded-2xl border border-[var(--color-border)]">
                <div className="font-bold text-white text-sm">{selectedHub.city} {selectedHub.type}</div>
                <p className="text-slate-300 flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                  <span>{selectedHub.address}</span>
                </p>
                <p className="text-slate-300 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                  <span>{selectedHub.phone}</span>
                </p>
                <p className="text-slate-300 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                  <span>{selectedHub.city.toLowerCase()}@nexusdynamics.global</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-[var(--color-border)] space-y-6">
              
              <div>
                <h2 className="text-2xl font-display font-bold text-white">Send an Enterprise Inquiry</h2>
                <p className="text-xs text-slate-400 mt-1">Our executive desk responds to all inquiries within 24 hours.</p>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.fullName}
                        onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-[var(--color-bg-dark)] border border-[var(--color-border)] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[var(--color-accent)]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Corporate Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. s.jenkins@company.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[var(--color-bg-dark)] border border-[var(--color-border)] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[var(--color-accent)]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Company / Organization</label>
                      <input
                        type="text"
                        placeholder="e.g. Global Tech Partners"
                        value={formData.company}
                        onChange={e => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-[var(--color-bg-dark)] border border-[var(--color-border)] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[var(--color-accent)]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Inquiry Type</label>
                      <select
                        value={formData.inquiryType}
                        onChange={e => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full bg-[var(--color-bg-dark)] border border-[var(--color-border)] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[var(--color-accent)]"
                      >
                        <option value="Enterprise Partnerships">Enterprise Partnerships</option>
                        <option value="Career & Recruitment">Career & Recruitment Question</option>
                        <option value="Investor Relations">Investor Relations</option>
                        <option value="Media & Press">Media & Press Inquiries</option>
                        <option value="General Corporate">General Corporate Desk</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Message Details *</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Specify your inquiry, project scope, or questions..."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[var(--color-bg-dark)] border border-[var(--color-border)] rounded-xl p-3.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[var(--color-accent)]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full theme-btn-primary font-bold text-xs py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all"
                  >
                    Dispatch Inquiry
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 border border-emerald-400/30 rounded-full flex items-center justify-center mx-auto shadow-xl">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Inquiry Dispatched Successfully</h3>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    Thank you <strong className="text-white">{formData.fullName}</strong>. Your message regarding <strong className="text-[var(--color-accent)]">{formData.inquiryType}</strong> has been routed to our executive team.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-[var(--color-bg-surface)] hover:bg-white/10 text-white text-xs font-semibold px-5 py-2.5 rounded-xl border border-[var(--color-border)] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-widest flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4" /> FAQ
          </div>
          <h2 className="text-3xl font-display font-bold text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div key={idx} className="glass-card rounded-2xl border border-[var(--color-border)] overflow-hidden">
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-semibold text-sm text-white"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-[var(--color-accent)] shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-xs text-slate-300 border-t border-[var(--color-border)] leading-relaxed mt-2">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
