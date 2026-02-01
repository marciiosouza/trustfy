import { memo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useMediaQuery } from "@/lib/useMediaQuery";
import { CONNECT_CONTENT } from "./constants";

interface ConnectContentProps {
  className?: string;
  isInView?: boolean;
}

export const ConnectContent = memo(
  ({ className = "", isInView = false }: ConnectContentProps) => {
    const { title, description } = CONNECT_CONTENT;
    const isMobile = !useMediaQuery("(min-width: 768px)");

    return (
      <div className={`flex flex-col items-center md:items-end ${className}`}>
        {/* Heading - position: top 183px */}
        <motion.h2
          className="flex flex-col font-neue-montreal font-bold text-[2rem] md:text-[65px] leading-[1.15] md:leading-15.5 tracking-[-0.02em] md:tracking-[-1.12px] text-white text-center md:text-right"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          {title}
        </motion.h2>

        {/* Description - position: top 260px (77px abaixo do título) */}
        <motion.p
          className="font-normal text-center md:text-end max-w-[340px] md:max-w-[568px] tracking-[0.5px] md:tracking-[1.46px] text-[15px] md:text-[22px] leading-relaxed md:leading-7.5 text-[rgba(255,255,255,0.7)] mt-2 md:mt-8 mb-5 md:mb-16"
          style={{ fontFamily: "'PP Neue Montreal', sans-serif " }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
        >
          {description}
        </motion.p>

        {/* CTA Button - position: top 383px (123px abaixo da descrição) */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 20, scale: 0.95 }
          }
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className={isMobile ? "w-full mx-[-6]" : ""}
        >
          <Button asChild>
            <motion.button
              className="relative w-full md:w-[319px] h-[56px] md:h-[60px] bg-[#7861FF] rounded-[8px] flex items-center justify-center group transition-all"
              style={{
                boxShadow:
                  "0px 4px 40px rgba(120, 97, 255, 0.3), inset 0px 4px 24px rgba(255, 255, 255, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className=" font-medium text-[16px] text-white">
                Fazer orçamento
              </span>
              <ArrowRight className="w-6 h-6 text-white" />
            </motion.button>
          </Button>
        </motion.div>
      </div>
    );
  },
);

ConnectContent.displayName = "ConnectContent";
