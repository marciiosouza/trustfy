import { memo } from "react";
import { motion } from "motion/react";
import { ConnectArcs } from "./ConnectArcs";
import { PartnerLogo } from "./PartnerLogo";
import { PARTNERS } from "./constants";

interface PartnersNetworkProps {
  className?: string;
}

export const PartnersNetwork = memo(
  ({ className = "" }: PartnersNetworkProps) => {
    return (
      <div className={`relative w-full h-full ${className}`}>
        {/* Background gradient glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-violet-600/20 via-transparent to-transparent opacity-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{}}
          transition={{ duration: 1 }}
        />

        {/* Arcs container - posicionado no centro */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <ConnectArcs className="w-full h-full max-w-[890px] max-h-[746px]" />
        </motion.div>

        {/* Partner logos */}
        <div className="absolute inset-0">
          {PARTNERS.map((partner) => (
            <PartnerLogo key={partner.id} partner={partner} />
          ))}
        </div>

        {/* Decorative glowing dots */}
        <div
          className="absolute w-[10px] h-[10px] bg-[#7861FF] rounded-full animate-pulse"
          style={{
            left: "318px",
            top: "47px",
            boxShadow: "0px 0px 30px 2px #7861FF",
          }}
        />
        <div
          className="absolute w-[12px] h-[12px] bg-[#7861FF] rounded-full animate-pulse"
          style={{
            left: "661px",
            top: "197px",
            boxShadow: "0px 0px 30px 2px #7861FF",
            animationDelay: "0.3s",
          }}
        />
        <div
          className="absolute w-[10px] h-[10px] bg-[#7861FF] rounded-full animate-pulse"
          style={{
            left: "561px",
            top: "351px",
            boxShadow: "0px 0px 30px 2px #7861FF",
            animationDelay: "0.6s",
          }}
        />
        <div
          className="absolute w-[8px] h-[8px] bg-[#7861FF] rounded-full animate-pulse"
          style={{
            left: "107px",
            top: "352px",
            boxShadow: "0px 0px 30px 2px #7861FF",
            animationDelay: "0.9s",
          }}
        />
        <div
          className="absolute w-[6px] h-[6px] bg-[#7861FF] rounded-full animate-pulse"
          style={{
            left: "464px",
            top: "122px",
            boxShadow: "0px 0px 30px 2px #7861FF",
            animationDelay: "1.2s",
          }}
        />
        <div
          className="absolute w-[6px] h-[6px] bg-[#7861FF] rounded-full animate-pulse"
          style={{
            left: "287px",
            top: "262px",
            boxShadow: "0px 0px 30px 2px #7861FF",
            animationDelay: "1.5s",
          }}
        />
      </div>
    );
  },
);

PartnersNetwork.displayName = "PartnersNetwork";
