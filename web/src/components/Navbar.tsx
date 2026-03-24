import { CreditCard } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 pt-[env(safe-area-inset-top)] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <a 
          href="#"
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-[0.8rem] bg-gradient-to-br from-hatch-orange to-[#d95e40] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <CreditCard className="w-5 h-5 text-white" />
          </div>
          <span className="text-2xl font-black tracking-tight text-hatch-charcoal">Hatch</span>
        </a>
        <div className="flex items-center gap-8">
          <a 
            href="#how-it-works"
            className="text-sm font-bold text-gray-400 hover:text-hatch-charcoal transition-colors cursor-pointer"
          >
            How it Works
          </a>
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
