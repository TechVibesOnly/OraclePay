import React from 'react';
import { motion } from 'motion/react';
import { 
  Puzzle, 
  CheckCircle2, 
  ExternalLink, 
  Search, 
  Filter,
  ShoppingBag,
  Building2,
  FileJson,
  Database,
  MessageSquare,
  Slack,
  CreditCard,
  Plus
} from 'lucide-react';
import { Sidebar } from '../components/UI';

const connectedIntegrations = [
  {
    id: 'shopify',
    name: 'Shopify',
    icon: <ShoppingBag className="w-6 h-6 text-[#96bf48]" />,
    status: 'Connected',
    details: 'Store: oracle-premium.myshopify.com',
    stats: '$1.2M GMV Processed',
    lastSync: '2 mins ago'
  },
  {
    id: 'federal-bank',
    name: 'Federal Bank FEMA API',
    icon: <Building2 className="w-6 h-6 text-blue-500" />,
    status: 'Connected',
    details: 'AD Code: 0023412',
    stats: '847 Reports Filed',
    lastSync: '1 hour ago'
  },
  {
    id: 'gstn',
    name: 'GSTN API',
    icon: <FileJson className="w-6 h-6 text-emerald-500" />,
    status: 'Sandbox',
    details: 'Environment: Production-Ready',
    stats: 'Auto-IRN Enabled',
    lastSync: 'Live'
  }
];

const availableIntegrations = [
  { id: 'woo', name: 'WooCommerce', category: 'E-commerce', description: 'Native plugin for WordPress stores.', icon: <ShoppingBag className="w-6 h-6 text-purple-500" /> },
  { id: 'big', name: 'BigCommerce', category: 'E-commerce', description: 'Enterprise-grade headless commerce sync.', icon: <ShoppingBag className="w-6 h-6 text-blue-400" /> },
  { id: 'magento', name: 'Magento', category: 'E-commerce', description: 'Adobe Commerce integration for high volume.', icon: <ShoppingBag className="w-6 h-6 text-orange-500" /> },
  { id: 'icici', name: 'ICICI Bank', category: 'Banking', description: 'Direct settlement into ICICI corporate accounts.', icon: <Building2 className="w-6 h-6 text-orange-600" /> },
  { id: 'axis', name: 'Axis Bank', category: 'Banking', description: 'FEMA reporting and instant repatriation.', icon: <Building2 className="w-6 h-6 text-pink-600" /> },
  { id: 'stripe', name: 'Stripe', category: 'Data', description: 'Import historical transaction data for AI training.', icon: <CreditCard className="w-6 h-6 text-indigo-500" /> },
  { id: 'quickbooks', name: 'QuickBooks', category: 'Accounting', description: 'Sync invoices and tax treatments automatically.', icon: <Database className="w-6 h-6 text-emerald-600" /> },
  { id: 'xero', name: 'Xero', category: 'Accounting', description: 'Cloud accounting sync for global compliance.', icon: <Database className="w-6 h-6 text-blue-600" /> },
  { id: 'slack', name: 'Slack', category: 'Notifications', description: 'Real-time settlement alerts in your channels.', icon: <Slack className="w-6 h-6 text-red-400" /> },
  { id: 'whatsapp', name: 'WhatsApp Business', category: 'Notifications', description: 'Send payment confirmations to customers.', icon: <MessageSquare className="w-6 h-6 text-emerald-500" />, comingSoon: true },
];

export default function IntegrationsPage() {
  return (
    <div className="flex h-screen bg-[#0A0A0B] text-white overflow-hidden font-sans">
      <Sidebar active="settings" />
      
      <main className="flex-1 overflow-y-auto p-8">
        <header className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">Integrations</h1>
            <p className="text-zinc-400">Connect your ecosystem to OraclePay's AI engine</p>
          </div>
          <div className="flex gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input 
                type="text" 
                placeholder="Search integrations..." 
                className="bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm outline-none focus:border-[#F5C842]/50 transition-colors w-64"
              />
            </div>
            <button className="p-2 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
              <Filter className="w-5 h-5 text-zinc-400" />
            </button>
          </div>
        </header>

        {/* Connected Section */}
        <section className="mb-12">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500 mb-6 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
            Connected
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {connectedIntegrations.map((item) => (
              <motion.div 
                key={item.id}
                whileHover={{ y: -4 }}
                className="bg-[#141417] border border-white/5 rounded-2xl p-6 relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4">
                  <span className="px-2 py-1 bg-emerald-500/10 text-emerald-500 text-[10px] font-bold uppercase tracking-wider rounded-full border border-emerald-500/20">
                    {item.status}
                  </span>
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-black/40 rounded-xl flex items-center justify-center border border-white/5">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-xs text-zinc-500">{item.details}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-zinc-500">Performance</span>
                    <span className="text-emerald-500 font-bold">{item.stats}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-zinc-500">Last Sync</span>
                    <span className="text-zinc-300">{item.lastSync}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 py-2 bg-white/5 hover:bg-white/10 text-xs font-bold rounded-lg transition-colors border border-white/5">
                    Configure
                  </button>
                  <button className="px-3 py-2 bg-white/5 hover:bg-white/10 text-xs font-bold rounded-lg transition-colors border border-white/5">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
            
            <motion.button 
              whileHover={{ scale: 0.98 }}
              className="border-2 border-dashed border-white/5 rounded-2xl flex flex-col items-center justify-center gap-3 text-zinc-500 hover:border-[#F5C842]/30 hover:text-[#F5C842] transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#F5C842]/10 transition-colors">
                <Plus className="w-6 h-6" />
              </div>
              <span className="text-sm font-bold uppercase tracking-widest">Add Custom API</span>
            </motion.button>
          </div>
        </section>

        {/* Available Section */}
        <section>
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500 mb-6 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div>
            Available to Connect
          </h2>
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {availableIntegrations.map((item) => (
              <motion.div 
                key={item.id}
                whileHover={{ y: -4 }}
                className="break-inside-avoid bg-[#141417] border border-white/5 rounded-2xl p-6 relative group"
              >
                {item.comingSoon && (
                  <div className="absolute top-0 right-0 bg-[#F5C842] text-black text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-tighter">
                    Coming Soon
                  </div>
                )}
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-black/40 rounded-lg flex items-center justify-center border border-white/5">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">{item.name}</h3>
                    <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">{item.category}</span>
                  </div>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  {item.description}
                </p>

                <button 
                  disabled={item.comingSoon}
                  className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                    item.comingSoon 
                    ? 'bg-white/5 text-zinc-600 cursor-not-allowed' 
                    : 'bg-white/5 hover:bg-[#F5C842] hover:text-black border border-white/5 group-hover:border-[#F5C842]/50'
                  }`}
                >
                  {item.comingSoon ? 'Notify Me' : 'Connect Integration'}
                </button>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
