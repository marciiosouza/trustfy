import { BrandsStrip } from "./BrandsStrip";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const Typewriter = ({ words, typingSpeed = 70, pause = 1200 }: { words: string[]; typingSpeed?: number; pause?: number; }) => {
  const shouldReduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDisplayed(words[0] ?? "");
      return;
    }
    let timeout: number | undefined;
    const full = words[index] ?? "";
    if (!isDeleting) {
      if (displayed.length < full.length) {
        timeout = window.setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), typingSpeed);
      } else {
        timeout = window.setTimeout(() => setIsDeleting(true), pause);
      }
    } else {
      if (displayed.length > 0) {
        timeout = window.setTimeout(() => setDisplayed(full.slice(0, displayed.length - 1)), Math.max(20, typingSpeed / 2));
      } else {
        setIsDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      }
    }
    return () => {
      if (timeout !== undefined) {
        clearTimeout(timeout);
      }
    };
  }, [displayed, isDeleting, index, words, typingSpeed, pause, shouldReduceMotion]);

  return (
    <span>
      {displayed}
      <motion.span
        aria-hidden
        animate={shouldReduceMotion ? {} : { opacity: [0, 1] }}
        transition={{ repeat: shouldReduceMotion ? 0 : Infinity, duration: 0.7 }}
        className="ml-1"
      >
        |
      </motion.span>
    </span>
  );
};

export const HeroPage = () => {
  const shouldReduceMotion = useReducedMotion();

  const leftWhileInView = shouldReduceMotion
    ? { opacity: 1, x: 0 }
    : { opacity: 1, x: 0, y: [0, -288, 0] };

  const leftTransition = (shouldReduceMotion
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ? { opacity: { duration: 0.8 }, x: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as any } }
    : {
        opacity: { duration: 0.8 },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        x: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as any },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        y: { duration: 2.6, repeat: Infinity, repeatType: "reverse" as const, ease: "easeInOut" as any, delay: 0.2 },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      }) as any; 

  const rightWhileInView = shouldReduceMotion
    ? { opacity: 1, x: 0 }
    : { opacity: 1, x: 0, y: [0, 288, 0] };

  const rightTransition = (shouldReduceMotion
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ? { opacity: { duration: 0.8 }, x: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as any } }
    : {
        opacity: { duration: 0.8 },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        x: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as any },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        y: { duration: 2.6, repeat: Infinity, repeatType: "reverse" as const, ease: "easeInOut" as any, delay: 0.7 },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      }) as any; 

  return (
    <section className="relative w-full bg-black overflow-hidden">
      {/* Main Container with fixed aspect ratio */}
      <motion.div
        className="relative w-full mx-auto"
        style={{ height: "1456px" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
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
        <motion.div
          className="absolute w-[1555px] h-[600px] left-1/2 -translate-x-1/2 top-[538px] pointer-events-none"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.img
            src="/macbook-lp.png"
            alt="MacBook Preview"
            className="w-full h-[703px] object-contain"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </motion.div>

        {/* Content Container */}
        <div className="relative z-10">
          {/* Badge - Optional */}
          <div className="absolute w-[425px] h-[40px] left-1/2 -translate-x-1/2 top-[151px] bg-[rgba(120,97,255,0.05)] rounded-lg border border-[rgba(120,97,255,0.5)] flex items-center justify-center opacity-0 invisible">
            <p className="font-montserrat font-regular text-[14px] leading-[14px] tracking-[-0.28px] uppercase text-[#7861FF]">
              Pagamentos Personalizados para Seu Negócio
            </p>
          </div>

          {/* Main Heading */}
          <div className="absolute w-full left-0 right-0 top-40 px-8">
            <h1 className="max-w-482 mx-auto flex flex-col font-neue-montreal text-[72px] md:text-[72px] leading-[67.2px] md:leading-[67.2px] text-center tracking-[-1.12px] text-white">
              <span className="font-regular"> Deixe de ser cliente,</span>
              <span className="font-bold">
                <Typewriter
                  words={["Vire dono de Gateway"]}
                  typingSpeed={160}
                  pause={3400}
                />
              </span>
            </h1>
          </div>

          {/* Description */}
          <div className="absolute w-full max-w-[630px] left-1/2 -translate-x-1/2 mt-[24px] top-[310px]">
            <p className="font-neue-montreal text-[22px] leading-7 tracking-[1px] text-center text-[rgba(255,255,255,0.7)]">
              Nossa tecnologia, sua marca: personalize o sistema, defina suas
              taxas e escale seu negócio com segurança absoluta.
            </p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            className="absolute h-[60px] left-1/2 -translate-x-1/2 top-[400px] mt-[27.1px] flex gap-[24px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {/* Primary Button */}
            <Button asChild>
              <motion.button
                className="relative w-[210.81px] h-[60px] bg-[#7861FF] rounded-[8px] flex items-center justify-center group transition-all"
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

            {/* Secondary Button */}
            <Button asChild>
              <motion.button
                className="relative w-[161.63px] h-[60px]  border-0 bg-black rounded-[8px] flex items-center justify-center gap-2 group hover:bg-black/90 transition-colors"
                style={{
                  boxShadow:
                    "0px 4px 24px rgba(120, 97, 255, 0.1), inset 0px 4px 16px rgba(120, 97, 255, 0.2)",
                  backdropFilter: "blur(5px)",
                  
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="font-medium text-[16px] text-white">
                  Saiba mais
                </span>
                <ChevronDown className="w-6 h-6 text-white" />
              </motion.button>
            </Button>
          </motion.div>

          {/* Feature Card - Left (Aprovação Rápida) */}
          <motion.div
            className="absolute text-center w-62 h-[136.2px] left-[187px] top-[991px] bg-black/80 rounded-[16px] border border-white/10 backdrop-blur-[4px]"
            style={{
              boxShadow: "inset 0px 4px 16px rgba(120, 97, 255, 0.2)",
            }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={leftWhileInView}
            viewport={{ once: false, margin: "-100px" }}
            transition={leftTransition}
            whileHover={{
              scale: 1.05,
              boxShadow:
                "inset 0px 4px 16px rgba(120, 97, 255, 0.3), 0 10px 30px rgba(120, 97, 255, 0.2)",
            }}
          >
            {/* Icon */}
            <div className="absolute left-1/2 -translate-x-1/2 top-4 w-12 h-12">
              <img
                src="/dollars.png"
                alt="Trustify Logo"
                className="w-full h-full"
              />
            </div>
            {/* Content */}
            <div className="absolute left-4 right-4 top-19 space-y-1">
              <h3
                className="font-normal text-[16px] leading-4.75 tracking-[-0.32px] text-white"
                style={{ fontFamily: "'Krona One', sans-serif" }}
              >
                Aprovação Rápida
              </h3>
              <p
                className="font-montserrat font-normal text-[14px] leading-5.25 text-white/70"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {" "}
                Não fique perdendo vendas.
              </p>
            </div>
          </motion.div>

          {/* Feature Card - Right (Personalize) */}
          <motion.div
            className="absolute w-76 h-[136.2px] right-[156px] top-[542px] bg-black/80 rounded-[16px] border border-white/10 backdrop-blur-[4px]"
            style={{
              boxShadow: "inset 0px 4px 16px rgba(120, 97, 255, 0.1)",
            }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={rightWhileInView}
            viewport={{ once: false, margin: "-100px" }}
            transition={rightTransition}
            whileHover={{
              scale: 1.05,
              boxShadow:
                "inset 0px 4px 16px rgba(120, 97, 255, 0.2), 0 10px 30px rgba(120, 97, 255, 0.2)",
            }}
          >
            {/* Icon */}
            <div className="absolute left-4 top-4 w-12 h-12">
              <img
                src="/paint.png"
                alt="Trustify Logo"
                className="w-full h-full"
              />
            </div>
            {/* Content */}
            <div className="absolute left-4 right-4 top-19 space-y-1">
              <h3
                className="font-normal text-[16px] leading-4.75 tracking-[-0.32px] text-white"
                style={{ fontFamily: "'Krona One', sans-serif" }}
              >
                Personalize seu Gateway
              </h3>
              <p
                className="font-montserrat font-normal text-[14px] leading-5.25 text-white/70"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Com a cor e identidade da sua marca.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Logo Strips */}
      <BrandsStrip />
    </section>
  );
};
