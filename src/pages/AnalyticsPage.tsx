import React from 'react';
import { motion } from 'motion/react';
import { 
  BarChart3, 
  TrendingUp, 
  Zap, 
  Brain, 
  Globe, 
  Clock, 
  CheckCircle2,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  Cell,
  PieChart,
  Pie
} from 'recharts';
import { Sidebar } from '../components/UI';
import { NumberCounter } from '../components/NumberCounter';

const revenueData = [
  { month: 'Jan', fees: 4500, saas: 1200, fx: 800, compliance: 400 },
  { month: 'Feb', fees: 5200, saas: 1200, fx: 950, compliance: 450 },
  { month: 'Mar', fees: 4800, saas: 1500, fx: 1100, compliance: 500 },
  { month: 'Apr', fees: 6100, saas: 1500, fx: 1300, compliance: 600 },
  { month: 'May', fees: 5900, saas: 1800, fx: 1200, compliance: 700 },
  { month: 'Jun', fees: 7200, saas: 1800, fx: 1500, compliance: 850 },
];

const growthData = [
  { date: '2023-Q1', merchants: 120 },
  { date: '2023-Q2', merchants: 245 },
  { date: '2023-Q3', merchants: 480 },
  { date: '2023-Q4', merchants: 890 },
  { date: '2024-Q1', merchants: 1420 },
];

const routeData = [
  { route: 'IN → GB', gmv: 842000, flag: '🇬🇧' },
  { route: 'IN → US', gmv: 715000, flag: '🇺🇸' },
  { route: 'IN → UAE', gmv: 512000, flag: '🇦🇪' },
  { route: 'IN → SG', gmv: 428000, flag: '🇸🇬' },
  { route: 'IN → EU', gmv: 395000, flag: '🇪🇺' },
];

const slaData = [
  { name: 'Met', value: 99.97, color: '#10b981' },
  { name: 'Missed', value: 0.03, color: '#ef4444' },
];

const aiPerformance = [
  { day: 'Mon', accuracy: 92.1 },
  { day: 'Tue', accuracy: 93.5 },
  { day: 'Wed', accuracy: 94.8 },
  { day: 'Thu', accuracy: 94.3 },
  { day: 'Fri', accuracy: 95.1 },
  { day: 'Sat', accuracy: 94.7 },
  { day: 'Sun', accuracy: 94.3 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#141417] border border-[#F5C842]/30 p-4 rounded-xl shadow-2xl backdrop-blur-md">
        <p className="text-zinc-500 text-[10px] uppercase tracking-widest mb-2 font-bold">{label}</p>
        <div className="space-y-1">
          {payload.map((entry: any, index: number) => (
            <div key={index} className="flex items-center justify-between gap-8">
              <span className="text-xs text-zinc-300 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }}></div>
                {entry.name}
              </span>
              <span className="text-xs font-mono font-bold text-white">
                {entry.name.includes('Accuracy') ? `${entry.value}%` : `$${entry.value.toLocaleString()}`}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

export default function AnalyticsPage() {
  return (
    <div className="flex h-screen bg-bg-deep overflow-hidden oracle-grid">
      <div className="scanline" />
      <Sidebar active="analytics" />
      
      <main className="flex-1 overflow-y-auto p-8 relative">
        <div className="nebula-bg opacity-30" />
        <header className="mb-8 flex items-center justify-between relative z-10">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">Performance Analytics</h1>
            <p className="text-zinc-400">Deep dive into revenue, growth, and AI efficiency</p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium hover:bg-white/10 transition-colors">Export CSV</button>
            <button className="px-4 py-2 bg-[#F5C842] text-black border border-[#F5C842] rounded-xl text-sm font-bold hover:bg-[#E5B832] transition-colors">Generate Report</button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Revenue Breakdown */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 bg-[#141417] border border-white/5 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-[#F5C842]" />
                  Revenue Breakdown
                </h3>
                <p className="text-zinc-500 text-xs">12 month view · All streams</p>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#F5C842]"></div>
                  <span className="text-[10px] text-zinc-400 uppercase font-bold">Fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-[10px] text-zinc-400 uppercase font-bold">SaaS</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                  <span className="text-[10px] text-zinc-400 uppercase font-bold">FX Spread</span>
                </div>
              </div>
            </div>
            
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient id="colorFees" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#F5C842" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#F5C842" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorSaas" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                  <XAxis 
                    dataKey="month" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#71717a', fontSize: 10 }} 
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#71717a', fontSize: 10 }}
                    tickFormatter={(val) => `$${val/1000}k`}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Area 
                    type="monotone" 
                    dataKey="fees" 
                    name="Transaction Fees"
                    stroke="#F5C842" 
                    strokeWidth={2}
                    fillOpacity={1} 
                    fill="url(#colorFees)" 
                    stackId="1"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="saas" 
                    name="SaaS Revenue"
                    stroke="#a855f7" 
                    strokeWidth={2}
                    fillOpacity={1} 
                    fill="url(#colorSaas)" 
                    stackId="1"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="fx" 
                    name="FX Spread"
                    stroke="#14b8a6" 
                    strokeWidth={2}
                    fillOpacity={0.1} 
                    fill="#14b8a6" 
                    stackId="1"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Settlement Performance */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-[#141417] border border-white/5 rounded-2xl p-6 flex flex-col"
          >
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Zap className="w-5 h-5 text-teal-500" />
              Settlement Performance
            </h3>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-black/20 rounded-xl border border-white/5">
                <p className="text-zinc-500 text-[10px] uppercase font-bold mb-1">Average</p>
                <p className="text-2xl font-bold font-mono">2.3s</p>
              </div>
              <div className="p-4 bg-black/20 rounded-xl border border-white/5">
                <p className="text-zinc-500 text-[10px] uppercase font-bold mb-1">P95</p>
                <p className="text-2xl font-bold font-mono">4.1s</p>
              </div>
              <div className="p-4 bg-black/20 rounded-xl border border-white/5">
                <p className="text-zinc-500 text-[10px] uppercase font-bold mb-1">P99</p>
                <p className="text-2xl font-bold font-mono">7.2s</p>
              </div>
              <div className="p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                <p className="text-emerald-500 text-[10px] uppercase font-bold mb-1">SLA Status</p>
                <p className="text-2xl font-bold text-emerald-500">99.9%</p>
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center relative">
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold">99.97%</span>
                <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">SLA Met</span>
              </div>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={slaData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {slaData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-4 flex items-center gap-2 text-emerald-500 text-xs justify-center">
              <CheckCircle2 className="w-4 h-4" />
              Met SLA requirements for 2,841,229 txns
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* GMV by Route */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#141417] border border-white/5 rounded-2xl p-6"
          >
            <h3 className="text-lg font-semibold mb-8 flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-500" />
              GMV by Route (Top 10 Corridors)
            </h3>
            
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={routeData} layout="vertical" margin={{ left: 40 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" horizontal={false} />
                  <XAxis type="number" hide />
                  <YAxis 
                    dataKey="route" 
                    type="category" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={({ x, y, payload }) => {
                      const item = routeData.find(d => d.route === payload.value);
                      return (
                        <g transform={`translate(${x},${y})`}>
                          <text x={-10} y={0} dy={4} textAnchor="end" fill="#71717a" fontSize={10} fontWeight="bold">
                            {item?.flag} {payload.value}
                          </text>
                        </g>
                      );
                    }}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: '#ffffff05' }} />
                  <Bar dataKey="gmv" name="GMV Processed" radius={[0, 4, 4, 0]}>
                    {routeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 0 ? '#F5C842' : '#F5C84244'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* AI Model Performance */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#141417] border border-white/5 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Brain className="w-5 h-5 text-purple-500" />
                  AI Model Performance
                </h3>
                <p className="text-zinc-500 text-xs">OracleMind v2.4 · Real-time Accuracy</p>
              </div>
              <div className="text-right">
                <p className="text-emerald-500 text-xl font-bold">94.3%</p>
                <p className="text-[10px] text-zinc-500 uppercase font-bold">48h Accuracy</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="p-3 bg-black/20 rounded-xl border border-white/5">
                <p className="text-zinc-500 text-[10px] uppercase font-bold mb-1">7d Accuracy</p>
                <p className="text-lg font-bold">91.1%</p>
              </div>
              <div className="p-3 bg-oracle-gold/10 rounded-xl border border-oracle-gold/20">
                <p className="text-oracle-gold text-[10px] uppercase font-bold mb-1">AI Retraining</p>
                <p className="text-lg font-bold animate-pulse">In Progress</p>
              </div>
              <div className="p-3 bg-black/20 rounded-xl border border-white/5">
                <p className="text-zinc-500 text-[10px] uppercase font-bold mb-1">Predictions Today</p>
                <p className="text-lg font-bold">2.8M</p>
              </div>
            </div>
            
            <div className="h-[180px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={aiPerformance}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                  <XAxis dataKey="day" hide />
                  <YAxis hide domain={[90, 100]} />
                  <Tooltip content={<CustomTooltip />} />
                  <Line 
                    type="monotone" 
                    dataKey="accuracy" 
                    name="Accuracy"
                    stroke="#a855f7" 
                    strokeWidth={3} 
                    dot={{ fill: '#a855f7', strokeWidth: 2, r: 4, stroke: '#141417' }}
                    activeDot={{ r: 6, strokeWidth: 0 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Merchant Growth */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#141417] border border-white/5 rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-emerald-500" />
                Merchant Growth Curve
              </h3>
              <p className="text-zinc-500 text-xs">Active merchants over time</p>
            </div>
            <div className="flex items-center gap-2 text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              <ArrowUpRight className="w-4 h-4" />
              <span className="text-xs font-bold">+124% YoY</span>
            </div>
          </div>
          
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={growthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                <XAxis 
                  dataKey="date" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#71717a', fontSize: 10 }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#71717a', fontSize: 10 }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Line 
                  type="stepAfter" 
                  dataKey="merchants" 
                  name="Active Merchants"
                  stroke="#10b981" 
                  strokeWidth={3} 
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
