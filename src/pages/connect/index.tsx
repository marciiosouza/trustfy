import { ConnectHero } from "./ConnectHero";
import { TrustfyBanner } from "./TrustfyBanner";

export const ConnectPage = () => {
  return (
    <section className="relative w-full bg-black overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 via-violet-500 to-violet-600" />

      {/* Main hero section */}
      <ConnectHero />

      {/* Bottom Trustfy banner */}
      <TrustfyBanner />
    </section>
  );
};
