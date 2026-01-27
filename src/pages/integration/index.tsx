import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const IntegrationPage = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects
  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
  const contentY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[815px] flex items-center justify-center py-20 bg-black overflow-hidden"
    >
      <div className="max-w-[1920px] w-full mx-auto px-8">
        <div className="relative w-full max-w-[1315px] mx-auto h-[700px]">
          {/* API Code Image - Main Element */}
          <motion.div
            className="absolute inset-0"
            style={{ y: imageY, scale: imageScale }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.img
              src="/api-code-screen.png"
              alt="API Code Example"
              className="w-full h-full object-contain"
              initial={{ filter: "blur(10px)" }}
              whileInView={{ filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            />
          </motion.div>

          {/* Right Content - Positioned over image */}
          <motion.div
            className="absolute right-16 top-[188px] max-w-[525px] z-10"
            style={{ y: contentY }}
          >
            {/* Heading */}
            <motion.h2
              className="font-bold text-[65px] leading-[64px] text-white text-right mb-8"
              initial={{ opacity: 0, x: 100, rotateX: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              Integrações
            </motion.h2>

            {/* Description */}
            <motion.p
              className="font-normal text-[22px] leading-[28px] text-white text-right mb-12"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              Nossa API foi desenhada para ser intuitiva. Referências claras,
              exemplos de código reais e tudo o que seu time técnico precisa
              para rodar em minutos.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              className="flex justify-end"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <motion.button
                className="relative w-[319px] h-[60px] bg-[#7861FF] rounded-lg flex items-center justify-center gap-3 group transition-all"
                style={{
                  boxShadow:
                    "0px 4px 40px rgba(120, 97, 255, 0.3), inset 0px 4px 24px rgba(255, 255, 255, 0.3)",
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0px 8px 60px rgba(120, 97, 255, 0.5), inset 0px 4px 24px rgba(255, 255, 255, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <span className="font-semibold text-[16px] leading-[19px] tracking-[-0.32px] text-white">
                  Fazer orçamento
                </span>

                {/* Arrow Icon */}
                <motion.svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="transition-transform group-hover:translate-x-1"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>

                {/* Border */}
                <div className="absolute inset-0 border border-white/50 rounded-lg pointer-events-none" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
