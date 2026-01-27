import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const PersonalyPage = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.95, 1, 0.95],
  );

  return (
    <section
      ref={sectionRef}
      className="relative py-16 px-6 lg:px-24 bg-black min-h-[1214px] flex flex-col items-center justify-center overflow-hidden"
      aria-labelledby="personaly-heading"
    >
      {/* Radial Gradient Background */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          background:
            "radial-gradient(48.78% 48.78% at 52.27% 52.31%, rgba(120, 97, 255, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%)",
          width: "2033px",
          height: "992px",
          maxWidth: "100%",
          y: backgroundY,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Header Badge */}
        <motion.div
          className="inline-flex items-center justify-center mb-6"
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="px-6 py-3 rounded-lg backdrop-blur-sm border"
            style={{
              background: "rgba(120, 97, 255, 0.05)",
              borderColor: "rgba(120, 97, 255, 0.5)",
            }}
            whileHover={{
              scale: 1.05,
              borderColor: "rgba(120, 97, 255, 0.8)",
              background: "rgba(120, 97, 255, 0.1)",
            }}
            transition={{ duration: 0.3 }}
          >
            <span
              className="text-[14px] font-medium uppercase tracking-[-0.28px] text-[#7861FF]"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Pagamentos Personalizados
            </span>
          </motion.div>
        </motion.div>

        {/* Main Heading */}
        <header className="mb-8">
          <motion.h2
            id="personaly-heading"
            className="text-[65px] font-bold leading-[58px] tracking-[-0.96px] text-white mb-6"
            style={{ fontFamily: "'Neue Montreal', sans-serif" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Por Que Escolher
            <br />a GatewayFY?
          </motion.h2>

          <motion.p
            className="text-[22px] leading-[25px] text-white/70 max-w-[674px] mx-auto"
            style={{ fontFamily: "'Neue Montreal', sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            Com nossa solução, você personaliza a experiência de pagamento de
            acordo com a identidade da sua empresa.
          </motion.p>
        </header>

        {/* System Image with Border and Scrollbar */}
        <motion.div
          className="relative my-16 mx-auto max-w-[1290px]"
          style={{ y: imageY, scale: imageScale }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="relative rounded-[26px] overflow-hidden border-2 border-[#7861FF]"
            whileHover={{ scale: 1.02, borderColor: "rgba(120, 97, 255, 1)" }}
            transition={{ duration: 0.4 }}
          >
            <motion.img
              src="/system-screen.png"
              alt="Tela do sistema de pagamentos personalizado"
              className="w-full h-auto object-cover rounded-[26px]"
              initial={{ filter: "blur(10px)", scale: 1.1 }}
              whileInView={{ filter: "blur(0px)", scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.6 }}
            />

            {/* Scrollbar Indicator */}
            <motion.div
              className="absolute right-0 top-0 bottom-0 w-[13px] flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <div className="relative h-full w-[5px] bg-[#7861FF] rounded-full">
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[13px] h-[97px] bg-white rounded-[10px]"
                  style={{ boxShadow: "0 0 0 1px #7861FF" }}
                  initial={{ y: "-100%" }}
                  whileInView={{ y: "-50%" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.5,
                    delay: 1.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              className="bg-[#7861FF] text-white rounded-lg py-[20px] px-[78px] h-[60px] w-full max-w-[319px] border border-white/50 font-semibold text-[16px] tracking-[-0.32px]"
              style={{
                boxShadow:
                  "0px 4px 40px rgba(120, 97, 255, 0.3), inset 0px 4px 24px rgba(255, 255, 255, 0.3)",
                fontFamily: "Montserrat, sans-serif",
              }}
              aria-label="Fazer orçamento"
            >
              Fazer orçamento
              <motion.svg
                className="ml-3 w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
              >
                <path
                  d="M5 12h14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
