import { TechFeatureCard } from "./TechFeatureCard";
import type { TechFeature } from "./types";

interface TechFeatureGridProps {
  features: TechFeature[];
}

export const TechFeatureGrid = ({ features }: TechFeatureGridProps) => {
  // Primeira linha: 2 cards (spread + marca)
  const firstRow = features.slice(0, 2);
  // Segunda linha: 1 card wide (performance)
  const wideCard = features[2];
  // Terceira linha: 2 cards (pix + compliance)
  const lastRow = features.slice(3, 5);

  return (
    <div className="flex flex-col gap-5 mb-16 md:mb-20">
      {/* Primeira linha: 2 cards */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.42fr] gap-5">
        {firstRow.map((feature) => (
          <TechFeatureCard
            key={feature.id}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            image={feature.image}
            variant={feature.variant}
            imagePosition={feature.imagePosition}
            className={feature.className}
          />
        ))}
      </div>

      {/* Segunda linha: card wide */}
      {wideCard && (
        <TechFeatureCard
          key={wideCard.id}
          title={wideCard.title}
          description={wideCard.description}
          icon={wideCard.icon}
          image={wideCard.image}
          variant="wide"
          imagePosition={wideCard.imagePosition}
          className={wideCard.className}
        />
      )}

      {/* Terceira linha: 2 cards iguais */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {lastRow.map((feature) => (
          <TechFeatureCard
            key={feature.id}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            image={feature.image}
            variant="small"
            imagePosition={feature.imagePosition}
            className={feature.className}
          />
        ))}
      </div>
    </div>
  );
};
