import type { Metadata } from "next";
import { Eczar, Hind } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const eczar = Eczar({
  variable: "--font-eczar",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const hind = Hind({
  variable: "--font-hind",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "The AetherVeda Foundation",
  description: "Nourishing Lives. Preserving Legacies. Gaushalas, medical aid, heritage restoration, and sustainability, established in eternal memory of Late Sh. Bankey Bihari Gaur and Late Smt. Chanda Gaur.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${eczar.variable} ${hind.variable}`}>
      <body className="flex min-h-screen flex-col bg-paper text-ink-on-paper antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
