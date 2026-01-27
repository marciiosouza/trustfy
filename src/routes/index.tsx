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
      <DepoimentsPage />
      <ConnectPage />
      <PersonalyPage />
      <IntegrationPage />
      <FaqPage />
    </>
  );
}
