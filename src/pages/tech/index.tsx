import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
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

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Button
            size="lg"
            onClick={handleCTAClick}
            aria-label={TECH_CONTENT.cta.ariaLabel}
            className="bg-[#7861ff] text-white rounded-[8px] py-[18px] px-[30px] h-[60px] w-full max-w-[319px] border border-[rgba(255,255,255,0.5)] font-semibold"
          >
            {TECH_CONTENT.cta.text}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </main>
  );
};
