import { Button } from "@/components/ui/button";

export const PersonalyPage = () => {
  return (
    <section
      className="relative py-16 px-6 lg:px-24 bg-black min-h-[1214px] flex flex-col items-center justify-center overflow-hidden"
      aria-labelledby="personaly-heading"
    >
      {/* Radial Gradient Background */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          background:
            "radial-gradient(48.78% 48.78% at 52.27% 52.31%, rgba(120, 97, 255, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%)",
          width: "2033px",
          height: "992px",
          maxWidth: "100%",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Header Badge */}
        <div className="inline-flex items-center justify-center mb-6">
          <div
            className="px-6 py-3 rounded-lg backdrop-blur-sm border"
            style={{
              background: "rgba(120, 97, 255, 0.05)",
              borderColor: "rgba(120, 97, 255, 0.5)",
            }}
          >
            <span
              className="text-[14px] font-medium uppercase tracking-[-0.28px] text-[#7861FF]"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              PERSONALIZAÇÃO TOTAL
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <header className="mb-8">
          <h2
            id="personaly-heading"
            className="text-[65px] font-bold leading-[58px] tracking-[-0.96px] text-white mb-6"
            style={{ fontFamily: "'Neue Montreal', sans-serif" }}
          >
            Design 100% Sob Medida
          </h2>
          <p
            className="text-[22px] leading-[25px] text-white/70 max-w-[674px] mx-auto"
            style={{ fontFamily: "'Neue Montreal', sans-serif" }}
          >
            Tenha liberdade total de edição. Configure cores, logos e layouts
            para que a tecnologia reflita exatamente a identidade do seu
            negócio.
          </p>
        </header>

        {/* System Image with Border and Scrollbar */}
        <div className="relative my-16 mx-auto max-w-[1290px]">
          <div className="relative rounded-[26px] overflow-hidden border-2 border-[#7861FF]">
            <img
              src="/system-screen.png"
              alt="Tela do sistema de pagamentos personalizado"
              className="w-full h-auto object-cover rounded-[26px]"
            />

            {/* Scrollbar Indicator */}
            <div className="absolute right-0 top-0 bottom-0 w-[13px] flex items-center justify-center">
              <div className="relative h-full w-[5px] bg-[#7861FF] rounded-full">
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[13px] h-[97px] bg-white rounded-[10px]"
                  style={{
                    boxShadow: "0 0 0 1px #7861FF",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-16">
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
            <svg
              className="ml-3 w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
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
          top: "192px",
          zIndex: 0,
          transform: "translateZ(0)"
        }}
      >
        <rect x="-58" width="2033" height="992" fill="url(#paint0_radial_548_230)" />
        <defs>
          <radialGradient id="paint0_radial_548_230" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1004.56 518.93) scale(991.716 483.907)">
            <stop stopColor="#7861FF" stopOpacity="0.3" />
            <stop offset="1" stopOpacity="0.3" />
          </radialGradient>
        </defs>
      </svg>
    </section>
  );
};
