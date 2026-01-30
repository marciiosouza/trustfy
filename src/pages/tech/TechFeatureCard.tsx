import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import type { ReactNode } from "react";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.99 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { stiffness: 120, damping: 16 },
  },
};

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
      layout
      variants={cardVariants}
      className={cn(
        "relative overflow-hidden rounded-[27px]",
        "border-2 border-white/10",
        "transition-all duration-300 hover:border-white/20",
        "h-[348px] focus:outline-none",
        className,
      )}
      role="button"
      tabIndex={0}
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
      {image && (() => {
        if (isPerformanceCard) {
          return (
            <motion.img
              src={image}
              alt={title}
              className="absolute right-26 top-1/2 -translate-y-1/2 w-[440px] max-w-[48%] object-contain z-[5] pointer-events-none"
              initial={{ opacity: 0, x: 60, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              whileHover={{ x: -10, scale: 1.05 }}
              aria-hidden={true}
            />
          );
        }

        if (!isBrandCard) {
          return (
            <motion.div
              className={cn(
                "absolute bg-no-repeat z-[5] inset-0 bg-cover  bg-center",
                imagePosition === "right" ? "bg-right" : "bg-left",
              )}
              style={{ backgroundImage: `url(${image})` }}
              initial={{ opacity: 0, x: imagePosition === "right" ? 40 : -40, scale: 1.1 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.08, 
                x: imagePosition === "right" ? 10 : -10 
              }}
            />
          );
        }

        return null;
      })()}

      {/* Ícone no topo (top-right for normal) */}
      {icon && !image && !isBrandCard && (
        <motion.div 
          className="absolute top-6 right-6 text-6xl z-20"
          initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          whileHover={{ scale: 1.15, rotate: -5 }}
        >
          {typeof icon === "string" ? icon : icon}
        </motion.div>
      )}

      {/* Conteúdo de texto */}
      <div
        className={cn(
          "absolute z-20",
          isPerformanceCard
            ? "left-[30px] bottom-[48px]"
            : isBrandCard
              ? "left-[30px] bottom-[48px]"
              : "left-[30px] bottom-[48px]",
        )}
      >
        {isBrandCard ? (
          <div className="flex flex-col items-start">
            <motion.div 
              className="mx-auto mb-8 w-[92px] h-[104px] flex"
              initial={{ opacity: 0, y: 20, rotate: -10 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
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
            </motion.div>

            <h3
              className="font-bold text-white mb-[19px]"
              style={{
                fontFamily: "'Neue Montreal', sans-serif",
                fontSize: "26px",
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
                fontSize: "26px",
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
