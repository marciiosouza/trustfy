import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Navbar } from "@/layout/navbar";

const RootLayout = () => (
  <div className="bg-zinc-950 min-h-screen text-zinc-400">
    <Navbar />
    <Outlet />
    <TanStackRouterDevtools />
  </div>
);

export const Route = createRootRoute({ component: RootLayout });
