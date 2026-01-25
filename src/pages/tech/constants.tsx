import type { TechFeature } from "./types";

export const TECH_FEATURES: TechFeature[] = [
  {
    id: "spread-taxes",
    title: "Gestão total do Spread e Taxas",
    description:
      "Defina suas próprias taxas de MDR e antecipação. Tenha autonomia completa para precificar sua operação e maximizar sua margem de lucro sobre cada transação processada.",
    image: "/tech/dashboard-spread.png",
    imagePosition: "right",
  },
  {
    id: "brand-preserved",
    title: "Marca 100% Preservada",
    description:
      "Do checkout ao painel administrativo: tudo leva o seu logo, suas cores e seu domínio. A tecnologia é nossa, mas o protagonismo é todo seu.",
    variant: "small",
    icon: (
      <svg
        viewBox="0 0 108 104"
        fill="none"
        className="w-[108px] h-[104px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M67.22 0H0V104H67.22V0Z" fill="white" />
        <path
          d="M67.22 0L107.85 33.79V0H67.22Z"
          fill="white"
          fillOpacity="0.6"
        />
      </svg>
    ),
  },
  {
    id: "ultra-performance",
    title: "Estabilidade e Ultra-Performance",
    description:
      "Infraestrutura elástica com 99.9% de Uptime. Processe altos volumes de requisições simultâneas com total segurança e zero latência.",
    variant: "wide",
    imagePosition: "left",
  },
  {
    id: "pix-card-boleto",
    title: "Pix, Cartão e Boleto Nativo",
    description:
      "Não limite seus clientes. Ofereça as formas de pagamento mais usadas do mercado em um checkout único, transparente e otimizado para conversão.",
    variant: "small",
  },
  {
    id: "compliance-antifraud",
    title: "Compliance e Antifraude",
    description:
      "Operação blindada com protocolos de segurança avançados e motor antifraude integrado, protegendo seu capital e o dos seus clientes.",
    variant: "small",
  },
];
