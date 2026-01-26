import { memo } from "react";
import logoBanner from "../../../public/logo-banner.png";

interface TrustfyBannerProps {
  className?: string;
}

const TrustfyItem = memo(() => (
  <div className="flex items-center gap-2 px-6">
    <img
      src={logoBanner}
      alt="Trustfy Logo"
      className=" h-[56px] w-[350px] object-contain"
    />
  </div>
));

TrustfyItem.displayName = "TrustfyItem";

export const TrustfyBanner = memo(({ className = "" }: TrustfyBannerProps) => {
  const items = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className={`w-full overflow-hidden bg-violet-600 py-3 ${className}`}>
      <div className="flex animate-marquee">
        {items.map((index) => (
          <TrustfyItem key={index} />
        ))}
      </div>
    </div>
  );
});

TrustfyBanner.displayName = "TrustfyBanner";
