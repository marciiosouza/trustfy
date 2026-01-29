import { ConnectPage } from "@/pages/connect";
import { DepoimentsPage } from "@/pages/depoiments";
import { FaqPage } from "@/pages/faq";
import { HeroPage } from "@/pages/hero";
import { IntegrationPage } from "@/pages/integration";
import { PaymentsPage } from "@/pages/payments/PaymentsPage";
import { PersonalyPage } from "@/pages/personaly";
import { TechPage } from "@/pages/tech";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <HeroPage />
      <PaymentsPage />
      <TechPage />

      {/* Background Gradient SVG */}
      
      {/* Wrapper with gradient overlay for Depoiments and Connect sections */}
      <div className="relative overflow-hidden">
        {/* SVG Gradient Overlay */}
        <svg
          width="3075"
          height="1073.45"
          viewBox="0 0 927 2074"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-0 top-0 pointer-events-none z-0"
          preserveAspectRatio="xMidYMid slice"
          style={{ left: '-862px', top: '0px', width: '3075px', height: '1262.45px' }}
        >
          <rect
            x="-1151"
            y="1128.05"
            width="1611.43"
            height="1323.88"
            transform="rotate(-44.4294 -851 1498.05)"
            fill="url(#paint0_radial_548_103)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_548_103"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(-308.774 1820.59) scale(786.069 645.802)"
            >
              <stop stopColor="#7861FF" stopOpacity="0.3" />
              <stop offset="1" stopOpacity="0.3" />
            </radialGradient>
          </defs>
        </svg>
        
        {/* Content with relative positioning */}
        <div className="relative z-10">
          <DepoimentsPage />
          <ConnectPage />
        </div>
      </div>

      <PersonalyPage />
      <IntegrationPage />
      <FaqPage />
    </>
  );
}
