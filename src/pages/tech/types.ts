import type { ReactNode } from "react";
import { QUOTE_TEXT, QUOTE_ARIA } from "@/components/ui/QuoteButton";

export interface TechFeature {
  id: string;
  title: string;
  description: string;
  icon?: ReactNode | string;
  image?: string;
  variant?: "large" | "small";
  imagePosition?: "left" | "right";
  className?: string;
}

export const TECH_CONTENT = {
  hero: {
    title: "Tecnologia de elite para a sua Fintech",
    description:
      "Unimos infraestrutura bancária, personalização visual e segurança máxima. Tenha todas as ferramentas necessárias para operar seu Gateway com a potência dos grandes players.",
  },
  cta: {
    text: QUOTE_TEXT,
    ariaLabel: QUOTE_ARIA,
  },
} as const;
