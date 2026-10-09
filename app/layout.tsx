import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fintech Icons Argentina",
  description:
    "Colección de iconos SVG del ecosistema fintech de Argentina. Bancos, billeteras digitales, cripto, CEDEARs y más.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
