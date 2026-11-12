import React from 'react';
import { MessageSquare, Mail, MessageCircle, Video, LayoutList, Phone } from 'lucide-react';
import { GlassCard, PageHeader, EmptySlot } from '../components/UI';

export default function Channels() {
  const channels = [
    { title: "Email", icon: Mail, color: "text-blue-600 dark:text-blue-400" },
    { title: "Instant Messaging", icon: MessageCircle, color: "text-purple-600 dark:text-purple-400" },
    { title: "Video Conferencing", icon: Video, color: "text-cyan-600 dark:text-cyan-400" },
    { title: "Project Management Tools", icon: LayoutList, color: "text-emerald-600 dark:text-emerald-400" },
    { title: "Phone Calls", icon: Phone, color: "text-orange-600 dark:text-orange-400" }
  ];

  return (
    <div className="animate-in fade-in duration-500 max-w-5xl mx-auto py-8">
      <PageHeader title="Communication Channels" icon={MessageSquare} />

      <div className="space-y-6">
        {channels.map((channel, idx) => (
          <GlassCard key={idx} hover className="flex flex-col gap-6">
            <div className="flex items-center gap-4 border-b border-slate-200 dark:border-slate-800/60 pb-4">
              <channel.icon size={24} className={channel.color} />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{channel.title}</h3>
            </div>
            
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-12">
                <span className="block text-xs font-mono text-slate-500 dark:text-slate-500 mb-2 uppercase">Purpose</span>
                <EmptySlot height="h-16" label="CHANNEL PURPOSE" />
              </div>
              
              <div className="md:col-span-6">
                <span className="block text-xs font-mono text-emerald-600 dark:text-emerald-500/70 mb-2 uppercase">Advantages</span>
                <EmptySlot height="h-32" label="LIST ADVANTAGES" />
              </div>
              
              <div className="md:col-span-6">
                <span className="block text-xs font-mono text-red-600 dark:text-red-500/70 mb-2 uppercase">Disadvantages</span>
                <EmptySlot height="h-32" label="LIST DISADVANTAGES" />
              </div>

              <div className="md:col-span-12">
                <span className="block text-xs font-mono text-blue-600 dark:text-cyan-500/70 mb-2 uppercase">When to use</span>
                <EmptySlot height="h-16" label="USE CASES" />
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}