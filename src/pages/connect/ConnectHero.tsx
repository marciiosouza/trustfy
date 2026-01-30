import { memo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PartnersNetwork } from "./PartnersNetwork";
import { ConnectContent } from "./ConnectContent";

interface ConnectHeroProps {
  className?: string;
}

export const ConnectHero = memo(({ className = "" }: ConnectHeroProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className={`relative w-full h-[897px] ${className}`}>
      <div className="relative w-full h-full max-w-[1923px] ">
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
    </section>
  );
});

ConnectHero.displayName = "ConnectHero";
