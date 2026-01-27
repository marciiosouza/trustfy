import { memo } from "react";
import { motion } from "motion/react";
import { PartnersNetwork } from "./PartnersNetwork";
import { ConnectContent } from "./ConnectContent";

interface ConnectHeroProps {
  className?: string;
}

export const ConnectHero = memo(({ className = "" }: ConnectHeroProps) => {
  return (
    <section className={`relative w-full h-[897px] ${className}`}>
      <div className="relative w-full h-full max-w-[1923px] mx-auto">
        {/* Left side - Partners Network */}
        <motion.div
          className="absolute left-[290px] top-[151px] w-[890px] h-[746px]"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <PartnersNetwork />
        </motion.div>

        {/* Right side - Content */}
        <motion.div
          className="absolute left-[1041px] top-[183px]"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <ConnectContent />
        </motion.div>
      </div>
    </section>
  );
});

ConnectHero.displayName = "ConnectHero";
