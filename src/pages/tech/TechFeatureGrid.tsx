import { TechFeatureCard } from "./TechFeatureCard";
import type { TechFeature } from "./types";

interface TechFeatureGridProps {
  features: TechFeature[];
}

export const TechFeatureGrid = ({ features }: TechFeatureGridProps) => {
  return (
    <div className="flex flex-col gap-5 mb-16 md:mb-20">
      {/* Linha 1: Card grande (60%) + Card pequeno (40%) */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.75fr_0.75fr] gap-5">
        <TechFeatureCard
          key={features[0].id}
          title={features[0].title}
          description={features[0].description}
          icon={features[0].icon}
          image={features[0].image}
          variant={features[0].variant}
          imagePosition={features[0].imagePosition}
          className={features[0].className}
          contentClassName="max-w-[710px]"
        />
        <TechFeatureCard
          key={features[1].id}
          title={features[1].title}
          description={features[1].description}
          icon={features[1].icon}
          image={features[1].image}
          variant={features[1].variant}
          imagePosition={features[1].imagePosition}
          className={features[1].className}
          contentClassName="max-w-[353px]"
        />
      </div>

      {/* Linha 2: Card full-width (Estabilidade) */}
      <TechFeatureCard
        key={features[2].id}
        title={features[2].title}
        description={features[2].description}
        icon={features[2].icon}
        image={features[2].image}
        variant="large"
        imagePosition={features[2].imagePosition}
        className={features[2].className}
        contentClassName="max-w-[646px]"
      />

      {/* Linha 3: Card grande (50%) + Card grande (50%) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <TechFeatureCard
          key={features[3].id}
          title={features[3].title}
          description={features[3].description}
          icon={features[3].icon}
          image={features[3].image}
          variant={features[3].variant}
          imagePosition={features[3].imagePosition}
          className={features[3].className}
          contentClassName="max-w-[568px]"
        />
        <TechFeatureCard
          key={features[4].id}
          title={features[4].title}
          description={features[4].description}
          icon={features[4].icon}
          image={features[4].image}
          variant={features[4].variant}
          imagePosition={features[4].imagePosition}
          className={features[4].className}
          contentClassName="max-w-[568px]"
        />
      </div>
    </div>
  );
};
