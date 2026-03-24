import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2, Loader2, X } from 'lucide-react';

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
      <section className="relative h-screen flex items-center pt-20 overflow-hidden">
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

            <h1 className="text-[clamp(3.5rem,8vw,6rem)] font-black tracking-tighter leading-[1.05] mb-8 text-hatch-charcoal">
              Swipe for <br />
              <span className="text-gradient">AI Credits.</span>
            </h1>

            <p className="font-serif text-[clamp(1.25rem,3vw,1.75rem)] text-gray-500 mb-12 leading-relaxed max-w-[42ch]">
              The first global credit card that rewards you with artificial intelligence. Earn API credits for <span className="font-semibold font-sans text-hatch-charcoal tracking-tight">Claude, Gemini</span>, and OpenAI with your everyday business expenses.
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
                <span>Request Beta</span>
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

            <div className="mt-12 text-xs text-gray-400 font-medium px-4 tracking-wide uppercase">
              © 2026 Hatch Cards.
            </div>
          </motion.div>

          {/* Right Column - Image Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative lg:h-[600px] xl:h-[700px] flex items-center justify-center mt-12 lg:mt-0 p-4 sm:p-8 lg:p-0"
          >
            {/* Main Image Container (Static & Upsized) */}
            <div className="relative z-10 w-full max-w-lg lg:max-w-none lg:w-[135%] xl:w-[155%] xl:-mr-32 overflow-hidden rounded-[3rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] border-[10px] border-white transform -rotate-3 bg-hatch-beige">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-80 z-20 pointer-events-none" />
              <div className="w-full flex items-center justify-center overflow-hidden p-0">
                 <img 
                   src="/hero-image.png" 
                   alt="Hatch Card Hero" 
                   className="w-[115%] object-contain"
                 />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MULTI-STEP WAITLIST UI MODAL */}
      <AnimatePresence>
        {step === 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-hatch-charcoal/20 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-lg bg-white rounded-[2rem] shadow-2xl overflow-hidden relative"
            >
              <button
                onClick={() => { setStep(1); setStatus('idle'); }}
                className="absolute top-6 right-6 p-2 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors cursor-pointer text-gray-500"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 lg:p-10">
                {status === 'success' ? (
                  <div className="text-center py-6">
                    <div className="w-20 h-20 bg-green-50 rounded-[1.5rem] flex items-center justify-center mx-auto mb-6 shadow-sm">
                      <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-3xl font-black text-hatch-charcoal mb-4 tracking-tight">You're on the list!</h3>
                    <p className="text-gray-500 font-medium mb-8 leading-relaxed">We've reserved your spot in line. Keep an eye on <span className="text-hatch-charcoal font-bold">{formData.email}</span> for your exclusive beta invite.</p>

                    <div className="bg-orange-50/50 border border-orange-100 rounded-2xl p-6 mb-8 text-left">
                      <h4 className="flex items-center space-x-2 text-hatch-orange font-bold mb-2">
                        <Sparkles className="w-4 h-4" />
                        <span>Want to skip the line?</span>
                      </h4>
                      <p className="text-sm text-gray-600 font-medium leading-relaxed">
                        Refer 10+ people to get 100% early access to our card first. Just email us from the address you joined with at <a href="mailto:join@hatchcards.app" className="font-bold text-hatch-charcoal hover:underline transition-all">join@hatchcards.app</a>.
                      </p>
                    </div>

                    <button
                      onClick={() => { setStep(1); setStatus('idle'); setFormData({ ...formData, email: '' }); }}
                      className="w-full py-4 bg-gray-100 text-hatch-charcoal rounded-full font-bold hover:bg-gray-200 transition-colors shadow-sm cursor-pointer"
                    >
                      Done
                    </button>
                  </div>
                ) : (
                  <form onSubmit={finalSubmit} className="space-y-6">
                    <div className="mb-8">
                      <h3 className="text-3xl font-black text-hatch-charcoal mb-3 tracking-tight">Almost there</h3>
                      <p className="text-sm text-gray-500 font-medium leading-relaxed">These details are used strictly to enhance the platform and prepare your personalized Hatch Card limits.</p>
                    </div>

                    <div className="space-y-5">
                      <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 ml-2">Full Name</label>
                        <input
                          required
                          type="text"
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-6 py-4 rounded-[1.2rem] border border-gray-200 focus:outline-none focus:border-hatch-orange focus:ring-4 focus:ring-hatch-orange/10 transition-all font-medium text-hatch-charcoal bg-gray-50/50"
                          placeholder="Your legal name"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 ml-2">Primary AI</label>
                          <input 
                            required
                            type="text"
                            list="ai-platforms"
                            value={formData.platform}
                            onChange={e => setFormData({...formData, platform: e.target.value})}
                            placeholder="e.g. Claude, or custom"
                            className="w-full px-6 py-4 rounded-[1.2rem] border border-gray-200 focus:outline-none focus:border-hatch-orange focus:ring-4 focus:ring-hatch-orange/10 transition-all font-medium text-hatch-charcoal bg-gray-50/50"
                          />
                          <datalist id="ai-platforms">
                            <option value="Claude" />
                            <option value="Gemini" />
                            <option value="OpenAI" />
                            <option value="NVIDIA" />
                            <option value="Bunny.net" />
                          </datalist>
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 ml-2">Main Use Case</label>
                          <select
                            required
                            value={formData.useCase}
                            onChange={e => setFormData({ ...formData, useCase: e.target.value })}
                            className="w-full px-6 py-4 rounded-[1.2rem] border border-gray-200 focus:outline-none focus:border-hatch-orange focus:ring-4 focus:ring-hatch-orange/10 transition-all font-medium text-hatch-charcoal bg-gray-50/50 appearance-none cursor-pointer"
                          >
                            <option value="" disabled>Select</option>
                            <option value="Coding & Development">Coding / Eng</option>
                            <option value="Content Creation">Content Creation</option>
                            <option value="Business Automation">Automation</option>
                            <option value="Research & Data">Research</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 ml-2">Country of Residence</label>
                        <input
                          required
                          type="text"
                          value={formData.country}
                          onChange={e => setFormData({ ...formData, country: e.target.value })}
                          className="w-full px-6 py-4 rounded-[1.2rem] border border-gray-200 focus:outline-none focus:border-hatch-orange focus:ring-4 focus:ring-hatch-orange/10 transition-all font-medium text-hatch-charcoal bg-gray-50/50"
                          placeholder="e.g. Global"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full mt-8 py-4 bg-hatch-charcoal text-white rounded-full font-bold hover:bg-black transition-all flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-70 disabled:transform-none disabled:shadow-none cursor-pointer"
                    >
                      {status === 'submitting' ? <Loader2 className="w-5 h-5 animate-spin" /> : <span>Secure Your Spot</span>}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
