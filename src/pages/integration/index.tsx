import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export const IntegrationPage = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[815px] md:min-h-[815px] flex items-center justify-center py-12 md:py-20 bg-black"
    >
      <div className="max-w-[1920px] w-full mx-auto px-4 md:px-8">
        {/* Mobile Layout */}
        <div className="flex flex-col md:hidden gap-8">
          {/* Image - Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative w-full overflow-hidden rounded-lg"
          >
            <img
              src="/api-code-screen.png"
              alt="API Code Example"
              className="w-full h-auto object-contain"
            />
          </motion.div>

          {/* Content - Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col items-center text-center px-4"
          >
            {/* Heading */}
            <h2 className="font-neue-montreal font-bold text-[2.5rem] leading-[1.2] tracking-[-1.12px] text-white">
              Integração sem dor de cabeça
            </h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
              className="font-normal mx-auto max-w-[674px] tracking-[1.46px] text-[1.475rem] mb-16 mt-8 md:text-[22px] leading-7.5  text-[rgba(255,255,255,0.7)]"
              style={{ fontFamily: "'PP Neue Montreal', sans-serif " }}
            >
              Nossa API foi desenhada para ser intuitiva. Referências claras,
              exemplos de código reais e tudo o que seu time técnico precisa
              para rodar em minutos.
            </motion.p>

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
          </motion.div>
        </div>

        {/* Desktop Layout */}
        <div className="relative w-full max-w-[1315px] mx-auto h-[700px] hidden md:block">
          {/* Background SVG behind image */}
          <motion.svg
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute pointer-events-none z-0"
            width="1238"
            height="714"
            viewBox="0 0 1227 714"
            fill="none"
            style={{
              left: "calc(50% - 1238px/2 - 352px)",
              top: "0px",
              position: "absolute",
              width: "1238px",
              height: "714px",
            }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="-11"
              width="1238"
              height="714"
              fill="url(#paint0_radial_548_105)"
              fillOpacity="0.5"
            />
            <defs>
              <radialGradient
                id="paint0_radial_548_105"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(636.051 373.504) scale(603.908 348.296)"
              >
                <stop stopColor="#7861FF" stopOpacity="0.3" />
                <stop offset="1" stopOpacity="0.3" />
              </radialGradient>
            </defs>
          </motion.svg>

          {/* API Code Image - Main Element */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="absolute inset-0 z-10"
          >
            <img
              src="/api-code-screen.png"
              alt="API Code Example"
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Right Content - Positioned over image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="absolute right-24 top-[178px] z-10 flex flex-col items-end"
          >
            {/* Heading */}
            <h2 className=" flex flex-col max-w-[495px] text-end font-neue-montreal font-bold text-[2.5rem] md:text-[65px] leading-[1.2] md:leading-15.5 tracking-[-1.12px] text-white">
              Integração sem dor de cabeça
            </h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
              className="font-normal text-end max-w-[525px] tracking-[1.46px] text-[1.475rem] mb-10 mt-4 md:text-[22px] leading-7.5  text-[rgba(255,255,255,0.7)]"
              style={{ fontFamily: "'PP Neue Montreal', sans-serif " }}
            >
              Nossa API foi desenhada para ser intuitiva. Referências claras,
              exemplos de código reais e tudo o que seu time técnico precisa
              para rodar em minutos.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
              className="flex justify-end "
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};
