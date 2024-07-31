import type { Metadata } from "next";
import { Prata } from "next/font/google";
import "./globals.css";

const prata = Prata({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-prata',
  weight: "400"
});

export const metadata: Metadata = {
  title: "MUSAM",
  description: 'página oficial del Museo Universitario "Santiago Antúnez de Mayolo"',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={prata.className}>{children}</body>
    </html>
  );
}
