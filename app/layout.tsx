import type { Metadata } from "next";
import { Hind, Dancing_Script } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { IntroLoader } from "@/components/IntroLoader";

const hind = Hind({
  variable: "--font-hind",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const signature = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "The AetherVeda Foundation",
  description: "Nourishing Lives. Preserving Legacies. Gaushalas, medical aid, heritage restoration, and sustainability, established in eternal memory of Late Sh. Bankey Bihari Gaur and Late Smt. Chanda Gaur.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${hind.variable} ${signature.variable}`}>
      <body className="flex min-h-screen flex-col bg-paper text-ink-on-paper antialiased">
        <IntroLoader />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
