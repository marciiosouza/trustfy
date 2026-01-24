import { Button } from "@/components/ui/button";
import FeaturesList from "./FeaturesList";
const payments = "/payments/dollar-payments-onversion.png";

export const PaymentsPage = () => {
  return (
    <section
      className="py-16 px-6 lg:px-24 bg-black border-b border-violet-800"
      aria-labelledby="payments-heading"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <Button className="text-sm font-medium bg-violet-950/30 text-violet-800 border border-violet-800 uppercase mb-12">
            <img
              src={payments}
              alt="Ícone de pagamentos otimizados"
              className="w-4 h-4"
            />
            Pagamentos otimizados
          </Button>

          <header className="mt-2">
            <h2
              id="payments-heading"
              className="text-[57.6px] font-bold text-white leading-12 max-w-[482px]"
            >
              Por que a Trustfy é a parceira ideal?
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-[462px]">
              Entregue uma experiência de Gateway Próprio, projetado para
              fortalecer a sua marca em cada transação.
            </p>
          </header>

          <FeaturesList />

          <div className="mt-18.5">
            <Button
              className="bg-[#7861ff] text-white rounded-[8px] py-[18px] px-[30px] h-[60px] w-full max-w-[319px] border border-[rgba(255,255,255,0.5)] font-semibold"
              aria-label="Fazer orçamento"
            >
              Fazer orçamento
              <svg
                className="ml-3 w-4 h-4"
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
            </Button>
          </div>
        </div>

        <aside className="relative">
          <figure className="rounded-xl overflow-hidden shadow-2xl">
            <img
              src="/iphone.png"
              alt="Mockup de checkout em iPhone"
              className="w-full h-auto object-cover"
            />
          </figure>
        </aside>
      </div>
    </section>
  );
};

