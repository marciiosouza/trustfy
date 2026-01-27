import type { Partner, ArcConfig } from "./types";

export const PARTNERS: Partner[] = [
  {
    id: "bankly",
    name: "bankly",
    logo: "/businnes/logo-bankly.png",
    position: { x: 36.52, y: 0 },
    size: { width: 110, height: 45 },
  },
  {
    id: "stripe",
    name: "Stripe",
    logo: "/businnes/stripe.png",
    position: { x: 56.85, y: 13.27 },
    size: { width: 110, height: 46 },
  },
  {
    id: "rede",
    name: "rede",
    logo: "/businnes/rede.png",
    position: { x: 78.2, y: 17.16 },
    size: { width: 120, height: 40 },
  },
  {
    id: "inter",
    name: "inter",
    logo: "/businnes/banco-inter.png",
    position: { x: 24.72, y: 20.11 },
    size: { width: 110, height: 41 },
  },
  {
    id: "cielo",
    name: "cielo",
    logo: "/businnes/cielo.png",
    position: { x: 51.46, y: 30.83 },
    size: { width: 122, height: 41 },
  },
  {
    id: "pagseguro",
    name: "PagSeguro",
    logo: "/businnes/pag-seguro.png",
    position: { x: 76.52, y: 35.52 },
    size: { width: 120, height: 32 },
  },
  {
    id: "aarin",
    name: "Aarin",
    logo: "/businnes/aarin.png",
    position: { x: 1.69, y: 30.43 },
    size: { width: 100, height: 39 },
  },
  {
    id: "getnet",
    name: "Getnet",
    logo: "/businnes/getnet.png",
    position: { x: 20, y: 39.81 },
    size: { width: 120, height: 26 },
  },
  {
    id: "konduto",
    name: "Konduto",
    logo: "/businnes/konduto.png",
    position: { x: 25.84, y: 54.42 },
    size: { width: 130, height: 27 },
  },
  {
    id: "pagarme",
    name: "pagar.me",
    logo: "/businnes/pagar-me.png",
    position: { x: 61.91, y: 48.66 },
    size: { width: 110, height: 31 },
  },
];

export const ARCS_CONFIG: ArcConfig[] = [
  { radius: 173.5, strokeWidth: 1, opacity: 1 },
  { radius: 264.5, strokeWidth: 1, opacity: 1 },
  { radius: 355.5, strokeWidth: 1, opacity: 1 },
  { radius: 444.5, strokeWidth: 1, opacity: 1 },
];

export const CONNECT_CONTENT = {
  title: "Conectividade Total",
  description:
    "Acesso nativo a uma rede com +XX players de processamento, direto no seu painel de gestão.",
  ctaText: "Fazer orçamento",
  ctaLink: "#orcamento",
} as const;
