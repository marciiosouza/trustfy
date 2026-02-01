import { memo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PartnersNetwork } from "./PartnersNetwork";
import { ConnectContent } from "./ConnectContent";

interface ConnectHeroProps {
  className?: string;
}

export const ConnectHero = memo(({ className = "" }: ConnectHeroProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className={`relative w-full md:h-[897px] min-h-screen ${className}`}>
      <div className="relative w-full h-full max-w-[1923px]">
        {/* Desktop Layout */}
        <div className="hidden md:block h-[897px]">
          {/* Left side - Partners Network */}
          <motion.div
            className="absolute left-[286px] top-[151px] w-[890px] h-[746px]"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <PartnersNetwork isInView={isInView} />
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            className="absolute left-[1090px] top-[183px]"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <ConnectContent isInView={isInView} />
          </motion.div>
        </div>

        {/* Mobile Layout - Stacked vertically */}
        <div className="flex flex-col md:hidden px-6 py-36 pb-8 md:pb-12 gap-12">
          {/* Partners Network on top */}
          <motion.div
            className="w-full relative overflow-visible"
            style={{ 
              paddingBottom: "83.82%", // Mantém proporção 890:746 (746/890 = 0.8382)
              minHeight: "300px",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <PartnersNetwork isInView={isInView} />
            </div>
          </motion.div>

          {/* Content below */}
          <motion.div
            className="w-full flex items-center justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <ConnectContent isInView={isInView} />
          </motion.div>
        </div>
      </div>
    </section>
  );
});

ConnectHero.displayName = "ConnectHero";
