export const Footer = () => {
  return (
    <footer className="relative w-full bg-black overflow-hidden">
      {/* Background Light Effect */}
      <div
        className="absolute left-1/2 -translate-x-1/2 -top-12 pointer-events-none z-0"
        style={{
          width: "1600px",
          height: "900px",
          background:
            "radial-gradient(48.78% 48.78% at 52.27% 52.31%, rgba(120, 97, 255, 0.12) 0%, rgba(0, 0, 0, 0.12) 100%)",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/logo.svg"
              alt="Trustify Logo"
              className="w-[180px] h-auto"
            />
          </div>

          {/* Columns */}
          <div className="flex flex-col sm:flex-row gap-8 md:ml-auto sm:justify-between items-start">
            {/* Navegue Column */}
            <div className="min-w-[160px]">
              <p className="font-manrope font-medium text-sm text-[#848484] mb-3">
                Navegue
              </p>
              <nav className="flex flex-col gap-2">
                <a
                  href="#"
                  className="text-white font-regular hover:text-[#7861FF]"
                >
                  Vantagens
                </a>
                <a
                  href="#"
                  className="text-white font-regular hover:text-[#7861FF]"
                >
                  Tecnologia
                </a>
                <a
                  href="#"
                  className="text-white font-regular hover:text-[#7861FF]"
                >
                  Personalização
                </a>
                <a
                  href="#"
                  className="text-white font-regular hover:text-[#7861FF]"
                >
                  Integrações
                </a>
                <a
                  href="#"
                  className="text-white font-regular hover:text-[#7861FF]"
                >
                  Área do Desenvolvedor
                </a>
                <a
                  href="#"
                  className="text-white font-regular hover:text-[#7861FF]"
                >
                  FAQ
                </a>
              </nav>
            </div>

            {/* Transparência Column */}
            <div className="min-w-[160px]">
              <p className="font-manrope font-regular text-sm text-[#848484] mb-3">
                Transparência
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="#"
                  className="text-white font-regular hover:text-[#7861FF] text-left"
                >
                  Política de privacidade
                </a>
                <a
                  href="#"
                  className="text-white font-regular hover:text-[#7861FF] text-left"
                >
                  Política de segurança
                </a>
              </div>
            </div>

            {/* Redes Sociais Column */}
            <div className="min-w-[140px]">
              <p className="font-manrope font-regular text-sm text-[#848484] mb-3">
                Redes sociais
              </p>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white hover:opacity-80 transition-opacity"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <g clipPath="url(#clip0_548_1320)">
                    <path
                      d="M4.93 0H12.07C14.79 0 17 2.21 17 4.93V12.07C17 14.793 14.793 17 12.07 17H4.93C2.21 17 0 14.79 0 12.07V4.93C0 2.207 2.207 0 4.93 0ZM4.76 1.7C3.07 1.7 1.7 3.07 1.7 4.76V12.24C1.7 13.931 3.068 15.3 4.76 15.3H12.24C13.93 15.3 15.3 13.93 15.3 12.24V4.76C15.3 3.068 13.931 1.7 12.24 1.7H4.76ZM12.963 2.975C13.549 2.975 14.025 3.451 14.025 4.038C14.025 4.624 13.549 5.1 12.963 5.1C12.376 5.1 11.9 4.624 11.9 4.038C11.9 3.451 12.376 2.975 12.963 2.975ZM8.5 4.25C10.847 4.25 12.75 6.153 12.75 8.5C12.75 10.847 10.847 12.75 8.5 12.75C6.153 12.75 4.25 10.847 4.25 8.5C4.25 6.153 6.153 4.25 8.5 4.25ZM8.5 5.95C7.092 5.95 5.95 7.092 5.95 8.5C5.95 9.908 7.092 11.05 8.5 11.05C9.908 11.05 11.05 9.908 11.05 8.5C11.05 7.092 9.908 5.95 8.5 5.95Z"
                      fill="#7861FF"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_548_1320">
                      <rect width="17" height="17" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="font-regular">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-8 border-t border-[rgba(242,242,242,0.1)] pt-6 text-center">
          <p className="font-neue font-medium text-[14px] text-[#848484]">
            © 2026 Trustfy | CNPJ: 00.000.000/0000-00
          </p>
        </div>
      </div>
    </footer>
  );
};
