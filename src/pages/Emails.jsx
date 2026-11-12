import React from 'react';
import { CheckCircle } from 'lucide-react';
import { PageHeader, EmptySlot } from '../components/UI';

export default function BestPractices() {
  const practices = [
    "Clear and concise communication",
    "Active listening",
    "Choosing the right communication channel",
    "Regular team meetings",
    "Setting communication expectations",
    "Providing constructive feedback",
    "Respecting time zones and work-life boundaries"
  ];

  return (
    <div className="animate-in fade-in duration-500 max-w-5xl mx-auto py-8">
      <PageHeader title="Best Practices" icon={CheckCircle} />

      <div className="space-y-4 mb-8">
        {practices.map((practice, idx) => (
          <div key={idx} className="flex flex-col md:flex-row gap-4 p-6 bg-white dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 rounded-xl shadow-sm">
            <div className="md:w-1/3 flex-shrink-0">
              <div className="flex items-start gap-3">
                <span className="text-blue-600 dark:text-cyan-500 font-mono text-sm mt-1">{`0${idx + 1}`}</span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">{practice}</h3>
              </div>
            </div>
            <div className="md:w-2/3">
              <EmptySlot height="h-20" label="STRATEGY DETAILS & EXAMPLES" />
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-6 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl">
        <span className="block text-xs font-mono text-blue-600 dark:text-cyan-500/70 mb-4 uppercase">Summary</span>
        <EmptySlot height="h-32" label="PRACTICES SUMMARY" />
      </div>
    </div>
  );
}