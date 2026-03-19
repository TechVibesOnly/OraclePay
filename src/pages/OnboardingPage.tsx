import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Hexagon, 
  ArrowRight, 
  ArrowLeft, 
  Building2, 
  Globe, 
  ShoppingBag, 
  ShieldCheck, 
  CheckCircle2,
  Zap,
  Sparkles
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';

const steps = [
  { id: 1, title: 'Business Details', icon: Building2 },
  { id: 2, title: 'Connect Store', icon: ShoppingBag },
  { id: 3, title: 'Compliance Setup', icon: Globe },
  { id: 4, title: 'Go Live', icon: Zap },
];

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: '',
    country: 'India',
    businessType: 'Private Limited',
    storeUrl: '',
    gstin: '',
  });
  const navigate = useNavigate();

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
      if (currentStep === 3) {
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#F5C842', '#ffffff', '#a855f7']
        });
      }
    } else {
      navigate('/dashboard');
    }
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white font-sans flex flex-col">
      {/* Header */}
      <header className="p-8 flex items-center justify-between border-b border-white/5 bg-black/40 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <Hexagon className="text-[#F5C842] fill-[#F5C842]/20" size={32} />
          <span className="font-syne font-bold text-2xl tracking-tighter uppercase">ORACLE<span className="text-[#F5C842]">PAY</span></span>
        </div>
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-4">
            {steps.map((step) => (
              <div key={step.id} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                  currentStep >= step.id ? 'bg-[#F5C842] text-black' : 'bg-white/5 text-zinc-500 border border-white/10'
                }`}>
                  {currentStep > step.id ? <CheckCircle2 className="w-5 h-5" /> : step.id}
                </div>
                <span className={`text-xs font-bold uppercase tracking-widest ${
                  currentStep >= step.id ? 'text-white' : 'text-zinc-600'
                }`}>
                  {step.title}
                </span>
                {step.id < 4 && <div className="w-8 h-px bg-white/5 mx-2" />}
              </div>
            ))}
          </div>
          <button onClick={() => navigate('/login')} className="text-xs font-bold text-zinc-500 hover:text-white transition-colors">Save & Exit</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-8 relative overflow-hidden">
        <div className="nebula-bg opacity-20" />
        
        <div className="w-full max-w-2xl relative z-10">
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-4xl font-bold font-syne tracking-tighter mb-4">Tell us about your <span className="text-[#F5C842]">Business.</span></h2>
                  <p className="text-zinc-400">We'll use this to configure your regional compliance engine.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Company Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Acme Corp"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-[#F5C842] transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Country of Incorporation</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-[#F5C842] transition-colors appearance-none">
                      <option>India</option>
                      <option>United States</option>
                      <option>United Kingdom</option>
                      <option>Singapore</option>
                      <option>UAE</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Business Type</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-[#F5C842] transition-colors appearance-none">
                      <option>Private Limited</option>
                      <option>Proprietorship</option>
                      <option>LLP</option>
                      <option>Public Limited</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Annual Export Volume (Est.)</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-[#F5C842] transition-colors appearance-none">
                      <option>Under $100k</option>
                      <option>$100k - $1M</option>
                      <option>$1M - $10M</option>
                      <option>$10M+</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (currentStep === 2) && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-4xl font-bold font-syne tracking-tighter mb-4">Connect your <span className="text-[#F5C842]">Storefront.</span></h2>
                  <p className="text-zinc-400">OraclePay syncs with your store to automate invoicing and IGST refunds.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button className="p-6 bg-white/5 border-2 border-[#F5C842] rounded-2xl flex flex-col items-center gap-4 text-center group transition-all">
                    <div className="w-16 h-16 bg-[#96bf48]/10 rounded-2xl flex items-center justify-center border border-[#96bf48]/20">
                      <ShoppingBag className="w-8 h-8 text-[#96bf48]" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Shopify</h3>
                      <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Recommended</p>
                    </div>
                  </button>
                  <button className="p-6 bg-white/5 border-2 border-transparent hover:border-white/10 rounded-2xl flex flex-col items-center gap-4 text-center group transition-all">
                    <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center border border-purple-500/20">
                      <ShoppingBag className="w-8 h-8 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">WooCommerce</h3>
                      <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Plugin Required</p>
                    </div>
                  </button>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Store URL</label>
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      placeholder="your-store.myshopify.com"
                      className="flex-1 bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-[#F5C842] transition-colors"
                    />
                    <button className="px-8 bg-white/10 border border-white/10 rounded-xl font-bold text-sm hover:bg-white/20 transition-colors">Verify</button>
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-4xl font-bold font-syne tracking-tighter mb-4">Compliance <span className="text-[#F5C842]">Automation.</span></h2>
                  <p className="text-zinc-400">Configure your RBI/FEMA and GST settings for automated reporting.</p>
                </div>

                <div className="space-y-6">
                  <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-start gap-6">
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center border border-emerald-500/20 shrink-0">
                      <ShieldCheck className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold mb-2">GSTIN Validation</h3>
                      <div className="flex gap-2">
                        <input 
                          type="text" 
                          placeholder="Enter 15-digit GSTIN"
                          className="flex-1 bg-black/40 border border-white/10 rounded-lg py-2 px-4 text-sm font-mono focus:outline-none focus:border-[#F5C842]"
                        />
                        <button className="px-4 py-2 bg-emerald-500 text-black rounded-lg font-bold text-xs">Validate</button>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-start gap-6">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center border border-blue-500/20 shrink-0">
                      <Globe className="w-6 h-6 text-blue-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold mb-2">LUT Bond Status</h3>
                      <p className="text-xs text-zinc-500 mb-4">Required for 0% IGST export settlements.</p>
                      <div className="flex items-center gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="lut" className="accent-[#F5C842]" />
                          <span className="text-sm">I have an active LUT</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="lut" className="accent-[#F5C842]" />
                          <span className="text-sm">Help me apply for LUT</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 4 && (
              <motion.div 
                key="step4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-8"
              >
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-[#F5C842]/20 blur-3xl rounded-full" />
                  <div className="relative w-32 h-32 bg-gradient-to-br from-[#F5C842] to-[#E5B832] rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(245,200,66,0.3)]">
                    <Sparkles className="w-16 h-16 text-black" />
                  </div>
                </div>

                <div>
                  <h2 className="text-5xl font-bold font-syne tracking-tighter mb-4">You're ready to <span className="text-[#F5C842]">Scale.</span></h2>
                  <p className="text-zinc-400 text-lg max-w-md mx-auto">
                    Your account is configured. OracleMind AI is now monitoring 47 jurisdictions for your store.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 max-w-sm mx-auto space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zinc-500">AI Model Status</span>
                    <span className="text-emerald-500 font-bold">Active</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zinc-500">Compliance Sync</span>
                    <span className="text-emerald-500 font-bold">100%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zinc-500">Settlement Route</span>
                    <span className="text-blue-500 font-bold">Optimized</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Footer Controls */}
          <div className="mt-12 flex items-center justify-between pt-8 border-t border-white/5">
            <button 
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`flex items-center gap-2 text-sm font-bold transition-colors ${
                currentStep === 1 ? 'text-zinc-700 cursor-not-allowed' : 'text-zinc-400 hover:text-white'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
            <button 
              onClick={nextStep}
              className="px-10 py-4 bg-[#F5C842] text-black font-bold rounded-xl hover:bg-[#E5B832] transition-all flex items-center gap-2 shadow-[0_0_30px_rgba(245,200,66,0.2)]"
            >
              {currentStep === 4 ? 'Enter Dashboard' : 'Continue'}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
