import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Bell, 
  ChevronRight,
  Activity,
  Hexagon,
  TrendingUp,
  Clock,
  ShieldCheck,
  MoreVertical,
  ExternalLink,
  AlertTriangle,
  Info,
  CheckCircle2,
  Lock,
  ArrowUpRight,
  ArrowDownLeft
} from 'lucide-react';
import { Counter, FloatingCard, Badge, Modal, Sidebar } from '../components/UI';
import Masonry from 'react-masonry-css';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell, LineChart, Line
} from 'recharts';
import { Link } from 'react-router-dom';

const TransactionRow = ({ tx, ...props }: { tx: any, [key: string]: any }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    className="flex items-center justify-between p-4 hover:bg-white/5 transition-colors cursor-pointer border-b border-white/5 last:border-0"
    {...props}
  >
    <div className="flex items-center gap-4">
      <span className="text-2xl">{tx.flag}</span>
      <div>
        <div className="font-bold text-sm">{tx.merchant}</div>
        <div className="text-[10px] opacity-50 uppercase tracking-widest">{tx.country}</div>
      </div>
    </div>
    <div className="text-right">
      <div className="font-bold text-sm">{tx.amountUSD}</div>
      <div className="text-[10px] opacity-50">{tx.amountLocal}</div>
    </div>
    <div className="hidden md:block">
      <Badge variant={tx.status === 'Settled' ? 'green' : tx.status === 'Processing' ? 'amber' : 'blue'}>
        {tx.status}
      </Badge>
    </div>
    <div className="hidden lg:block text-right">
      <div className="text-xs font-mono text-oracle-gold">{tx.time}</div>
      <div className="text-[10px] opacity-30">{tx.timestamp}</div>
    </div>
  </motion.div>
);

const revenueData = [
  { name: 'Jan', gmv: 4000, revenue: 2400 },
  { name: 'Feb', gmv: 3000, revenue: 1398 },
  { name: 'Mar', gmv: 2000, revenue: 9800 },
  { name: 'Apr', gmv: 2780, revenue: 3908 },
  { name: 'May', gmv: 1890, revenue: 4800 },
  { name: 'Jun', gmv: 2390, revenue: 3800 },
  { name: 'Jul', gmv: 3490, revenue: 4300 },
  { name: 'Aug', gmv: 4000, revenue: 2400 },
  { name: 'Sep', gmv: 3000, revenue: 1398 },
  { name: 'Oct', gmv: 2000, revenue: 9800 },
  { name: 'Nov', gmv: 2780, revenue: 3908 },
  { name: 'Dec', gmv: 842000, revenue: 10104 },
];

const speedData = [
  { name: '<1s', value: 15 },
  { name: '1-2s', value: 35 },
  { name: '2-3s', value: 28 },
  { name: '3-5s', value: 12 },
  { name: '5s+', value: 10 },
];

const complianceData = [
  { name: 'Compliant', value: 34, color: '#10b981' },
  { name: 'Action Required', value: 9, color: '#f59e0b' },
  { name: 'Monitoring', value: 4, color: '#3b82f6' },
];

const walletCurrencies = [
  { name: 'USD', value: 45 },
  { name: 'EUR', value: 20 },
  { name: 'GBP', value: 15 },
  { name: 'INR', value: 12 },
  { name: 'AED', value: 8 },
];

export default function DashboardPage() {
  const [isLockModalOpen, setIsLockModalOpen] = useState(false);
  const [selectedPair, setSelectedPair] = useState('');
  const [transactions, setTransactions] = useState([
    { id: 1, flag: '🇮🇳', merchant: 'Zomato Ltd', country: 'India', amountUSD: '$124.50', amountLocal: '₹10,340.00', status: 'Settled', time: '2.1s', timestamp: '12:44:01' },
    { id: 2, flag: '🇺🇸', merchant: 'Apple Inc', country: 'USA', amountUSD: '$999.00', amountLocal: '$999.00', status: 'Processing', time: '1.8s', timestamp: '12:43:55' },
    { id: 3, flag: '🇪🇺', merchant: 'Spotify AB', country: 'Sweden', amountUSD: '$9.99', amountLocal: '€9.20', status: 'Compliance Check', time: '3.2s', timestamp: '12:43:40' },
    { id: 4, flag: '🇬🇧', merchant: 'Deliveroo', country: 'UK', amountUSD: '$42.10', amountLocal: '£33.50', status: 'Settled', time: '2.4s', timestamp: '12:43:12' },
    { id: 5, flag: '🇸🇬', merchant: 'Grab Holdings', country: 'Singapore', amountUSD: '$15.00', amountLocal: 'S$20.10', status: 'Settled', time: '1.9s', timestamp: '12:42:50' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newTx = {
        id: Date.now(),
        flag: ['🇮🇳', '🇺🇸', '🇪🇺', '🇬🇧', '🇸🇬', '🇯🇵', '🇦🇺'][Math.floor(Math.random() * 7)],
        merchant: ['Uber', 'Netflix', 'Amazon', 'Airbnb', 'Tesla', 'Microsoft'][Math.floor(Math.random() * 6)],
        country: 'Global',
        amountUSD: `$${(Math.random() * 500).toFixed(2)}`,
        amountLocal: 'Calculated...',
        status: ['Settled', 'Processing', 'Compliance Check'][Math.floor(Math.random() * 3)],
        time: `${(Math.random() * 2 + 1).toFixed(1)}s`,
        timestamp: new Date().toLocaleTimeString([], { hour12: false })
      };
      setTransactions(prev => [newTx, ...prev.slice(0, 14)]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-screen bg-bg-deep overflow-hidden oracle-grid">
      <div className="scanline" />
      <Sidebar active="dashboard" />

      {/* Main Content */}
      <main className="flex-grow flex flex-col overflow-hidden relative">
        <div className="nebula-bg opacity-30" />
        
        {/* Live Network Status Bar */}
        <div className="h-8 bg-oracle-gold/10 border-b border-oracle-gold/20 flex items-center px-8 gap-6 z-20">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-emerald-500">OracleChain Mainnet · Active</span>
          </div>
          <div className="h-3 w-px bg-white/10" />
          <div className="flex items-center gap-4 text-[9px] font-mono opacity-50">
            <span>Block: #12,402,891</span>
            <span>Latency: 18ms</span>
            <span>TPS: 1,240</span>
          </div>
          <div className="ml-auto flex items-center gap-4 text-[9px] font-bold uppercase tracking-widest">
            <span className="text-oracle-gold">Live Settlement: $241,200,842.00</span>
          </div>
        </div>

        {/* Top Bar */}
        <header className="h-16 border-b border-white/5 flex items-center justify-between px-8 z-10 bg-black/40 backdrop-blur-md">
          <div className="flex items-center gap-2 text-sm">
            <span className="opacity-30">Pages</span>
            <ChevronRight size={14} className="opacity-30" />
            <span className="font-medium">Dashboard</span>
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

        {/* Scrollable Area */}
        <div className="flex-grow overflow-y-auto p-8 z-10 space-y-8">
          {/* Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "GMV This Month", value: 842000, prefix: "$", trend: "+23%", icon: TrendingUp, color: 'text-emerald-500' },
              { label: "Avg Settlement Time", value: 2.3, suffix: "s", trend: "-0.4s", icon: Clock, color: 'text-emerald-500' },
              { label: "Compliance Score", value: 98.7, suffix: "%", trend: "Stable", icon: ShieldCheck, color: 'text-blue-500' },
              { label: "Active Currencies", value: 18, trend: "+3", icon: Globe, color: 'text-oracle-gold' },
            ].map((stat, i) => (
              <FloatingCard key={i} className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 rounded-lg bg-white/5">
                    <stat.icon size={20} className="text-oracle-gold" />
                  </div>
                  <div className={`text-[10px] font-bold ${stat.color}`}>{stat.trend}</div>
                </div>
                <div className="text-[10px] uppercase tracking-widest opacity-50 mb-1">{stat.label}</div>
                <div className="text-3xl font-serif">
                  <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} decimals={stat.value % 1 !== 0 ? 1 : 0} />
                </div>
              </FloatingCard>
            ))}
          </div>

          {/* Widgets Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* OracleMind AI Rate Widget */}
            <FloatingCard className="p-6 border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-syne font-bold text-lg">OracleMind · Live FX Intelligence</h3>
                  <p className="text-[10px] opacity-50 uppercase tracking-widest">Next 48h prediction · Updated 4 min ago</p>
                </div>
                <Badge variant="blue">AI Oracle</Badge>
              </div>
              <div className="space-y-4">
                {[
                  { pair: 'USD/INR', rate: '83.42', trend: 'up', change: '+0.18%', data: [83.2, 83.3, 83.25, 83.4, 83.42] },
                  { pair: 'EUR/INR', rate: '90.11', trend: 'down', change: '-0.04%', data: [90.3, 90.2, 90.25, 90.15, 90.11] },
                  { pair: 'GBP/INR', rate: '105.33', trend: 'up', change: '+0.31%', data: [104.8, 105.0, 105.1, 105.2, 105.33] },
                  { pair: 'AED/INR', rate: '22.71', trend: 'stable', change: '+0.01%', data: [22.7, 22.71, 22.7, 22.71, 22.71] },
                  { pair: 'SGD/INR', rate: '61.84', trend: 'up', change: '+0.22%', data: [61.6, 61.7, 61.65, 61.8, 61.84] },
                ].map((fx, i) => (
                  <div key={i} className="flex items-center justify-between group">
                    <div className="w-16 font-bold text-xs">{fx.pair}</div>
                    <div className="flex-grow h-8 px-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={fx.data.map(v => ({ v }))}>
                          <Line type="monotone" dataKey="v" stroke="#D4AF37" strokeWidth={2} dot={false} />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="w-24 text-right">
                      <div className="text-xs font-mono">{fx.rate} {fx.trend === 'up' ? '↑' : fx.trend === 'down' ? '↓' : '→'}</div>
                      <div className={`text-[10px] ${fx.trend === 'up' ? 'text-emerald-500' : fx.trend === 'down' ? 'text-red-500' : 'opacity-50'}`}>{fx.change}</div>
                    </div>
                    <button 
                      onClick={() => { setSelectedPair(fx.pair); setIsLockModalOpen(true); }}
                      className="ml-4 p-1.5 rounded bg-oracle-gold/10 text-oracle-gold opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Lock size={12} />
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-[10px] opacity-40 text-center">
                Confidence: 94.3% · Model: OracleMind v2.4
              </div>
            </FloatingCard>

            {/* Compliance Status Widget */}
            <FloatingCard className="p-6">
              <h3 className="font-syne font-bold mb-6">Compliance Status</h3>
              <div className="h-48 mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={complianceData}
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {complianceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ background: '#050505', border: '1px solid rgba(255,255,255,0.1)' }} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                  <div className="text-2xl font-serif">47</div>
                  <div className="text-[8px] opacity-50 uppercase tracking-widest">Regions</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg bg-amber-500/5 border border-amber-500/10">
                  <div className="flex items-center gap-3">
                    <AlertTriangle size={14} className="text-amber-500" />
                    <span className="text-xs">EU VAT OSS filing due in 8 days</span>
                  </div>
                  <button className="text-[10px] font-bold text-oracle-gold">File Now →</button>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={14} className="text-emerald-500" />
                    <span className="text-xs">India IGST refund: ₹2,84,200 approved</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-blue-500/5 border border-blue-500/10">
                  <div className="flex items-center gap-3">
                    <Info size={14} className="text-blue-500" />
                    <span className="text-xs">UK HMRC: New threshold — review required</span>
                  </div>
                </div>
              </div>
            </FloatingCard>

            {/* OracleWallet Card */}
            <FloatingCard className="p-6 bg-gradient-to-br from-zinc-900 to-black border-white/10">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <div className="text-[10px] opacity-50 uppercase tracking-widest mb-1">OracleWallet Balance</div>
                  <div className="text-3xl font-serif">$284,200 <span className="text-xs opacity-50 font-sans">USD eq.</span></div>
                </div>
                <Hexagon className="text-oracle-gold" size={32} />
              </div>
              
              <div className="h-32 mb-8">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={walletCurrencies}>
                    <Bar dataKey="value" fill="#D4AF37" radius={[4, 4, 0, 0]} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: 'rgba(255,255,255,0.4)' }} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="flex gap-4">
                <button className="flex-grow py-3 rounded-xl bg-oracle-gold text-black font-bold text-sm flex items-center justify-center gap-2">
                  <ArrowUpRight size={16} /> Withdraw
                </button>
                <button className="flex-grow py-3 rounded-xl bg-white/5 border border-white/10 font-bold text-sm flex items-center justify-center gap-2">
                  <ArrowLeftRight size={16} /> Convert
                </button>
              </div>
            </FloatingCard>
          </div>

          {/* Bottom Charts */}
          <div className="grid grid-cols-1 gap-8">
            <FloatingCard className="p-8">
              <h3 className="font-syne font-bold mb-8">Revenue vs GMV Trend</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revenueData}>
                    <defs>
                      <linearGradient id="colorGmv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'rgba(255,255,255,0.4)' }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'rgba(255,255,255,0.4)' }} />
                    <Tooltip contentStyle={{ background: '#050505', border: '1px solid rgba(255,255,255,0.1)' }} />
                    <Area type="monotone" dataKey="gmv" stroke="#8B5CF6" fillOpacity={1} fill="url(#colorGmv)" />
                    <Area type="monotone" dataKey="revenue" stroke="#D4AF37" fill="transparent" strokeWidth={3} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </FloatingCard>

            <FloatingCard className="p-8">
              <h3 className="font-syne font-bold mb-8">Settlement Speed Distribution</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={speedData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'rgba(255,255,255,0.4)' }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'rgba(255,255,255,0.4)' }} />
                    <Tooltip contentStyle={{ background: '#050505', border: '1px solid rgba(255,255,255,0.1)' }} />
                    <Bar dataKey="value" fill="#D4AF37" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-6 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10 text-center">
                <span className="text-emerald-500 font-bold">78%</span> of all transactions settle under 2.3s
              </div>
            </FloatingCard>
          </div>

          {/* Live Transaction Feed (Moved from previous implementation) */}
          <FloatingCard className="p-0 overflow-hidden">
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/5">
              <h3 className="font-syne font-bold">Live Transaction Feed</h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] uppercase tracking-widest opacity-50">Real-time</span>
              </div>
            </div>
            <div className="max-h-[400px] overflow-y-auto">
              <AnimatePresence initial={false}>
                {transactions.map((tx) => (
                  <TransactionRow key={tx.id} tx={tx} />
                ))}
              </AnimatePresence>
            </div>
          </FloatingCard>
        </div>
      </main>

      {/* Lock Rate Modal */}
      <Modal 
        isOpen={isLockModalOpen} 
        onClose={() => setIsLockModalOpen(false)} 
        title={`Lock Rate: ${selectedPair}`}
      >
        <div className="space-y-6">
          <p className="text-sm text-text-secondary">Select a duration to lock the current AI-predicted mid-market rate for your future settlements.</p>
          <div className="grid grid-cols-1 gap-3">
            {[
              { label: '24 Hours', fee: '0.1%' },
              { label: '48 Hours', fee: '0.25%' },
              { label: '7 Days', fee: '0.8%' },
            ].map((opt, i) => (
              <button key={i} className="flex items-center justify-between p-4 rounded-xl border border-white/10 hover:border-oracle-gold transition-colors text-left group">
                <div>
                  <div className="font-bold">{opt.label}</div>
                  <div className="text-[10px] opacity-50">Service Fee: {opt.fee}</div>
                </div>
                <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>
          <button className="w-full py-4 rounded-xl bg-oracle-gold text-black font-bold oracle-glow mt-4">
            Confirm Rate Lock
          </button>
        </div>
      </Modal>
    </div>
  );
}
