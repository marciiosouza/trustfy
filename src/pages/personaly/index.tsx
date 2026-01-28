import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

export const PersonalyPage = () => {
  const [isDragging, setIsDragging] = useState(false);
  const sliderPosition = useMotionValue(50); // Posição inicial no meio (50%)
  const clipPercentage = useTransform(sliderPosition, (value) => `${value}%`);

  return (
    <section
      className="relative py-16 px-6 lg:px-24 bg-black min-h-[1214px] flex flex-col items-center justify-center overflow-hidden"
      aria-labelledby="personaly-heading"
    >
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Header Badge */}
        <motion.div
          className="inline-flex items-center justify-center my-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Button className="text-sm font-medium bg-violet-950/30 text-violet-800 border border-violet-800 uppercase mb-12">
            Personalização Total{" "}
          </Button>
        </motion.div>

        {/* Main Heading */}
        <header className="mb-8">
          <motion.h2
            id="personaly-heading"
            className=" mx-auto flex flex-col font-neue-montreal font-bold text-[68px] leading-15.5  tracking-[-1.12px] text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Design 100% Sob Medida
          </motion.h2>
          <motion.p
            className="font-normal text-[24px] leading-7.5 mt-4  text-[rgba(255,255,255,0.7)] max-w-[820px] text-center mx-auto"
            style={{ fontFamily: "'PP Neue Montreal', sans-serif " }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Tenha liberdade total de edição. Configure cores, logos e layouts
            para que a tecnologia reflita exatamente a identidade do seu
            negócio.
          </motion.p>
        </header>

        {/* System Image with Border and Interactive Slider */}
        <motion.div
          className="relative my-16 mx-auto max-w-[1290px]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <div className="relative rounded-[26px] overflow-hidden border-2 border-[#7861FF]">
            {/* Imagem em Preto e Branco (Lado Direito) */}
            <img
              src="/system-screen-white.png"
              alt="Tela do sistema em preto e branco"
              className="w-full h-auto object-cover rounded-[26px]"
            />

            {/* Imagem Colorida (Lado Esquerdo - Overlay com clip) */}
            <motion.div
              className="absolute inset-0"
              style={{
                clipPath: useTransform(
                  clipPercentage,
                  (value) =>
                    `inset(0 ${100 - parseFloat(value as string)}% 0 0)`,
                ),
              }}
            >
              <img
                src="/system-screen.png"
                alt="Tela do sistema colorida"
                className="w-full h-auto object-cover rounded-[26px]"
              />
            </motion.div>

            {/* Barra Deslizante com Scrollbar Style */}
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0}
              dragMomentum={false}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={() => setIsDragging(false)}
              onDrag={(_, info) => {
                const container = document.querySelector(".max-w-\\[1290px\\]");
                if (container) {
                  const rect = container.getBoundingClientRect();
                  const x = info.point.x - rect.left;
                  const percentage = Math.max(
                    0,
                    Math.min(100, (x / rect.width) * 100),
                  );
                  sliderPosition.set(percentage);
                }
              }}
              className="absolute top-0 bottom-0 w-[13px] flex items-center justify-center cursor-ew-resize z-10"
              style={{
                left: useTransform(clipPercentage, (value) => value),
                x: "-50%",
              }}
            >
              <div className="relative h-full w-[5px] bg-[#7861FF] rounded-full">
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[13px] h-[97px] bg-white rounded-[10px]"
                  style={{
                    boxShadow: "0 0 0 1px #7861FF",
                  }}
                  animate={{
                    scale: isDragging ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
        >
          <Button
            className="w-[319px] h-[60px] bg-[#7861FF] hover:bg-[#6951EE] text-white rounded-[8px] relative overflow-hidden mt-[48px]"
            style={{
              boxShadow:
                "0px 4px 40px rgba(120, 97, 255, 0.3), inset 0px 4px 24px rgba(255, 255, 255, 0.3)",
              border: "1px solid rgba(255, 255, 255, 0.5)",
            }}
          >
            <span
              className="text-[16px] leading-[19px] tracking-[-0.32px] font-semibold"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Fazer orçamento
            </span>

            {/* Arrow Icon */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="transition-transform group-hover:translate-x-1"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Border */}
            <div className="absolute inset-0 border border-white/50 rounded-lg pointer-events-none" />
          </Button>
        </motion.div>
      </div>

      {/* Bottom SVG radial gradient */}
      <svg
        className="absolute pointer-events-none"
        width="2033"
        height="992"
        viewBox="0 0 1920 992"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{
          position: "absolute",
          width: "2033px",
          height: "992px",
          left: "calc(50% - 2033px/2 - 1.5px)",
          top: "192px",
          zIndex: 0,
          transform: "translateZ(0)",
        }}
      >
        <rect
          x="-58"
          width="2033"
          height="992"
          fill="url(#paint0_radial_548_230)"
        />
        <defs>
          <radialGradient
            id="paint0_radial_548_230"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1004.56 518.93) scale(991.716 483.907)"
          >
            <stop stopColor="#7861FF" stopOpacity="0.3" />
            <stop offset="1" stopOpacity="0.3" />
          </radialGradient>
        </defs>
      </svg>
    </section>
  );
};
