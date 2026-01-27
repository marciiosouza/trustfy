import { memo } from "react";
import type { Partner } from "./types";

interface PartnerLogoProps {
  partner: Partner;
}

export const PartnerLogo = memo(({ partner }: PartnerLogoProps) => {
  const { name, logo, position, size } = partner;

  return (
    <div
      className="absolute transition-transform duration-300 hover:scale-110"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
      }}
    >
      <img
        src={logo}
        alt={name}
        style={{
          width: `${size.width}px`,
          height: `${size.height}px`,
        }}
        className="object-contain"
      />
    </div>
  );
});

PartnerLogo.displayName = "PartnerLogo";
