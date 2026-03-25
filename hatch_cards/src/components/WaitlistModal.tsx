import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2, Loader2, X } from 'lucide-react';

interface WaitlistModalProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  status: 'idle' | 'submitting' | 'success';
  setStatus: React.Dispatch<React.SetStateAction<'idle' | 'submitting' | 'success'>>;
  formData: {
    email: string;
    name: string;
    useCase: string;
    platform: string;
    otherPlatform: string;
    country: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  finalSubmit: (e: React.FormEvent) => Promise<void>;
}

export default function WaitlistModal({
  step,
  setStep,
  status,
  setStatus,
  formData,
  setFormData,
  finalSubmit,
}: WaitlistModalProps) {
  return (
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
            className="w-full max-w-lg bg-white rounded-[2rem] shadow-2xl relative flex flex-col max-h-[95dvh]"
          >
            <button
              onClick={() => {
                setStep(1);
                setStatus('idle');
              }}
              className="absolute z-10 top-4 right-4 p-2 bg-gray-50/80 backdrop-blur-md hover:bg-gray-100 rounded-full transition-colors cursor-pointer text-gray-500 shadow-sm"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 sm:p-8 lg:p-10 overflow-y-auto overscroll-contain">
              {status === 'success' ? (
                <div className="text-center py-6">
                  <div className="w-20 h-20 bg-green-50 rounded-[1.5rem] flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-3xl font-black text-hatch-charcoal mb-4 tracking-tight">You're on the list!</h3>
                  <p className="text-gray-500 font-medium mb-8 leading-relaxed">
                    We've reserved your spot in line. Keep an eye on <span className="text-hatch-charcoal font-bold">{formData.email}</span> for your exclusive beta invite.
                  </p>

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
                    onClick={() => {
                      setStep(1);
                      setStatus('idle');
                      setFormData({ ...formData, email: '' });
                    }}
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
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                          onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
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
                          onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
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
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
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
  );
}
