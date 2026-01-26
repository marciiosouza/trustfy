import { memo } from "react";
import { PartnersNetwork } from "./PartnersNetwork";
import { ConnectContent } from "./ConnectContent";

interface ConnectHeroProps {
  className?: string;
}

export const ConnectHero = memo(({ className = "" }: ConnectHeroProps) => {
  return (
    <section
      className={`relative w-full min-h-[600px] lg:min-h-[700px] ${className}`}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between h-full gap-8 lg:gap-16 py-12 lg:py-0">
          {/* Left side - Partners Network */}
          <div className="relative w-full lg:w-1/2 h-[400px] lg:h-[600px]">
            <PartnersNetwork />
          </div>

          {/* Right side - Content */}
          <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start">
            <ConnectContent />
          </div>
        </div>
      </div>
    </section>
  );
});

ConnectHero.displayName = "ConnectHero";
