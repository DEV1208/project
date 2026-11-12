import React from 'react';
import { Users, Headphones, PhoneCall, BellRing, ShieldAlert, CheckCircle } from 'lucide-react';
import { GlassCard, PageHeader } from '../components/UI';

export default function CRM() {
  return (
    <div className="animate-in fade-in duration-500 max-w-5xl mx-auto py-8">
      <PageHeader title="Customer Relation Management (CRM)" icon={Users} />

      {/* Intro */}
      <div className="mb-10 p-6 bg-white dark:bg-white/5 border border-slate-200 dark:border-slate-800 rounded-2xl">
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
          Customer Relationship Management (CRM) bridges the gap between organizations and clients, intersecting directly with IT Service Management (ITSM) and Customer Experience (CX). Because nearly all customer interactions occur online, knowing how to communicate with precision, empathy, and speed is paramount.
        </p>
      </div>

      <div className="space-y-8">
        {/* Section 1 */}
        <GlassCard hover className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800/60 pb-4">
            <Headphones className="text-purple-600 dark:text-purple-400" size={24} />
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">1. ITSM & Customer Experience (CX)</h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            IT Service Management frameworks ensure that customer requests and technical incidents are resolved systematically. Good CX relies on minimizing customer effort, providing transparent ticket tracking, and maintaining a polite, solution-oriented demeanor.
          </p>
        </GlassCard>

        {/* Section 2 */}
        <GlassCard hover className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800/60 pb-4">
            <PhoneCall className="text-blue-600 dark:text-blue-400" size={24} />
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">2. Professional Customer Phone Calls</h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Voice communication remains a vital escalation path for frustrated customers or complex issues. Agents must master active listening, de-escalation techniques, and clear verbal summaries.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800">
              <span className="text-xs font-mono uppercase text-emerald-600 dark:text-emerald-400 block mb-1">Do</span>
              <p className="text-xs text-slate-600 dark:text-slate-300">Acknowledge customer frustration immediately, take ownership of the issue, and set clear callback expectations.</p>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800">
              <span className="text-xs font-mono uppercase text-red-600 dark:text-red-400 block mb-1">Don't</span>
              <p className="text-xs text-slate-600 dark:text-slate-300">Never argue with a customer, use overly dense technical jargon, or place callers on prolonged holds without checking in.</p>
            </div>
          </div>
        </GlassCard>

        {/* Section 3 */}
        <GlassCard hover className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800/60 pb-4">
            <BellRing className="text-amber-600 dark:text-amber-400" size={24} />
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">3. Incident Notifications & Status Updates</h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            When system outages or service disruptions occur, communicating proactively is critical to maintaining customer trust. Incident notifications must be timely, honest, and easy to digest.
          </p>
          <div className="p-4 bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 rounded-xl">
            <span className="text-xs font-mono uppercase text-amber-700 dark:text-amber-400 block mb-1 font-semibold">Incident Template Structure</span>
            <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1">
              <li>• <strong>What happened:</strong> Brief summary of the service disruption.</li>
              <li>• <strong>Who is affected:</strong> Scope of impacted users or regions.</li>
              <li>• <strong>Action taken:</strong> Current remediation steps by the engineering team.</li>
              <li>• <strong>Next update ETA:</strong> Exact time when the next status report will be published.</li>
            </ul>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}