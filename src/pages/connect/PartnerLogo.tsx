import { memo } from "react";
import { motion } from "framer-motion";
import type { Partner } from "./types";

interface PartnerLogoProps {
  partner: Partner;
  isInView?: boolean;
  index: number;
}

export const PartnerLogo = memo(
  ({ partner, isInView = false, index }: PartnerLogoProps) => {
    const { name, logo, position, size } = partner;

    return (
      <motion.div
        className="absolute"
        style={{
          left: `${position.x}%`,
          top: `${position.y}%`,
        }}
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={
          isInView
            ? { opacity: 1, scale: 1, y: 0 }
            : { opacity: 0, scale: 0, y: 20 }
        }
        transition={{
          duration: 0.6,
          delay: 0.5 + index * 0.1,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        <img
          src={logo}
          alt={name}
          className="object-contain cursor-pointer w-[50%] md:w-auto h-auto"
          style={{
            maxWidth: `${size.width}px`,
            maxHeight: `${size.height}px`,
          }}
        />
      </motion.div>
    );
  },
);

PartnerLogo.displayName = "PartnerLogo";
