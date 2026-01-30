import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import FeaturesList from "./FeaturesList";
import { ArrowRight } from "lucide-react";
const payments = "/payments/dollar-payments-onversion.png";

export const PaymentsPage = () => {
  return (
    <section
      className="py-14  px-6 lg:px-24 bg-black border-b border-zinc-700/50 w-full"
      aria-labelledby="payments-heading"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
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
            <span className="relative w-4 h-4 flex-none">
              <img
                src={payments}
                alt="Ícone de pagamentos otimizados"
                className="w-4 h-4 block"
              />
            </span>
            <span className="mx-auto">Pagamentos otimizados</span>
          </div>

          <header className="mt-2">
            <h2
              id="payments-heading"
              className="max-w-132 flex flex-col font-neue-montreal font-bold text-[2.5rem] md:text-[65px] leading-[1.2] md:leading-15.5 tracking-[-1.12px] text-white"
            >
              Por que a Trustfy é a parceira ideal?
            </h2>
            <p
              className="font-normal max-w-[534px] tracking-[1.46px] text-[1.475rem] mb-16 mt-2 md:text-[22px] leading-7.5  text-[rgba(255,255,255,0.7)]"
              style={{ fontFamily: "'PP Neue Montreal', sans-serif " }}
            >
              Entregue uma experiência de Gateway Próprio, projetado para
              fortalecer a sua marca em cada transação.
            </p>
          </header>

          <FeaturesList />

          <div className="mt-10 md:mt-14">
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
          </div>
        </motion.div>

        <motion.aside
          className="relative flex items-center justify-center mt-8 lg:mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="relative w-[650px] h-[825px]">
            {/* Radial gradient background container */}

            {/* iPhone mockup - positioned at x: 209px, y: 121px */}
            <motion.figure
              className="absolute z-10 transform"
              style={{
                left: "114px",
                top: "19px",
                width: "401px",
                height: "537px",
                transformOrigin: "center",
              }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src="/phone/iphone.png"
                alt="Mockup de checkout em iPhone"
                className="block w-[401px] h-[537px] object-contain md:scale-[1.25] lg:scale-[1.5] xl:scale-[1.7]"
              />
            </motion.figure>

            {/* Notification 3 - Largest moved to top (432.62 x 88.61) */}
            <motion.div
              className="absolute z-40"
              style={{
                left: "129px",
                top: "440px",
                width: "376.23px",
                height: "163px",
              }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
              animate={{
                scale: [1, 1.03, 1],
              }}
              // @ts-ignore
              transition={{
                duration: 0.6,
                delay: 1.2,
                ease: "easeOut",
                scale: {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 1.8,
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
              className="absolute z-30"
              style={{
                left: "153px",
                top: "488px",
                width: "324.5px",
                height: "138px",
              }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
              animate={{
                scale: [1, 1.03, 1],
              }}
              // @ts-ignore
              transition={{
                duration: 0.6,
                delay: 1.4,
                ease: "easeOut",
                scale: {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 2.0,
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
              className="absolute z-20"
              style={{
                left: "184px",
                top: "539px",
                width: "272.83px",
                height: "90px",
              }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6, delay: 1.6, ease: "easeOut" }}
              animate={{
                scale: [1, 1.03, 1],
              }}
              // @ts-ignore
              transition={{
                duration: 0.6,
                delay: 1.6,
                ease: "easeOut",
                scale: {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 2.2,
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
