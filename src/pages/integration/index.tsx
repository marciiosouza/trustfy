export const IntegrationPage = () => {
  return (
    <section className="relative w-full min-h-[815px] flex items-center justify-center py-20 bg-black">
      <div className="max-w-[1920px] w-full mx-auto px-8">
        <div className="relative w-full max-w-[1315px] mx-auto h-[700px]">
          {/* Background SVG behind image */}
          <svg
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
            <rect x="-11" width="1238" height="714" fill="url(#paint0_radial_548_105)" fillOpacity="0.5" />
            <defs>
              <radialGradient id="paint0_radial_548_105" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(636.051 373.504) scale(603.908 348.296)">
                <stop stopColor="#7861FF" stopOpacity="0.3" />
                <stop offset="1" stopOpacity="0.3" />
              </radialGradient>
            </defs>
          </svg>

          {/* API Code Image - Main Element */}
          <div className="absolute inset-0 z-10">
            <img
              src="/api-code-screen.png"
              alt="API Code Example"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Right Content - Positioned over image */}
          <div className="absolute right-16 top-[178px] max-w-[525px] z-10">
            {/* Heading */}
            <h2 className="font-bold text-[65px] leading-[64px] text-white text-right mb-8">
              Integração sem dor de cabeça
            </h2>

            {/* Description */}
            <p className="font-normal text-[22px] leading-[28px] text-white text-right mb-12">
              Nossa API foi desenhada para ser intuitiva. Referências claras,
              exemplos de código reais e tudo o que seu time técnico precisa
              para rodar em minutos.
            </p>

            {/* CTA Button */}
            <div className="flex justify-end">
              <button
                className="relative w-[319px] h-[60px] bg-[#7861FF] rounded-lg flex items-center justify-center gap-3 group transition-all hover:shadow-lg hover:shadow-[#7861FF]/30"
                style={{
                  boxShadow:
                    "0px 4px 40px rgba(120, 97, 255, 0.3), inset 0px 4px 24px rgba(255, 255, 255, 0.3)",
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

                {/* Border */}
                <div className="absolute inset-0 border border-white/50 rounded-lg pointer-events-none" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
