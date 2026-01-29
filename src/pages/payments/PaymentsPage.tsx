import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import FeaturesList from "./FeaturesList";
const payments = "/payments/dollar-payments-onversion.png";

export const PaymentsPage = () => {
  return (
    <section
      className="py-16 px-6 lg:px-24 bg-black border-b border-zinc-700/50 w-full"
      aria-labelledby="payments-heading"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Button
            className=" left-0 w-[238px] h-[40px] bg-[rgba(120,97,255,0.05)] backdrop-blur-sm rounded-[8px] border border-[rgba(120,97,255,0.5)] uppercase text-[14px] font-medium text-[#7861FF] flex items-center px-[12px] mb-10 overflow-hidden"
            aria-label="Pagamentos otimizados"
            style={{
              top: "calc(50% - 40px/2 - 116.6px)",
              fontFamily: "'Montserrat Thin', sans-serif",
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
          </Button>

          <header className="mt-2">
            <h2
              id="payments-heading"
              className="max-w-138 flex flex-col font-neue-montreal font-bold text-[2.5rem] md:text-[68px] leading-[1.2] md:leading-15.5 tracking-[-1.12px] text-white"
            >
              Por que a Trustfy é a parceira ideal?
            </h2>
            <p
              className="font-normal text-[1.475rem] mb-16 mt-4 md:text-[24px] leading-7.5  text-[rgba(255,255,255,0.7)]"
              style={{ fontFamily: "'PP Neue Montreal', sans-serif " }}
            >
              Entregue uma experiência de Gateway Próprio, projetado para
              fortalecer a sua marca em cada transação.
            </p>
          </header>

          <FeaturesList />

          <div className="mt-10 md:mt-18.5">
            <Button
              className="w-full md:w-[319px] h-[56px] md:h-[60px] bg-[#7861ff] rounded-[8px] border border-[rgba(255,255,255,0.5)] text-white font-semibold text-[14px] md:text-[16px] leading-[19px] tracking-[-0.32px] flex items-center justify-center px-[20px] md:px-[30px] shadow-[0_4px_40px_rgba(120,97,255,0.3),_inset_0_4px_24px_rgba(255,255,255,0.3)] hover:bg-[#6640F5] hover:shadow-[0px_4px_50px_rgba(120,97,255,0.4)]"
              aria-label="Fazer orçamento"
              style={{ fontFamily: "'Montserrat Thin', sans-serif" }}
            >
              <span className=" flex items-center justify-center gap-2 mx-auto ">
                Fazer orçamento{" "}
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
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
                </svg>
              </span>
            </Button>
          </div>
        </motion.div>

        <motion.aside
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <figure className="flex items-center justify-center">
            <img
              src="/iphone.png"
              alt="Mockup de checkout em iPhone"
              className="w-full max-w-[700px] mt-8 lg:mt-12 h-auto object-contain lg:scale-110"
            />
          </figure>
        </motion.aside>
      </div>
    </section>
  );
};
