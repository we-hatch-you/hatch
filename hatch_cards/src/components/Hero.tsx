import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, PlusIcon, Cpu } from 'lucide-react';
import { PromptInput, PromptInputProvider } from './ai-elements/prompt-input';
import { InputGroup, InputGroupTextarea, InputGroupAddon } from './ui/input-group';
import { Message, MessageContent, MessageResponse } from './ai-elements/message';
import { Conversation, ConversationContent } from './ai-elements/conversation';

export default function Hero() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const finalSubmit = async (message: any) => {
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
      setStatus('success'); // Failsafe
    }
  };

  return (
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

          <div className="max-w-xl">
            <PromptInputProvider>
              <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 p-2 relative transition-all focus-within:ring-4 focus-within:ring-hatch-orange/15 focus-within:border-hatch-orange/30">
                <PromptInput
                  onSubmit={finalSubmit}
                  className="w-full flex"
                >
                  <InputGroup className="flex-1 border-none shadow-none bg-transparent">
                    <div className="pl-4 flex items-center justify-center text-gray-400">
                      <PlusIcon className="w-5 h-5" />
                    </div>
                    <InputGroupTextarea
                      placeholder={status === 'success' ? "Waitlist joined successfully! 🎉" : "Enter your email to join the waitlist..."}
                      className="resize-none text-lg font-medium border-0 focus-visible:ring-0 px-4 placeholder:text-gray-400 bg-transparent py-4 flex-1 h-[60px]"
                      disabled={status === 'success' || status === 'submitting'}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          const form = e.currentTarget.closest('form');
                          form?.requestSubmit();
                        }
                      }}
                    />
                    <InputGroupAddon className="ml-2 flex-shrink-0 flex items-center pr-2">
                      <button 
                        type="submit" 
                        disabled={status === 'success' || status === 'submitting'}
                        className="rounded-full bg-hatch-charcoal text-white hover:bg-black transition-all shadow-md group h-12 px-6 flex items-center justify-center font-bold"
                      >
                        {status === 'submitting' ? (
                          <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        ) : status === 'success' ? (
                          <span>Joined!</span>
                        ) : (
                          <>
                            <span className="mr-2">Join</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                          </>
                        )}
                      </button>
                    </InputGroupAddon>
                  </InputGroup>
                </PromptInput>
              </div>
            </PromptInputProvider>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 px-4">
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
        </motion.div>

        {/* Right Column - AI Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative w-full flex items-center justify-center mt-12 lg:mt-0 lg:ml-8"
        >
          <div className="w-full max-w-lg relative z-10">
             <div className="absolute -top-4 -right-4 bg-hatch-orange text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-xl rotate-12 z-20">
               Live AI Compute
             </div>
             <Conversation className="h-[450px] w-full bg-white/70 backdrop-blur-2xl rounded-[2.5rem] border border-white/50 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col pt-4">
                <ConversationContent className="px-6 py-4 flex-1">
                  <Message from="user" className="mb-6 w-full text-right ml-0 justify-end flex">
                     <MessageContent className="bg-hatch-charcoal text-white rounded-2xl rounded-tr-sm p-4 text-sm max-w-[80%] inline-block text-left shadow-sm ml-auto">
                       Just paid $4.50 for coffee at Starbucks ☕
                     </MessageContent>
                  </Message>
                  <Message from="assistant" className="mb-6 w-full">
                     <MessageContent className="bg-white/90 border border-gray-100 rounded-2xl rounded-tl-sm p-5 shadow-sm text-sm max-w-[90%]">
                       <MessageResponse>
                          **Transaction Detected!** 💳
                          
                          You earned **450 Hatch Credits** from your $4.50 purchase.
                       </MessageResponse>
                       <div className="mt-4 p-3 bg-gradient-to-r from-hatch-orange/10 to-transparent border-l-4 border-hatch-orange rounded-r-xl flex items-center gap-3">
                         <div className="bg-white p-1.5 rounded-lg shadow-sm">
                           <Cpu className="text-hatch-orange w-4 h-4" />
                         </div>
                         <div className="flex flex-col">
                           <span className="font-bold text-gray-800 text-xs">OpenAI Credits Provisioned</span>
                           <span className="text-gray-500 text-xs">450 tokens ready for use</span>
                         </div>
                       </div>
                     </MessageContent>
                  </Message>
                </ConversationContent>
             </Conversation>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
