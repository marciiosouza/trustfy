import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    text: "Procurávamos uma solução, mas encontramos parceiros. A tecnologia da Trustfy é excelente, mas o que realmente nos ganhou foi a atenção da equipe. Eles entenderam nossa operação a fundo e se dedicaram ao nosso sucesso desde o primeiro contato.",
    name: "Nome Completo",
    company: "Empresa",
    image: "/testimonial-profile.jpg",
  },
  {
    id: 2,
    text: "Procurávamos uma solução, mas encontramos parceiros. A tecnologia da Trustfy é excelente, mas o que realmente nos ganhou foi a atenção da equipe. Eles entenderam nossa operação a fundo e se dedicaram ao nosso sucesso desde o primeiro contato.",
    name: "Nome Completo",
    company: "Empresa",
    image: "/testimonial-profile.jpg",
  },
  {
    id: 3,
    text: "Procurávamos uma solução, mas encontramos parceiros. A tecnologia da Trustfy é excelente, mas o que realmente nos ganhou foi a atenção da equipe. Eles entenderam nossa operação a fundo e se dedicaram ao nosso sucesso desde o primeiro contato.",
    name: "Nome Completo",
    company: "Empresa",
    image: "/testimonial-profile.jpg",
  },
];

export const DepoimentsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="relative w-full min-h-[500px] md:h-[368px] bg-black overflow-hidden">
      {/* Mobile Layout */}
      <div className="flex flex-col items-center px-6 py-10 md:hidden">
        {/* Title - above, styled like Hero mobile */}
        <h2 className="max-w-[482px] flex flex-col font-neue-montreal font-bold text-[2rem] leading-[1.15] tracking-[-0.02em] text-center text-white">
          <span>Depoimentos de</span>
          <span>Clientes</span>
        </h2>

        {/* Animated Content - Testimonial below the title */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`testimonial-mobile-${currentTestimonial.id}`}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col items-center mt-6"
          >
            {/* Testimonial Text - show both quotes (left/top and right/bottom) */}
            <div className="w-full max-w-[340px] mb-6 relative px-4 py-8">
              <img
                src="/cards/aspas-left.png"
                alt="Opening quote"
                className="w-9 h-9 absolute -top-3 -left-3 object-contain opacity-90 pointer-events-none"
              />
              <img
                src="/cards/aspas-right.png"
                alt="Closing quote"
                className="w-9 h-9 absolute -bottom-3 -right-3 object-contain opacity-90 pointer-events-none"
              />
              <p className="font-neue-montreal text-[16px] leading-7 text-[rgba(255,255,255,0.7)]">
                {currentTestimonial.text}
              </p>
            </div>

            {/* Profile Section - mobile: compact horizontal */}
            <div className="flex items-center gap-4 mt-6">
              <div className="w-[72px] h-[72px] border-2 border-white rounded-[16px] overflow-hidden">
                <img
                  src={currentTestimonial.image}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-left">
                <p className="font-medium text-[16px] leading-[20px] text-white">
                  {currentTestimonial.name}
                </p>
                <p className="font-rubik font-light text-[14px] leading-[20px] text-white/80">
                  {currentTestimonial.company}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Desktop Layout - Hidden on Mobile */}
      <div className="hidden md:block relative max-w-[1928px] h-full mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={`testimonial-desktop-${currentTestimonial.id}`}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {/* Quote Icon - Left */}
            <div className="absolute left-[292px] top-[35px] w-[50px] h-[50px]">
              <img
                src="/cards/aspas-left.png"
                alt="Opening quote"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Testimonial Text */}
            <div className="absolute left-[357px] top-[32px] w-[711px] h-[92px]">
              <p className="font-rubik font-light text-[18px] leading-[32px] text-white flex items-center">
                {currentTestimonial.text}
              </p>
            </div>

            {/* Quote Icon - Right */}
            <div className="absolute left-[1084px] top-[112px] w-[50px] h-[50px]">
              <img
                src="/cards/aspas-right.png"
                alt="Closing quote"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Profile Section */}
            <div className="absolute left-[355px] top-[162px]">
              {/* Profile Image with Border */}
              <div className="w-full h-full border-2 border-white rounded-[20px] overflow-hidden">
                <img
                  src={currentTestimonial.image}
                  alt="Profile"
                  className="w-[96px] h-[96px] bg-[#8F8F8F] object-cover rounded-[18px]"
                />
              </div>

              {/* Name and Company */}
              <div className="absolute left-[132px] top-[24px]">
                <p className="font-medium text-[20px] leading-[28px] text-white flex items-center w-[157.01px] h-[28px]">
                  {currentTestimonial.name}
                </p>
                <p className="font-rubik font-light text-[15px] leading-[28px] text-white flex items-center w-[97px] h-[28px]">
                  {currentTestimonial.company}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Heading - Right Side */}
        <div className="absolute text-end left-[1231px] top-[92px] w-[410px] h-[143px]">
          <h2 className=" flex flex-col font-neue-montreal font-bold text-[2.5rem] md:text-[65px] leading-[1.2] md:leading-15.5 tracking-[-1.12px] text-white">
            Depoimentos de Clientes
          </h2>
        </div>
      </div>
    </section>
  );
};
