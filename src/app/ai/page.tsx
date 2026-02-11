import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Bots | Taurus Hub",
  description: "Pick a Monica bot and open it in a new tab.",
};

// 1. Data Structure: Easy to add more bots later
interface Bot {
  title: string;
  emoji: string;
  tag: string;
  desc: string;
  href: string; // The Monica share link
}

const bots: Bot[] = [
  {
    title: "Bad Energy Repeller",
    emoji: "🧿",
    tag: "BAD ENERGY",
    desc: "Calm, protective routing.",
    href: "#", // TODO: Replace with actual Monica link
  },
  {
    title: "Small Business Systems Guide",
    emoji: "🧠",
    tag: "SYSTEMS",
    desc: "Structure, routines, and operating clarity.",
    href: "#",
  },
  {
    title: "The Healers AI",
    emoji: "🩺",
    tag: "HEALERS",
    desc: "Grounded education. No medical promises.",
    href: "#",
  },
  {
    title: "Insight Engine",
    emoji: "🧩",
    tag: "INSIGHT",
    desc: "Signal → slow down → test → decide.",
    href: "#",
  },
  {
    title: "Gianni Dona",
    emoji: "🧔",
    tag: "VOICE",
    desc: "Calm, human-first guidance lane.",
    href: "#",
  },
];

export default function AIPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* 2. Background Gradients (Replicating the original CSS radial-gradients) */}
      <div className="absolute top-0 left-0 w-full h-[700px] bg-[radial-gradient(circle_at_20%_0%,rgba(96,165,250,0.15),transparent_60%)] pointer-events-none" />
      <div className="absolute top-0 right-0 w-full h-[600px] bg-[radial-gradient(circle_at_90%_10%,rgba(244,114,182,0.12),transparent_55%)] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12 border-b border-slate-800 pb-6">
          <h1 className="text-3xl font-bold text-white tracking-tight">AI Bots</h1>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            Choose a bot. Each one opens a public Monica share link in a new tab.
          </p>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bots.map((bot, index) => (
            <article
              key={index}
              className="flex flex-col p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm hover:bg-slate-800/60 transition-colors duration-200 group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl" role="img" aria-label={bot.title}>
                    {bot.emoji}
                  </span>
                  <h2 className="font-semibold text-slate-100">{bot.title}</h2>
                </div>
                <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300">
                  {bot.tag}
                </span>
              </div>
              
              <p className="text-sm text-slate-400 mb-6 flex-grow leading-relaxed">
                {bot.desc}
              </p>

              <div className="mt-auto">
                <a
                  href={bot.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 font-medium text-sm hover:bg-blue-500/20 transition-all focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                >
                  Open bot <ExternalLink size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Hint Footer */}
        <div className="mt-12 p-4 rounded-lg bg-slate-900/50 border border-slate-800 text-center">
          <p className="text-xs text-slate-500 font-mono">
            Setup: Update the <code>href</code> in <code>src/app/ai/page.tsx</code> with your actual Monica links.
          </p>
        </div>
      </div>
    </div>
  );
}
