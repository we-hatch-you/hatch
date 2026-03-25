import { motion } from 'framer-motion';

const PLATFORMS = [
  { name: 'Claude', desc: 'Anthropic AI', icon: 'C', color: 'from-[#D5F0E6] to-[#E8F8F2]', text: 'text-[#2D9B78]' },
  { name: 'Gemini', desc: 'Google AI', icon: 'G', color: 'from-[#E1ECFB] to-[#F0F5FD]', text: 'text-[#4185F4]' },
  { name: 'Bunny', desc: 'Bunny.net CDN', icon: 'B', color: 'from-[#FFE8E1] to-[#FFF1ED]', text: 'text-[#FF6B35]' },
  { name: 'ChatGPT', desc: 'OpenAI', icon: 'O', color: 'from-[#E1E7EE] to-[#EEF2F6]', text: 'text-[#10A37F]' },
];

export default function Integrations() {
  return (
    <section className="py-32 bg-white relative" id="integrations">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-hatch-orange font-bold tracking-wider uppercase text-sm mb-4 block"
          >
            The Ecosystem
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-black mb-6 tracking-tight text-hatch-charcoal"
          >
            Power your workflow. <br/> Pay with Hatch.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            Spend your Hatch credits instantly across these leading platforms directly from your unified dashboard.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {PLATFORMS.map((platform, i) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group p-8 lg:p-10 rounded-[2rem] border-2 border-transparent hover:border-gray-100 bg-white shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] cursor-pointer transition-all duration-300"
            >
              <div className={`w-20 h-20 mx-auto mb-8 bg-gradient-to-br ${platform.color} rounded-[1.5rem] flex items-center justify-center transform group-hover:rotate-6 shadow-sm transition-transform duration-300`}>
                 <span className={`font-black text-3xl ${platform.text}`}>{platform.icon}</span>
              </div>
              <h3 className="font-bold text-2xl mb-2 text-hatch-charcoal text-center tracking-tight">{platform.name}</h3>
              <p className="text-base text-gray-500 font-medium text-center">{platform.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
