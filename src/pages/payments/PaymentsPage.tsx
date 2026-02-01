import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import FeaturesList from "./FeaturesList";
import { ArrowRight } from "lucide-react";
const payments = "/payments/dollar-payments-onversion.png";

export const PaymentsPage = () => {
  return (
    <section
      className="py-12 px-4 sm:px-6 lg:px-24 bg-black border-b border-zinc-700/50 w-full overflow-x-hidden"
      aria-labelledby="payments-heading"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start justify-center">
        <motion.div
          className="relative lg:translate-x-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div
            className="left-0 w-full max-w-[250px] lg:w-[250px] h-[40px] font-montserrat font-normal text-xs sm:text-sm leading-tight tracking-[-0.28px] uppercase text-[#7861FF] bg-[rgba(120,97,255,0.05)] backdrop-blur-sm rounded-[8px] border border-[rgba(120,97,255,0.5)] flex items-center px-[10px] mb-6 overflow-hidden"
            aria-label="Pagamentos otimizados"
            style={{
              top: "calc(50% - 40px/2 - 116.6px)",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
            }}
          >
            <span className="relative w-3 h-3 sm:w-4 sm:h-4 flex-none shrink-0">
              <img
                src={payments}
                alt="Ícone de pagamentos otimizados"
                className="w-full h-full block"
              />
            </span>
            <span className="mx-auto">Pagamentos otimizados</span>
          </div>

          <header className="mt-1">
            <h2
              id="payments-heading"
              className="max-w-[520px] flex flex-col font-neue-montreal font-bold text-[2rem] leading-[1.15] sm:text-[3rem] sm:leading-[1.1] md:text-[4rem] md:leading-[1.05] lg:text-[65px] lg:leading-[1.05] tracking-[-0.02em] text-white mt-0.5"
            >
              Por que a Trustfy é a parceira ideal?
            </h2>
            <p className="font-neue-montreal font-normal max-w-[460px] text-[15px] leading-relaxed sm:text-base sm:leading-6 md:text-lg md:leading-7 lg:text-[22px] lg:leading-7 tracking-[0.5px] md:tracking-[1px] text-white/70 mb-10 mt-1">
              Entregue uma experiência de Gateway Próprio, projetado para
              fortalecer a sua marca em cada transação.
            </p>
          </header>

          <FeaturesList />

          <div className="mt-6 md:mt-10 w-full lg:max-w-[280px]">
            <Button variant="hero-primary" size="hero" asChild>
              <motion.button
                className="flex items-center justify-center gap-2 text-white w-full lg:w-[280px]"
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Fazer orçamento
                <ArrowRight className="shrink-0 size-6" />
              </motion.button>
            </Button>
          </div>
        </motion.div>

        <motion.aside
          className="relative flex items-center justify-center mt-8 lg:mt-24 overflow-hidden lg:overflow-visible w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <div className="relative w-[650px] h-[700px] lg:h-[825px] origin-center scale-[1.05] sm:scale-[1.1] md:scale-[1.05] lg:scale-100 mx-auto lg:mx-0">
            {/* Radial gradient background container */}

            {/* iPhone mockup - positioned at x: 209px, y: 121px */}
            <motion.figure
              className="absolute z-10 transform left-1/2 -translate-x-1/2 lg:left-[114px] lg:translate-x-0 top-[19px] lg:w-[401px] lg:h-[537px] w-[440px] h-[600px]"
              style={{
                transformOrigin: "center",
              }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <img
                src="/phone/iphone.png"
                alt="Mockup de checkout em iPhone"
                className="block w-full h-full object-contain md:scale-[1.25] lg:scale-[1.5] xl:scale-[1.7]"
              />
            </motion.figure>

            {/* Notification 3 - Largest moved to top (432.62 x 88.61) */}
            <motion.div
              className="absolute z-40 left-1/2 -translate-x-1/2 lg:left-[129px] lg:translate-x-0 bottom-[27%] lg:top-[440px] w-[320px] lg:w-[376.23px] h-[140px] lg:h-[163px]"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2 }}
              animate={{
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 0.35,
                delay: 0.6,
                ease: "easeOut",
                scale: {
                  duration: 0.9,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 0.7,
                },
              }}
            >
              <img
                src="/phone/notificacao.png"
                alt="Notificação de transferência"
                className="w-full h-full object-contain"
              />
            </motion.div>

            {/* Notification 2 - Medium centered above largest (371.77 x 76.14) */}
            <motion.div
              className="absolute z-30 left-1/2 -translate-x-1/2 lg:left-[153px] lg:translate-x-0 bottom-[24%] lg:top-[492px] w-[280px] lg:w-[324.5px] h-[110px] lg:h-[138px]"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2 }}
              animate={{
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 0.35,
                delay: 0.75,
                ease: "easeOut",
                scale: {
                  duration: 0.9,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 0.9,
                },
              }}
            >
              <img
                src="/phone/notificacao-02.png"
                alt="Notificação de transferência"
                className="w-full h-full object-contain"
              />
            </motion.div>

            {/* Notification 1 - Smallest moved to bottom (310.98 x 63.69) */}
            <motion.div
              className="absolute z-20 left-1/2 -translate-x-1/2 lg:left-[184px] lg:translate-x-0 bottom-[22%] lg:top-[556px] w-[240px] lg:w-[272.83px] h-[80px]"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2 }}
              animate={{
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 0.35,
                delay: 0.9,
                ease: "easeOut",
                scale: {
                  duration: 0.9,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 1.0,
                },
              }}
            >
              <img
                src="/phone/notificacao-03.png"
                alt="Notificação de transferência"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
};
