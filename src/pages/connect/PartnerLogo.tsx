import { memo } from "react";
import type { Partner } from "./types";

interface PartnerLogoProps {
  partner: Partner;
}

export const PartnerLogo = memo(({ partner }: PartnerLogoProps) => {
  const { name, position } = partner;

  return (
    <div
      className="absolute flex items-center justify-center transition-transform duration-300 hover:scale-110"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <span className="text-white/80 text-sm font-medium whitespace-nowrap tracking-wide">
        {name}
      </span>
    </div>
  );
});

PartnerLogo.displayName = "PartnerLogo";
