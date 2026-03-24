import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white select-none relative scroll-smooth">
      <div className="bg-hero-pattern absolute top-0 left-0 w-full h-full pointer-events-none opacity-50 z-0"></div>
      <Navbar />
      <Hero />
      <HowItWorks />
      
      {/* Global Footer */}
      <footer className="w-full bg-white border-t border-gray-100 py-8 text-center relative z-20">
        <p className="text-sm font-bold text-gray-400 tracking-wider uppercase">© 2026 Hatch Cards. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
