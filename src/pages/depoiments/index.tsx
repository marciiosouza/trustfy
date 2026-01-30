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
        {/* Heading - Top on Mobile */}
        <h2 className=" flex flex-col font-neue-montreal font-bold text-[2.5rem] md:text-[65px] leading-[1.2] md:leading-15.5 tracking-[-1.12px] text-white">
          Depoimentos de Clientes
        </h2>

        {/* Animated Content - All Together */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`testimonial-mobile-${currentTestimonial.id}`}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            {/* Testimonial Text with Quotes */}
            <div className="relative w-full max-w-[340px] mb-8">
              {/* Quote Icon - Left */}
              <img
                src="/cards/aspas-left.png"
                alt="Opening quote"
                className="w-[30px] h-[30px] object-contain absolute -top-2 -left-2"
              />

              <p
                className="font-normal mx-auto max-w-[966px] tracking-[1.46px] text-[1.475rem] mb-16 mt-8 md:text-[22px] leading-7.5  text-[rgba(255,255,255,0.7)]"
                style={{ fontFamily: "'PP Neue Montreal', sans-serif " }}
              >
                {currentTestimonial.text}
              </p>

              {/* Quote Icon - Right */}
              <img
                src="/cards/aspas-right.png"
                alt="Closing quote"
                className="w-[30px] h-[30px] object-contain absolute -bottom-2 -right-2"
              />
            </div>

            {/* Profile Section - Bottom on Mobile */}
            <div className="flex flex-col items-center">
              {/* Profile Image with Border */}
              <div className="w-[120px] h-[120px] border-2 border-white rounded-[24px] box-border overflow-hidden mb-3">
                <img
                  src={currentTestimonial.image}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name and Company */}
              <div className="text-center">
                <p className="font-medium text-[18px] leading-[24px] text-white mb-2">
                  {currentTestimonial.name}
                </p>
                <p className="font-rubik font-light text-[14px] leading-[20px] text-white">
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
              <p className="font-rubik font-light text-[22px] leading-[32px] text-white flex items-center">
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
            <div className="absolute left-[355px] top-[199px]">
              {/* Profile Image with Border */}
              <div className="w-[100px] h-[100px] border-2 border-white rounded-[20px] box-border overflow-hidden">
                <img
                  src={currentTestimonial.image}
                  alt="Profile"
                  className="w-[96px] h-[96px] bg-[#8F8F8F] object-cover rounded-[18px]"
                />
              </div>

              {/* Name and Company */}
              <div className="absolute left-[132px] top-[16px]">
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
        <div className="absolute left-[1231px] top-[92px] w-[410px] h-[143px]">
          <h2 className="max-w-138 text-end flex flex-col font-neue-montreal font-bold text-[68px] leading-15.5  tracking-[-1.12px] text-white">
            Depoimentos de Clientes
          </h2>
        </div>
      </div>
    </section>
  );
};
