export const DepoimentsPage = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Procurávamos uma solução, mas encontramos parceiros. A tecnologia da Trustfy é excelente, mas o que realmente nos ganhou foi a atenção da equipe. Eles entenderam nossa operação a fundo e se dedicaram ao nosso sucesso desde o primeiro contato.",
      author: {
        name: "Nome Completo",
        company: "Empresa",
        image: "/api/placeholder/96/96"
      }
    }
  ];

  return (
    <section className="relative w-full py-12 md:py-16 lg:py-24 bg-black overflow-hidden border-t border-[#7861FF]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Testimonial Content */}
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex flex-col space-y-6 lg:space-y-8">
              {/* Quote Icon and Text */}
              <div className="flex items-start gap-4 md:gap-6">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 md:w-12 md:h-12 lg:w-[50px] lg:h-[50px]"
                  >
                    <path
                      d="M10 12C10 8 12 5 16 5V10C14 10 12 11 12 13V18H18V30H6V18C6 15 7 13 10 12Z"
                      fill="url(#quoteGradient)"
                    />
                    <path
                      d="M32 12C32 8 34 5 38 5V10C36 10 34 11 34 13V18H40V30H28V18C28 15 29 13 32 12Z"
                      fill="url(#quoteGradient)"
                    />
                    <defs>
                      <linearGradient
                        id="quoteGradient"
                        x1="23"
                        y1="5"
                        x2="23"
                        y2="30"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#A596FF" />
                        <stop offset="1" stopColor="#7861FF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Quote Text */}
                <p className="text-white text-sm md:text-base lg:text-[18px] font-light leading-relaxed lg:leading-[1.78] tracking-normal">
                  {testimonial.quote}
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 md:gap-6">
                {/* Avatar with Border */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 lg:w-[100px] lg:h-[100px] rounded-[20px] border-2 border-white overflow-hidden">
                    <div className="w-full h-full bg-[#8F8F8F] flex items-center justify-center">
                      <span className="text-white text-xs md:text-sm">Foto</span>
                    </div>
                  </div>
                </div>

                {/* Name and Company */}
                <div className="space-y-0.5 md:space-y-1">
                  <h3 className="text-white text-base md:text-lg lg:text-xl font-medium leading-[1.4]">
                    {testimonial.author.name}
                  </h3>
                  <p className="text-white text-sm md:text-[15px] font-light leading-[1.87]">
                    {testimonial.author.company}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Right Side - Title */}
          <div className="order-first lg:order-last">
            <h2 className="text-4xl md:text-5xl lg:text-[65px] font-bold text-white text-left lg:text-right leading-tight lg:leading-[0.98] tracking-[-0.015em]">
              Depoimentos
              <br />
              de Clientes
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};