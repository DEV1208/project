import React from 'react';
import { Mail, Zap, CheckCircle, FileText, XCircle } from 'lucide-react';
import { GlassCard, PageHeader } from '../components/UI';

export default function Emails() {
  return (
    <div className="animate-in fade-in duration-500 max-w-5xl mx-auto py-8">
      <PageHeader title="Efficient & Effective Emails" icon={Mail} />

      {/* Intro */}
      <div className="mb-10 p-6 bg-white dark:bg-white/5 border border-slate-200 dark:border-slate-800 rounded-2xl">
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
          Most of us write emails every day, but do we write them efficiently and effectively? In a corporate setting, poorly constructed emails waste reader time, cause confusion, and lead to delayed responses.
        </p>
      </div>

      <div className="space-y-8 mb-12">
        {/* Section 1 */}
        <GlassCard hover className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800/60 pb-4">
            <FileText className="text-emerald-600 dark:text-emerald-400" size={24} />
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">1. Subject Lines & Structural Clarity</h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Your subject line is the gatekeeper of your message. It should immediately signal the purpose and urgency of the email. In the body, use short paragraphs, bullet points, and bold text for key takeaways.
          </p>
        </GlassCard>

        {/* Section 2 */}
        <GlassCard hover className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800/60 pb-4">
            <Zap className="text-blue-600 dark:text-cyan-400" size={24} />
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">2. Writing Efficiently (Conciseness)</h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Cut unnecessary filler words and get straight to the point. State your request or call-to-action early in the email so the reader doesn't have to hunt for what you need from them.
          </p>
        </GlassCard>

        {/* Section 3 */}
        <GlassCard hover className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800/60 pb-4">
            <CheckCircle className="text-indigo-600 dark:text-indigo-400" size={24} />
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">3. Writing Effectively (Tone & Professionalism)</h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Maintain a courteous, constructive tone. Avoid passive-aggressive phrasing, and always proofread for clarity and politeness before hitting send.
          </p>
        </GlassCard>
      </div>

      {/* Before / After Example */}
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Practical Comparison</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <GlassCard className="border-red-200 dark:border-red-900/40 bg-red-50/20 dark:bg-red-950/10">
          <div className="flex items-center gap-2 mb-3 text-red-600 dark:text-red-400 font-mono text-xs uppercase font-semibold">
            <XCircle size={16} /> Ineffective Email (Before)
          </div>
          <div className="text-xs font-mono bg-white dark:bg-slate-900 p-4 rounded-xl border border-red-100 dark:border-red-900/50 text-slate-600 dark:text-slate-300 space-y-2">
            <p><strong>Subject:</strong> hey meeting</p>
            <p>i wanted to talk about stuff regarding the project we talked about last week. let me know when you are free maybe tomorrow or thursday. thanks.</p>
          </div>
        </GlassCard>

        <GlassCard className="border-emerald-200 dark:border-emerald-900/40 bg-emerald-50/20 dark:bg-emerald-950/10">
          <div className="flex items-center gap-2 mb-3 text-emerald-600 dark:text-emerald-400 font-mono text-xs uppercase font-semibold">
            <CheckCircle size={16} /> Effective Email (After)
          </div>
          <div className="text-xs font-mono bg-white dark:bg-slate-900 p-4 rounded-xl border border-emerald-100 dark:border-emerald-900/50 text-slate-600 dark:text-slate-300 space-y-2">
            <p><strong>Subject:</strong> Action Required: Q3 Project Review Meeting</p>
            <p>Hi Team,<br/><br/>Let's schedule a 30-minute sync this Thursday at 2:00 PM to review the Q3 deliverables. Please let me know if this time works for you.</p>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}