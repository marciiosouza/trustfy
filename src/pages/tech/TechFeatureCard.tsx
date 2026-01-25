import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface TechFeatureCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  image?: string;
  variant?: "default" | "wide" | "small";
  imagePosition?: "left" | "right";
  className?: string;
}

export const TechFeatureCard = ({
  title,
  description,
  icon,
  image,
  variant = "default",
  imagePosition = "right",
  className,
}: TechFeatureCardProps) => {
  const isWide = variant === "wide";
  const isSmall = variant === "small";

  return (
    <article
      className={cn(
        "relative overflow-hidden rounded-[27px]",
        "bg-gradient-to-b from-transparent to-[rgba(120,97,255,0.4)]",
        "border-2 border-white/10",
        "transition-all duration-300 hover:border-white/20",
        isWide
          ? "col-span-full min-h-[348px]"
          : isSmall
            ? "min-h-[348px]"
            : "min-h-[348px]",
        className,
      )}
    >
      {/* Área da imagem */}
      {image && (
        <div
          className={cn(
            "absolute top-0 bottom-0 bg-[#2D2D2D]",
            isWide &&
              imagePosition === "left" &&
              "left-0 w-[44%] rounded-l-[27px]",
            isWide &&
              imagePosition === "right" &&
              "right-0 w-[30%] rounded-r-[27px]",
            !isWide &&
              imagePosition === "right" &&
              "right-0 w-[43%] rounded-r-[27px]",
            !isWide &&
              imagePosition === "left" &&
              "left-0 w-[43%] rounded-l-[27px]",
          )}
        >
          <img src={image} alt="" className="w-full h-full object-cover" />
        </div>
      )}

      {/* Ícone centralizado (para card de marca) */}
      {icon && !image && (
        <div className="absolute top-10 left-1/2 -translate-x-1/2">{icon}</div>
      )}

      {/* Conteúdo de texto */}
      <div
        className={cn(
          "absolute bottom-0 left-0 p-8 md:p-12",
          isWide ? "max-w-[674px]" : "max-w-full pr-[45%]",
        )}
      >
        <h3 className="text-[22px] font-bold text-white mb-4 leading-[0.87] tracking-[-0.015em]">
          {title}
        </h3>
        <p className="text-white/70 text-lg leading-[1.33]">{description}</p>
      </div>
    </article>
  );
};
