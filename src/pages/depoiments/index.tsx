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
    <section className="relative w-full h-[368px] bg-black overflow-hidden">
      {/* Container - Max width 1928px centered */}
      <div className="relative max-w-[1928px] h-full mx-auto">
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
          <AnimatePresence mode="wait">
            <motion.p
              key={`text-${currentTestimonial.id}`}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="font-rubik font-light text-[22px] leading-[32px] text-white flex items-center"
            >
              {currentTestimonial.text}
            </motion.p>
          </AnimatePresence>
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
            <AnimatePresence mode="wait">
              <motion.img
                key={`image-${currentTestimonial.id}`}
                src={currentTestimonial.image}
                alt="Profile"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-[96px] h-[96px] bg-[#8F8F8F] object-cover rounded-[18px]"
              />
            </AnimatePresence>
          </div>

          {/* Name and Company */}
          <div className="absolute left-[132px] top-[16px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`profile-${currentTestimonial.id}`}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <p className="font-medium text-[20px] leading-[28px] text-white flex items-center w-[157.01px] h-[28px]">
                  {currentTestimonial.name}
                </p>
                <p className="font-rubik font-light text-[15px] leading-[28px] text-white flex items-center w-[97px] h-[28px]">
                  {currentTestimonial.company}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

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
