import React, { useState } from 'react';
import { X, Code, Copy, Check } from 'lucide-react';

interface EmbedCodeModalProps {
  onClose: () => void;
}

export const EmbedCodeModal: React.FC<EmbedCodeModalProps> = ({ onClose }) => {
  const [copied, setCopied] = useState(false);

  const embedScript = `<!-- CareerMatch AI Career Bot Embed Widget -->
<script 
  src="https://careermatch.ai/cdn/widget.v1.js" 
  data-company-id="acme-corp"
  data-theme="dark"
  async>
</script>
<div id="careermatch-career-bot-root"></div>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(embedScript);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="glass-panel w-full max-w-xl rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6 relative overflow-hidden shadow-2xl animate-in fade-in duration-200">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center border border-sky-500/30">
            <Code className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">
              Embed Career Bot on Any Company Website
            </h3>
            <p className="text-xs text-slate-400">
              Copy and paste this lightweight script snippet into your company's Career Page HTML.
            </p>
          </div>
        </div>

        <div className="relative">
          <pre className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-xs text-sky-300 font-mono overflow-x-auto">
            <code>{embedScript}</code>
          </pre>
          <button
            onClick={handleCopy}
            className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg border border-slate-700 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" /> Copied!
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" /> Copy Code
              </>
            )}
          </button>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 space-y-1">
          <span className="font-bold text-slate-200 block mb-1">Key Benefits for Employers:</span>
          <p>• Automatically scans candidate resumes on arrival.</p>
          <p>• Displays matching company job roles without manual searching.</p>
          <p>• Generates instant role-specific interview prep questions.</p>
        </div>

      </div>
    </div>
  );
};
