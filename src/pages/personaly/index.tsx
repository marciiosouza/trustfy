import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
          <div
            className="left-0 w-[238px] h-[40px] bg-[rgba(120,97,255,0.05)] backdrop-blur-sm rounded-[8px] border border-[rgba(120,97,255,0.5)] uppercase text-[14px] font-medium text-[#7861FF] flex items-center px-[12px] mb-8 overflow-hidden"
            aria-label="Pagamentos otimizados"
            style={{
              top: "calc(50% - 40px/2 - 116.6px)",
              fontFamily: "'Montserrat Thin', sans-serif",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
            }}
          >
            <span className="mx-auto">Personalização Total</span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <header className="mb-8">
          <motion.h2
            id="personaly-heading"
            className=" flex flex-col font-neue-montreal font-bold text-[2.5rem] md:text-[65px] leading-[1.2] md:leading-15.5 tracking-[-1.12px] text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Design 100% Sob Medida
          </motion.h2>
          <motion.p
            className="font-normal mx-auto max-w-[674px] tracking-[1.46px] text-[1.475rem] mb-16 mt-8 md:text-[22px] leading-7.5  text-[rgba(255,255,255,0.7)]"
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
          <Button asChild>
            <motion.button
              className="relative w-[319px] h-[60px] bg-[#7861FF] rounded-[8px] flex items-center justify-center group transition-all"
              style={{
                boxShadow:
                  "0px 4px 40px rgba(120, 97, 255, 0.3), inset 0px 4px 24px rgba(255, 255, 255, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className=" font-medium text-[16px] text-white">
                Fazer orçamento
              </span>
              <ArrowRight className="w-6 h-6 text-white" />
            </motion.button>
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
          top: "242px",
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
