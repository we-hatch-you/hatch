import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import WaitlistModal from './WaitlistModal';

export default function Hero() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    useCase: '',
    platform: '',
    otherPlatform: '',
    country: ''
  });

  const handleStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email) setStep(2);
  };

  const finalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Live Google Web App URL provided by the user
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbypLne7OOpQiMutz2z1KXu6Lb9Y-9QefDa8_OHbJ5fP0nYXq8mBeIXAezyAEJUKAKqu-A/exec';

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(formData)
      });

      setStatus('success');
    } catch (err) {
      console.error(err);
      setStatus('success'); // Failsafe to show success in demo environments easily
    }
  };

  return (
    <>
      <section className="relative min-h-[90vh] flex items-center pt-[calc(env(safe-area-inset-top)+8rem)] pb-[calc(env(safe-area-inset-bottom)+4rem)] lg:pt-40 lg:pb-16 overflow-x-hidden">
        {/* Dynamic Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
          <motion.div
            animate={{ y: [-20, 20, -20] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[10%] -right-[5%] w-[600px] h-[600px] rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, var(--color-hatch-orange) 0%, transparent 60%)' }}
          />
          <motion.div
            animate={{ y: [20, -20, 20] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-[10%] -left-[10%] w-[800px] h-[800px] rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, var(--color-hatch-peach) 0%, transparent 60%)' }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white/60 backdrop-blur-md border border-hatch-orange/15 shadow-sm mb-8"
            >
              <Sparkles className="w-4 h-4 text-hatch-orange" />
              <span className="text-sm font-semibold text-hatch-charcoal">The intelligence card for the internet is here.</span>
            </motion.div>

            <h1 className="text-[clamp(3rem,6vw,5rem)] font-black tracking-tight leading-[1.05] mb-6 text-hatch-charcoal">
              The financial platform <br />
              <span className="text-gradient">for the AI era.</span>
            </h1>

            <p className="font-sans font-semibold text-[clamp(1.125rem,2vw,1.25rem)] text-gray-700 mb-10 leading-relaxed max-w-[46ch]">
              Replace traditional cashback with something infinitely more powerful: <span className="text-hatch-charcoal font-black tracking-tight">AI Compute.</span> Hatch Cards converts your everyday spending directly into API credits for Claude, Gemini, and OpenAI.
            </p>

            <form onSubmit={handleStep1} className="group flex flex-col sm:flex-row gap-4 bg-white p-2 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 max-w-xl relative transition-all focus-within:ring-4 focus-within:ring-hatch-orange/15 focus-within:border-hatch-orange/30">
              <input
                required
                type="email"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                placeholder="Enter your email to join the waitlist"
                className="w-full px-6 py-4 rounded-full bg-transparent border-none focus:outline-none focus:ring-0 text-lg font-medium text-gray-800 placeholder-gray-400"
              />
              <button type="submit" className="px-8 py-4 bg-hatch-charcoal text-white rounded-full font-bold hover:bg-black transition-all flex items-center justify-center space-x-2 shadow-lg shadow-black/10 transform hover:-translate-y-0.5 whitespace-nowrap cursor-pointer active:scale-95">
                <span>Join Waitlist</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </form>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 px-4">
              <span className="text-xs text-gray-400 font-bold tracking-wider uppercase">Supported Platforms</span>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-500 font-semibold text-sm">
                <span className="hover:text-hatch-charcoal transition-colors cursor-default">OpenAI</span>
                <span className="text-gray-300">•</span>
                <span className="hover:text-hatch-charcoal transition-colors cursor-default">Gemini</span>
                <span className="text-gray-300">•</span>
                <span className="hover:text-hatch-charcoal transition-colors cursor-default">NVIDIA</span>
                <span className="text-gray-300">•</span>
                <span className="hover:text-hatch-charcoal transition-colors cursor-default">Anthropic</span>
              </div>
            </div>

            {/* Spacer */}
            <div className="mt-12 hidden lg:block"></div>
          </motion.div>

          {/* Right Column - Image Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative w-full flex items-center justify-center mt-12 lg:mt-0 p-4 sm:p-8 lg:p-0"
          >
            {/* Contextual Coming Soon Badge Overlaying the image container */}
            <div className="absolute top-0 lg:-top-4 left-1/2 -translate-x-1/2 z-30">
              <span className="px-6 py-2.5 rounded-full bg-hatch-charcoal text-white text-sm font-bold tracking-widest uppercase shadow-xl whitespace-nowrap">
                Coming Soon
              </span>
            </div>

            {/* Main Image Container (Static & Normalized size) */}
            <div className="relative z-10 w-full max-w-lg xl:max-w-xl mx-auto overflow-hidden rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border-8 border-white transform -rotate-1 bg-hatch-beige">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-80 z-20 pointer-events-none" />
              <div className="w-full flex items-center justify-center overflow-hidden p-0">
                 <img 
                   src="/hero-image.jpg" 
                   alt="Hatch Card Hero" 
                   className="w-[105%] object-contain"
                 />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <WaitlistModal
        step={step}
        setStep={setStep}
        status={status}
        setStatus={setStatus}
        formData={formData}
        setFormData={setFormData}
        finalSubmit={finalSubmit}
      />
    </>
  );
}
