import type { Metadata } from "next";
export const dynamic = 'force-dynamic';
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Desa Nagarakembang - Website Resmi Pemerintah Desa",
  description: "Selamat datang di website resmi Desa Nagarakembang. Pusat informasi layanan masyarakat, pemerintahan, potensi desa, dan berita terkini seputar Desa Nagarakembang.",
  keywords: ["Desa Nagarakembang", "Pemerintah Desa Nagarakembang", "Website Desa", "Informasi Desa", "Layanan Desa Nagarakembang", "Profil Desa Nagarakembang"],
  openGraph: {
    title: "Desa Nagarakembang - Website Resmi",
    description: "Website resmi pelayanan dan informasi Desa Nagarakembang.",
    url: "https://nagarakembang.desa.id",
    siteName: "Desa Nagarakembang",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Logo Desa Nagarakembang",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-surface font-body-md overflow-x-hidden">
        <Header />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
