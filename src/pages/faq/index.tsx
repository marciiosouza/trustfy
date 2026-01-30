import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface FAQItem {
  id: string;
  number: string;
  question: string;
  answer?: string;
}

const faqData: FAQItem[] = [
  {
    id: "01",
    number: "01",
    question: "Qual o tempo de implementação?",
    answer:
      "Nossa solução é ideal para empresas que buscam personalização completa em seus processos de pagamento.",
  },
  {
    id: "02",
    number: "02",
    question: "Quais são as taxas cobradas?",
    answer:
      "Nossa solução é ideal para empresas que buscam personalização completa em seus processos de pagamento.",
  },
  {
    id: "03",
    number: "03",
    question: "Como posso obter suporte?",
    answer:
      "Nossa solução é ideal para empresas que buscam personalização completa em seus processos de pagamento.",
  },
  {
    id: "04",
    number: "04",
    question: "A plataforma possui sistema antifraude?",
    answer:
      "Nossa solução é ideal para empresas que buscam personalização completa em seus processos de pagamento.",
  },
  {
    id: "05",
    number: "05",
    question: "Quais formas de pagamentos o sistema aceita?",
    answer:
      "Nossa solução é ideal para empresas que buscam personalização completa em seus processos de pagamento.",
  },
  {
    id: "06",
    number: "06",
    question: "Preciso ter uma equipe de desenvolvedores para começar?",
    answer:
      "Nossa solução é ideal para empresas que buscam personalização completa em seus processos de pagamento.",
  },
];

// Motion variants: container for staggering and items with index-based delays
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: (i = 0) => ({
    opacity: 0,
    y: 28,
    scale: 0.995,
  }),
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      delay: i * 0.04,
    },
  }),
};

export const FaqPage = () => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full min-h-[946px] flex items-center justify-center py-20 bg-black overflow-hidden">
      <div className="max-w-[1920px] w-full mx-auto px-8">
        <div className="relative w-full max-w-[1383px] mx-auto text-center">
          {/* Header Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="flex justify-center mb-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="left-0 w-[238px] h-[40px] bg-[rgba(120,97,255,0.05)] backdrop-blur-sm rounded-[8px] border border-[rgba(120,97,255,0.5)] uppercase text-[14px] font-medium text-[#7861FF] flex items-center px-[12px] mb-8 overflow-hidden"
              aria-label="Pagamentos otimizados"
              style={{
                top: "calc(50% - 40px/2 - 116.6px)",
                fontFamily: "'Montserrat Thin', sans-serif",
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
              }}
            >
              <span className="mx-auto">Dúvidas Gerais</span>
            </motion.div>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.7,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1]
            }}
            className=" flex flex-col mx-auto font-neue-montreal font-bold text-[2.5rem] md:text-[65px] leading-[1.2] md:leading-15.5 tracking-[-1.12px] text-white"
          >
            Perguntas Frequentes
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.7,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="font-normal mx-auto max-w-[674px] tracking-[1.46px] text-[1.475rem] mb-10 mt-4 md:text-[22px] leading-7.5  text-[rgba(255,255,255,0.7)]"
            style={{ fontFamily: "'PP Neue Montreal', sans-serif " }}
          >
            Confira as respostas para as principais perguntas de quem deseja
            abrir seu próprio Gateway de pagamentos.
          </motion.p>

          {/* FAQ Grid */}
          <motion.div
            initial={shouldReduceMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-26"
          >
            {faqData.map((item, index) => {
              const isOpen = openItems.has(item.id);
              return (
                <motion.div
                  key={item.id ?? index}
                  variants={itemVariants}
                  custom={index}
                  initial={shouldReduceMotion ? "visible" : undefined}
                  className="relative rounded-2xl bg-black transition-all cursor-pointer"
                  style={{
                    boxShadow: "inset 0px 4px 16px rgba(120, 97, 255, 0.2)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                  }}
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="relative w-full p-6 text-left"
                  >
                    {/* Number Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative inline-flex items-center justify-center h-7 px-4 rounded-full"
                        style={{
                          background:
                            "linear-gradient(60.23deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.06) 100%)",
                          border: "1px solid rgba(120, 97, 255, 0.29)",
                        }}
                      >
                        <span className="font-medium text-[12px] leading-[16px] tracking-[-0.24px] text-[#7861FF]">
                          {item.number}
                        </span>
                      </motion.div>

                      {/* Plus/Minus Icon */}
                      <motion.div
                        animate={{ 
                          rotate: isOpen ? 135 : 0,
                        }}
                        transition={{ 
                          duration: 0.4,
                          ease: [0.16, 1, 0.3, 1]
                        }}
                        className="flex items-center justify-center w-6 h-6"
                      >
                        <motion.svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <motion.path
                            d="M12 5V19M5 12H19"
                            stroke="#7861FF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            animate={{
                              stroke: isOpen ? "#FFFFFF" : "#7861FF"
                            }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.svg>
                      </motion.div>
                    </div>

                    {/* Divider */}
                    <motion.div 
                      className="h-[1px] bg-white/10 mb-4"
                      animate={{
                        scaleX: isOpen ? 1 : 0.95,
                        opacity: isOpen ? 1 : 0.5
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Question */}
                    <motion.p 
                      className="font-normal text-[18px] leading-[18px] tracking-[-0.28px] text-[#F3F3F3]"
                      animate={{
                        color: isOpen ? "#FFFFFF" : "#F3F3F3"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.question}
                    </motion.p>

                    {/* Answer (when expanded) */}
                    <AnimatePresence mode="wait">
                      {isOpen && item.answer && (
                        <motion.div
                          initial={{ 
                            height: 0, 
                            opacity: 0,
                            y: -10
                          }}
                          animate={{ 
                            height: "auto", 
                            opacity: 1,
                            y: 0
                          }}
                          exit={{ 
                            height: 0, 
                            opacity: 0,
                            y: -10
                          }}
                          transition={{ 
                            duration: 0.4,
                            ease: [0.16, 1, 0.3, 1]
                          }}
                          className="overflow-hidden"
                        >
                          <motion.div 
                            className="mt-4 pt-4 border-t border-white/10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                          >
                            <p className="font-normal text-[16px] leading-[22px] text-white/70">
                              {item.answer}
                            </p>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.7, 
              delay: 0.5,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="flex justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: 0.7, 
                ease: [0.16, 1, 0.3, 1]
              }}
              className="flex justify-end "
            >
              <Button asChild>
                <motion.button
                  className="relative w-[319px] h-[60px] bg-[#7861FF] rounded-[8px] flex items-center justify-center group transition-all"
                  style={{
                    boxShadow:
                      "0px 4px 40px rgba(120, 97, 255, 0.3), inset 0px 4px 24px rgba(255, 255, 255, 0.3)",
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0px 6px 50px rgba(120, 97, 255, 0.5), inset 0px 4px 24px rgba(255, 255, 255, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 17 
                  }}
                >
                  <motion.span 
                    className="font-medium text-[16px] text-white"
                    initial={{ x: 0 }}
                    whileHover={{ x: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Fazer orçamento
                  </motion.span>
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="w-6 h-6 text-white" />
                  </motion.div>
                </motion.button>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
