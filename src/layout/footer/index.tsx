export const Footer = () => {
  return (
    <footer className="relative w-full h-[362px] bg-black overflow-hidden">
      {/* Background Light Effect */}
      <div
        className="absolute w-[1611.43px] h-[2323.88px] left-1/2 -translate-x-1/2 -top-[192px] pointer-events-none z-0 overflow-hidden"
        style={{
          background:
            "radial-gradient(48.78% 48.78% at 52.27% 52.31%, rgba(120, 97, 255, 0.189) 0%, rgba(0, 0, 0, 0.189) 100%)",
        }}
      />

      {/* Content Container */}
      <div className="absolute left-[280px] right-[280px] top-1/2 -translate-y-1/2 h-[340px]">
        {/* Main Content Section */}
        <div className="absolute -top-11 left-0 right-0 h-[206px]">
          {/* Logo */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[347.66px] h-[30px]">
            <img
              src="/logo.svg"
              alt="Trustify Logo"
              className="w-full h-full"
            />
          </div>

          {/* Navigation Options */}
          <div className="absolute left-[833px] top-1/2 -translate-y-1/2 w-[527px] h-[188px]">
            {/* Navegue Column */}
            <div className="absolute left-[calc(50%-133px/2-197px)] top-0 w-[163px] h-[218px]">
              <p className="font-manrope font-medium text-[14px] leading-[22px] tracking-[-0.28px] text-[#848484] mb-[19.4px]">
                Navegue
              </p>
              <div className="space-y-[11.21px]">
                <a
                  href="#"
                  className="block font-manrope font-medium text-[14px] leading-[18px] tracking-[-0.28px] text-[#F3F3F3] hover:text-[#7861FF] transition-colors "
                >
                  Vantagens
                </a>
                <a
                  href="#"
                  className="block font-manrope font-medium text-[14px] leading-[18px] tracking-[-0.28px] text-[#F3F3F3] hover:text-[#7861FF] transition-colors "
                >
                  Tecnologia
                </a>
                <a
                  href="#"
                  className="block font-manrope font-medium text-[14px] leading-[18px] tracking-[-0.28px] text-[#F3F3F3] hover:text-[#7861FF] transition-colors "
                >
                  Personalização
                </a>
                <a
                  href="#"
                  className="block font-manrope font-medium text-[14px] leading-[18px] tracking-[-0.28px] text-[#F3F3F3] hover:text-[#7861FF] transition-colors "
                >
                  Integrações
                </a>
                <a
                  href="#"
                  className="block font-manrope font-medium text-[14px] leading-[18px] tracking-[-0.28px] text-[#F3F3F3] hover:text-[#7861FF] transition-colors "
                >
                  Área do Desenvolvedor
                </a>
                <a
                  href="#"
                  className="block font-manrope font-medium text-[14px] leading-[18px] tracking-[-0.28px] text-[#F3F3F3] hover:text-[#7861FF] transition-colors "
                >
                 FAQ
                </a>
              </div>
            </div>

            {/* Transparência Column */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[143.64px] h-[86.81px]">
              <p className="font-manrope font-medium text-[14px] leading-[22px] tracking-[-0.28px] text-[#848484] mb-[19.4px]">
                Transparência
              </p>
              <div className="space-y-[12.21px]">
                <a
                  href="#"
                  className="block font-manrope font-medium text-[14px] leading-[18px] tracking-[-0.28px] text-[#F3F3F3] text-center hover:text-[#7861FF] transition-colors"
                >
                  Política de privacidade
                </a>
                <a
                  href="#"
                  className="block font-manrope font-medium text-[14px] leading-[18px] tracking-[-0.28px] text-[#F3F3F3] text-center hover:text-[#7861FF] transition-colors"
                >
                  Política de segurança
                </a>
              </div>
            </div>

            {/* Redes Sociais Column */}
            <div className="absolute left-[calc(50%+218.39px-45.11px)] top-0 w-[90.22px] h-[56.61px]">
              <p className="font-manrope font-medium text-[14px] leading-[22px] tracking-[-0.28px] text-[#848484] mb-[19.4px]">
                Redes sociais
              </p>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.5 0C6.18 0 5.88 0.01 4.98 0.05C4.08 0.09 3.45 0.24 2.9 0.46C2.33 0.69 1.85 0.99 1.37 1.47C0.89 1.95 0.59 2.43 0.36 3C0.14 3.55 -0.01 4.18 0.01 5.08C-0.03 5.98 -0.04 6.28 -0.04 8.6C-0.04 10.92 -0.03 11.22 0.01 12.12C0.05 13.02 0.2 13.65 0.42 14.2C0.65 14.77 0.95 15.25 1.43 15.73C1.91 16.21 2.39 16.51 2.96 16.74C3.51 16.96 4.14 17.11 5.04 17.13C5.94 17.17 6.24 17.18 8.56 17.18C10.88 17.18 11.18 17.17 12.08 17.13C12.98 17.09 13.61 16.94 14.16 16.72C14.73 16.49 15.21 16.19 15.69 15.71C16.17 15.23 16.47 14.75 16.7 14.18C16.92 13.63 17.07 13 17.09 12.1C17.13 11.2 17.14 10.9 17.14 8.58C17.14 6.26 17.13 5.96 17.09 5.06C17.05 4.16 16.9 3.53 16.68 2.98C16.45 2.41 16.15 1.93 15.67 1.45C15.19 0.97 14.71 0.67 14.14 0.44C13.59 0.22 12.96 0.07 12.06 0.05C11.16 0.01 10.86 0 8.54 0H8.5ZM7.74 1.54H8.5C10.78 1.54 11.06 1.55 11.95 1.59C12.77 1.63 13.22 1.77 13.52 1.89C13.92 2.05 14.21 2.23 14.51 2.53C14.81 2.83 14.99 3.12 15.15 3.52C15.27 3.82 15.41 4.27 15.45 5.09C15.49 5.98 15.5 6.26 15.5 8.58C15.5 10.9 15.49 11.18 15.45 12.07C15.41 12.89 15.27 13.34 15.15 13.64C14.99 14.04 14.81 14.33 14.51 14.63C14.21 14.93 13.92 15.11 13.52 15.27C13.22 15.39 12.77 15.53 11.95 15.57C11.06 15.61 10.78 15.62 8.5 15.62C6.22 15.62 5.94 15.61 5.05 15.57C4.23 15.53 3.78 15.39 3.48 15.27C3.08 15.11 2.79 14.93 2.49 14.63C2.19 14.33 2.01 14.04 1.85 13.64C1.73 13.34 1.59 12.89 1.55 12.07C1.51 11.18 1.5 10.9 1.5 8.58C1.5 6.26 1.51 5.98 1.55 5.09C1.59 4.27 1.73 3.82 1.85 3.52C2.01 3.12 2.19 2.83 2.49 2.53C2.79 2.23 3.08 2.05 3.48 1.89C3.78 1.77 4.23 1.63 5.05 1.59C5.83 1.55 6.15 1.54 7.74 1.54V1.54ZM12.96 2.97C12.41 2.97 11.96 3.42 11.96 3.97C11.96 4.52 12.41 4.97 12.96 4.97C13.51 4.97 13.96 4.52 13.96 3.97C13.96 3.42 13.51 2.97 12.96 2.97ZM8.5 4.21C6.05 4.21 4.07 6.19 4.07 8.64C4.07 11.09 6.05 13.07 8.5 13.07C10.95 13.07 12.93 11.09 12.93 8.64C12.93 6.19 10.95 4.21 8.5 4.21ZM8.5 5.75C10.08 5.75 11.36 7.03 11.36 8.61C11.36 10.19 10.08 11.47 8.5 11.47C6.92 11.47 5.64 10.19 5.64 8.61C5.64 7.03 6.92 5.75 8.5 5.75Z"
                    fill="#7861FF"
                  />
                </svg>
                <span className="font-manrope font-medium text-[14px] leading-[18px] tracking-[-0.28px] text-[#F3F3F3]">
                  Instagram
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="absolute left-0 right-0 top-[212.22px] h-[1px] bg-[rgba(242,242,242,0.1)]" />

        {/* Copyright */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[228px] w-[600px]">
          <p className="font-manrope font-medium text-[14px] leading-[18px] tracking-[-0.28px] text-[#848484] text-center">
            © 2025 BlackCat Tecnologia Ltda
          </p>
        </div>
      </div>
    </footer>
  );
};
