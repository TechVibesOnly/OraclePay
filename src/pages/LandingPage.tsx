import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Zap, 
  Cpu, 
  Play,
  Hexagon,
  Layers,
  Network,
  Scale,
  Activity,
  CreditCard,
  LayoutDashboard,
  Plug,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Masonry from 'react-masonry-css';
import { Counter, FloatingCard, Badge } from '../components/UI';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  const [init, setInit] = useState(false);
  const [isAnnual, setIsAnnual] = useState(true);
  const [settledAmount, setSettledAmount] = useState(241200842);

  useEffect(() => {
    const interval = setInterval(() => {
      setSettledAmount(prev => prev + Math.floor(Math.random() * 1000) + 100);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = useMemo(() => ({
    background: { color: { value: "transparent" } },
    fpsLimit: 120,
    interactivity: {
      events: { onHover: { enable: true, mode: "grab" } },
      modes: { grab: { distance: 140, links: { opacity: 0.5 } } },
    },
    particles: {
      color: { value: ["#D4AF37", "#8B5CF6"] },
      links: { color: "#D4AF37", distance: 150, enable: true, opacity: 0.1, width: 1 },
      move: { direction: "none" as const, enable: true, outModes: { default: "bounce" as const }, speed: 0.6 },
      number: { density: { enable: true, area: 800 }, value: 80 },
      opacity: { value: 0.3 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  }), []);

  const features = [
    {
      icon: <Network className="text-oracle-gold" size={28} />,
      name: "OracleChain",
      description: "Cosmos SDK blockchain settlement. 2.3s finality. IBC atomic swaps.",
      element: <div className="flex items-center gap-2 mt-4">
        <div className="w-3 h-3 rounded bg-oracle-gold animate-pulse" />
        <span className="text-[10px] font-mono opacity-50">BLOCK #842,091 CONFIRMED</span>
      </div>
    },
    {
      icon: <Cpu className="text-oracle-gold" size={28} />,
      name: "OracleMind AI",
      description: "94.3% FX prediction accuracy at 48h. GPT-class model on $F data.",
      element: <div className="flex gap-1 mt-4 h-8 items-end">
        {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
          <motion.div 
            key={i}
            animate={{ height: [`${h}%`, `${h+10}%`, `${h}%`] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
            className="w-1 bg-oracle-gold/40 rounded-full"
          />
        ))}
      </div>
    },
    {
      icon: <Scale className="text-oracle-gold" size={28} />,
      name: "OracleCompliance",
      description: "47 jurisdictions. Live RBI + GSTN + EU VAT OSS integration.",
      element: <div className="flex items-center gap-2 mt-4 overflow-hidden">
        {['🇮🇳', '🇺🇸', '🇪🇺', '🇬🇧', '🇸🇬'].map((f, i) => (
          <motion.span 
            key={i}
            animate={{ x: [0, -100, 0] }}
            transition={{ duration: 10, repeat: Infinity, delay: i * 1 }}
            className="text-lg"
          >
            {f}
          </motion.span>
        ))}
      </div>
    },
    {
      icon: <Plug className="text-oracle-gold" size={28} />,
      name: "OraclePlugin",
      description: "One-click Shopify + WooCommerce install. OAuth 2.0.",
      element: <div className="flex gap-4 mt-4 opacity-50 grayscale hover:grayscale-0 transition-all">
        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Shopify_logo.svg" className="h-5" alt="Shopify" referrerPolicy="no-referrer" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/WooCommerce_logo.svg" className="h-5" alt="WooCommerce" referrerPolicy="no-referrer" />
      </div>
    },
    {
      icon: <CreditCard className="text-oracle-gold" size={28} />,
      name: "OracleWallet",
      description: "32 currencies. Instant UPI, SEPA, ACH disbursement.",
      element: <div className="flex gap-2 mt-4">
        {['₹', '$', '€', '£', '¥'].map((c, i) => (
          <span key={i} className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px]">{c}</span>
        ))}
      </div>
    },
    {
      icon: <LayoutDashboard className="text-oracle-gold" size={28} />,
      name: "OracleDash",
      description: "360° merchant financial health dashboard. Salesforce-grade CRM.",
      element: <div className="mt-4 h-8 w-full bg-white/5 rounded relative overflow-hidden">
        <motion.div 
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-oracle-gold/20 to-transparent"
        />
      </div>
    }
  ];

  const pricing = [
    { name: "Starter", price: 0, features: ["Up to $10k GMV", "5 Jurisdictions", "Standard Support"] },
    { name: "Growth", price: 99, features: ["Up to $250k GMV", "47 Jurisdictions", "Priority AI Oracles", "Custom Integrations"], popular: true },
    { name: "Enterprise", price: 999, features: ["Unlimited GMV", "Global Compliance", "Dedicated Node", "24/7 Concierge"] }
  ];

  return (
    <div className="relative min-h-screen oracle-grid">
      <div className="scanline" />
      <div className="nebula-bg" />
      <div className="hex-grid" />
      
      {init && <Particles id="tsparticles" options={particlesOptions} className="absolute inset-0 z-0 pointer-events-none" />}

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-2">
          <Hexagon className="text-oracle-gold fill-oracle-gold/20" size={32} />
          <span className="font-syne font-bold text-2xl tracking-tighter uppercase">ORACLE<span className="text-oracle-gold">PAY</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium opacity-70">
          <a href="#features" className="hover:text-oracle-gold transition-colors">Oracles</a>
          <a href="#india" className="hover:text-oracle-gold transition-colors">India</a>
          <a href="#pricing" className="hover:text-oracle-gold transition-colors">Pricing</a>
          <Link to="/login" className="hover:text-oracle-gold transition-colors">Login</Link>
          <Link to="/onboarding" className="px-5 py-2 rounded-full border border-oracle-gold/30 text-sm font-medium hover:bg-oracle-gold hover:text-black transition-all">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6 flex flex-col items-center text-center z-10 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-oracle-gold/10 border border-oracle-gold/20 text-oracle-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-8"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-oracle-gold animate-pulse" />
          Series A Ready · Enterprise Grade
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2 }} 
          className="text-6xl md:text-9xl font-syne font-extrabold tracking-tighter leading-[0.85] mb-8 uppercase"
        >
          The <span className="text-oracle-gold">Gravity</span> of <br />
          Global Money.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.3 }} 
          className="font-syne text-lg md:text-xl text-text-secondary max-w-2xl mb-12 leading-relaxed"
        >
          OraclePay connects your Shopify or WooCommerce store to blockchain-powered settlement, AI exchange rates, and automated GST-VAT compliance.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-16 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-oracle-gold/20 to-purple-600/20 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-1000" />
          <div className="relative">
            <div className="text-[10px] font-bold opacity-30 uppercase tracking-[0.4em] mb-4">Total Value Settled (Live)</div>
            <div className="text-4xl md:text-6xl font-serif text-oracle-gold">
              $<Counter value={settledAmount} decimals={0} />.00
            </div>
            <div className="mt-4 flex items-center justify-center gap-4 text-[10px] font-bold opacity-50 uppercase tracking-widest">
              <span>Nodes: 1,240</span>
              <div className="w-1 h-1 rounded-full bg-white/20" />
              <span>Uptime: 99.99%</span>
              <div className="w-1 h-1 rounded-full bg-white/20" />
              <span>TPS: 12,400</span>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Link to="/onboarding" className="h-[52px] px-8 rounded-xl bg-oracle-gold text-black font-bold text-lg hover:scale-105 transition-transform oracle-glow flex items-center justify-center">Start Free — No Card Required</Link>
          <button className="h-[52px] px-8 rounded-xl border border-oracle-gold text-oracle-gold font-bold text-lg flex items-center gap-2 hover:bg-oracle-gold/5 transition-colors">Watch Demo <Play size={18} fill="currentColor" /></button>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 border-y border-oracle-gold/30 bg-black/40 backdrop-blur-xl py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "TAM in cross-border e-commerce", value: 2.1, prefix: "$", suffix: "T" },
            { label: "vs 3–6% bank fees", value: 1.2, suffix: "%" },
            { label: "average settlement time", value: 2.3, suffix: "s" },
            { label: "jurisdictions monitored", value: 47, suffix: "" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="font-serif text-4xl md:text-5xl text-oracle-gold mb-2"><Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} decimals={stat.value % 1 !== 0 ? 1 : 0} /></div>
              <div className="text-[10px] uppercase tracking-[0.2em] opacity-50">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-syne font-bold text-4xl md:text-5xl mb-4">One platform. Six oracle layers.</h2>
        </div>
        <Masonry breakpointCols={{ default: 3, 1100: 2, 700: 1 }} className="flex -ml-6 w-auto" columnClassName="pl-6 bg-clip-padding">
          {features.map((f, i) => (
            <FloatingCard key={i} delay={i * 0.1} className="p-8 mb-6">
              <div className="mb-6 gold-shadow">{f.icon}</div>
              <h3 className="font-syne font-bold text-xl mb-3">{f.name}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{f.description}</p>
              {f.element}
            </FloatingCard>
          ))}
        </Masonry>
      </section>

      {/* India Section */}
      <section id="india" className="relative z-10 py-32 px-6 overflow-hidden">
        <div className="india-silhouette absolute inset-0 z-0" />
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-serif text-5xl md:text-7xl mb-8 text-gradient-saffron">
              India's most complex tax problem. <br /> Solved automatically.
            </h2>
            <p className="text-text-secondary text-xl mb-12">
              From FEMA compliance to GSTN reconciliation, OraclePay handles the heavy lifting so you can focus on global growth.
            </p>
            <div className="space-y-6">
              {[
                { title: "GSTN Reconciliation", desc: "Automatic GSTR-1 and GSTR-3B data preparation." },
                { title: "FEMA Compliance", desc: "Real-time monitoring of outward remittances and export proceeds." },
                { title: "RBI Reporting", desc: "Automated BRC/FIRC generation for every transaction." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle2 className="text-oracle-gold shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-text-secondary">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <FloatingCard className="p-0 overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="p-6 font-syne uppercase tracking-widest text-[10px]">Feature</th>
                  <th className="p-6 font-syne uppercase tracking-widest text-[10px]">Legacy Bank</th>
                  <th className="p-6 font-syne uppercase tracking-widest text-[10px] text-oracle-gold">OraclePay</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { f: "Settlement", l: "T+3 to T+7", o: "Instant (2.3s)" },
                  { f: "Fees", l: "3.5% - 6%", o: "1.2% Flat" },
                  { f: "GST Filing", l: "Manual", o: "Automated" },
                  { f: "FX Markup", l: "High (2% - 4%)", o: "Mid-market (AI)" }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="p-6 font-medium">{row.f}</td>
                    <td className="p-6 opacity-50">{row.l}</td>
                    <td className="p-6 text-oracle-gold font-bold">{row.o}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </FloatingCard>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative z-10 py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-syne font-bold text-4xl md:text-5xl mb-8">Simple, transparent pricing.</h2>
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm ${!isAnnual ? 'text-white' : 'text-text-secondary'}`}>Monthly</span>
            <button onClick={() => setIsAnnual(!isAnnual)} className="w-12 h-6 rounded-full bg-white/10 relative p-1 transition-colors">
              <motion.div animate={{ x: isAnnual ? 24 : 0 }} className="w-4 h-4 rounded-full bg-oracle-gold" />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-white' : 'text-text-secondary'}`}>Annual <Badge variant="green">20% OFF</Badge></span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricing.map((p, i) => (
            <FloatingCard key={i} className={`p-10 flex flex-col ${p.popular ? 'border-oracle-gold ring-1 ring-oracle-gold/50 scale-105 z-10' : ''}`}>
              {p.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-oracle-gold text-black text-[10px] font-bold rounded-full">MOST POPULAR</div>}
              <h3 className="text-xl font-bold mb-2">{p.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-serif">${isAnnual ? Math.floor(p.price * 0.8) : p.price}</span>
                <span className="text-text-secondary text-sm">/mo</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {p.features.map((f, j) => (
                  <li key={j} className="flex gap-3 text-sm text-text-secondary">
                    <CheckCircle2 size={16} className="text-oracle-gold shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-bold transition-all ${p.popular ? 'bg-oracle-gold text-black oracle-glow' : 'bg-white/5 border border-white/10 hover:bg-white/10'}`}>
                Get Started
              </button>
            </FloatingCard>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-20 px-6 border-t border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Hexagon className="text-oracle-gold fill-oracle-gold/20" size={24} />
              <span className="font-syne font-bold text-xl tracking-tighter uppercase">ORACLE<span className="text-oracle-gold">PAY</span></span>
            </div>
            <p className="text-text-secondary max-w-md mb-8">The world's first decentralized commerce oracle. Built for the next billion merchants who demand instant global settlement without the legacy tax.</p>
          </div>
          <div>
            <h4 className="font-syne font-bold mb-6 uppercase text-xs tracking-widest">Platform</h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li><a href="#" className="hover:text-oracle-gold transition-colors">Settlement Rails</a></li>
              <li><a href="#" className="hover:text-oracle-gold transition-colors">AI Oracles</a></li>
              <li><a href="#" className="hover:text-oracle-gold transition-colors">Compliance Engine</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-syne font-bold mb-6 uppercase text-xs tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li><a href="#" className="hover:text-oracle-gold transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-oracle-gold transition-colors">Security Audit</a></li>
              <li><a href="#" className="hover:text-oracle-gold transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-white/5 pt-12">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] uppercase tracking-[0.3em] opacity-30 mb-8">
            {['Mumbai', 'Dubai', 'Singapore', 'London', 'Frankfurt', 'São Paulo', 'New York', 'Tokyo', 'Lagos', 'Nairobi', 'Jakarta', 'Sydney'].map(city => (
              <span key={city}>{city}</span>
            ))}
          </div>
          <div className="flex justify-between items-center text-[10px] uppercase tracking-widest opacity-20">
            <span>© 2026 OraclePay Protocol</span>
            <span>Built on Ethereum · Secured by Chainlink</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
