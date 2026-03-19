import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Hexagon, ArrowRight, Mail, Chrome, ShoppingBag } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { NumberCounter } from '../components/NumberCounter';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/onboarding');
  };

  return (
    <div className="flex h-screen bg-[#0A0A0B] text-white overflow-hidden font-sans">
      {/* Left Panel - 45% */}
      <div className="hidden lg:flex lg:w-[45%] bg-black relative flex-col justify-between p-12 overflow-hidden border-r border-white/5">
        <div className="nebula-bg opacity-40" />
        
        <Link to="/" className="relative z-10 flex items-center gap-3">
          <Hexagon className="text-[#F5C842] fill-[#F5C842]/20" size={40} />
          <span className="font-syne font-bold text-3xl tracking-tighter uppercase">ORACLE<span className="text-[#F5C842]">PAY</span></span>
        </Link>

        <div className="relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold font-syne tracking-tighter leading-tight mb-6"
          >
            The Intelligence Layer for <span className="text-[#F5C842]">Global Commerce.</span>
          </motion.h1>
          <p className="text-zinc-400 text-lg max-w-md">
            Join 12,000+ high-growth merchants using OraclePay to automate cross-border settlements and compliance.
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-3 gap-8">
          <div>
            <div className="text-3xl font-bold text-[#F5C842] font-mono mb-1">
              <NumberCounter value={842} suffix="M+" />
            </div>
            <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">GMV Processed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#F5C842] font-mono mb-1">
              <NumberCounter value={2} precision={1} suffix="s" />
            </div>
            <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Avg Settlement</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#F5C842] font-mono mb-1">
              <NumberCounter value={47} />
            </div>
            <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Jurisdictions</div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F5C842]/5 blur-[120px] rounded-full -mr-48 -mb-48" />
      </div>

      {/* Right Panel - 55% */}
      <div className="w-full lg:w-[55%] flex items-center justify-center p-8 bg-[#0A0A0B]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md"
        >
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-2">Welcome back</h2>
            <p className="text-zinc-500">Enter your details to access your merchant dashboard.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-600" />
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-[#F5C842] transition-colors"
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-[#F5C842] text-black font-bold rounded-xl hover:bg-[#E5B832] transition-all flex items-center justify-center gap-2 group"
            >
              Continue with Email
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/5"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase tracking-widest">
              <span className="bg-[#0A0A0B] px-4 text-zinc-600 font-bold">or</span>
            </div>
          </div>

          <div className="space-y-4">
            <button className="w-full py-4 bg-white/5 border border-white/10 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-white/10 transition-colors">
              <Chrome className="w-5 h-5" />
              Continue with Google
            </button>
            <button className="w-full py-4 bg-[#96bf48]/10 border border-[#96bf48]/20 text-[#96bf48] rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-[#96bf48]/20 transition-colors">
              <ShoppingBag className="w-5 h-5" />
              Connect Shopify Store
            </button>
          </div>

          <p className="mt-10 text-center text-sm text-zinc-500">
            Don't have an account? <Link to="/onboarding" className="text-[#F5C842] font-bold hover:underline">Start free trial</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
