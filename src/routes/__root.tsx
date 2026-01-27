import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Navbar } from "@/layout/navbar";
import { Footer } from "@/layout/footer";

const RootLayout = () => (
  <div className="bg-zinc-950 min-h-screen text-zinc-400">
    <Navbar />
    <Outlet />
    <Footer />
    <TanStackRouterDevtools />
  </div>
);

export const Route = createRootRoute({ component: RootLayout });
