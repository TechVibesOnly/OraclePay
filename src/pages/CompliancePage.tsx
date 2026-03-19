import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  MapPin, 
  AlertTriangle, 
  CheckCircle2, 
  FileText, 
  Download, 
  Globe, 
  ChevronRight,
  Info
} from 'lucide-react';
import { Sidebar } from '../components/UI';
import { NumberCounter } from '../components/NumberCounter';

const jurisdictions = [
  { id: 'in', name: 'India', status: 'compliant', color: '#10b981' },
  { id: 'us', name: 'United States', status: 'compliant', color: '#10b981' },
  { id: 'gb', name: 'United Kingdom', status: 'compliant', color: '#10b981' },
  { id: 'eu', name: 'European Union', status: 'action', color: '#f59e0b' },
  { id: 'ae', name: 'UAE', status: 'monitoring', color: '#3b82f6' },
  { id: 'sg', name: 'Singapore', status: 'compliant', color: '#10b981' },
  { id: 'ca', name: 'Canada', status: 'review', color: '#3b82f6' },
  // ... more jurisdictions
];

export default function CompliancePage() {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateAudit = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 2000);
  };

  return (
    <div className="flex h-screen bg-bg-deep overflow-hidden oracle-grid">
      <div className="scanline" />
      <Sidebar active="compliance" />
      
      <main className="flex-1 overflow-y-auto relative">
        <div className="nebula-bg opacity-30" />

        {/* Jurisdiction Health Ticker */}
        <div className="h-8 bg-black/60 border-b border-white/5 flex items-center px-8 z-20 overflow-hidden">
          <div className="flex items-center gap-8 whitespace-nowrap animate-marquee">
            {[
              { c: '🇮🇳 India', s: 'Compliant', d: 'GSTN Active' },
              { c: '🇪🇺 EU', s: 'Compliant', d: 'VAT OSS Verified' },
              { c: '🇺🇸 USA', s: 'Compliant', d: 'Nexus Tracked' },
              { c: '🇬🇧 UK', s: 'Compliant', d: 'HMRC Linked' },
              { c: '🇸🇬 Singapore', s: 'Compliant', d: 'MAS Ready' },
              { c: '🇦🇪 UAE', s: 'Compliant', d: 'FTA Active' },
            ].map((j, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-[9px] font-bold uppercase tracking-widest">{j.c}</span>
                <div className="w-1 h-1 rounded-full bg-emerald-500" />
                <span className="text-[9px] text-emerald-500 font-mono uppercase">{j.s}</span>
                <span className="text-[9px] opacity-30 font-mono">[{j.d}]</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 relative z-10">
          <header className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight mb-2">Compliance Command Center</h1>
            <p className="text-zinc-400">Legal & Regulatory Oversight across 47 jurisdictions</p>
          </header>

        {/* Hero Banner */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 bg-[#141417] border border-white/5 rounded-2xl p-8 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none"></div>
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <h2 className="text-zinc-400 text-sm font-medium uppercase tracking-widest mb-4">Compliance Score</h2>
                <div className="flex items-baseline gap-2 mb-6">
                  <NumberCounter value={98.7} precision={1} suffix="%" className="text-6xl font-bold text-[#F5C842]" />
                  <span className="text-emerald-500 text-sm font-medium">▲ 0.4% from last month</span>
                </div>
                <div className="space-y-2">
                  <p className="text-zinc-300 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    You are compliant in 34 of 47 monitored jurisdictions
                  </p>
                  <p className="text-zinc-500 text-sm flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-500" />
                    9 require attention · 4 under review
                  </p>
                </div>
              </div>
              
              <div className="relative w-48 h-48">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="96"
                    cy="96"
                    r="80"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="transparent"
                    className="text-white/5"
                  />
                  <motion.circle
                    cx="96"
                    cy="96"
                    r="80"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="transparent"
                    strokeDasharray={502.6}
                    initial={{ strokeDashoffset: 502.6 }}
                    animate={{ strokeDashoffset: 502.6 * (1 - 0.987) }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="text-[#F5C842]"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <ShieldCheck className="w-12 h-12 text-[#F5C842]" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-[#141417] border border-white/5 rounded-2xl p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold mb-4">Audit Package Generator</h3>
              <p className="text-zinc-400 text-sm mb-6">
                Generate a comprehensive PDF audit pack with all transactions, GST treatments, and blockchain hashes.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="bg-black/20 border border-white/5 rounded-lg p-3">
                  <label className="text-[10px] uppercase text-zinc-500 block mb-1">Date Range</label>
                  <select className="bg-transparent text-sm w-full outline-none">
                    <option>Last 30 Days</option>
                    <option>Q1 2024</option>
                    <option>FY 2023-24</option>
                  </select>
                </div>
                <div className="bg-black/20 border border-white/5 rounded-lg p-3">
                  <label className="text-[10px] uppercase text-zinc-500 block mb-1">Jurisdiction</label>
                  <select className="bg-transparent text-sm w-full outline-none">
                    <option>All Jurisdictions</option>
                    <option>India (GST/FEMA)</option>
                    <option>EU (VAT OSS)</option>
                  </select>
                </div>
              </div>
            </div>

            <button 
              onClick={handleGenerateAudit}
              disabled={isGenerating}
              className="w-full py-4 bg-[#F5C842] text-black font-bold rounded-xl hover:bg-[#E5B832] transition-colors flex items-center justify-center gap-2"
            >
              {isGenerating ? (
                <>
                  <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                  Generating...
                </>
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  Generate Audit Package
                </>
              )}
            </button>
          </motion.div>
        </section>

        {/* Jurisdiction Grid & Map */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 bg-[#141417] border border-white/5 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Globe className="w-5 h-5 text-zinc-500" />
                Global Jurisdiction Map
              </h3>
              <div className="flex gap-4 text-xs">
                <span className="flex items-center gap-1.5 text-emerald-500"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> Compliant</span>
                <span className="flex items-center gap-1.5 text-amber-500"><div className="w-2 h-2 rounded-full bg-amber-500"></div> Action Required</span>
                <span className="flex items-center gap-1.5 text-blue-500"><div className="w-2 h-2 rounded-full bg-blue-500"></div> Monitoring</span>
              </div>
            </div>
            
            <div className="aspect-[2/1] bg-black/20 rounded-xl relative overflow-hidden flex items-center justify-center">
              {/* Simplified World Map SVG Placeholder */}
              <svg viewBox="0 0 800 400" className="w-full h-full opacity-40">
                <path d="M150,100 Q200,80 250,120 T350,100 T450,150 T550,120 T650,180 T750,150" fill="none" stroke="#333" strokeWidth="2" />
                {/* Random dots representing jurisdictions */}
                <circle cx="200" cy="150" r="6" fill="#10b981" />
                <circle cx="450" cy="180" r="6" fill="#10b981" />
                <circle cx="600" cy="120" r="6" fill="#f59e0b" />
                <circle cx="350" cy="250" r="6" fill="#3b82f6" />
                <circle cx="520" cy="220" r="6" fill="#10b981" />
                <circle cx="120" cy="280" r="6" fill="#10b981" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <p className="text-zinc-600 font-mono text-xs uppercase tracking-[0.2em]">Interactive Map Visualization</p>
              </div>
            </div>
          </div>

          <div className="bg-[#141417] border border-white/5 rounded-2xl p-6 flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Upcoming Deadlines</h3>
            <div className="space-y-4 flex-1">
              <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-amber-500 text-xs font-bold uppercase tracking-wider">⚠️ 12 Days</span>
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                </div>
                <p className="text-sm font-medium mb-1">IGST Return GSTR-1 Due</p>
                <p className="text-xs text-zinc-500">Jurisdiction: India</p>
              </div>
              
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-emerald-500 text-xs font-bold uppercase tracking-wider">✅ 28 Days</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
                <p className="text-sm font-medium mb-1">GSTR-3B Filing</p>
                <p className="text-xs text-zinc-500">Jurisdiction: India</p>
              </div>

              <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-blue-500 text-xs font-bold uppercase tracking-wider">ℹ️ 43 Days</span>
                  <Info className="w-4 h-4 text-blue-500" />
                </div>
                <p className="text-sm font-medium mb-1">Annual FEMA Form FC-GPR</p>
                <p className="text-xs text-zinc-500">Jurisdiction: India</p>
              </div>
            </div>
          </div>
        </section>

        {/* Priority Panels */}
        <section className="space-y-6">
          {/* India Panel */}
          <motion.div 
            whileHover={{ y: -3 }}
            className="bg-[#141417] border border-white/5 rounded-2xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-[#F5C842]/20 to-transparent p-6 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-3xl">🇮🇳</span>
                <div>
                  <h3 className="text-xl font-bold">INDIA — GST & FEMA COMPLIANCE CENTER</h3>
                  <p className="text-zinc-500 text-xs uppercase tracking-widest">Priority Jurisdiction</p>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-500 rounded-full text-[10px] font-bold uppercase tracking-wider border border-emerald-500/20">Active</span>
                <span className="px-3 py-1 bg-white/5 text-zinc-400 rounded-full text-[10px] font-bold uppercase tracking-wider border border-white/10">Federal Bank AD</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
              <div>
                <h4 className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                  <div className="w-1 h-4 bg-[#F5C842]"></div>
                  GST Status
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-black/20 rounded-xl border border-white/5">
                    <div>
                      <p className="text-xs text-zinc-500 mb-1">GSTIN</p>
                      <p className="font-mono text-sm">27AABCU9603R1ZX</p>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-black/20 rounded-xl border border-white/5">
                    <div>
                      <p className="text-xs text-zinc-500 mb-1">LUT Bond</p>
                      <p className="text-sm">Active (Expires Dec 31, 2026)</p>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-black/20 rounded-xl border border-white/5">
                    <div>
                      <p className="text-xs text-zinc-500 mb-1">IGST Refund Pending</p>
                      <p className="text-lg font-bold text-[#F5C842]">₹2,84,200</p>
                    </div>
                    <button className="text-xs text-[#F5C842] hover:underline flex items-center gap-1">
                      Track Status <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-black/20 rounded-xl border border-white/5">
                    <div>
                      <p className="text-xs text-zinc-500 mb-1">e-Invoice</p>
                      <p className="text-sm">Enabled (IRN auto-generated)</p>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                  <div className="w-1 h-4 bg-[#F5C842]"></div>
                  FEMA / RBI Status
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-black/20 rounded-xl border border-white/5">
                    <div>
                      <p className="text-xs text-zinc-500 mb-1">EDPMS Reports Filed</p>
                      <p className="text-sm font-bold">847 this year</p>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-amber-500/5 rounded-xl border border-amber-500/10">
                    <div>
                      <p className="text-xs text-zinc-500 mb-1">Pending Repatriation</p>
                      <p className="text-lg font-bold text-amber-500">$12,400 USD</p>
                      <p className="text-[10px] text-amber-500/60 uppercase">Oldest: 180 days (Deadline: 9 months)</p>
                    </div>
                    <button className="p-2 bg-amber-500/20 text-amber-500 rounded-lg hover:bg-amber-500/30 transition-colors">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-black/20 rounded-xl border border-white/5">
                    <div>
                      <p className="text-xs text-zinc-500 mb-1">AD Bank</p>
                      <p className="text-sm">Federal Bank (Primary)</p>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* EU Panel */}
          <motion.div 
            whileHover={{ y: -3 }}
            className="bg-[#141417] border border-white/5 rounded-2xl overflow-hidden opacity-80"
          >
            <div className="bg-gradient-to-r from-blue-500/10 to-transparent p-6 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-3xl">🇪🇺</span>
                <div>
                  <h3 className="text-xl font-bold">EU VAT OSS PANEL</h3>
                  <p className="text-zinc-500 text-xs uppercase tracking-widest">Secondary Jurisdiction</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-white/5 text-zinc-400 rounded-full text-[10px] font-bold uppercase tracking-wider border border-white/10">Monitoring</span>
            </div>
            <div className="p-8 flex items-center justify-center text-zinc-500 italic text-sm">
              VAT OSS reporting is currently in monitoring mode. No immediate actions required.
            </div>
          </motion.div>
        </section>
        </div>
      </main>
    </div>
  );
}
