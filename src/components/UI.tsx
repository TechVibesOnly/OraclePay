import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useTransform, animate, useMotionValue } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ArrowLeftRight, 
  CreditCard, 
  Globe, 
  BarChart3, 
  Zap, 
  Settings, 
  Users, 
  Plug, 
  Search, 
  Hexagon,
  Activity
} from 'lucide-react';

export const SidebarItem = ({ icon: Icon, label, active = false, to = "/dashboard" }: { icon: any, label: string, active?: boolean, to?: string }) => (
  <Link to={to} className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-all border-l-2 ${active ? 'border-oracle-gold text-oracle-gold bg-oracle-gold/5' : 'border-transparent text-text-secondary hover:text-white hover:bg-white/5'}`}>
    <Icon size={18} />
    <span className="text-sm font-medium">{label}</span>
  </Link>
);

export const Sidebar = ({ active }: { active: string }) => {
  return (
    <aside className="w-[260px] border-r border-white/5 flex flex-col z-20 bg-black h-screen sticky top-0">
      <Link to="/" className="p-6 flex items-center gap-2 mb-8">
        <Hexagon className="text-oracle-gold fill-oracle-gold/20" size={28} />
        <span className="font-syne font-bold text-xl tracking-tighter uppercase">ORACLE<span className="text-oracle-gold">PAY</span></span>
      </Link>

      <div className="px-4 mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 opacity-30" size={14} />
          <input 
            type="text" 
            placeholder="Cmd+K to search" 
            className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-9 pr-4 text-xs focus:outline-none focus:border-oracle-gold/50 transition-colors"
          />
        </div>
      </div>

      <div className="flex-grow overflow-y-auto">
        <div className="px-6 py-2 text-[10px] font-bold opacity-30 uppercase tracking-widest">Overview</div>
        <SidebarItem icon={LayoutDashboard} label="Dashboard" active={active === 'dashboard'} to="/dashboard" />
        <SidebarItem icon={ArrowLeftRight} label="Transactions" active={active === 'transactions'} to="/dashboard/transactions" />
        <SidebarItem icon={CreditCard} label="Wallet" active={active === 'wallet'} to="/dashboard/wallet" />
        <SidebarItem icon={Globe} label="Compliance" active={active === 'compliance'} to="/dashboard/compliance" />

        <div className="px-6 py-4 text-[10px] font-bold opacity-30 uppercase tracking-widest">Analytics</div>
        <SidebarItem icon={BarChart3} label="Analytics" active={active === 'analytics'} to="/dashboard/analytics" />
        <SidebarItem icon={Zap} label="FX Predictions" active={active === 'fx'} to="/dashboard/analytics" />
        <SidebarItem icon={Activity} label="Performance" active={active === 'performance'} to="/dashboard/analytics" />

        <div className="px-6 py-4 text-[10px] font-bold opacity-30 uppercase tracking-widest">Settings</div>
        <SidebarItem icon={Plug} label="Integrations" active={active === 'integrations'} to="/dashboard/settings/integrations" />
        <SidebarItem icon={Users} label="Team" active={active === 'team'} to="/dashboard/settings/integrations" />
        <SidebarItem icon={Settings} label="Settings" active={active === 'settings'} to="/dashboard/settings/integrations" />
      </div>

      <div className="p-4 mt-auto">
        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] font-bold opacity-50">CURRENT PLAN</span>
            <Badge variant="gold">Growth</Badge>
          </div>
          <div className="text-sm font-bold mb-3">$99/mo</div>
          <button className="w-full py-2 rounded-lg bg-oracle-gold text-black text-xs font-bold hover:scale-105 transition-transform">
            Upgrade Plan
          </button>
        </div>
      </div>
    </aside>
  );
};

export const Counter = ({ value, duration = 2, prefix = '', suffix = '', decimals = 0 }: { value: number, duration?: number, prefix?: string, suffix?: string, decimals?: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    return prefix + latest.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix;
  });
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const controls = animate(count, value, { duration, ease: "easeOut" });
    return () => controls.stop();
  }, [value, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

export const FloatingCard = ({ children, className = '', delay = 0, ...props }: { children: React.ReactNode, className?: string, delay?: number, [key: string]: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -3 }}
      className={`oracle-card ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const Badge = ({ children, variant = 'gold' }: { children: React.ReactNode, variant?: 'gold' | 'green' | 'amber' | 'blue' }) => {
  const variants = {
    gold: 'bg-oracle-gold/10 border-oracle-gold/20 text-oracle-gold',
    green: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500',
    amber: 'bg-amber-500/10 border-amber-500/20 text-amber-500',
    blue: 'bg-blue-500/10 border-blue-500/20 text-blue-500',
  };

  return (
    <span className={`px-2 py-0.5 rounded-full border text-[10px] font-bold uppercase tracking-wider ${variants[variant]}`}>
      {children}
    </span>
  );
};

export const Modal = ({ isOpen, onClose, title, children }: { isOpen: boolean, onClose: () => void, title: string, children: React.ReactNode }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="oracle-card w-full max-w-md p-8 bg-bg-deep border-oracle-gold/30"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-syne font-bold text-xl">{title}</h3>
          <button onClick={onClose} className="text-text-secondary hover:text-white">✕</button>
        </div>
        {children}
      </motion.div>
    </div>
  );
};

export const Drawer = ({ isOpen, onClose, title, children }: { isOpen: boolean, onClose: () => void, title: string, children: React.ReactNode }) => {
  return (
    <div className={`fixed inset-0 z-[100] transition-opacity ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <motion.div 
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="absolute right-0 top-0 bottom-0 w-full max-w-lg bg-bg-deep border-l border-white/10 p-8 overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-8">
          <h3 className="font-syne font-bold text-2xl uppercase tracking-tighter">{title}</h3>
          <button onClick={onClose} className="text-text-secondary hover:text-white text-2xl">✕</button>
        </div>
        {children}
      </motion.div>
    </div>
  );
};
