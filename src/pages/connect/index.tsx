import { ConnectHero } from "./ConnectHero";
import { TrustfyBanner } from "./TrustfyBanner";

export const ConnectPage = () => {
  return (
    <section className="relative w-full bg-black overflow-hidden">
      {/* Main hero section */}
      <ConnectHero />
      {/* Bottom Trustfy banner */}
      <TrustfyBanner />
    </section>
  );
};
