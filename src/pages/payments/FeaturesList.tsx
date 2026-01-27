import type { FC } from "react";
import { motion } from "motion/react";
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
    <motion.ul
      className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8"
      role="list"
      aria-label="Recursos"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
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
              className="w-8 h-8 object-contain"
            />
          }
        />
      ))}
    </motion.ul>
  );
};

export default FeaturesList;
