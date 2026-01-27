import { memo } from "react";
import logoBanner from "../../../public/logo-banner.png";

interface TrustfyBannerProps {
  className?: string;
}

const TrustfyItem = memo(() => (
  <div className="flex-shrink-0">
    <img
      src={logoBanner}
      alt="Trustfy Logo"
      className="h-8 w-auto"
      style={{ filter: "blur(2px)" }}
    />
  </div>
));

TrustfyItem.displayName = "TrustfyItem";

export const TrustfyBanner = memo(({ className = "" }: TrustfyBannerProps) => {
  return (
    <>
      <style>{`
        @keyframes scrollTrust {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <div
        className={`w-full h-[76px] overflow-visible flex items-center justify-center bg-violet-600 ${className}`}
      >
        {/* Faixa horizontal única */}
        <div
          className="absolute h-[76px] overflow-hidden"
          style={{
            width: "100%",
            left: "0",
            background: "linear-gradient(90deg, #7861FF 0%, #B8AAFF 100%)",
            boxShadow:
              "0px 4px 2px rgba(0, 0, 0, 0.25), 0px 4px 40px rgba(120, 97, 255, 0.3)",
          }}
        >
          <div
            className="flex items-center gap-8 h-full absolute"
            style={{
              animation: "scrollTrust 40s linear infinite",
              width: "200%",
              paddingLeft: "10%",
            }}
          >
            {Array.from({ length: 30 }).map((_, i) => (
              <TrustfyItem key={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
});

TrustfyBanner.displayName = "TrustfyBanner";
