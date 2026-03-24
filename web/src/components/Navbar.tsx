import { CreditCard } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 bg-white/70 backdrop-blur-lg border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-3 cursor-pointer group">
          <div className="w-10 h-10 rounded-[0.8rem] bg-gradient-to-br from-hatch-orange to-[#d95e40] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <CreditCard className="w-5 h-5 text-white" />
          </div>
          <span className="text-2xl font-black tracking-tight text-hatch-charcoal">Hatch</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="mailto:join@hatchcards.app" className="hidden sm:block text-sm font-bold text-gray-400 hover:text-hatch-orange transition-colors">
            join@hatchcards.app
          </a>
          <span className="px-5 py-2 rounded-full border border-gray-200 bg-white/60 text-sm font-bold text-hatch-orange tracking-wide shadow-sm">
            Launching 13th April
          </span>
        </div>
      </div>
    </nav>
  );
}
