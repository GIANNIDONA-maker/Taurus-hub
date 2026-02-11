import type { Metadata } from "next";
import { CreditCard, Heart, ShieldCheck, QrCode, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support | Taurus Hub",
  description: "Support the platform for $5/month via PayPal or QR.",
};

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-[20%] w-[1100px] h-[650px] bg-[radial-gradient(circle,rgba(96,165,250,0.15),transparent_60%)]" />
        <div className="absolute top-[10%] right-[10%] w-[900px] h-[600px] bg-[radial-gradient(circle,rgba(244,114,182,0.12),transparent_55%)]" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        
        {/* Header */}
        <header className="mb-12 border-b border-slate-800 pb-6">
          <h1 className="text-3xl font-bold tracking-tight text-white">Support & Join</h1>
          <p className="mt-2 text-slate-400">
            Support Taurus Hub for <span className="text-blue-400 font-bold">$5/month</span>. Use PayPal or scan the QR.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-8">
          
          {/* Main Card: Subscription */}
          <section className="rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm p-6 sm:p-8 shadow-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Heart size={12} /> Monthly Support
            </div>
            
            <h2 className="text-4xl font-bold text-white mb-4">$5 <span className="text-lg text-slate-500 font-normal">/ month</span></h2>
            
            <p className="text-slate-300 mb-6 leading-relaxed">
              If you find the bots and tools useful, your support helps cover hosting, testing, and continuous improvements.
            </p>

            <ul className="space-y-3 mb-8 text-slate-400 text-sm">
              <li className="flex items-center gap-3">
                <ShieldCheck size={16} className="text-green-400" />
                Helps cover hosting, testing, and improvements
              </li>
              <li className="flex items-center gap-3">
                <CreditCard size={16} className="text-blue-400" />
                PayPal manages payments and receipts securely
              </li>
              <li className="flex items-center gap-3">
                <ExternalLink size={16} className="text-purple-400" />
                Cancel anytime from your PayPal dashboard
              </li>
            </ul>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#" // TODO: Add PayPal Link
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 min-w-[200px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-lg shadow-blue-900/20"
              >
                Support via PayPal <ExternalLink size={16} />
              </a>
              <Link 
                href="/ai"
                className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition-all border border-slate-700"
              >
                See AI Bots
              </Link>
            </div>

            {/* QR Code Section */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-slate-800">
              
              {/* QR Image Card 1 */}
              <div className="p-4 rounded-xl bg-black/20 border border-slate-800">
                <h3 className="text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
                  <QrCode size={14} /> Scan to Pay
                </h3>
                <div className="relative aspect-square w-full bg-slate-800 rounded-lg overflow-hidden flex items-center justify-center text-slate-600">
                  {/* Placeholder for QR Code */}
                  <span className="text-xs">Upload 7846.jpg to /public</span>
                  {/* Uncomment below when image is uploaded to /public/7846.jpg */}
                  {/* <Image src="/7846.jpg" alt="QR Code" fill className="object-cover" /> */}
                </div>
              </div>

              {/* QR Image Card 2 */}
              <div className="p-4 rounded-xl bg-black/20 border border-slate-800">
                <h3 className="text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
                  <ShieldCheck size={14} /> Monthly Access
                </h3>
                <div className="relative aspect-square w-full bg-slate-800 rounded-lg overflow-hidden flex items-center justify-center text-slate-600">
                  {/* Placeholder for Access Card */}
                  <span className="text-xs">Upload 8812.jpg to /public</span>
                   {/* <Image src="/8812.jpg" alt="Access Card" fill className="object-cover" /> */}
                </div>
              </div>

            </div>
          </section>

          {/* Sidebar: Quick Links */}
          <aside className="space-y-6">
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Quick Navigation</h3>
              <div className="space-y-3">
                <Link href="/tools" className="block w-full px-4 py-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors text-sm font-medium border border-transparent hover:border-slate-700">
                  Tools Dashboard
                </Link>
                <Link href="/digistore" className="block w-full px-4 py-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors text-sm font-medium border border-transparent hover:border-slate-700">
                  Digital Store
                </Link>
                <a href="#" className="block w-full px-4 py-2 rounded-lg bg-pink-500/10 hover:bg-pink-500/20 text-pink-400 hover:text-pink-300 transition-colors text-sm font-medium border border-pink-500/20">
                  Surfshark Deal ↗
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-950/80">
              <p className="text-sm text-slate-400 mb-2 font-medium">Want a one-time tip option?</p>
              <p className="text-xs text-slate-500 leading-relaxed">
                If you prefer not to subscribe monthly, let us know and we can add a "Buy me a coffee" link here.
              </p>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
