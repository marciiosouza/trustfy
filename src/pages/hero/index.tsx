import { BrandsStrip } from "./BrandsStrip";
import { ArrowRight } from "lucide-react";

export const HeroPage = () => {
  return (
    <section className="relative w-full bg-black overflow-hidden">
      {/* Main Container with fixed aspect ratio */}
      <div className="relative w-full mx-auto" style={{ height: "1456px" }}>
        {/* Background Effects Container */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Background Blur Image - Main element */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/background-blur.png"
              alt=""
              className="w-full h-326 object-cover"
              style={{ objectPosition: "center center" }}
            />
          </div>

          {/* Purple Glow Overlay - Subtle enhancement */}
          <div
            className="absolute w-[1800px] h-[1000px] left-1/2 -translate-x-1/2 top-[300px]"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(120, 97, 255, 0.2) 0%, rgba(88, 28, 235, 0.1) 40%, rgba(0, 0, 0, 0) 100%)",
              filter: "blur(100px)",
            }}
          />
        </div>

        {/* MacBook Image */}
        <div className="absolute w-[1555px] h-[703px] left-1/2 -translate-x-1/2 top-[538px] pointer-events-none">
          <img
            src="/macbook-lp.png"
            alt="MacBook Preview"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10">
          {/* Badge - Optional */}
          <div className="absolute w-[425px] h-[40px] left-1/2 -translate-x-1/2 top-[151px] bg-[rgba(120,97,255,0.05)] rounded-lg border border-[rgba(120,97,255,0.5)] flex items-center justify-center opacity-0 invisible">
            <p className="font-montserrat font-medium text-[14px] leading-[14px] tracking-[-0.28px] uppercase text-[#7861FF]">
              Pagamentos Personalizados para Seu Negócio
            </p>
          </div>

          {/* Main Heading */}
          <div className="absolute w-full left-0 right-0 top-[176px] px-8">
            <h1 className="max-w-[1920px] mx-auto  flex flex-col font-neue-montreal font-normal text-[72px] leading-[67px] text-center tracking-[-1.12px] text-white">
              <span> Deixe de ser cliente,</span>
              <span className="font-bold">Vire dono de Gateway</span>
            </h1>
          </div>

          {/* Description */}
          <div className="absolute w-[630px] left-1/2 -translate-x-1/2 top-[323px]">
            <p className="font-neue-montreal font-normal text-[22px] leading-[30px] text-center text-[rgba(255,255,255,0.7)]">
              Nossa tecnologia, sua marca: personalize o sistema, defina suas
              taxas e escale seu negócio com segurança absoluta.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="absolute w-[396.44px] h-[60px] left-1/2 -translate-x-1/2 top-[439.41px] flex gap-[24px]">
            {/* Primary Button */}
            <button
              className="relative w-[210.81px] h-[60px] bg-[#7861FF] rounded-lg flex items-center justify-center px-6 gap-3 group transition-all hover:shadow-[0px_4px_50px_rgba(120,97,255,0.4)]"
              style={{
                boxShadow:
                  "0px 4px 40px rgba(120, 97, 255, 0.3), inset 0px 4px 24px rgba(255, 255, 255, 0.3)",
              }}
            >
              <span className="font-montserrat font-semibold text-[16px] leading-[19px] tracking-[-0.32px] text-white">
                Fazer orçamento
              </span>
              <ArrowRight className="w-6 h-6 text-white transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 border border-white/50 rounded-lg pointer-events-none" />
            </button>

            {/* Secondary Button */}
            <button
              className="relative w-[161.63px] h-[60px] bg-black rounded-lg flex items-center justify-center px-6 gap-2 group transition-all hover:bg-black/80"
              style={{
                boxShadow:
                  "0px 4px 24px rgba(120, 97, 255, 0.1), inset 0px 4px 16px rgba(120, 97, 255, 0.2)",
                backdropFilter: "blur(5px)",
              }}
            >
              <span className="font-montserrat font-semibold text-[16px] leading-[19px] tracking-[-0.32px] text-white">
                Saiba mais
              </span>
              <ArrowRight className="w-6 h-6 text-white transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 border border-white/10 rounded-lg pointer-events-none" />
            </button>
          </div>

          {/* Feature Card - Left (Aprovação Rápida) */}
          <div
            className="absolute w-[233px] h-[136.2px] left-[187px] top-[991px] bg-black/80 rounded-[16px] border border-white/10 backdrop-blur-[4px]"
            style={{
              boxShadow: "inset 0px 4px 16px rgba(120, 97, 255, 0.2)",
            }}
          >
            {/* Icon */}
            <div className="absolute left-1/2 -translate-x-1/2 top-4 w-12 h-12">
              <img
                src="/public/dollars.png"
                alt="Trustify Logo"
                className="w-full h-full"
              />
            </div>
            {/* Content */}
            <div className="absolute left-4 right-4 top-[76px] space-y-1">
              <h3 className="font-krona-one font-normal text-[16px] leading-[19px] tracking-[-0.32px] text-white text-center">
                Aprovação Rápida
              </h3>
              <p className="font-montserrat font-normal text-[14px] leading-[21px] text-center text-white/70">
                Não fique perdendo vendas.
              </p>
            </div>
          </div>

          {/* Feature Card - Right (Personalize) */}
          <div
            className="absolute w-[298px] h-[136.2px] right-[175px] top-[626px] bg-black/80 rounded-[16px] border border-white/10 backdrop-blur-[4px]"
            style={{
              boxShadow: "inset 0px 4px 16px rgba(120, 97, 255, 0.1)",
            }}
          >
            {/* Icon */}
            <div className="absolute left-4 top-4 w-12 h-12">
              <img
                src="/public/paint.png"
                alt="Trustify Logo"
                className="w-full h-full"
              />
            </div>
            {/* Content */}
            <div className="absolute left-4 right-4 top-[76px] space-y-1">
              <h3 className="font-krona-one font-normal text-[16px] leading-[19px] tracking-[-0.32px] text-white">
                Personalize seu Gateway
              </h3>
              <p className="font-montserrat font-normal text-[14px] leading-[21px] text-white/70">
                Com a cor e identidade da sua marca.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Strips */}
      <BrandsStrip />
    </section>
  );
};
