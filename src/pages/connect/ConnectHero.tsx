import { memo } from "react";
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
        <div className="absolute left-[290px] top-[151px] w-[890px] h-[746px]">
          <PartnersNetwork />
        </div>

        {/* Right side - Content */}
        <div className="absolute left-[1041px] top-[183px]">
          <ConnectContent />
        </div>
      </div>
    </section>
  );
});

ConnectHero.displayName = "ConnectHero";
