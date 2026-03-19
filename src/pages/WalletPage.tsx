import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  ArrowLeftRight, 
  CreditCard, 
  Globe, 
  Settings, 
  Hexagon, 
  Bell, 
  ChevronRight,
  ArrowUpRight,
  TrendingUp,
  TrendingDown,
  Plus,
  ArrowDownRight,
  Wallet,
  History
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge, FloatingCard, Modal, Sidebar } from '../components/UI';
import Masonry from 'react-masonry-css';
import { ResponsiveContainer, LineChart, Line } from 'recharts';

const currencies = [
  { code: 'USD', name: 'US Dollar', flag: '🇺🇸', balance: '124,500.00', portfolio: '45%', trend: 'up', data: [124000, 124200, 124100, 124400, 124500] },
  { code: 'EUR', name: 'Euro', flag: '🇪🇺', balance: '52,300.00', portfolio: '20%', trend: 'down', data: [53000, 52800, 52600, 52400, 52300] },
  { code: 'GBP', name: 'British Pound', flag: '🇬🇧', balance: '38,120.00', portfolio: '15%', trend: 'up', data: [37500, 37800, 37900, 38000, 38120] },
  { code: 'INR', name: 'Indian Rupee', flag: '🇮🇳', balance: '2,842,000.00', portfolio: '12%', trend: 'up', data: [2800000, 2810000, 2820000, 2830000, 2842000] },
  { code: 'AED', name: 'UAE Dirham', flag: '🇦🇪', balance: '84,200.00', portfolio: '8%', trend: 'stable', data: [84200, 84200, 84200, 84200, 84200] },
  { code: 'SGD', name: 'Singapore Dollar', flag: '🇸🇬', balance: '12,400.00', portfolio: '4%', trend: 'up', data: [12000, 12100, 12200, 12300, 12400] },
  { code: 'CAD', name: 'Canadian Dollar', flag: '🇨🇦', balance: '8,500.00', portfolio: '3%', trend: 'down', data: [8800, 8700, 8650, 8600, 8500] },
  { code: 'JPY', name: 'Japanese Yen', flag: '🇯🇵', balance: '1,240,000', portfolio: '2%', trend: 'up', data: [1200000, 1210000, 1220000, 1230000, 1240000] },
];

const history = [
  { id: 1, type: 'in', counterparty: 'Zomato Ltd', amount: '+$124.50', currency: 'USD', time: '2 mins ago', status: 'Completed' },
  { id: 2, type: 'out', counterparty: 'Withdrawal to SEPA', amount: '-€1,200.00', currency: 'EUR', time: '1 hour ago', status: 'Processing' },
  { id: 3, type: 'in', counterparty: 'Apple Inc', amount: '+$999.00', currency: 'USD', time: '3 hours ago', status: 'Completed' },
  { id: 4, type: 'out', counterparty: 'Conversion USD → INR', amount: '-$5,000.00', currency: 'USD', time: '5 hours ago', status: 'Completed' },
  { id: 5, type: 'in', counterparty: 'Deliveroo', amount: '+£42.10', currency: 'GBP', time: 'Yesterday', status: 'Completed' },
];

export default function WalletPage() {
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);

  return (
    <div className="flex h-screen bg-bg-deep overflow-hidden">
      <Sidebar active="wallet" />

      {/* Main Content */}
      <main className="flex-grow flex flex-col overflow-hidden relative">
        <div className="nebula-bg opacity-10" />
        
        {/* Top Bar */}
        <header className="h-16 border-b border-white/5 flex items-center justify-between px-8 z-10 bg-black/40 backdrop-blur-md">
          <div className="flex items-center gap-2 text-sm">
            <span className="opacity-30">Pages</span>
            <ChevronRight size={14} className="opacity-30" />
            <span className="opacity-30">Dashboard</span>
            <ChevronRight size={14} className="opacity-30" />
            <span className="font-medium">Wallet</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative cursor-pointer">
              <Bell size={20} className="opacity-50" />
              <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-black" />
            </div>
            <div className="flex items-center gap-3 pl-6 border-l border-white/10">
              <div className="text-right">
                <div className="text-xs font-bold">Tanya Singh</div>
                <div className="text-[10px] opacity-50">Merchant ID: #8420</div>
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-oracle-gold to-purple-600" />
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-grow overflow-y-auto p-8 z-10 space-y-8">
          {/* Hero Card */}
          <div className="relative h-64 rounded-3xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-900" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-tr from-oracle-gold/10 to-transparent" />
            
            <div className="relative h-full p-10 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-[10px] font-bold text-oracle-gold uppercase tracking-[0.3em] mb-2">Oracle Premium Merchant</div>
                  <h2 className="font-syne font-bold text-4xl tracking-tighter uppercase">Your Oracle Wallet</h2>
                </div>
                <Hexagon size={48} className="text-oracle-gold fill-oracle-gold/10" />
              </div>

              <div className="flex items-end justify-between">
                <div>
                  <div className="text-[10px] opacity-50 uppercase tracking-widest mb-1">Total Balance (USD Equivalent)</div>
                  <div className="text-5xl font-serif tracking-tighter">$284,200.00</div>
                  <div className="mt-4 flex items-center gap-4 text-xs font-mono opacity-50">
                    <span>OP ···· ···· ···· 4821</span>
                    <span>EXP 08/29</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button onClick={() => setIsWithdrawModalOpen(true)} className="px-8 py-4 rounded-2xl bg-oracle-gold text-black font-bold text-sm flex items-center gap-2 hover:scale-105 transition-transform shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                    <ArrowUpRight size={18} /> Withdraw Funds
                  </button>
                  <button className="px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 font-bold text-sm flex items-center gap-2 hover:bg-white/20 transition-colors">
                    <Plus size={18} /> Add Funds
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Currency Grid */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-syne font-bold text-xl uppercase tracking-tighter">Currency Breakdown</h3>
              <div className="text-xs opacity-50">8 Active Currencies</div>
            </div>

            <Masonry
              breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
              className="flex -ml-6 w-auto"
              columnClassName="pl-6 bg-clip-padding"
            >
              {currencies.map((curr, i) => (
                <FloatingCard key={i} className="p-6 mb-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{curr.flag}</span>
                      <div>
                        <div className="font-bold text-sm">{curr.code}</div>
                        <div className="text-[10px] opacity-50">{curr.name}</div>
                      </div>
                    </div>
                    <Badge variant={curr.trend === 'up' ? 'green' : curr.trend === 'down' ? 'amber' : 'blue'}>
                      {curr.portfolio}
                    </Badge>
                  </div>
                  
                  <div className="text-xl font-serif mb-4">{curr.balance}</div>
                  
                  <div className="h-12">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={curr.data.map(v => ({ v }))}>
                        <Line 
                          type="monotone" 
                          dataKey="v" 
                          stroke={curr.trend === 'up' ? '#10b981' : curr.trend === 'down' ? '#f59e0b' : '#D4AF37'} 
                          strokeWidth={2} 
                          dot={false} 
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </FloatingCard>
              ))}
            </Masonry>
          </div>

          {/* History */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <History size={20} className="text-oracle-gold" />
                <h3 className="font-syne font-bold text-xl uppercase tracking-tighter">Wallet History</h3>
              </div>
              <button className="text-xs text-oracle-gold font-bold">View All Activity →</button>
            </div>

            <div className="rounded-2xl border border-white/5 overflow-hidden bg-white/5">
              {history.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-6 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${item.type === 'in' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-red-500/10 text-red-500'}`}>
                      {item.type === 'in' ? <ArrowDownRight size={20} /> : <ArrowUpRight size={20} />}
                    </div>
                    <div>
                      <div className="font-bold text-sm">{item.counterparty}</div>
                      <div className="text-[10px] opacity-50 uppercase tracking-widest">{item.time}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`font-bold ${item.type === 'in' ? 'text-emerald-500' : 'text-white'}`}>{item.amount}</div>
                    <div className="text-[10px] opacity-50">{item.currency}</div>
                  </div>
                  <div className="hidden md:block">
                    <Badge variant={item.status === 'Completed' ? 'green' : 'amber'}>{item.status}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Withdraw Modal */}
      <Modal 
        isOpen={isWithdrawModalOpen} 
        onClose={() => setIsWithdrawModalOpen(false)} 
        title="Withdraw Funds"
      >
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold opacity-50 uppercase tracking-widest">Select Currency</label>
            <div className="grid grid-cols-4 gap-2">
              {['USD', 'EUR', 'GBP', 'INR'].map(c => (
                <button key={c} className={`py-2 rounded-lg border text-xs font-bold transition-colors ${c === 'USD' ? 'border-oracle-gold bg-oracle-gold/10 text-oracle-gold' : 'border-white/10 hover:border-white/30'}`}>
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold opacity-50 uppercase tracking-widest">Amount</label>
            <div className="relative">
              <input type="text" placeholder="0.00" className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-2xl font-serif focus:outline-none focus:border-oracle-gold" />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-oracle-gold">MAX</button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold opacity-50 uppercase tracking-widest">Withdrawal Method</label>
            <div className="space-y-2">
              {[
                { name: 'Instant UPI', time: '2.3s', fee: 'Free' },
                { name: 'SEPA Instant', time: '10 mins', fee: '€0.50' },
                { name: 'ACH Transfer', time: '1-2 days', fee: 'Free' },
              ].map((m, i) => (
                <button key={i} className="w-full flex items-center justify-between p-4 rounded-xl border border-white/10 hover:border-oracle-gold transition-colors text-left group">
                  <div>
                    <div className="font-bold text-sm">{m.name}</div>
                    <div className="text-[10px] opacity-50">Est. Time: {m.time}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-bold text-oracle-gold">{m.fee}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <button className="w-full py-4 rounded-xl bg-oracle-gold text-black font-bold oracle-glow mt-4">
            Confirm Withdrawal
          </button>
        </div>
      </Modal>
    </div>
  );
}
