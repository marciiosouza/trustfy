import type { FC } from "react";
import FeatureItem from "./FeatureItem";

const colorPalette = "/payments/color-palette.png";
const integratedEcosystem = "/payments/integrated-ecosystem.png";
const highPerformance = "/payments/high-performance.png";
const support = "/payments/support-24h.png";

const features = [
  {
    title: "Identidade Visual",
    description:
      "Adapte o visual do checkout às cores e ao estilo do seu negócio.",
    icon: colorPalette,
  },
  {
    title: "Ecossistema Integrado",
    description:
      "Sincronize de forma fluida com as ferramentas que você já usa.",
    icon: integratedEcosystem,
  },
  {
    title: "Alta Performance",
    description:
      "Evite travas burocráticas e acelere a liberação do seu saldo.",
    icon: highPerformance,
  },
  {
    title: "Suporte 24h",
    description:
      "Tenha especialistas prontos para te atender a qualquer momento.",
    icon: support,
  },
];

const FeaturesList: FC = () => {
  return (
    <ul
      className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6 md:mt-6"
      role="list"
      aria-label="Recursos"
    >
      {features.map((f) => (
        <FeatureItem
          key={f.title}
          title={f.title}
          description={f.description}
          icon={
            <img
              src={f.icon}
              alt={f.title}
              className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 object-contain shrink-0"
            />
          }
        />
      ))}
    </ul>
  );
};

export default FeaturesList;
