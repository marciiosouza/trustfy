import type { Partner, ArcConfig } from "./types";

export const PARTNERS: Partner[] = [
  {
    id: "bankly",
    name: "bankly",
    logo: "/partners/bankly.svg",
    position: { x: 28, y: 18 },
  },
  {
    id: "stripe",
    name: "Stripe",
    logo: "/partners/stripe.svg",
    position: { x: 42, y: 28 },
  },
  {
    id: "rede",
    name: "rede",
    logo: "/partners/rede.svg",
    position: { x: 58, y: 32 },
  },
  {
    id: "inter",
    name: "inter",
    logo: "/partners/inter.svg",
    position: { x: 22, y: 38 },
  },
  {
    id: "cielo",
    name: "cielo",
    logo: "/partners/cielo.svg",
    position: { x: 42, y: 48 },
  },
  {
    id: "pagseguro",
    name: "PagSeguro",
    logo: "/partners/pagseguro.svg",
    position: { x: 58, y: 52 },
  },
  {
    id: "aarin",
    name: "Aarin",
    logo: "/partners/aarin.svg",
    position: { x: 8, y: 48 },
  },
  {
    id: "getnet",
    name: "Getnet",
    logo: "/partners/getnet.svg",
    position: { x: 18, y: 58 },
  },
  {
    id: "konduto",
    name: "Konduto",
    logo: "/partners/konduto.svg",
    position: { x: 28, y: 72 },
  },
  {
    id: "pagarme",
    name: "pagar.me",
    logo: "/partners/pagarme.svg",
    position: { x: 48, y: 68 },
  },
];

export const ARCS_CONFIG: ArcConfig[] = [
  { radius: 120, strokeWidth: 1, opacity: 0.3 },
  { radius: 180, strokeWidth: 1, opacity: 0.25 },
  { radius: 240, strokeWidth: 1, opacity: 0.2 },
  { radius: 300, strokeWidth: 1, opacity: 0.15 },
  { radius: 360, strokeWidth: 1, opacity: 0.1 },
];

export const CONNECT_CONTENT = {
  title: "Conectividade Total",
  description:
    "Acesso nativo a uma rede com +XX players de processamento, direto no seu painel de gestão.",
  ctaText: "Fazer orçamento",
  ctaLink: "#orcamento",
} as const;
