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
        "relative rounded-[27px]",
        "border-2 border-white/10",
        "transition-all duration-300 hover:border-white/20",
        // Mobile: let height adapt to stacked content; Desktop: keep fixed height
        "h-auto md:h-[348px]",
        isPerformanceCard ? "overflow-visible" : "overflow-hidden",
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
      {image &&
        (() => {
          if (isPerformanceCard) {
            // Stack de notificações - de baixo para cima, maior para menor
            const notifications = [
              {
                src: "/cards/notification/notificacao-card.png",
                scale: 1,
                zIndex: 40,
              },
              {
                src: "/cards/notification/notificacao-card-02.png",
                scale: 0.86,
                zIndex: 30,
                left: "32px",
                top: "240px",
              },
              {
                src: "/cards/notification/notificacao-card-03.png",
                scale: 0.72,
                zIndex: 20,
                left: "72px",
                top: "284px",
              },
              {
                src: "/cards/notification/notificacao-card-04.png",
                scale: 0.58,
                zIndex: 10,
                left: "112px",
                top: "324px",
              },
            ];

            return (
              <div className="absolute left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-[104px] top-6 md:top-12 md:-translate-y-1/2 w-[260px] md:w-[481px] h-auto md:h-[300px] z-[5] pointer-events-none">
                {/* Mobile stacked notifications - centered column (smaller, no overlap) */}
                <div className="flex flex-col items-center justify-start gap-3 md:hidden py-3">
                  {notifications.map((notif, i) => (
                    <motion.img
                      key={i}
                      src={notif.src}
                      alt={`${title} - notificação ${i + 1}`}
                      className="w-[120px] h-auto object-contain bg-transparent mx-auto"
                      style={{ zIndex: notif.zIndex }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.35, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    />
                  ))}
                </div>

                {/* Desktop absolute positioned notifications */}
                <div className="hidden md:block relative w-full h-full">
                  {notifications.map((notif, i) => (
                    <motion.img
                      key={i}
                      src={notif.src}
                      alt={`${title} - notificação ${i + 1}`}
                      className="absolute object-contain"
                      style={{
                        width: `${481 * notif.scale}px`,
                        height: 'auto',
                        zIndex: notif.zIndex,
                        bottom: `${i * -48}px`,
                        left: notif.left ? notif.left : 'auto',
                        right: 0,
                        top: notif.top ? notif.top : 'auto'
                      }}
                      initial={{
                        opacity: 0,
                        y: 120 + i * 30,
                        scale: 0.85,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{
                        duration: 0.8,
                        delay: i * 0.12,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      whileHover={{
                        y: -8,
                        scale: 1.02,
                        transition: { duration: 0.3 },
                      }}
                    />
                  ))}
                </div>
              </div>
            );
          }

          if (!isBrandCard) {
            return (
              <>
                {/* Mobile image replaced by a mobile stacked layout (see block below) */}

                {/* Desktop: preserve full-bleed background preview to keep original layout */}
                <motion.div
                  className={cn(
                    "hidden md:block absolute bg-no-repeat z-5 inset-0 bg-cover bg-center",
                    imagePosition === "right" ? "md:bg-right" : "md:bg-left",
                  )}
                  style={{ backgroundImage: `url(${image})` }}
                  initial={{
                    opacity: 0,
                    x: imagePosition === "right" ? 40 : -40,
                    scale: 1.1,
                  }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                  whileHover={{
                    scale: 1.08,
                    x: imagePosition === "right" ? 10 : -10,
                  }}
                />
              </>
            );
          }

          return null;
        })()}

      {/* Mobile stacked layout: imagem/elemento no topo e texto abaixo (apenas mobile) */}
      <div className="md:hidden flex flex-col w-full rounded-[27px] overflow-hidden">
        {isPerformanceCard ? (
          (() => {
            const notifications = [
              { src: "/cards/notification/notificacao-card.png", zIndex: 40 },
              { src: "/cards/notification/notificacao-card-02.png", zIndex: 30 },
              { src: "/cards/notification/notificacao-card-03.png", zIndex: 20 },
              { src: "/cards/notification/notificacao-card-04.png", zIndex: 10 },
            ];

            return (
              <div className="flex flex-col items-center justify-start gap-3 py-3">
                {notifications.map((notif, i) => (
                  <img key={i} src={notif.src} alt={`${title} - notificação ${i + 1}`} className="w-[120px] h-auto object-contain" />
                ))}
              </div>
            );
          })()
        ) : image ? (
          <img src={image} alt={title} className="w-full h-[220px] object-cover" />
        ) : icon ? (
          <div className="flex items-center justify-center h-[220px] text-6xl">{typeof icon === 'string' ? icon : icon}</div>
        ) : null}

        <div className="px-4 py-4">
          {isBrandCard ? (
            <div className="flex flex-col items-start">
              <h3 className="font-bold text-white mb-[8px] text-[20px] leading-tight" style={{ fontFamily: "'Neue Montreal', sans-serif", letterSpacing: "-0.32px" }}>{title}</h3>
              <p className="font-normal text-[15px] leading-relaxed" style={{ fontFamily: "'Neue Montreal', sans-serif", color: "rgba(255, 255, 255, 0.7)" }}>{description}</p>
            </div>
          ) : (
            <div>
              <h3 className="font-bold text-white mb-[8px] text-[18px] leading-tight" style={{ fontFamily: "'Neue Montreal', sans-serif", letterSpacing: "-0.32px" }}>{title}</h3>
              <p className="font-normal text-[15px] leading-relaxed" style={{ fontFamily: "'Neue Montreal', sans-serif", color: "rgba(255, 255, 255, 0.7)" }}>{description}</p>
            </div>
          )}
        </div>
      </div>

      {/* Ícone no topo (top-right for normal) */}
      {icon && !image && !isBrandCard && (
        <motion.div
          className="hidden md:block absolute top-6 right-6 text-6xl z-20"
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
          // Hide desktop absolute content on mobile and show only on md+
          "hidden md:block absolute z-20 px-4 md:px-0",
          isPerformanceCard
            ? "left-0 md:left-[30px] bottom-[36px]"
            : isBrandCard
              ? "left-0 md:left-[30px] bottom-[36px]"
              : "left-0 md:left-[30px] bottom-[36px]",
        )}
      >
        {isBrandCard ? (
          <div className="flex flex-col items-start">
            {/* Removed boxed wrapper: show only the image, larger and centered */}
            <motion.div
              className="mx-auto mb-6"
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
            >
              {image ? (
                <img
                  src={image}
                  alt={title}
                  className="w-[140px] md:w-[120px] h-auto object-contain object-top"
                />
              ) : icon ? (
                typeof icon === "string" ? (
                  <span className="text-5xl">{icon}</span>
                ) : (
                  icon
                )
              ) : null}
            </motion.div>

            <h3
              className="font-bold text-white mb-[19px] text-[20px] md:text-[26px] leading-tight md:leading-[19px]"
              style={{
                fontFamily: "'Neue Montreal', sans-serif",
                letterSpacing: "-0.32px",
              }}
            >
              {title}
            </h3>
            <p
              className="font-normal text-[15px] md:text-[18px] leading-relaxed md:leading-[24px] max-w-[90%] md:max-w-[337px]"
              style={{
                fontFamily: "'Neue Montreal', sans-serif",
                color: "rgba(255, 255, 255, 0.7)",
              }}
            >
              {description}
            </p>
          </div>
        ) : (
          <div
            className={cn(
              isPerformanceCard ? "max-w-full md:max-w-[646px]" : "max-w-full md:max-w-[452px]",
            )}
          >
            <h3
              className="font-bold text-white mb-[19px] text-[18px] md:text-[22px] leading-tight md:leading-[19px]"
              style={{
                fontFamily: "'Neue Montreal', sans-serif",
                letterSpacing: "-0.32px",
              }}
            >
              {title}
            </h3>
            <p
              className={cn("font-normal text-[15px] md:text-[18px] leading-relaxed md:leading-[24px]", isPerformanceCard ? "max-w-[90%] md:max-w-[646px]" : "max-w-[90%] md:max-w-[569px]")}
              style={{
                fontFamily: "'Neue Montreal', sans-serif",
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
