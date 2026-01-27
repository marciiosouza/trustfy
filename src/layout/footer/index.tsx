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
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-14">
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
                  className="text-white font-semibold hover:text-[#7861FF]"
                >
                  Vantagens
                </a>
                <a
                  href="#"
                  className="text-white font-semibold hover:text-[#7861FF]"
                >
                  Tecnologia
                </a>
                <a
                  href="#"
                  className="text-white font-semibold hover:text-[#7861FF]"
                >
                  Personalização
                </a>
                <a
                  href="#"
                  className="text-white font-semibold hover:text-[#7861FF]"
                >
                  Integrações
                </a>
                <a
                  href="#"
                  className="text-white font-semibold hover:text-[#7861FF]"
                >
                  Área do Desenvolvedor
                </a>
                <a
                  href="#"
                  className="text-white font-semibold hover:text-[#7861FF]"
                >
                  FAQ
                </a>
              </nav>
            </div>

            {/* Transparência Column */}
            <div className="min-w-[160px]">
              <p className="font-manrope font-medium text-sm text-[#848484] mb-3">
                Transparência
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="#"
                  className="text-white font-semibold hover:text-[#7861FF] text-left"
                >
                  Política de privacidade
                </a>
                <a
                  href="#"
                  className="text-white font-semibold hover:text-[#7861FF] text-left"
                >
                  Política de segurança
                </a>
              </div>
            </div>

            {/* Redes Sociais Column */}
            <div className="min-w-[140px]">
              <p className="font-manrope font-medium text-sm text-[#848484] mb-3">
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
                  <path
                    d="M8.5 0C6.18 0 5.88 0.01 4.98 0.05C4.08 0.09 3.45 0.24 2.9 0.46C2.33 0.69 1.85 0.99 1.37 1.47C0.89 1.95 0.59 2.43 0.36 3C0.14 3.55 -0.01 4.18 0.01 5.08C-0.03 5.98 -0.04 6.28 -0.04 8.6C-0.04 10.92 -0.03 11.22 0.01 12.12C0.05 13.02 0.2 13.65 0.42 14.2C0.65 14.77 0.95 15.25 1.43 15.73C1.91 16.21 2.39 16.51 2.96 16.74C3.51 16.96 4.14 17.11 5.04 17.13C5.94 17.17 6.24 17.18 8.56 17.18C10.88 17.18 11.18 17.17 12.08 17.13C12.98 17.09 13.61 16.94 14.16 16.72C14.73 16.49 15.21 16.19 15.69 15.71C16.17 15.23 16.47 14.75 16.7 14.18C16.92 13.63 17.07 13 17.09 12.1C17.13 11.2 17.14 10.9 17.14 8.58C17.14 6.26 17.13 5.96 17.09 5.06C17.05 4.16 16.9 3.53 16.68 2.98C16.45 2.41 16.15 1.93 15.67 1.45C15.19 0.97 14.71 0.67 14.14 0.44C13.59 0.22 12.96 0.07 12.06 0.05C11.16 0.01 10.86 0 8.54 0H8.5Z"
                    fill="#7861FF"
                  />
                </svg>
                <span className="font-semibold">Instagram</span>
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
