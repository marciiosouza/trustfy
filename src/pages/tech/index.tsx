import { Button } from "@/components/ui/button";
import { TechHero } from "./TechHero";
import { TechFeatureGrid } from "./TechFeatureGrid";
import { TECH_CONTENT } from "./types";
import { TECH_FEATURES } from "./constants";
import { ArrowRight } from "lucide-react";

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
          width: '1400px',
          height: '1400px',
          right: '-970px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'radial-gradient(circle, rgba(120, 97, 255, 0.25) 0%, rgba(0, 0, 0, 0) 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-[1346px] mx-auto relative z-10">
        <TechHero
          title={TECH_CONTENT.hero.title}
          description={TECH_CONTENT.hero.description}
        />

        <TechFeatureGrid features={TECH_FEATURES} />

        <div className="flex justify-center">
          <Button
            size="lg"
            onClick={handleCTAClick}
            aria-label={TECH_CONTENT.cta.ariaLabel}
            className="bg-[#7861ff] text-white rounded-[8px] py-[18px] px-[30px] h-[60px] w-full max-w-[319px] border border-[rgba(255,255,255,0.5)] font-semibold"
          >
            {TECH_CONTENT.cta.text}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </main>
  );
};
