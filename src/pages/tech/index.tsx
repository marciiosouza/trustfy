import { Button } from "@/components/ui/button";
import { TechHero } from "./TechHero";
import { TechFeatureGrid } from "./TechFeatureGrid";
import { TECH_CONTENT } from "./types";
import { TECH_FEATURES } from "./constants";

export const TechPage = () => {
  const handleCTAClick = () => {
    // Implementar navegação ou ação de orçamento
    console.log("Navegar para página de orçamento");
  };

  return (
    <main
      className="min-h-screen bg-black py-24 md:py-32 px-4 md:px-8 relative overflow-hidden"
      id="tech-page"
    >
      {/* Background Light Effect */}
      <div
        className="absolute pointer-events-none z-0"
        style={{
          width: "1400px",
          height: "1400px",
          right: "-970px",
          top: "50%",
          transform: "translateY(-50%)",
          background:
            "radial-gradient(circle, rgba(120, 97, 255, 0.25) 0%, rgba(0, 0, 0, 0) 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-[1346px] mx-auto relative z-10">
        <TechHero
          title={TECH_CONTENT.hero.title}
          description={TECH_CONTENT.hero.description}
        />

        <TechFeatureGrid features={TECH_FEATURES} />

        <div className="flex justify-center items-center">
          <Button
            onClick={handleCTAClick}
            aria-label={TECH_CONTENT.cta.ariaLabel}
            className="w-[319px] h-[60px] bg-[#7861FF] hover:bg-[#6951EE] text-white rounded-[8px] relative overflow-hidden mt-[48px]"
            style={{
              boxShadow:
                "0px 4px 40px rgba(120, 97, 255, 0.3), inset 0px 4px 24px rgba(255, 255, 255, 0.3)",
              border: "1px solid rgba(255, 255, 255, 0.5)",
            }}
          >
            <span
              className="flex  items-center justify-center gap-2 text-[16px] leading-[19px] tracking-[-0.32px] font-semibold"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {TECH_CONTENT.cta.text}
              {/* Arrow Icon */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="transition-transform group-hover:translate-x-1"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Button>
        </div>
      </div>
    </main>
  );
};
