import { HeroPage } from "@/pages/hero";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <HeroPage />
  );
}
