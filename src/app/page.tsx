"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Lock, ArrowRight, Globe, Diamond, TrendingUp } from "lucide-react";

// --- CONFIGURATION ---
const ACCESS_CODE = "AUREUS-888"; // <--- CHANGE THIS TO YOUR SECRET PASSWORD
// ---------------------

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [inputCode, setInputCode] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // Check if already logged in (optional persistence)
  useEffect(() => {
    const session = sessionStorage.getItem("aureus_session");
    if (session === "granted") setIsAuthenticated(true);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    // Simulate network delay for "security check" effect
    setTimeout(() => {
      if (inputCode === ACCESS_CODE) {
        sessionStorage.setItem("aureus_session", "granted");
        setIsAuthenticated(true);
      } else {
        setError(true);
        setInputCode("");
      }
      setLoading(false);
    }, 1500);
  };

  // --- THE LOCK SCREEN (Velvet Rope) ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center text-center p-6 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37] opacity-[0.03] blur-[100px] rounded-full animate-pulse" />
        
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative z-10 max-w-md w-full bg-white/[0.02] border border-white/10 p-12 rounded-2xl backdrop-blur-xl shadow-2xl"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/20">
              <Lock className="text-[#D4AF37] w-8 h-8" />
            </div>
          </div>

          <h1 className="text-2xl font-serif text-white mb-2 tracking-widest">RESTRICTED ACCESS</h1>
          <p className="text-slate-500 text-xs uppercase tracking-[0.2em] mb-8">Members Only Protocol</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <input 
                type="password" 
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value)}
                placeholder="ENTER ACCESS KEY"
                className="w-full bg-black/50 border border-white/10 text-center text-[#D4AF37] text-lg tracking-[0.5em] py-4 focus:outline-none focus:border-[#D4AF37] transition-all placeholder:text-slate-700 placeholder:tracking-normal placeholder:text-xs"
              />
            </div>

            {error && (
              <motion.p 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="text-red-500 text-[10px] uppercase tracking-widest"
              >
                Access Denied. Invalid Key.
              </motion.p>
            )}

            <button 
              disabled={loading}
              className="w-full bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-widest py-4 hover:bg-[#FCEEAC] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Verifying..." : "Authenticate"}
            </button>
          </form>
          
          <div className="mt-8 pt-8 border-t border-white/5">
            <p className="text-[10px] text-slate-600 uppercase tracking-widest">
              Secured by Aureus Protocol v1.0
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  // --- THE MAIN DASHBOARD (Only visible after login) ---
  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden bg-[#050505] text-slate-200 selection:bg-[#D4AF37] selection:text-black">
      
      {/* 1. MOVING AURORA BACKGROUND */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#D4AF37] opacity-[0.05] blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#FCEEAC] opacity-[0.03] blur-[100px] rounded-full" />

      {/* NAVIGATION */}
      <nav className="w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center relative z-20 border-b border-white/5">
        <div className="text-xl font-serif font-bold tracking-[0.2em] text-white">AUREUS</div>
        <div className="hidden md:flex gap-8 text-xs font-medium text-slate-500 tracking-widest uppercase">
          <span className="text-[#D4AF37]">● Live Session</span>
          <span>Private Vault</span>
          <span>Concierge</span>
        </div>
        <button onClick={() => {sessionStorage.clear(); window.location.reload();}} className="px-5 py-2 bg-white/5 border border-white/10 text-slate-400 text-[10px] uppercase tracking-widest hover:bg-red-900/20 hover:text-red-400 transition-all duration-300">
          Disconnect
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
            Identity Verified
          </div>
          
          <h1 className="text-5xl md:text-8xl font-serif text-white mb-8 leading-[0.9]">
            Welcome to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#D4AF37] to-[#8a701e]">The Inner Circle.</span>
          </h1>
          
          <p className="max-w-xl mx-auto text-slate-400 text-lg font-light leading-relaxed mb-10">
            Access granted to the sovereign wealth protocol. 
            Your assets are now being monitored.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto px-8 py-4 bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-widest hover:bg-[#FCEEAC] transition-colors">
              Launch Trading Bot
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

      {/* 3. BENTO GRID */}
      <section className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          
          <BentoCard 
            colSpan="md:col-span-2" 
            rowSpan="md:row-span-2" 
            title="Sovereign Vault" 
            subtitle="Military-grade cold storage for digital and physical assets."
            icon={<Shield size={32} className="text-[#D4AF37]" />}
            bg="bg-gradient-to-br from-white/[0.03] to-transparent"
          />

          <BentoCard 
            colSpan="md:col-span-1" 
            rowSpan="md:row-span-2" 
            title="Global Concierge" 
            subtitle="24/7 AI logistics."
            icon={<Globe size={24} className="text-slate-400" />}
          />

          <BentoCard 
            title="Tokenized Assets" 
            subtitle="Fractional ownership."
            icon={<Diamond size={20} className="text-slate-400" />}
          />

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
