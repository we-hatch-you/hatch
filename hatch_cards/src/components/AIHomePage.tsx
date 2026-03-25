import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu, CreditCard, Sparkles, Zap } from 'lucide-react';
import { Card, CardContent } from './ui/card';

import { ChainOfThought, ChainOfThoughtHeader, ChainOfThoughtContent, ChainOfThoughtStep } from './ai-elements/chain-of-thought';
import Navbar from './shadcn-space/blocks/navbar-01/navbar';
import Faq from './shadcn-space/blocks/faq-01/faq';
import Footer from './shadcn-space/blocks/footer-01/footer';



type WaitlistStatus = 'idle' | 'submitting' | 'success';

export default function AIHomePage() {
  const [status, setStatus] = useState<WaitlistStatus>('idle');

  const submitWaitlist = async (message: any) => {
    const text = typeof message === 'string' ? message : message.text;
    if (!text || !text.includes('@')) return;

    setStatus('submitting');
    try {
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbypLne7OOpQiMutz2z1KXu6Lb9Y-9QefDa8_OHbJ5fP0nYXq8mBeIXAezyAEJUKAKqu-A/exec';
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ email: text })
      });
      setStatus('success');
    } catch (err) {
      console.error(err);
      setStatus('success');
    }
  };



  return (
    <div className="min-h-screen w-full overflow-x-hidden flex flex-col relative">
      <Navbar />
      {/* 
        HERO SECTION (Adapted exactly from shadcn-space/hero-01) 
        Fixed tailwind v4 legacy syntax and next/font references for Vite.
      */}
      <section className="w-full relative shrink-0">
        <div className="relative w-full pt-20 md:pt-32 pb-16 md:pb-24 before:absolute before:w-full before:h-full before:bg-gradient-to-r before:from-hatch-peach/20 before:via-white before:to-hatch-orange/20 before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-slate-800 dark:before:via-black dark:before:to-stone-700 dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10">
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col max-w-5xl mx-auto gap-10">
              <div className="relative flex flex-col text-center items-center sm:gap-6 gap-4">
                <motion.h1
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="lg:text-[5.5rem] md:text-7xl text-5xl font-medium tracking-tight leading-[1.05]"
                >
                  The credit card that pays you in{" "}
                  <span className="font-serif italic text-hatch-orange tracking-tight">
                    AI compute
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
                  className="text-lg md:text-xl font-medium max-w-2xl text-muted-foreground mt-2"
                >
                  Use your Hatch Card for daily transactions and earn AI credits instead of standard cashback. Convert your rewards directly into tokens for <strong className="text-foreground">OpenAI, Anthropic, Gemini, and NVIDIA.</strong>
                </motion.p>
              </div>

              {/* Supported Platforms Strip Moved Above Input */}
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
                className="w-full flex flex-col items-center justify-center gap-6 mt-6 opacity-70 hover:opacity-100 transition-opacity"
              >
                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm font-bold text-muted-foreground uppercase tracking-wider">
                  <div className="flex items-center gap-2">OpenAI</div>
                  <div className="flex items-center gap-2 font-serif">Anthropic</div>
                  <div className="flex items-center gap-2">Google Gemini</div>
                  <div className="flex items-center gap-2 tracking-widest">NVIDIA</div>
                </div>
              </motion.div>

              {/* Waitlist Input */}
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
                className="flex items-center flex-col justify-center gap-6 w-full max-w-md mx-auto mt-6"
              >
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    submitWaitlist(formData.get('email'));
                  }} 
                  className="flex flex-col sm:flex-row items-center gap-3 w-full"
                >
                  <input
                    type="email"
                    name="email"
                    required
                    disabled={status === 'success' || status === 'submitting'}
                    placeholder={status === 'success' ? "Waitlist joined successfully! 🎉" : "Enter your email address"}
                    className="flex-1 h-14 w-full px-6 rounded-2xl border border-border bg-white dark:bg-zinc-900 text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-hatch-orange/50 transition-all font-medium placeholder:text-muted-foreground disabled:opacity-50"
                  />
                  <button 
                    type="submit" 
                    disabled={status === 'success' || status === 'submitting'}
                    className="h-14 px-8 w-full sm:w-auto rounded-xl bg-hatch-charcoal dark:bg-white text-white dark:text-black font-bold shadow-md hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    {status === 'submitting' ? (
                      <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white dark:border-black/30 dark:border-t-black animate-spin" />
                    ) : status === 'success' ? (
                      'Joined!'
                    ) : (
                      <>Join Waitlist <ArrowUpRight size={18} /></>
                    )}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS: FEATURE 01 + AI ELEMENTS */}
      <section id="how-it-works" className="scroll-mt-24 flex-1 w-full bg-muted/30 py-16 lg:py-24 border-t border-border relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="flex flex-col gap-8 md:gap-12">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="flex flex-col md:flex-row items-center md:items-end justify-center md:justify-between gap-4"
            >
              <div className="flex flex-col gap-4 max-w-full items-center md:items-start text-center md:text-left md:max-w-xl">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                  Your Everyday Spend, Tokenized.
                </h2>
                <p className="text-lg font-normal text-muted-foreground">
                  A beautifully simple financial infrastructure to fund your personal tech stack. Stop paying standard fiat for LLM API keys.
                </p>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-6">
              {/* Left Large Card: The AI Visualizer */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="p-1 sm:p-2 rounded-2xl bg-gradient-to-br from-border/50 to-muted object-cover bg-center h-full w-full bg-cover bg-no-repeat shadow-inner overflow-hidden"
              >
                <Card className="flex flex-col items-start gap-6 pt-6 sm:py-8 border-none ring-0 rounded-xl h-full shadow-2xl bg-background/90 backdrop-blur-xl">
                  <CardContent className="flex flex-col gap-6 px-6 sm:px-8 w-full">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-hatch-orange flex items-center justify-center shadow-[0_0_20px_rgba(238,108,77,0.4)]">
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                        Live Payload Execution
                      </h3>
                    </div>

                    {/* Embedding the AI ChainOfThought inside the Feature Card */}
                    <div className="bg-muted border border-border rounded-2xl p-6 w-full shadow-sm">
                      <ChainOfThought defaultOpen={true}>
                        <ChainOfThoughtHeader className="text-foreground font-semibold">Intercepted Transaction ($45.00 AWS)</ChainOfThoughtHeader>
                        <ChainOfThoughtContent className="mt-4">
                          <ChainOfThoughtStep 
                            icon={CreditCard}
                            label={<span className="text-foreground font-medium">1. Swipe Hatch Card</span>}
                            description="Sourced $45.00 payment for AWS service."
                          />
                          <ChainOfThoughtStep 
                            icon={Zap}
                            label={<span className="text-foreground font-medium">2. Earn AI Cashback</span>}
                            description="Applying standard conversion: $1 = 100 Hatch AI credits."
                          />
                          <ChainOfThoughtStep 
                            icon={Cpu}
                            label={<span className="text-hatch-orange font-bold">3. Compute Allocated</span>}
                            description="Added +4,500 credits to your central OpenAI balance."
                            status="active"
                          />
                        </ChainOfThoughtContent>
                      </ChainOfThought>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Right Grid: Core Features */}
              <div id="rewards" className="scroll-mt-24 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6">
                
                <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}>
                  <Card className="py-8 bg-background ring-0 border border-border h-full hover:border-hatch-orange/50 transition-colors">
                    <CardContent className="w-full h-full px-8 flex flex-col items-start gap-8 justify-between">
                      <CreditCard className="w-8 h-8 text-hatch-orange" strokeWidth={1.5} />
                      <p className="text-base text-foreground font-medium leading-relaxed">
                        Use your Hatch Card for everyday purchases. For every <strong className="text-hatch-orange">$1 you spend</strong>, you earn <strong className="text-hatch-orange">100 Hatch AI credits</strong>.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}>
                  <Card className="py-8 bg-background ring-0 border border-border h-full hover:border-hatch-orange/50 transition-colors">
                    <CardContent className="w-full h-full px-8 flex flex-col items-start gap-8 justify-between">
                      <Zap className="w-8 h-8 text-hatch-orange" strokeWidth={1.5} />
                      <p className="text-base text-foreground font-medium leading-relaxed">
                        No manual conversions. Your rewards automatically accumulate into a central compute vault.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}>
                  <Card className="py-8 bg-background ring-0 border border-border h-full hover:border-hatch-orange/50 transition-colors">
                    <CardContent className="w-full h-full px-8 flex flex-col items-start gap-8 justify-between">
                      <Cpu className="w-8 h-8 text-hatch-orange" strokeWidth={1.5} />
                      <p className="text-base text-foreground font-medium leading-relaxed">
                        Instantly deploy your earned compute balance across models like OpenAI, Claude, and Gemini.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}>
                  <Card className="py-8 bg-background ring-0 border border-border h-full hover:border-hatch-orange/50 transition-colors">
                    <CardContent className="w-full h-full px-8 flex flex-col items-start gap-8 justify-between">
                      <Sparkles className="w-8 h-8 text-hatch-orange" strokeWidth={1.5} />
                      <p className="text-base text-foreground font-medium leading-relaxed">
                        Stop paying out of pocket for LLM API usage. Let your daily coffee fund your next software build.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

              </div>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ SECTION */}
      <div className="w-full bg-background relative shrink-0">
        <Faq />
      </div>

      {/* FINAL CTA SECTION (Adapted from shadcn-space/cta-01) */}
      <section className="w-full bg-background relative shrink-0">
        <div className="sm:py-24 py-16">
          <div className="max-w-7xl mx-auto sm:px-16 px-4">
            <div className="relative overflow-hidden min-h-[400px] flex items-center justify-center px-4 sm:px-6 py-12 border border-border rounded-[2rem] shadow-2xl before:absolute before:w-full before:h-4/5 before:bg-gradient-to-r before:from-hatch-peach/20 before:via-white before:to-hatch-orange/20 before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-slate-800 dark:before:via-black dark:before:to-stone-700 dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10 bg-muted/10">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="flex flex-col gap-8 items-center mx-auto w-full max-w-2xl text-center z-10"
              >
                <div className="flex flex-col gap-4 items-center">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                    Mint continuous intelligence.
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground w-full max-w-lg mx-auto">
                    Link your funding source once. Spend globally. Accumulate pure compute power automatically with every purchase.
                  </p>
                </div>
                {/* Coming Soon Indicator for CTA */}
                <div className="w-full max-w-xl mx-auto mt-6">
                  <div className="inline-flex items-center justify-center px-10 py-4 rounded-2xl bg-hatch-charcoal text-white font-bold text-lg shadow-xl shadow-hatch-orange/5 border border-border">
                    Coming Soon
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <Footer />
    </div>
  );
}
