import { HeroContent } from "./HeroContent";
import { BrandsStrip } from "./BrandsStrip";
import { FeatureCard } from "./FeatureCard";
import { useScale } from "./useScale";

const DESIGN_WIDTH = 1920;
const DESIGN_HEIGHT = 1379;

export const HeroPage = () => {
  const scale = useScale(DESIGN_WIDTH, DESIGN_HEIGHT);

  return (
    <div className="w-full min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      <div
        style={{
          width: DESIGN_WIDTH,
          height: DESIGN_HEIGHT,
          transformOrigin: "center center",
          transform: `scale(${scale})`,
        }}
        className="relative"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/background-blur.png"
            alt="bg"
            className="w-full h-full object-cover filter blur-[10.8px]"
          />
        </div>

        {/* Macbook */}
        <div className="absolute left-[182px] top-[538px]">
          <img
            src="/macbook-lp.png"
            alt="macbook"
            className="w-[1555px] h-[703px] object-contain"
          />
        </div>

        <HeroContent />

        <div className="absolute left-[187px] top-[991px]">
          <FeatureCard
            title="Aprovação Rápida"
            subtitle="Não fique perdendo vendas."
            icon={
              <svg
                width="48"
                height="48"
                viewBox="0 0 49 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="13"
                  cy="17"
                  r="3"
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="1.5"
                />
              </svg>
            }
            className="w-[233px] h-[136.2px] bg-[rgba(0,0,0,0.8)] border-[rgba(255,255,255,0.1)] shadow-[inset_0px_4px_16px_0px_rgba(120,97,255,0.2)]"
          />
        </div>

        <div className="absolute left-[1240px] top-[640px]">
          <FeatureCard
            title="Personalize seu Gateway"
            subtitle="Com a cor e identidade da sua marca."
            icon={
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="6"
                  y="6"
                  width="36"
                  height="36"
                  rx="6"
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="1.5"
                />
              </svg>
            }
            selected
            className="w-[298px] h-[136.2px] bg-[rgba(2,1,5,0.9)] -translate-y-[6px]"
          />
        </div>

      </div>
        <BrandsStrip />
    </div>
  );
};
