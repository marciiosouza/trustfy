import { useEffect, useState } from "react";

export const HeroPage = () => {
  const [, setScale] = useState(1);
  const DESIGN_WIDTH = 1920;
  const DESIGN_HEIGHT = 1242;

  useEffect(() => {
    const updateScale = () => {
      const scaleX = window.innerWidth / DESIGN_WIDTH;
      const scaleY = window.innerHeight / DESIGN_HEIGHT;
      const newScale = Math.max(scaleX, scaleY);
      setScale(newScale);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <>
      <div className="w-full min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
        <div
          style={{
            width: DESIGN_WIDTH,
            height: DESIGN_HEIGHT,
            transformOrigin: "center center",
          }}
          className="relative"
        >
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src="/background-blur.png"
              alt="bg"
              className="w-full h-full object-cover filter blur-[10.8px]"
            />
          </div>

          {/* Macbook */}
          <div className="absolute left-[182px] top-[538px]">
            <img
              src="/macbook-lp.png"
              alt="macbook"
              className="w-[1555px] h-[703px] object-contain"
            />
          </div>

          {/* Content (title + subtitle + buttons) */}
          <div className="absolute left-0 right-0 top-[176px] text-center">
            <h1 className="text-white text-[72px] font-regular leading-[0.9333em] tracking-[-1.5555%]">
              Deixe de ser cliente,
              <br />
              <span className="block font-bold">Vire dono de Gateway</span>
            </h1>

            <p
              className="text-white/70 text-[22px] max-w-[630px] mt-[18px] mb-[28px] mx-auto font-regular"
            >
              Nossa tecnologia, sua marca: personalize o sistema, defina suas
              taxas e escale seu negócio com segurança absoluta.
            </p>

            {/* Buttons positioned visually similar to Figma center */}
            <div className="flex justify-center gap-[20px] mt-[10px]">
              <button
                className="bg-[#7861ff] text-white rounded-[8px] py-[18px] px-[30px] border border-[rgba(255,255,255,0.5)] font-semibold"
              >
                Fazer orçamento
              </button>
              <button
                className="bg-[rgba(0,0,0,0.5)] text-[rgba(255,255,255,0.85)] rounded-[8px] py-[18px] px-[30px] border border-[rgba(255,255,255,0.1)] backdrop-blur-[10px] font-semibold"
              >
                Saiba mais
              </button>
            </div>
          </div>

          {/* Left card (Aprovação Rápida) */}
          <div className="absolute left-[187px] top-[991px]">
            <div className="w-[233px] h-[136.2px] bg-[rgba(0,0,0,0.8)] rounded-[16px] p-4 border border-[rgba(255,255,255,0.1)] shadow-[inset_0px_4px_16px_0px_rgba(120,97,255,0.2)]">
              <div className="w-[48px] h-[48px] mb-[12px]">
                {/* placeholder svg */}
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 49 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="13"
                    cy="17"
                    r="3"
                    stroke="rgba(255,255,255,0.5)"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div className="text-center">
                <h3
                  className="text-white text-[16px]"
                  style={{ fontFamily: "Krona One, sans-serif" }}
                >
                  Aprovação Rápida
                </h3>
                <p
                  className="text-white/70 text-[14px]"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Não fique perdendo vendas.
                </p>
              </div>
            </div>
          </div>

          {/* Right card (Personalize seu Gateway) - selected */}
          <div className="absolute left-[1240px] top-[640px]">
            <div
              className="w-[298px] h-[136.2px] bg-[rgba(2,1,5,0.9)] rounded-[16px] p-4 border border-[rgba(120,97,255,0.6)] -translate-y-[6px] transition-transform transition-shadow relative"
              style={{
                boxShadow:
                  "0 10px 30px rgba(120,97,255,0.20), inset 0px 4px 16px 0px rgba(120,97,255,0.12)",
              }}
            >
             
              <div className="w-[48px] h-[48px] mb-[12px]">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="6"
                    y="6"
                    width="36"
                    height="36"
                    rx="6"
                    stroke="rgba(255,255,255,0.5)"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div>
                <h3
                  className="text-white text-[16px]"
                >
                  Personalize seu Gateway
                </h3>
                <p
                  className="text-[rgba(255,255,255,0.85)] text-[14px]"
                >
                  Com a cor e identidade da sua marca.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
