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
            className="w-full h-full"
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
          className="absolute w-[6px] h-[6px] md:w-[10px] md:h-[10px] bg-[#7861FF] rounded-full animate-pulse"
          style={{
            left: "35.7%",
            top: "6.3%",
            boxShadow: "0px 0px 15px 1px #7861FF",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={
            isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
          }
          transition={{ duration: 0.5, delay: 1.2 }}
        />
        <motion.div
          className="absolute w-[7px] h-[7px] md:w-[12px] md:h-[12px] bg-[#7861FF] rounded-full animate-pulse"
          style={{
            left: "74.3%",
            top: "26.4%",
            boxShadow: "0px 0px 15px 1px #7861FF",
            animationDelay: "0.3s",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={
            isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
          }
          transition={{ duration: 0.5, delay: 1.3 }}
        />
        <motion.div
          className="absolute w-[6px] h-[6px] md:w-[10px] md:h-[10px] bg-[#7861FF] rounded-full animate-pulse"
          style={{
            left: "63%",
            top: "47%",
            boxShadow: "0px 0px 15px 1px #7861FF",
            animationDelay: "0.6s",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={
            isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
          }
          transition={{ duration: 0.5, delay: 1.4 }}
        />
        <motion.div
          className="absolute w-[5px] h-[5px] md:w-[8px] md:h-[8px] bg-[#7861FF] rounded-full animate-pulse"
          style={{
            left: "12%",
            top: "47.2%",
            boxShadow: "0px 0px 15px 1px #7861FF",
            animationDelay: "0.9s",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={
            isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
          }
          transition={{ duration: 0.5, delay: 1.5 }}
        />
        <motion.div
          className="absolute w-[4px] h-[4px] md:w-[6px] md:h-[6px] bg-[#7861FF] rounded-full animate-pulse"
          style={{
            left: "52.1%",
            top: "16.4%",
            boxShadow: "0px 0px 15px 1px #7861FF",
            animationDelay: "1.2s",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={
            isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
          }
          transition={{ duration: 0.5, delay: 1.6 }}
        />
        <motion.div
          className="absolute w-[4px] h-[4px] md:w-[6px] md:h-[6px] bg-[#7861FF] rounded-full animate-pulse"
          style={{
            left: "32.2%",
            top: "35.1%",
            boxShadow: "0px 0px 15px 1px #7861FF",
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
