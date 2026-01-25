import type { ReactNode } from "react";

export interface TechFeature {
  id: string;
  title: string;
  description: string;
  icon?: ReactNode;
  image?: string;
  variant?: "default" | "wide" | "small";
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
    text: "Fazer orçamento",
    ariaLabel: "Fazer um orçamento para sua Fintech",
  },
} as const;
