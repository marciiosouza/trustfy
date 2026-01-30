import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import whatsapp from "/public/whatsapp.svg"

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed  top-0 left-0 right-0 z-50 h-[84.8px] bg-zinc-950/60 backdrop-blur-xs border-b border-[#7861FF]/70">
      <div className="mx-auto px-4 sm:px-6 md:px-[240px] h-full flex items-center">
        <div className="flex items-center justify-between h-[44.8px] w-full">
          {/* Left: Brand */}
          <div className="flex items-center gap-4">
            <img
              src="/logo.svg"
              alt="Trustfy Logo"
              className="h-[36px] w-[192px] object-contain"
            />
          </div>

          {/* Center: Nav Links (desktop) */}
          <ul className="hidden md:flex md:flex-1 md:items-center md:justify-center md:space-x-6 h-[33px]">
            <li className="text-[14px] leading-[14px] tracking-[1px] text-[rgba(255,255,255,0.8)] hover:text-[#7861FF] cursor-pointer">
              Vantagens
            </li>
            <li className="text-[14px] leading-[14px] tracking-[1px] text-[rgba(255,255,255,0.8)] hover:text-[#7861FF] cursor-pointer">
              Tecnologia
            </li>
            <li className="text-[14px] leading-[14px] tracking-[1px] text-[rgba(255,255,255,0.8)] hover:text-[#7861FF] cursor-pointer">
              Integrações
            </li>
            <li className="text-[14px] leading-[14px] tracking-[1px] text-[rgba(255,255,255,0.8)] hover:text-[#7861FF] cursor-pointer">
              API
            </li>
            <li className="text-[14px] leading-[14px] tracking-[1px] text-[rgba(255,255,255,0.8)] hover:text-[#7861FF] cursor-pointer">
              FAQ
            </li>
          </ul>

          <div className="hidden md:flex md:items-center">
            <Button
              variant="outline"
              className="flex items-center justify-center bg-[rgba(96,77,209,0.05)] border border-[rgba(120,97,255,0.5)] rounded-[8px] text-[#7861FF] hover:bg-[rgba(120,97,255,0.1)] font-[700] text-[14px] h-[44.8px] px-4"
            >
              <img
                src={whatsapp}
                alt="Ícone de orçamento"
                className="h-4 w-4"
              />
              Fazer orçamento
            </Button>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2">
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-violet-800/20"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <X className="h-5 w-5 b text-zinc-200" />
              ) : (
                <Menu className="h-5 w-5 text-zinc-200" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <ul className="md:hidden mt-2 space-y-2 pb-4">
            <li className="block px-2 py-2 rounded-md text-[rgba(255,255,255,0.8)] hover:text-[#7861FF] ">
              Vantagens
            </li>
            <li className="block px-2 py-2 rounded-md text-[rgba(255,255,255,0.8)] hover:text-[#7861FF] ">
              Tecnologia
            </li>
            <li className="block px-2 py-2 rounded-md text-[rgba(255,255,255,0.8)] hover:text-[#7861FF] ">
              Integrações
            </li>
            <li className="block px-2 py-2 rounded-md text-[rgba(255,255,255,0.8)] hover:text-[#7861FF] ">
              API
            </li>
            <li className="block px-2 py-2 rounded-md text-[rgba(255,255,255,0.8)] hover:text-[#7861FF] ">
              FAQ
            </li>
            <div className="flex items-center gap-2 px-2">
              <Button
                size="sm"
                className="flex items-center justify-center w-full bg-[rgba(120,97,255,0.05)] border border-[rgba(120,97,255,0.5)] rounded-[8px] text-[#7861FF] h-[44.8px] font-bold text-[14px] leading-[17px] tracking-[-0.28px]"
              >
                <img
                  src={whatsapp}
                  alt="Ícone de orçamento"
                  className="h-4 w-4 mr-2"
                />
                Fazer orçamento
              </Button>
            </div>
          </ul>
        )}
      </div>
    </nav>
  );
};
