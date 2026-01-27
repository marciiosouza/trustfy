export const DepoimentsPage = () => {
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
          <p className="font-rubik font-light text-[22px] leading-[32px] text-white flex items-center">
            Procurávamos uma solução, mas encontramos parceiros. A tecnologia da
            Trustfy é excelente, mas o que realmente nos ganhou foi a atenção da
            equipe. Eles entenderam nossa operação a fundo e se dedicaram ao
            nosso sucesso desde o primeiro contato.
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
          <div className="w-[100px] h-[100px] border-2 border-white rounded-[20px] box-border">
            <img
              src="/testimonial-profile.jpg"
              alt="Profile"
              className="w-[96px] h-[96px] bg-[#8F8F8F] object-cover rounded-[18px]"
            />
          </div>

          {/* Name and Company */}
          <div className="absolute left-[132px] top-[16px]">
            <p className="font-medium text-[20px] leading-[28px] text-white flex items-center w-[157.01px] h-[28px]">
              Nome Completo
            </p>
            <p className="font-rubik font-light text-[15px] leading-[28px] text-white flex items-center w-[97px] h-[28px]">
              Empresa
            </p>
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
