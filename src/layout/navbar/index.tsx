import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import whatsapp from "/public/whatsapp.svg"

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-zinc-950 border-b border-violet-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Brand */}
          <div className="flex items-center gap-4">
            <img
              src="/public/logo.svg"
              alt="Trustfy Logo"
              className="h-8 w-auto"
            />
          </div>

          {/* Center: Nav Links (desktop) */}
          <ul className="hidden md:flex md:flex-1 md:items-center md:justify-center md:space-x-6">
            <li className="text-sm text-zinc-200 hover:text-violet-800 cursor-pointer">
              Vantagens
            </li>
            <li className="text-sm text-zinc-200 hover:text-violet-800 cursor-pointer">
              Tecnologia
            </li>
            <li className="text-sm text-zinc-200 hover:text-violet-800 cursor-pointer">
              Integrações
            </li>
            <li className="text-sm text-zinc-200 hover:text-violet-800 cursor-pointer">
              API
            </li>
            <li className="text-sm text-zinc-200 hover:text-violet-800 cursor-pointer">
              FAQ
            </li>
          </ul>

          <div className="hidden md:flex md:items-center md:ml-4">
            <Button
              variant={"outline"}
              size="sm"
              className={`
                    w-full bg-violet-950/35 border border-violet-950 
                    text-violet-800 hover:bg-violet-900/50 hover:text-violet-800 
                    transition-discrete align-items-center justify-content-center
                  `}
            >
              <img
                src={whatsapp}
                alt="Ícone de orçamento"
                className="h-4 w-4 mr-2"
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
            <li className="block px-2 py-2 rounded-md text-zinc-200 hover:text-violet-800">
              Vantagens
            </li>
            <li className="block px-2 py-2 rounded-md text-zinc-200 hover:text-violet-800">
              Tecnologia
            </li>
            <li className="block px-2 py-2 rounded-md text-zinc-200 hover:text-violet-800">
              Integrações
            </li>
            <li className="block px-2 py-2 rounded-md text-zinc-200 hover:text-violet-800">
              API
            </li>
            <li className="block px-2 py-2 rounded-md text-zinc-200 hover:text-violet-800">
              FAQ
            </li>
            <div className="flex items-center gap-2 px-2">
              <Button
                size="sm"
                className={`
                    w-full bg-violet-950/35 border border-violet-950 
                    text-violet-800 hover:bg-violet-900/50 hover:text-violet-800 
                    transition-discrete align-items-center justify-content-center
                  `}
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
