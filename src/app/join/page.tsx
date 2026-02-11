"use client";

import { motion } from "framer-motion";
import { Check, Shield, Lock, Zap, Star } from "lucide-react";
import Link from "next/link";

export default function JoinPage() {
  return (
    <div className="max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      
      {/* Hero / Header */}
      <div className="text-center py-16 sm:py-24 relative">
        {/* Glow behind text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#7C5CFF]/20 blur-[100px] rounded-full pointer-events-none" />
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-5xl sm:text-7xl font-black tracking-tight text-white mb-6 drop-shadow-2xl"
        >
          UNLOCK <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C5CFF] to-[#2FE6B8]">THE HUB</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
        >
          One payment. Lifetime access. No subscriptions. <br />
          Join the private ecosystem for builders, thinkers, and creators.
        </motion.p>
      </div>

      {/* Pricing Card */}
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="max-w-md mx-auto relative group"
      >
        {/* Neon Border Glow */}
        <div className="absolute -inset-1 bg-gradient-to-br from-[#7C5CFF] via-[#2FE6B8] to-[#7C5CFF] rounded-3xl blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
        
        <div className="relative rounded-2xl bg-[#0B1020] border border-white/10 p-8 sm:p-10 shadow-2xl">
          
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-lg font-medium text-slate-300">Lifetime Access</h3>
              <div className="flex items-baseline gap-1 mt-2">
                <span className="text-5xl font-bold text-white">$99</span>
                <span className="text-sm text-slate-500">/ once</span>
              </div>
            </div>
            <div className="h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
              <Lock className="text-[#2FE6B8]" size={24} />
            </div>
          </div>

          <ul className="space-y-4 mb-8">
            {[
              "Access to all Private AI Bots",
              "Unlimited Tool Usage",
              "Priority Support Channel",
              "Early Access to New Scripts",
              "Private Community Discord"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-300">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2FE6B8]/10 flex items-center justify-center">
                  <Check size={14} className="text-[#2FE6B8]" />
                </div>
                {item}
              </li>
            ))}
          </ul>

          <button className="w-full py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-[#7C5CFF] to-[#2FE6B8] text-white shadow-[0_10px_30px_rgba(124,92,255,0.3)] hover:shadow-[0_10px_40px_rgba(47,230,184,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all">
            Join Now
          </button>

          <p className="mt-6 text-xs text-center text-slate-500">
            Secure payment via Stripe/PayPal. <br />
            30-day money-back guarantee.
          </p>
        </div>
      </motion.div>

      {/* Trust Badges */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div className="p-4 rounded-xl bg-white/5 border border-white/5">
          <Shield className="mx-auto text-slate-400 mb-2" size={24} />
          <h4 className="text-white font-semibold">Secure & Private</h4>
          <p className="text-xs text-slate-500 mt-1">We don't sell your data.</p>
        </div>
        <div className="p-4 rounded-xl bg-white/5 border border-white/5">
          <Zap className="mx-auto text-slate-400 mb-2" size={24} />
          <h4 className="text-white font-semibold">Instant Unlock</h4>
          <p className="text-xs text-slate-500 mt-1">Get access immediately.</p>
        </div>
        <div className="p-4 rounded-xl bg-white/5 border border-white/5">
          <Star className="mx-auto text-slate-400 mb-2" size={24} />
          <h4 className="text-white font-semibold">Top Rated</h4>
          <p className="text-xs text-slate-500 mt-1">Loved by 500+ builders.</p>
        </div>
      </div>

    </div>
  );
}
