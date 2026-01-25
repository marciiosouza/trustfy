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
      className="min-h-screen bg-black py-24 md:py-32 px-4 md:px-8"
      id="tech-page"
    >
      <div className="max-w-[1346px] mx-auto">
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
            className="bg-[#7861FF] hover:bg-[#6a54e8] text-white font-semibold px-12 py-5 text-base rounded-lg shadow-[0_4px_40px_rgba(120,97,255,0.3),inset_0_4px_24px_rgba(255,255,255,0.3)] border border-white/50 transition-all duration-300"
          >
            {TECH_CONTENT.cta.text}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </main>
  );
};
