import { Link2, Sparkles, Zap, CheckCircle2 } from 'lucide-react';
import { Task, TaskTrigger, TaskContent, TaskItem } from './ai-elements/task';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-[#F9FAFB] relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-black text-hatch-charcoal mb-6 tracking-tight leading-[1.1]">The Intelligence Loop</h2>
          <p className="text-[clamp(1.125rem,2vw,1.25rem)] text-gray-500 font-medium leading-relaxed">
            A transparent, beautifully simple infrastructure to fund your personal tech stack using your everyday expenses. Watch the system at work:
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100">
          
          <Task className="mb-6 relative pb-6 border-b border-gray-100" defaultOpen={true}>
            <TaskTrigger title="1. Link your daily spending" className="text-lg font-bold text-hatch-charcoal flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100 shadow-sm text-hatch-charcoal shrink-0">
                <Link2 className="w-5 h-5" />
              </div>
              <span>1. Everyday Spending</span>
            </TaskTrigger>
            <TaskContent className="ml-5 border-l-2 border-gray-100 pl-6 mt-4">
              <TaskItem className="mb-3 text-base text-gray-500 font-medium leading-relaxed">
                Use your physical or virtual Hatch Card for normal daily expenses whether that’s buying coffee, groceries, or booking a flight. It functions exactly like a premium, universally accepted credit card.
              </TaskItem>
              <div className="flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1.5 rounded-lg w-fit text-sm font-semibold">
                <CheckCircle2 className="w-4 h-4" /> System monitoring active
              </div>
            </TaskContent>
          </Task>

          <Task className="mb-6 relative pb-6 border-b border-gray-100" defaultOpen={true}>
            <TaskTrigger title="2. Automatically compute rewards" className="text-lg font-bold text-hatch-charcoal flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100 shadow-sm text-hatch-charcoal shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <span>2. Earn Compute Passively</span>
            </TaskTrigger>
            <TaskContent className="ml-5 border-l-2 border-gray-100 pl-6 mt-4">
              <TaskItem className="mb-3 text-base text-gray-500 font-medium leading-relaxed">
                Forget fractional pennies or confusing travel points. Every time you swipe, you instantly generate Hatch Credits. You passively build a reservoir of AI compute power without spending an extra dime.
              </TaskItem>
              <div className="flex flex-col gap-2 p-3 bg-gray-50 rounded-xl border border-gray-100 font-mono text-sm text-gray-500">
                <span className="text-hatch-charcoal">{'>'} Extracting transaction amount: $120.00</span>
                <span className="text-hatch-orange">{'>'} Generating Hatch Credits: +12,000</span>
                <span className="text-green-600 font-bold">{'>'} Credits deposited securely</span>
              </div>
            </TaskContent>
          </Task>

          <Task className="relative" defaultOpen={true}>
            <TaskTrigger title="3. Provision API tokens" className="text-lg font-bold text-hatch-charcoal flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-hatch-orange to-[#d95e40] flex items-center justify-center shadow-md text-white shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-hatch-orange to-[#d95e40]">3. Power Your Tech Stack</span>
            </TaskTrigger>
            <TaskContent className="ml-5 border-l-2 border-hatch-orange/30 pl-6 mt-4">
              <TaskItem className="mb-4 text-base text-gray-600 font-medium leading-relaxed">
                Eliminate the friction of juggling subscriptions and API limits. Connect your Claude, Gemini, or OpenAI accounts, and let your accumulated credits automatically pay for your most critical tools.
              </TaskItem>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-600 shadow-sm">OpenAI Connected</span>
                <span className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-600 shadow-sm">Anthropic Connected</span>
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse ml-2" />
                <span className="text-xs font-bold text-green-600">Provisioning continuous</span>
              </div>
            </TaskContent>
          </Task>

        </div>

        {/* Why It Matters */}
        <div className="mt-24 p-10 md:p-16 rounded-[2.5rem] bg-hatch-charcoal text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 100% 0%, var(--color-hatch-orange) 0%, transparent 50%)' }} />
          <div className="relative z-10 max-w-3xl">
            <h3 className="text-3xl font-black mb-6 flex items-center gap-3">
              Why It Matters <Sparkles className="w-6 h-6 text-hatch-orange" />
            </h3>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-medium">
              For developers, founders, and power users, managing API costs and juggling multiple AI subscriptions is a growing overhead. Hatch Cards eliminates this friction. By turning inevitable daily expenses into an automated funding stream for your most critical tools, Hatch Cards ensures you never have to throttle your prompts, limit your queries, or worry about hitting a billing ceiling again.
              <br /><br />
              <span className="text-white font-bold inline-block border-b-2 border-hatch-orange pb-1">Your spending directly finances your scaling.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
