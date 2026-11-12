import React from 'react';
import { AlertTriangle, Globe, BrainCircuit, MessageCircle, Users, Clock } from 'lucide-react';
import { GlassCard, PageHeader, EmptySlot } from '../components/UI';

export default function Challenges() {
  const challenges = [
    { title: "Time Zone Differences", icon: Globe },
    { title: "Language & Cultural Barriers", icon: BrainCircuit },
    { title: "Miscommunication", icon: MessageCircle },
    { title: "Lack of Face-to-Face Interaction", icon: Users },
    { title: "Information Overload", icon: AlertTriangle },
    { title: "Delayed Responses", icon: Clock }
  ];

  return (
    <div className="animate-in fade-in duration-500 max-w-5xl mx-auto py-8">
      <PageHeader title="Common Challenges" icon={AlertTriangle} />

      <div className="grid md:grid-cols-2 gap-6">
        {challenges.map((challenge, idx) => (
          <GlassCard key={idx} hover className="flex flex-col h-full gap-4">
            <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800/60 pb-4 mb-2">
              <challenge.icon size={20} className="text-slate-400" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{challenge.title}</h3>
            </div>
            
            <div>
              <span className="block text-xs font-mono text-slate-500 mb-2 uppercase">Description</span>
              <EmptySlot height="h-20" label="CHALLENGE DESCRIPTION" />
            </div>
            
            <div>
              <span className="block text-xs font-mono text-slate-500 mb-2 uppercase">Example</span>
              <EmptySlot height="h-24" label="PRACTICAL EXAMPLE" />
            </div>
            
            <div>
              <span className="block text-xs font-mono text-blue-600 dark:text-cyan-500/70 mb-2 uppercase">Solution</span>
              <EmptySlot height="h-24" label="PROPOSED SOLUTION" />
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}