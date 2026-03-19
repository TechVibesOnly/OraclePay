import React, { useState } from 'react';
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
  Download,
  Filter,
  Eye,
  Copy,
  CheckCircle2,
  Clock,
  AlertTriangle,
  ShieldAlert
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge, Drawer, FloatingCard, Sidebar } from '../components/UI';

const transactionsData = [
  { id: 'TX-84201', merchant: 'Zomato Ltd', route: { from: '🇮🇳', to: '🇬🇧' }, amount: '$124.50', converted: '£98.20', rate: '83.42', time: '2.1s', status: 'Settled', compliance: 'Verified', hash: '0x74...f2a1' },
  { id: 'TX-84202', merchant: 'Apple Inc', route: { from: '🇺🇸', to: '🇮🇳' }, amount: '$999.00', converted: '₹83,340', rate: '83.42', time: '1.8s', status: 'Processing', compliance: 'Pending', hash: '0x32...e91b' },
  { id: 'TX-84203', merchant: 'Spotify AB', route: { from: '🇪🇺', to: '🇮🇳' }, amount: '$9.99', converted: '₹833.40', rate: '83.42', time: '3.2s', status: 'Compliance Hold', compliance: 'Flagged', hash: '0x91...a4c2' },
  { id: 'TX-84204', merchant: 'Deliveroo', route: { from: '🇬🇧', to: '🇮🇳' }, amount: '$42.10', converted: '₹3,512', rate: '83.42', time: '2.4s', status: 'Settled', compliance: 'Verified', hash: '0x55...d8e3' },
  { id: 'TX-84205', merchant: 'Grab Holdings', route: { from: '🇸🇬', to: '🇮🇳' }, amount: '$15.00', converted: '₹1,251', rate: '83.42', time: '1.9s', status: 'Settled', compliance: 'Verified', hash: '0x21...b6f4' },
  { id: 'TX-84206', merchant: 'Netflix Inc', route: { from: '🇺🇸', to: '🇬🇧' }, amount: '$15.99', converted: '£12.60', rate: '1.27', time: '2.0s', status: 'Settled', compliance: 'Verified', hash: '0x88...c3d2' },
  { id: 'TX-84207', merchant: 'Amazon.in', route: { from: '🇮🇳', to: '🇺🇸' }, amount: '$85.00', converted: '$85.00', rate: '1.00', time: '2.5s', status: 'Failed', compliance: 'Rejected', hash: '0x44...a1b2' },
];

export default function TransactionsPage() {
  const [selectedTx, setSelectedTx] = useState<any>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleViewDetails = (tx: any) => {
    setSelectedTx(tx);
    setIsDrawerOpen(true);
  };

  return (
    <div className="flex h-screen bg-bg-deep overflow-hidden oracle-grid">
      <div className="scanline" />
      <Sidebar active="transactions" />

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
            <span className="font-medium">Transactions</span>
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
        <div className="flex-grow overflow-y-auto p-8 z-10 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h1 className="font-syne font-bold text-3xl tracking-tighter uppercase">Transactions</h1>
            <button className="flex items-center gap-2 px-4 py-2 bg-oracle-gold text-black rounded-lg font-bold text-sm hover:scale-105 transition-transform">
              <Download size={16} /> Export CSV
            </button>
          </div>

          {/* Filter Bar */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 opacity-30" size={14} />
              <input type="text" placeholder="Search merchant, hash..." className="w-full bg-black/20 border border-white/10 rounded-lg py-2 pl-9 pr-4 text-xs focus:outline-none focus:border-oracle-gold/50" />
            </div>
            <select className="bg-black/20 border border-white/10 rounded-lg py-2 px-3 text-xs focus:outline-none focus:border-oracle-gold/50 text-white/70">
              <option>All Statuses</option>
              <option>Settled</option>
              <option>Processing</option>
              <option>Failed</option>
              <option>Compliance Hold</option>
            </select>
            <select className="bg-black/20 border border-white/10 rounded-lg py-2 px-3 text-xs focus:outline-none focus:border-oracle-gold/50 text-white/70">
              <option>All Countries</option>
              <option>🇮🇳 India</option>
              <option>🇺🇸 USA</option>
              <option>🇬🇧 UK</option>
              <option>🇪🇺 EU</option>
            </select>
            <select className="bg-black/20 border border-white/10 rounded-lg py-2 px-3 text-xs focus:outline-none focus:border-oracle-gold/50 text-white/70">
              <option>All Currencies</option>
              <option>USD</option>
              <option>INR</option>
              <option>EUR</option>
              <option>GBP</option>
            </select>
            <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-xs font-bold hover:bg-white/10 transition-colors">
              <Filter size={14} /> More Filters
            </button>
          </div>

          {/* Table */}
          <div className="rounded-xl border border-white/5 overflow-hidden bg-white/5">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 text-[10px] uppercase tracking-widest opacity-50">
                  <th className="px-6 py-4 font-bold">Transaction ID</th>
                  <th className="px-6 py-4 font-bold">Merchant</th>
                  <th className="px-6 py-4 font-bold">Route</th>
                  <th className="px-6 py-4 font-bold">Amount</th>
                  <th className="px-6 py-4 font-bold">Converted</th>
                  <th className="px-6 py-4 font-bold">AI Rate</th>
                  <th className="px-6 py-4 font-bold">Settlement Proof</th>
                  <th className="px-6 py-4 font-bold">Status</th>
                  <th className="px-6 py-4 font-bold">Compliance</th>
                  <th className="px-6 py-4 font-bold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {transactionsData.map((tx) => (
                  <tr key={tx.id} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                    <td className="px-6 py-4 font-mono text-xs text-oracle-gold">{tx.id}</td>
                    <td className="px-6 py-4 font-bold">{tx.merchant}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span>{tx.route.from}</span>
                        <ChevronRight size={10} className="opacity-30" />
                        <span>{tx.route.to}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">{tx.amount}</td>
                    <td className="px-6 py-4 font-bold">{tx.converted}</td>
                    <td className="px-6 py-4 text-xs opacity-70">{tx.rate}</td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-mono text-oracle-gold truncate w-24">{tx.hash}</span>
                        <span className="text-[9px] opacity-30 uppercase tracking-tighter">Verified in {tx.time}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant={tx.status === 'Settled' ? 'green' : tx.status === 'Processing' ? 'amber' : tx.status === 'Failed' ? 'amber' : 'blue'}>
                        {tx.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        {tx.compliance === 'Verified' ? <CheckCircle2 size={12} className="text-emerald-500" /> : tx.compliance === 'Flagged' ? <AlertTriangle size={12} className="text-amber-500" /> : <Clock size={12} className="text-blue-500" />}
                        <span className="text-[10px] font-bold opacity-70">{tx.compliance}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button onClick={() => handleViewDetails(tx)} className="p-2 hover:bg-white/10 rounded-lg transition-colors text-oracle-gold">
                          <Eye size={16} />
                        </button>
                        <button className="p-2 hover:bg-white/10 rounded-lg transition-colors opacity-30 hover:opacity-100">
                          <Copy size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between text-xs opacity-50">
            <div>Showing 1-7 of 1,240 transactions</div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span>Rows per page:</span>
                <select className="bg-transparent border-none focus:outline-none font-bold">
                  <option>25</option>
                  <option>50</option>
                  <option>100</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-1 hover:text-white">Previous</button>
                <div className="flex items-center gap-1">
                  <button className="w-6 h-6 rounded bg-oracle-gold text-black font-bold flex items-center justify-center">1</button>
                  <button className="w-6 h-6 rounded hover:bg-white/10 flex items-center justify-center">2</button>
                  <button className="w-6 h-6 rounded hover:bg-white/10 flex items-center justify-center">3</button>
                </div>
                <button className="p-1 hover:text-white">Next</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Transaction Detail Drawer */}
      <Drawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
        title="Transaction Details"
      >
        {selectedTx && (
          <div className="space-y-8">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-[10px] opacity-50 uppercase tracking-widest mb-1">Transaction ID</div>
                <div className="text-2xl font-mono text-oracle-gold">{selectedTx.id}</div>
              </div>
              <Badge variant={selectedTx.status === 'Settled' ? 'green' : 'amber'}>{selectedTx.status}</Badge>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-[10px] opacity-50 uppercase tracking-widest mb-2">Blockchain Settlement</div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="opacity-50">Chain</span>
                    <span className="font-bold">OracleChain (IBC)</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="opacity-50">Block</span>
                    <span className="font-bold">#12,402,194</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="opacity-50">Finality</span>
                    <span className="font-bold text-emerald-500">2.1s (Instant)</span>
                  </div>
                  <div className="pt-2 border-t border-white/5">
                    <div className="text-[10px] opacity-30 mb-1">HASH</div>
                    <div className="text-[10px] font-mono break-all opacity-70">{selectedTx.hash}f8a1b2c3d4e5f6g7h8i9j0</div>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-[10px] opacity-50 uppercase tracking-widest mb-2">Financial Details</div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="opacity-50">Amount</span>
                    <span className="font-bold">{selectedTx.amount}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="opacity-50">Converted</span>
                    <span className="font-bold">{selectedTx.converted}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="opacity-50">AI Rate</span>
                    <span className="font-bold text-oracle-gold">{selectedTx.rate}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="opacity-50">Spread</span>
                    <span className="font-bold">0.02%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <ShieldAlert size={18} className="text-oracle-gold" />
                <h4 className="font-syne font-bold uppercase tracking-widest text-sm">GST / Compliance Info</h4>
              </div>
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <div>
                  <div className="text-[10px] opacity-50 uppercase mb-1">Treatment</div>
                  <div className="text-xs font-bold">Export of Services</div>
                </div>
                <div>
                  <div className="text-[10px] opacity-50 uppercase mb-1">LUT Bond</div>
                  <div className="text-xs font-bold text-emerald-500">Active (#LUT-2024-88)</div>
                </div>
                <div>
                  <div className="text-[10px] opacity-50 uppercase mb-1">HSN Code</div>
                  <div className="text-xs font-bold">998311</div>
                </div>
                <div>
                  <div className="text-[10px] opacity-50 uppercase mb-1">EDPMS Status</div>
                  <div className="text-xs font-bold">Auto-reconciled</div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/5">
                <div className="text-[10px] opacity-50 uppercase mb-1">e-Invoice IRN</div>
                <div className="text-[10px] font-mono opacity-70">8420a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0</div>
              </div>
            </div>

            <div>
              <h4 className="font-syne font-bold uppercase tracking-widest text-sm mb-4">Timeline</h4>
              <div className="space-y-4">
                {[
                  { time: '12:44:01', event: 'Settlement confirmed on OracleChain', status: 'done' },
                  { time: '12:43:59', event: 'AI Rate locked & Compliance verified', status: 'done' },
                  { time: '12:43:58', event: 'Transaction initiated by Merchant', status: 'done' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-16 text-[10px] opacity-30 font-mono pt-1">{item.time}</div>
                    <div className="relative pb-4">
                      {i !== 2 && <div className="absolute left-1.5 top-4 bottom-0 w-px bg-white/10" />}
                      <div className={`w-3 h-3 rounded-full border-2 ${item.status === 'done' ? 'bg-oracle-gold border-oracle-gold' : 'border-white/20'}`} />
                    </div>
                    <div className="text-xs font-medium">{item.event}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <button className="flex-grow py-3 rounded-xl bg-white/5 border border-white/10 font-bold text-sm">Download Receipt</button>
              <button className="flex-grow py-3 rounded-xl bg-white/5 border border-white/10 font-bold text-sm">View on Explorer</button>
            </div>
          </div>
        )}
      </Drawer>
    </div>
  );
}
