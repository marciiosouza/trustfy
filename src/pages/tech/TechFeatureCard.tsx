import { cn } from "@/lib/utils";
import { motion } from "motion/react";
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
  // variant = "large",
  imagePosition = "right",
  className,
}: TechFeatureCardProps) => {
  const isBrandCard = title.includes("Marca 100%");
  const isPerformanceCard = title.includes("Estabilidade");

  return (
    <motion.article
      className={cn(
        "relative overflow-hidden rounded-[27px]",
        "border-2 border-white/10",
        "transition-all duration-300 hover:border-white/20",
        "h-[348px]",
        className,
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 rounded-[27px]"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 27.4%, rgba(120, 97, 255, 0.4) 100%)",
        }}
      />

      {/* Imagem de fundo/preview - acima do gradient */}
      {image &&
        // Performance card uses an <img> positioned to the right and centered vertically
        (isPerformanceCard ? (
          <img
            src={image}
            alt={title}
            className="absolute right-26 top-1/2 -translate-y-1/2 w-[440px] max-w-[48%] object-contain z-[5] pointer-events-none"
          />
        ) : !isBrandCard ? (
          <div
            className={cn(
              "absolute bg-no-repeat z-[5] inset-0 bg-cover  bg-center",
              imagePosition === "right" ? "bg-right" : "bg-left",
            )}
            style={{ backgroundImage: `url(${image})` }}
          />
        ) : null)}

      {/* Ícone no topo (top-right for normal) */}
      {icon && !image && !isBrandCard && (
        <div className="absolute top-6 right-6 text-6xl z-20">
          {typeof icon === "string" ? icon : icon}
        </div>
      )}

      {/* Conteúdo de texto */}
      <div
        className={cn(
          "absolute z-20",
          isPerformanceCard
            ? "left-[48px] bottom-[48px]"
            : isBrandCard
              ? "left-[32px] bottom-[48px]"
              : "left-[48px] bottom-[48px]",
        )}
      >
        {isBrandCard ? (
          <div className="flex flex-col items-start">
            <div className="mx-auto mb-8 w-[92px] h-[104px] flex">
              {image ? (
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-contain"
                />
              ) : icon ? (
                typeof icon === "string" ? (
                  <span className="text-4xl">{icon}</span>
                ) : (
                  icon
                )
              ) : null}
            </div>

            <h3
              className="font-bold text-white mb-[19px]"
              style={{
                fontFamily: "'Neue Montreal', sans-serif",
                fontSize: "22px",
                lineHeight: "19px",
                letterSpacing: "-0.32px",
              }}
            >
              {title}
            </h3>
            <p
              className="font-normal"
              style={{
                fontFamily: "'Neue Montreal', sans-serif",
                fontSize: "18px",
                lineHeight: "24px",
                color: "rgba(255, 255, 255, 0.7)",
                maxWidth: "337px",
              }}
            >
              {description}
            </p>
          </div>
        ) : (
          <div
            className={cn(
              isPerformanceCard ? "max-w-[684px]" : "max-w-[452px]",
            )}
          >
            <h3
              className="font-bold text-white mb-[19px]"
              style={{
                fontFamily: "'Neue Montreal', sans-serif",
                fontSize: "22px",
                lineHeight: "19px",
                letterSpacing: "-0.32px",
              }}
            >
              {title}
            </h3>
            <p
              className="font-normal"
              style={{
                fontFamily: "'Neue Montreal', sans-serif",
                fontSize: "18px",
                lineHeight: "24px",
                color: "rgba(255, 255, 255, 0.7)",
              }}
            >
              {description}
            </p>
          </div>
        )}
      </div>
    </motion.article>
  );
};
