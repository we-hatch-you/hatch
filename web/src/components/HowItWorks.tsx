import { Link2, Sparkles, Zap } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-black text-hatch-charcoal mb-6 tracking-tight leading-[1.1]">How Hatch Cards Work</h2>
          <p className="text-[clamp(1.125rem,2vw,1.25rem)] text-gray-500 font-medium leading-relaxed">
            A transparent, beautifully simple infrastructure to fund your personal tech stack using your everyday expenses.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="relative p-8 rounded-[2rem] bg-gray-50/50 border border-gray-100 hover:border-gray-200 transition-colors">
            <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 flex items-center justify-center mb-6 shadow-sm text-hatch-charcoal">
              <Link2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-hatch-charcoal mb-4">1. Everyday Spending</h3>
            <p className="text-gray-500 font-medium leading-relaxed">
              Use your physical or virtual Hatch Card for normal daily expenses whether that’s buying coffee, groceries, or booking a flight. It functions exactly like a premium, universally accepted credit card.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative p-8 rounded-[2rem] bg-gray-50/50 border border-gray-100 hover:border-gray-200 transition-colors">
            <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 flex items-center justify-center mb-6 shadow-sm text-hatch-charcoal">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-hatch-charcoal mb-4">2. Earn Compute Passively</h3>
            <p className="text-gray-500 font-medium leading-relaxed">
              Forget fractional pennies or confusing travel points. Every time you swipe, you instantly generate Hatch Credits. You passively build a reservoir of AI compute power without spending an extra dime.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative p-8 rounded-[2rem] bg-gray-50/50 border border-hatch-orange/15 shadow-[0_8px_30px_rgb(217,94,64,0.06)]">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-hatch-orange to-[#d95e40] flex items-center justify-center mb-6 shadow-md text-white">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-hatch-charcoal mb-4">3. Power Your Tech Stack</h3>
            <p className="text-gray-500 font-medium leading-relaxed">
              Eliminate the friction of juggling subscriptions and API limits. Connect your Claude, Gemini, or OpenAI accounts, and let your accumulated credits automatically pay for your most critical tools.
            </p>
          </div>
        </div>

        {/* Why It Matters */}
        <div className="mt-24 p-10 md:p-16 rounded-[2.5rem] bg-hatch-charcoal text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 100% 0%, var(--color-hatch-orange) 0%, transparent 50%)' }} />
          <div className="relative z-10 max-w-3xl">
            <h3 className="text-3xl font-black mb-6">Why It Matters</h3>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-medium">
              For developers, founders, and power users, managing API costs and juggling multiple AI subscriptions is a growing overhead. Hatch Cards eliminates this friction. By turning inevitable daily expenses into an automated funding stream for your most critical tools, Hatch Cards ensures you never have to throttle your prompts, limit your queries, or worry about hitting a billing ceiling again.
              <br /><br />
              <span className="text-white font-bold">Your spending directly finances your scaling.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
