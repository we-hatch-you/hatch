import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu, CreditCard, Sparkles, Zap } from 'lucide-react';
import { Card, CardContent } from './ui/card';

import { ChainOfThought, ChainOfThoughtHeader, ChainOfThoughtContent, ChainOfThoughtStep } from './ai-elements/chain-of-thought';
import Navbar from './shadcn-space/blocks/navbar-01/navbar';
import Faq from './shadcn-space/blocks/faq-01/faq';
import Footer from './shadcn-space/blocks/footer-01/footer';
import { HatchAIAssistant } from "./HatchAIAssistant";
import { HatchCard3D } from "./HatchCard3D";
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
        {/* Dynamic Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] bg-hatch-orange/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '6s' }} />
          <div className="absolute bottom-[20%] right-[10%] w-[35vw] h-[35vw] bg-hatch-peach/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '8s', animationDelay: '1s' }} />
        </div>
        
        <div className="relative w-full pt-20 md:pt-32 pb-16 md:pb-24">
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
                    className="flex-1 h-14 w-full px-6 rounded-2xl border border-border/50 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl text-foreground shadow-inner focus:outline-none focus:ring-2 focus:ring-hatch-orange/50 transition-all font-medium placeholder:text-muted-foreground disabled:opacity-50"
                  />
                  <button 
                    type="submit" 
                    disabled={status === 'success' || status === 'submitting'}
                    className="h-14 px-8 w-full sm:w-auto rounded-xl bg-hatch-charcoal dark:bg-white text-white dark:text-black font-bold shadow-[0_0_20px_rgba(238,108,77,0.15)] hover:shadow-[0_0_25px_rgba(238,108,77,0.3)] hover:scale-[1.02] transition-all disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-2 whitespace-nowrap group"
                  >
                    {status === 'submitting' ? (
                      <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white dark:border-black/30 dark:border-t-black animate-spin" />
                    ) : status === 'success' ? (
                      'Joined!'
                    ) : (
                      <>Join Waitlist <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" /></>
                    )}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* THE INTELLIGENCE VAULT - VISUAL STORYTELLING */}
      <section className="w-full py-24 bg-zinc-950 dark:bg-black relative overflow-hidden flex flex-col items-center">
         {/* Background Glows */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-xl h-[400px] bg-hatch-orange/5 blur-[120px] rounded-full pointer-events-none" />

         <div className="z-10 text-center mb-16 px-4">
            <motion.h2 
              initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
            >
              Physical Spend. <span className="font-serif italic text-hatch-orange">Digital Compute.</span>
            </motion.h2>
            <motion.p 
              initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
              className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-medium"
            >
              Every transaction you make powers your AI infrastructure. No more separate AWS bills or out-of-pocket API costs.
            </motion.p>
         </div>
         
         <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 relative z-10 px-4">
            {/* 3D Card Side */}
            <motion.div 
               initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }}
               className="flex-1 w-full max-w-[400px] z-20"
            >
               <HatchCard3D />
            </motion.div>
            
            {/* Animated Flow separator */}
            <motion.div 
               initial={{ scaleX: 0, opacity: 0 }} whileInView={{ scaleX: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.4 }}
               className="hidden md:flex flex-col items-center justify-center w-32 xl:w-48 z-10 shrink-0 origin-left"
            >
               {/* Particles flowing right */}
               <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-hatch-orange/40 to-transparent relative overflow-hidden flex items-center">
                   {/* Data Packets */}
                   <motion.div animate={{ left: ["-10%", "110%"] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 0 }} className="absolute w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_white]" />
                   <motion.div animate={{ left: ["-10%", "110%"] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 0.5 }} className="absolute w-1 h-1 bg-white/80 rounded-full shadow-[0_0_5px_white]" />
                   <motion.div animate={{ left: ["-10%", "110%"] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 1 }} className="absolute w-2 h-2 bg-hatch-orange rounded-full shadow-[0_0_15px_#EE6C4D]" />
               </div>
            </motion.div>
            
            {/* Downward flow separator for mobile */}
            <motion.div 
               initial={{ scaleY: 0, opacity: 0 }} whileInView={{ scaleY: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.4 }}
               className="flex md:hidden flex-col items-center justify-center h-20 z-10 shrink-0 origin-top"
            >
               <div className="h-full w-[2px] bg-gradient-to-b from-transparent via-hatch-orange/40 to-transparent relative overflow-hidden flex justify-center">
                   <motion.div animate={{ top: ["-10%", "110%"] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 0 }} className="absolute w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_white]" />
                   <motion.div animate={{ top: ["-10%", "110%"] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 0.5 }} className="absolute w-1 h-1 bg-white/80 rounded-full shadow-[0_0_5px_white]" />
                   <motion.div animate={{ top: ["-10%", "110%"] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 1 }} className="absolute w-2 h-2 bg-hatch-orange rounded-full shadow-[0_0_15px_#EE6C4D]" />
               </div>
            </motion.div>

            {/* AI Core side */}
            <motion.div 
               initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
               className="flex-1 w-full max-w-[400px] flex items-center justify-center z-20"
            >
               <div className="w-56 h-56 md:w-64 md:h-64 rounded-full border border-white/10 bg-black/40 shadow-[0_0_100px_rgba(238,108,77,0.1)] backdrop-blur-3xl relative flex items-center justify-center group overflow-hidden">
                   {/* Core center pulse */}
                   <div className="w-24 h-24 bg-hatch-orange/20 rounded-full blur-[25px] absolute group-hover:scale-150 transition-transform duration-1000 ease-out" />
                   <div className="w-16 h-16 bg-white/5 rounded-full blur-[10px] absolute group-hover:bg-white/10 transition-colors duration-500" />
                   
                   <Cpu className="w-12 h-12 text-white/90 z-10 group-hover:text-hatch-orange transition-colors duration-500 relative" strokeWidth={1.5} />
                   
                   {/* Orbiting rings */}
                   <div className="absolute inset-0 border border-t-hatch-orange/40 border-r-transparent border-b-white/5 border-l-transparent rounded-full animate-[spin_4s_linear_infinite]" />
                   <div className="absolute inset-6 border border-b-white/30 border-r-transparent border-t-hatch-orange/10 border-l-transparent rounded-full animate-[spin_6s_linear_infinite_reverse]" />
                   <div className="absolute inset-12 border border-l-hatch-orange/20 border-r-white/10 border-t-transparent border-b-transparent rounded-full animate-[spin_3s_linear_infinite]" />
                   
                   {/* Text Label */}
                   <div className="absolute bottom-6 text-[10px] uppercase tracking-[0.2em] text-white/40 font-mono">Compute Vault</div>
               </div>
            </motion.div>
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
            
            <div id="rewards" className="scroll-mt-24 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 mt-6">
              
              {/* Card 1: Main Feature (Spans 8 columns) */}
              <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut" }} className="md:col-span-8 group">
                <Card className="h-full border border-border/50 bg-background/50 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-hatch-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardContent className="flex flex-col md:flex-row h-full w-full p-0">
                    <div className="flex-1 p-8 sm:p-10 flex flex-col justify-center">
                      <div className="w-12 h-12 rounded-xl bg-hatch-orange/10 flex items-center justify-center mb-6 border border-hatch-orange/20">
                        <CreditCard className="w-6 h-6 text-hatch-orange" />
                      </div>
                      <h3 className="text-2xl font-bold tracking-tight mb-4">Every swipe builds your vault.</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        Use your Hatch Card for everyday purchases. For every <strong className="text-foreground">$1 you spend</strong>, you automatically earn <strong className="text-foreground">100 Hatch AI credits</strong> directly into your account.
                      </p>
                    </div>
                    {/* Live Payload Visualizer */}
                    <div className="w-full md:w-[40%] bg-muted/30 p-6 md:p-8 flex items-center justify-center border-l border-border/50">
                      <div className="w-full bg-background rounded-2xl p-5 shadow-sm border border-border/50">
                        <ChainOfThought defaultOpen={true}>
                          <ChainOfThoughtHeader className="text-foreground font-semibold text-sm">Intercepted Transaction</ChainOfThoughtHeader>
                          <ChainOfThoughtContent className="mt-4 gap-3 flex flex-col">
                            <ChainOfThoughtStep 
                              icon={CreditCard}
                              label={<span className="text-foreground font-medium text-xs">$45.00 AWS Bill</span>}
                              description="Sourced payment."
                              status="complete"
                            />
                            <div className="h-4 w-0.5 bg-border ml-2.5 my-1" />
                            <ChainOfThoughtStep 
                              icon={Zap}
                              label={<span className="text-foreground font-medium text-xs">Converting to AI</span>}
                              description="Applying $1 = 100 multiplier."
                              status="complete"
                            />
                            <div className="h-4 w-0.5 bg-border ml-2.5 my-1" />
                            <ChainOfThoughtStep 
                              icon={Cpu}
                              label={<span className="text-hatch-orange font-bold text-xs">+4,500 Credits</span>}
                              description="Added to central vault."
                              status="active"
                            />
                          </ChainOfThoughtContent>
                        </ChainOfThought>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Card 2: AI Assistant Demo (Spans 4 columns) */}
              <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }} className="md:col-span-4 h-full">
                 <HatchAIAssistant />
              </motion.div>

              {/* Card 3: Instant Deployment (Spans 5 columns) */}
              <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }} className="md:col-span-5 group">
                <Card className="h-full py-8 border border-border/50 bg-background/50 backdrop-blur-xl shadow-lg hover:shadow-xl hover:border-hatch-peach/50 transition-all duration-500 relative overflow-hidden flex flex-col">
                  {/* Subtle curved background overlay */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-hatch-peach/5 rounded-bl-[100px] -z-10 group-hover:scale-[1.2] group-hover:bg-hatch-peach/10 transition-all duration-700" />
                  
                  <CardContent className="w-full h-full px-8 flex flex-col items-start gap-6 flex-1">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center border border-border shadow-sm group-hover:shadow-md transition-shadow">
                      <Cpu className="w-6 h-6 text-foreground group-hover:text-hatch-orange transition-colors duration-500" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-3">Deploy Instantly.</h3>
                      <p className="text-muted-foreground/90 leading-relaxed font-medium">
                        Route your earned compute balance directly to <strong>OpenAI, Claude, and Gemini</strong> with one click.
                      </p>
                    </div>
                    {/* API Model Tags */}
                    <div className="flex flex-wrap gap-2 mt-auto pt-4">
                      <div className="px-3 py-1.5 rounded-full bg-hatch-charcoal/5 dark:bg-hatch-charcoal border border-border text-xs font-mono text-foreground/80 shadow-sm cursor-default hover:bg-hatch-orange hover:text-white hover:border-hatch-orange transition-colors">gpt-4o</div>
                      <div className="px-3 py-1.5 rounded-full bg-hatch-charcoal/5 dark:bg-hatch-charcoal border border-border text-xs font-mono text-foreground/80 shadow-sm cursor-default hover:bg-hatch-orange hover:text-white hover:border-hatch-orange transition-colors">claude-3-5</div>
                      <div className="px-3 py-1.5 rounded-full bg-hatch-charcoal/5 dark:bg-hatch-charcoal border border-border text-xs font-mono text-foreground/80 shadow-sm cursor-default hover:bg-hatch-orange hover:text-white hover:border-hatch-orange transition-colors">gemini-1.5</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Card 4: Stop paying out of pocket (Spans 7 columns) */}
              <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }} className="md:col-span-7 group">
                <Card className="h-full py-8 border border-border/50 bg-hatch-charcoal dark:bg-[#111] text-white shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.03)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_5s_infinite_linear] pointer-events-none" />
                  
                  {/* JSON Payload Visual right side mask */}
                  <div className="absolute top-0 right-0 h-full w-full sm:w-[60%] bg-gradient-to-l from-black/60 to-transparent pointer-events-none opacity-20 group-hover:opacity-80 transition-opacity duration-700 flex items-center justify-end pr-8 overflow-hidden mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)">
                    <pre className="text-[10px] md:text-xs font-mono text-hatch-peach leading-loose">
{`{
  "object": "chat.completion",
  "model": "gpt-4o",
  "usage": {
    "prompt_tokens": 120,
    "completion_tokens": 45,
    "total_tokens": 165
  },
  "paid_by": "hatch_credits",
  "cost_to_user": "$0.00"
}`}
                    </pre>
                  </div>

                  <CardContent className="w-full h-full px-8 sm:px-10 flex flex-col items-start gap-4 justify-center relative z-10 w-full sm:w-[60%]">
                    <Sparkles className="w-10 h-10 text-hatch-orange mb-2 drop-shadow-[0_0_15px_rgba(238,108,77,0.5)]" strokeWidth={1.5} />
                    <h3 className="text-3xl font-bold tracking-tight mix-blend-plus-lighter">Fund your<br/>next build.</h3>
                    <p className="text-white/60 text-lg max-w-sm leading-relaxed font-medium">
                      Stop paying out of pocket for LLM API usage. Let your daily coffee fund the intelligence behind your software stack.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

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
