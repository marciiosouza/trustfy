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
    <section className="relative w-full py-12 md:py-16 lg:py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Testimonial Content */}
          <div className="relative">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex flex-col space-y-6 lg:space-y-8 w-full max-w-[711px]"
              >
                {/* Quote Icon and Text */}
                <div className="relative flex items-start gap-4 md:gap-6 p-6 md:p-8 lg:p-10">
                  {/* Opening quote image (use provided image) */}
                  <img
                    src="/public/cards/aspas-left.png"
                    alt="Opening quote"
                    loading="lazy"
                    className="absolute -top-8 -left-4 md:-top-10 md:-left-8 lg:top-1 lg:left-1 w-[48px] md:w-[64px] lg:w-[32px] h-auto pointer-events-none select-none z-0 opacity-95"
                  />
                  {/* Quote Text */},{}
                  <p className="relative z-10 text-white text-sm md:text-base lg:text-[18px] font-light leading-relaxed lg:leading-[1.78] tracking-normal max-w-[711px]">
                    {testimonial.quote}
                  </p>
                  {/* Closing quote image (use provided image) */}
                  <img
                    src="/public/cards/aspas-right.png"
                    alt="Closing quote"
                    loading="lazy"
                    className="absolute -bottom-8 -right-4 md:-bottom-10 md:-right-8 lg:bottom-1 lg:-right-1 w-[48px] md:w-[64px] lg:w-[32px] h-auto pointer-events-none select-none z-0 opacity-95"
                  />
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4 md:gap-6">
                  {/* Avatar with Border */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 lg:w-[100px] lg:h-[100px] rounded-[18px] border-2 border-white overflow-hidden bg-[#8F8F8F]">
                      <img
                        src={testimonial.author.image}
                        alt={testimonial.author.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Name and Company */}
                  <div className="space-y-0.5 md:space-y-1">
                    <h3 className="text-white text-base md:text-lg lg:text-xl font-semibold leading-[1.2]">
                      {testimonial.author.name}
                    </h3>
                    <p className="text-white text-sm md:text-[15px] font-light leading-[1.87] opacity-80">
                      {testimonial.author.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

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