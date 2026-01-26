import { ConnectPage } from "@/pages/connect";
import { DepoimentsPage } from "@/pages/depoiments";
import { HeroPage } from "@/pages/hero";
import { PaymentsPage } from "@/pages/payments/PaymentsPage";
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
    </>
  );
}
