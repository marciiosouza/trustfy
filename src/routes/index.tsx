import { ConnectPage } from "@/pages/connect";
import { TechPage } from "@/pages/tech";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      {/* <TechPage /> */}
      <ConnectPage />
    </>
  );
}
