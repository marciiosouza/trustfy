import { memo } from "react";
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
        <div className="absolute inset-0 bg-gradient-radial from-violet-600/20 via-transparent to-transparent opacity-50" />

        {/* Arcs container */}
        <div className="absolute inset-0 flex items-end justify-center">
          <ConnectArcs className="w-full max-w-2xl" />
        </div>

        {/* Partner logos */}
        <div className="absolute inset-0">
          {PARTNERS.map((partner) => (
            <PartnerLogo key={partner.id} partner={partner} />
          ))}
        </div>
      </div>
    );
  },
);

PartnersNetwork.displayName = "PartnersNetwork";
