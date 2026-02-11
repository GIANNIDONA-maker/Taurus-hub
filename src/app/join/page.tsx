cat > src/app/join/page.tsx << 'EOF'
"use client";
import { motion } from "framer-motion";
import { Check, Shield, Lock, Zap, CreditCard, Star } from "lucide-react";
import Link from "next/link";
import { clsx } from "clsx";

// ✅ YOUR OFFICIAL PAYMENT LINK
const PAYPAL_LINK = "https://www.paypal.com/ncp/payment/DCFGC5QQVL6MQ"; 

export default function JoinPage() {
  return (
    <div className="max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-10 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#7C5CFF]/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Hero Section */}
      <div className="text-center py-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest text-[#2FE6B8] mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(47,230,184,0.2)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2FE6B8] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2FE6B8]"></span>
          </span>
          LIMITED SPOTS FOR 2026
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 drop-shadow-2xl">
          BECOME <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C5CFF] to-[#2FE6B8]">UNSTOPPABLE</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Stop building from scratch. Get the Master Scripts, the AI Bots, and the Privacy configs. One price. Own it forever.
        </p>
      </div>

      {/* Pricing Card */}
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        transition={{ delay: 0.2 }} 
        className="max-w-md mx-auto relative group perspective-1000"
      >
        {/* Animated Glow Border */}
        <div className="absolute -inset-1 bg-gradient-to-br from-[#7C5CFF] via-[#2FE6B8] to-[#7C5CFF] rounded-[2rem] blur-lg opacity-40 group-hover:opacity-70 transition duration-500 animate-pulse" />
        
        <div className="relative rounded-[1.8rem] bg-[#080808] border border-white/10 p-8 sm:p-10 shadow-2xl backdrop-blur-xl">
          
          <div className="flex justify-between items-start mb-8 border-b border-white/5 pb-8">
            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Lifetime Pass</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black text-white">$99</span>
                <span className="text-sm text-slate-500 font-medium">/ once</span>
              </div>
            </div>
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#7C5CFF] to-[#5a3eff] flex items-center justify-center shadow-lg shadow-purple-500/20 text-white">
              <Zap size={24} fill="currentColor" />
            </div>
          </div>

          <div className="space-y-5 mb-10">
            <Feature text="Master Builder Script (Node.js)" />
            <Feature text="All Private AI Agent Prompts" />
            <Feature text="Commercial Usage Rights" />
            <Feature text="Priority Support Channel" />
            <Feature text="Future Updates (2026 Roadmap)" />
          </div>

          <a 
            href={PAYPAL_LINK} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group/btn relative w-full flex items-center justify-center gap-3 py-4 rounded-xl font-bold text-lg text-black bg-gradient-to-r from-[#2FE6B8] to-[#00FF96] shadow-[0_0_30px_rgba(47,230,184,0.3)] hover:shadow-[0_0_50px_rgba(47,230,184,0.5)] transition-all transform hover:-translate-y-1 active:scale-[0.98]"
          >
            <CreditCard size={20} className="text-black" />
            <span>Secure Checkout</span>
            <div className="absolute right-5 opacity-0 group-hover/btn:opacity-100 transition-all transform translate-x-[-10px] group-hover/btn:translate-x-0">→</div>
          </a>
          
          <div className="mt-6 flex flex-col items-center gap-2 text-xs text-slate-500">
            <div className="flex items-center gap-1 text-slate-400">
              <Shield size={12} className="text-[#2FE6B8]" /> 
              <span>Encrypted & Secure via PayPal</span>
            </div>
            <div className="flex gap-1">
              {[1,2,3,4,5].map(i => <Star key={i} size={10} className="text-yellow-500 fill-yellow-500" />)}
              <span className="ml-1">Trusted by 500+ Builders</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 group/feat">
      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2FE6B8]/10 border border-[#2FE6B8]/20 flex items-center justify-center group-hover/feat:bg-[#2FE6B8]/20 transition-colors">
        <Check size={12} className="text-[#2FE6B8]" />
      </div>
      <span className="text-slate-300 text-sm font-medium group-hover/feat:text-white transition-colors">{text}</span>
    </div>
  );
}
EOF
