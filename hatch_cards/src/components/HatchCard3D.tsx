import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function HatchCard3D() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  // Rotate based on mouse position
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17deg", "-17deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17deg", "17deg"]);

  // Calculate dynamic glare overlay translating visually across the card
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["-100%", "200%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["-100%", "200%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      style={{ perspective: 1200 }}
      className="relative w-full aspect-[1.586/1] max-w-[380px] mx-auto flex items-center justify-center p-4 cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full h-full rounded-[20px] bg-gradient-to-br from-white/15 via-white/5 to-white/10 dark:from-white/10 dark:to-white/5 border-t border-l border-white/20 dark:border-white/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] dark:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)] backdrop-blur-2xl overflow-hidden group"
      >
        {/* Dynamic Glare Overlay */}
        <motion.div 
            className="absolute inset-0 w-[150%] h-[150%] bg-gradient-to-tr from-transparent via-white/25 dark:via-white/15 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
            style={{ 
              x: glareX, 
              y: glareY,
              filter: "blur(20px)"
            }}
        />
         
        {/* Card Content rendered with slight Z-translation for parallax */}
        <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-7" style={{ transform: "translateZ(30px)" }}>
          {/* Top Row: Chip and Logo */}
          <div className="flex justify-between items-start">
            <div className="w-12 h-[34px] rounded-[4px] bg-gradient-to-br from-zinc-300 via-zinc-400 to-zinc-500 overflow-hidden relative shadow-inner">
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[0.5px] bg-black/20" />
              <div className="absolute inset-y-0 left-1/3 -translate-x-1/2 w-[0.5px] bg-black/20" />
              <div className="absolute inset-y-0 right-1/3 translate-x-1/2 w-[0.5px] bg-black/20" />
              <div className="absolute top-[3px] left-[3px] w-2 h-2 border-b border-r border-black/10 rounded-br-sm" />
            </div>
            <div className="text-white/80 dark:text-white/90 font-mono text-[11px] uppercase tracking-[0.3em] ml-2">HATCH</div>
          </div>
            
          {/* Bottom Row: Number & Details */}
          <div className="mt-8 space-y-5">
            <div className="flex gap-4 items-center">
              <div className="text-[20px] sm:text-2xl tracking-[0.2em] text-white/95 font-mono drop-shadow-sm select-none mix-blend-overlay">
                •••• •••• •••• 9021
              </div>
            </div>
            <div className="flex justify-between items-end w-full">
              <div className="flex flex-col gap-0.5">
                <span className="text-[8px] sm:text-[9px] text-white/50 uppercase tracking-widest font-semibold mix-blend-overlay">Cardholder</span>
                <span className="text-xs sm:text-sm text-white/90 font-medium tracking-wide uppercase shadow-sm">Pioneer Member</span>
              </div>
              <div className="flex flex-col text-right gap-0.5">
                <span className="text-[8px] sm:text-[9px] text-white/50 uppercase tracking-widest font-semibold mix-blend-overlay">Valid Thru</span>
                <span className="text-xs sm:text-sm text-white/90 font-mono tracking-widest">12/30</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
