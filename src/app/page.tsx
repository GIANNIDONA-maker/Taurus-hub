"use client";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Diamond, Globe, Lock, Activity, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden bg-[#050505] text-slate-200 selection:bg-[#D4AF37] selection:text-black">
      
      {/* 1. MOVING AURORA BACKGROUND */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#D4AF37] opacity-[0.05] blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#FCEEAC] opacity-[0.03] blur-[100px] rounded-full" />

      {/* NAVIGATION */}
      <nav className="w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center relative z-20 border-b border-white/5">
        <div className="text-xl font-serif font-bold tracking-[0.2em] text-white">AUREUS</div>
        <div className="hidden md:flex gap-8 text-xs font-medium text-slate-500 tracking-widest uppercase">
          <Link href="#" className="hover:text-[#D4AF37] transition-colors">Private Vault</Link>
          <Link href="#" className="hover:text-[#D4AF37] transition-colors">Concierge</Link>
          <Link href="#" className="hover:text-[#D4AF37] transition-colors">Legacy</Link>
        </div>
        <button className="px-5 py-2 bg-white/5 border border-white/10 text-[#D4AF37] text-[10px] uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all duration-300">
          Member Access
        </button>
      </nav>

      {/* HERO SECTION */}
      <section className="relative z-10 pt-24 pb-16 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 text-[#D4AF37] text-[10px] uppercase tracking-widest mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"/>
            System Operational
          </div>
          
          <h1 className="text-5xl md:text-8xl font-serif text-white mb-8 leading-[0.9]">
            Wealth Beyond <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#D4AF37] to-[#8a701e]">Borders.</span>
          </h1>
          
          <p className="max-w-xl mx-auto text-slate-400 text-lg font-light leading-relaxed mb-10">
            The first decentralized sovereign wealth protocol. 
            Tangible assets, digitized for the silent elite.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto px-8 py-4 bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-widest hover:bg-[#FCEEAC] transition-colors">
              Initialize Portfolio
            </button>
            <button className="w-full sm:w-auto px-8 py-4 border border-white/10 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/5 transition-colors">
              Read Whitepaper
            </button>
          </div>
        </motion.div>
      </section>

      {/* 2. INFINITE TICKER TAPE */}
      <div className="w-full bg-white/[0.02] border-y border-white/5 py-4 overflow-hidden flex relative z-10">
        <div className="animate-marquee whitespace-nowrap flex gap-16 text-xs font-mono text-slate-500 uppercase tracking-widest">
          <span>BTC/USD $52,430 ▲</span>
          <span>XAU/GOLD $2,034 ▲</span>
          <span>REAL ESTATE (DXB) ▲ 4.2%</span>
          <span>FINE ART INDEX ▲ 1.8%</span>
          <span>VINTAGE HOROLOGY ▲ 3.5%</span>
          {/* Duplicate for seamless loop */}
          <span>BTC/USD $52,430 ▲</span>
          <span>XAU/GOLD $2,034 ▲</span>
          <span>REAL ESTATE (DXB) ▲ 4.2%</span>
        </div>
      </div>

      {/* 3. BENTO GRID (The "Heavy" Part) */}
      <section className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          
          {/* Large Card */}
          <BentoCard 
            colSpan="md:col-span-2" 
            rowSpan="md:row-span-2" 
            title="Sovereign Vault" 
            subtitle="Military-grade cold storage for digital and physical assets."
            icon={<Shield size={32} className="text-[#D4AF37]" />}
            bg="bg-gradient-to-br from-white/[0.03] to-transparent"
          />

          {/* Tall Card */}
          <BentoCard 
            colSpan="md:col-span-1" 
            rowSpan="md:row-span-2" 
            title="Global Concierge" 
            subtitle="24/7 AI logistics."
            icon={<Globe size={24} className="text-slate-400" />}
          />

          {/* Small Card 1 */}
          <BentoCard 
            title="Tokenized Assets" 
            subtitle="Fractional ownership."
            icon={<Diamond size={20} className="text-slate-400" />}
          />

          {/* Small Card 2 */}
            <BentoCard 
            title="Yield Analytics" 
            subtitle="Real-time APY tracking."
            icon={<TrendingUp size={20} className="text-slate-400" />}
          />

        </div>
      </section>
    </main>
  );
}

// Reusable Bento Card Component
function BentoCard({ colSpan = "", rowSpan = "", title, subtitle, icon, bg = "bg-white/[0.02]" }: any) {
  return (
    <motion.div 
      whileHover={{ scale: 0.98, backgroundColor: "rgba(255,255,255,0.05)" }}
      className={`${colSpan} ${rowSpan} ${bg} border border-white/5 p-8 flex flex-col justify-between rounded-xl backdrop-blur-sm transition-colors cursor-pointer group`}
    >
      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-[#D4AF37]/20 transition-colors">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-serif text-white mb-2 group-hover:text-[#D4AF37] transition-colors">{title}</h3>
        <p className="text-xs text-slate-500 leading-relaxed">{subtitle}</p>
      </div>
    </motion.div>
  );
}
