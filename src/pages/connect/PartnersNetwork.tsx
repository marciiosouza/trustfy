import { memo } from "react";
import { motion } from "framer-motion";
import { ConnectArcs } from "./ConnectArcs";
import { PartnerLogo } from "./PartnerLogo";
import { PARTNERS } from "./constants";

interface PartnersNetworkProps {
  className?: string;
  isInView?: boolean;
}

export const PartnersNetwork = memo(
  ({ className = "", isInView = false }: PartnersNetworkProps) => {
    return (
      <div className={`relative w-full h-full ${className}`}>
        {/* Background gradient glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-violet-600/20 via-transparent to-transparent opacity-50"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.5 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        />

        {/* Arcs container - posicionado no centro */}
        <div className="absolute inset-0 flex items-center justify-center">
          <ConnectArcs
            className="w-full h-full max-w-[890px] max-h-[746px]"
            isInView={isInView}
          />
        </div>

        {/* Partner logos */}
        <div className="absolute inset-0">
          {PARTNERS.map((partner, index) => (
            <PartnerLogo
              key={partner.id}
              partner={partner}
              isInView={isInView}
              index={index}
            />
          ))}
        </div>

        {/* Decorative glowing dots */}
        <motion.div
          className="absolute w-[10px] h-[10px] bg-[#7861FF] rounded-full animate-pulse"
          style={{
            left: "318px",
            top: "47px",
            boxShadow: "0px 0px 30px 2px #7861FF",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={
            isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
          }
          transition={{ duration: 0.5, delay: 1.2 }}
        />
        <motion.div
          className="absolute w-[12px] h-[12px] bg-[#7861FF] rounded-full animate-pulse"
          style={{
            left: "661px",
            top: "197px",
            boxShadow: "0px 0px 30px 2px #7861FF",
            animationDelay: "0.3s",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={
            isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
          }
          transition={{ duration: 0.5, delay: 1.3 }}
        />
        <motion.div
          className="absolute w-[10px] h-[10px] bg-[#7861FF] rounded-full animate-pulse"
          style={{
            left: "561px",
            top: "351px",
            boxShadow: "0px 0px 30px 2px #7861FF",
            animationDelay: "0.6s",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={
            isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
          }
          transition={{ duration: 0.5, delay: 1.4 }}
        />
        <motion.div
          className="absolute w-[8px] h-[8px] bg-[#7861FF] rounded-full animate-pulse"
          style={{
            left: "107px",
            top: "352px",
            boxShadow: "0px 0px 30px 2px #7861FF",
            animationDelay: "0.9s",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={
            isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
          }
          transition={{ duration: 0.5, delay: 1.5 }}
        />
        <motion.div
          className="absolute w-[6px] h-[6px] bg-[#7861FF] rounded-full animate-pulse"
          style={{
            left: "464px",
            top: "122px",
            boxShadow: "0px 0px 30px 2px #7861FF",
            animationDelay: "1.2s",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={
            isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
          }
          transition={{ duration: 0.5, delay: 1.6 }}
        />
        <motion.div
          className="absolute w-[6px] h-[6px] bg-[#7861FF] rounded-full animate-pulse"
          style={{
            left: "287px",
            top: "262px",
            boxShadow: "0px 0px 30px 2px #7861FF",
            animationDelay: "1.5s",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={
            isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
          }
          transition={{ duration: 0.5, delay: 1.7 }}
        />
      </div>
    );
  },
);

PartnersNetwork.displayName = "PartnersNetwork";
