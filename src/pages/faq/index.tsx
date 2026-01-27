import { Button } from "@/components/ui/button";
import { useState } from "react";

interface FAQItem {
  id: string;
  number: string;
  question: string;
  answer?: string;
}

const faqData: FAQItem[] = [
  {
    id: "001",
    number: "001",
    question: "A Black Cat é indicada para qual tipo de negócio?",
    answer:
      "Nossa solução é ideal para empresas que buscam personalização completa em seus processos de pagamento.",
  },
  {
    id: "002",
    number: "002",
    question: "A Black Cat é indicada para qual tipo de negócio?",
    answer:
      "Nossa solução é ideal para empresas que buscam personalização completa em seus processos de pagamento.",
  },
  {
    id: "003",
    number: "003",
    question: "A Black Cat é indicada para qual tipo de negócio?",
    answer:
      "Nossa solução é ideal para empresas que buscam personalização completa em seus processos de pagamento.",
  },
  {
    id: "004",
    number: "004",
    question: "A Black Cat é indicada para qual tipo de negócio?",
    answer:
      "Nossa solução é ideal para empresas que buscam personalização completa em seus processos de pagamento.",
  },
  {
    id: "005",
    number: "005",
    question: "A Black Cat é indicada para qual tipo de negócio?",
    answer:
      "Nossa solução é ideal para empresas que buscam personalização completa em seus processos de pagamento.",
  },
  {
    id: "006",
    number: "006",
    question: "Como posso integrar a plataforma no meu sistema?",
    answer:
      "Nossa solução é ideal para empresas que buscam personalização completa em seus processos de pagamento.",
  },
];

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

  return (
    <section className="relative w-full min-h-[946px] flex items-center justify-center py-20 bg-black">
      <div className="max-w-[1920px] w-full mx-auto px-8">
        <div className="relative w-full max-w-[1383px] mx-auto text-center">
          {/* Header Badge */}
          <div className="flex justify-center mb-4">
            <Button className=" w-52 text-sm font-medium bg-violet-950/30 text-violet-800 border border-violet-800 uppercase mb-12">
              Dúvidas Gerais
            </Button>
          </div>

          {/* Main Heading */}
          <h2 className=" mx-autoflex flex-col font-neue-montreal font-bold text-[68px] leading-15.5 tracking-[-1.12px] text-white">
            Perguntas Frequentes
          </h2>

          {/* Description */}
          <p
            className="font-normal text-[24px] leading-7.5 mt-6  text-[rgba(255,255,255,0.7)] max-w-[625px]  text-center mx-auto mb-16"
            style={{ fontFamily: "'PP Neue Montreal', sans-serif " }}
          >
            Confira as respostas para as principais perguntas de quem deseja
            abrir seu próprio Gateway de pagamentos.
          </p>

          {/* FAQ Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-26">
            {faqData.map((item) => {
              const isOpen = openItems.has(item.id);
              return (
                <div
                  key={item.id}
                  className="relative rounded-2xl bg-black transition-all"
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
                      <div
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
                      </div>

                      {/* Plus/Minus Icon */}
                      <div className="flex items-center justify-center w-6 h-6">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          className={`transition-transform ${isOpen ? "rotate-45" : ""}`}
                        >
                          <path
                            d="M12 5V19M5 12H19"
                            stroke="#7861FF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-[1px] bg-white/10 mb-4" />

                    {/* Question */}
                    <p className="font-normal text-[18px] leading-[18px] tracking-[-0.28px] text-[#F3F3F3]">
                      {item.question}
                    </p>

                    {/* Answer (when expanded) */}
                    {isOpen && item.answer && (
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <p className="font-normal text-[16px] leading-[22px] text-white/70">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </button>
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button
              className="relative w-[319px] h-[60px] bg-[#7861FF] rounded-lg flex items-center justify-center gap-3 group transition-all hover:scale-105"
              style={{
                boxShadow:
                  "0px 4px 40px rgba(120, 97, 255, 0.3), inset 0px 4px 24px rgba(255, 255, 255, 0.3)",
                border: "1px solid rgba(255, 255, 255, 0.5)",
              }}
            >
              <span className="font-semibold text-[16px] leading-[19px] tracking-[-0.32px] text-white">
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
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
