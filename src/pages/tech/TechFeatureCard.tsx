import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface TechFeatureCardProps {
  title: string;
  description: string;
  icon?: ReactNode | string;
  image?: string;
  variant?: "large" | "small";
  imagePosition?: "left" | "right";
  className?: string;
  contentClassName?: string; // Tailwind class for controlling text max-width (e.g., 'max-w-[510px]')
}

export const TechFeatureCard = ({
  title,
  description,
  icon,
  image,
  variant = "large",
  imagePosition = "right",
  className,
  contentClassName,
}: TechFeatureCardProps) => {
  const isLarge = variant === "large";
  const isBrandCard = title.includes("Marca 100%");
  const isPerformanceCard = title.includes("Estabilidade");

  return (
    <article
      className={cn(
        "relative overflow-hidden rounded-[24px]",
        "bg-gradient-to-br from-[#2D1B69] via-[#1a0f3d] to-[#0a0520]",
        "border border-white/10",
        "transition-all duration-300 hover:border-white/20",
        "p-6 md:p-8",
        isLarge ? "min-h-[340px]" : "min-h-[280px]",
        className,
      )}
    >
      {/* Overlay gradient - background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Imagem de fundo/preview - acima do gradient */}
      {image && (
        // Performance card uses an <img> positioned to the right and centered vertically
        isPerformanceCard ? (
          <img
            src={image}
            alt={title}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-[420px] max-w-[48%] object-contain z-10 pointer-events-none"
          />
        ) : !isBrandCard ? (
          <div
            className={cn(
              "absolute bg-no-repeat z-10 inset-0 bg-cover bg-center",
              imagePosition === "right" ? "bg-right" : "bg-left"
            )}
            style={{ backgroundImage: `url(${image})` }}
          />
        ) : null
      )}

      {/* Ícone no topo (top-right for normal) */}
      {icon && !image && !isBrandCard && (
        <div className="absolute top-6 right-6 text-6xl z-20">
          {typeof icon === "string" ? icon : icon}
        </div>
      )}

      {/* Conteúdo de texto */}
      <div
        className={cn(
          isPerformanceCard
            ? "absolute left-6 bottom-6 md:left-12 md:bottom-12 z-20 text-left"
            : isBrandCard
              ? "relative z-10 h-full flex flex-col items-start justify-start pt-8 text-left"
              : "relative z-10 h-full flex flex-col justify-end"
        )}
      >
        {isBrandCard ? (
          <div className="flex flex-col items-start">
            <div className="w-[108px] h-[104px] rounded-lg flex mb-4 mx-auto">
              {image ? (
                <img src={image} alt={title} className="w-full h-full object-contain" />
              ) : icon ? (
                typeof icon === "string" ? <span className="text-4xl">{icon}</span> : icon
              ) : null}
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-4 leading-tight text-start">
              {title}
            </h3>
            <p className="text-sm md:text-base text-white/60 mt-2 leading-relaxed  max-w-[568px]">
              {description}
            </p>
          </div>
        ) : (
          <div className={cn(isPerformanceCard ? "w-full max-w-[646px]" : "")}>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
              {title}
            </h3>
            <p
              className={cn(
                "text-sm md:text-base text-white/60 leading-relaxed",
                isPerformanceCard ? "mt-2 w-full" : (contentClassName ?? "max-w-[568px]")
              )}
            >
              {description}
            </p>
          </div>
        )}
      </div>
    </article>
  );
};
