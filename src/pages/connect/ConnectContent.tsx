import { memo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { CONNECT_CONTENT } from "./constants";

interface ConnectContentProps {
  className?: string;
  isInView?: boolean;
}

export const ConnectContent = memo(
  ({ className = "", isInView = false }: ConnectContentProps) => {
    const { title, description, ctaText, ctaLink } = CONNECT_CONTENT;

    return (
      <div className={`flex flex-col items-end ${className}`}>
        {/* Heading - position: top 183px */}
        <motion.h2
          className="text-end flex flex-col font-neue-montreal font-bold text-[2.5rem] md:text-[68px] leading-[1.2] md:leading-15.5  tracking-[-1.12px] text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          {title}
        </motion.h2>

        {/* Description - position: top 260px (77px abaixo do título) */}
        <motion.p
          className="font-normal text-[24px] leading-7.5 mt-4  text-[rgba(255,255,255,0.7)] max-w-[528px] text-right"
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
        >
          <Button
            asChild
            className="w-[319px] h-[60px] bg-[#7861FF] hover:bg-[#6951EE] text-white rounded-[8px] relative overflow-hidden mt-[82px]"
            style={{
              boxShadow:
                "0px 4px 40px rgba(120, 97, 255, 0.3), inset 0px 4px 24px rgba(255, 255, 255, 0.3)",
              border: "1px solid rgba(255, 255, 255, 0.5)",
            }}
          >
            <motion.a
              href={ctaLink}
              className="flex items-center justify-center gap-3"
              whileHover="hover"
              initial="initial"
            >
              <span
                className="text-[16px] leading-[19px] tracking-[-0.32px] font-semibold"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {ctaText}
              </span>
              <motion.div
                variants={{
                  initial: { x: 0 },
                  hover: { x: 5 },
                }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight className="w-6 h-6" strokeWidth={1.5} />
              </motion.div>
            </motion.a>
          </Button>
        </motion.div>
      </div>
    );
  },
);

ConnectContent.displayName = "ConnectContent";
