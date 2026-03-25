import { useState } from "react";
import type { FormEvent } from "react";
import { Message, MessageContent, MessageResponse } from "./ai-elements/message";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function HatchAIAssistant() {
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Welcome to Hatch. Your current API compute balance is **4,500 credits**. How can I allocate this for you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;
    
    // Add user message
    setMessages(prev => [...prev, { role: "user", text: input }]);
    setInput("");
    setIsTyping(true);
    
    // Simulate AI response stream
    setTimeout(() => {
      setMessages(prev => [...prev, { role: "assistant", text: "Processing your request..." }]);
      
      setTimeout(() => {
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].text = "Successfully converted your transaction into **1,200 Claude 3.5 Sonnet tokens** and securely added them to your vault.\n\nYou have **5,700 credits** total remaining.";
          return newMessages;
        });
        setIsTyping(false);
      }, 1500);
    }, 600);
  };

  return (
    <div className="flex flex-col h-[450px] w-full rounded-2xl border border-border/50 bg-background/80 backdrop-blur-2xl shadow-xl overflow-hidden relative group">
      {/* Subtle glowing background shift */}
      <div className="absolute inset-0 bg-gradient-to-br from-hatch-orange/5 via-transparent to-hatch-peach/5 opacity-50 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />
      
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-4 border-b border-border/50 bg-muted/30">
        <div className="w-8 h-8 rounded-full bg-hatch-orange flex items-center justify-center shadow-[0_0_15px_rgba(238,108,77,0.4)]">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-foreground tracking-tight">Hatch Engine</h3>
          <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-widest">Active Connection</p>
        </div>
      </div>
      
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-5 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
        <AnimatePresence>
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <Message from={msg.role as any}>
                <MessageContent className={msg.role === 'assistant' ? 'bg-muted/50 text-foreground border border-border/30 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm' : 'bg-hatch-charcoal dark:bg-white text-white dark:text-black rounded-2xl rounded-tr-sm px-4 py-3 shadow-md'}>
                  <MessageResponse className="prose prose-sm dark:prose-invert max-w-none prose-p:leading-relaxed prose-strong:text-hatch-orange">
                    {msg.text}
                  </MessageResponse>
                </MessageContent>
              </Message>
            </motion.div>
          ))}
        </AnimatePresence>
        {isTyping && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="flex gap-1 items-center bg-muted/50 w-fit px-4 py-3 rounded-2xl rounded-tl-sm border border-border/30"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 animate-bounce"></div>
          </motion.div>
        )}
      </div>
      
      {/* Input */}
      <div className="p-4 bg-background/95 backdrop-blur-xl border-t border-border/50">
         <form onSubmit={handleSubmit} className="flex gap-2 relative group-focus-within:ring-1 group-focus-within:ring-hatch-orange/50 rounded-xl transition-all">
           <input 
             className="flex-1 bg-muted/40 border border-border/50 hover:border-border rounded-xl pl-4 pr-12 py-3.5 text-sm focus:outline-none transition-all font-medium placeholder:text-muted-foreground/70"
             placeholder="Message Hatch AI..."
             value={input}
             onChange={e => setInput(e.target.value)}
             disabled={isTyping}
           />
           <button 
            type="submit" 
            disabled={isTyping || !input.trim()}
            className="absolute right-1.5 top-1.5 bottom-1.5 aspect-square flex items-center justify-center bg-hatch-orange text-white rounded-lg hover:bg-hatch-peach transition-colors disabled:opacity-50 disabled:hover:bg-hatch-orange"
           >
             <ArrowUpRight className="w-5 h-5" />
           </button>
         </form>
      </div>
    </div>
  );
}
