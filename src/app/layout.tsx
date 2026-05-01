import type { Metadata } from "next";
import { Sora } from "next/font/google";
import GNB from "@/components/layout/gnb";
import Footer from "@/components/layout/footer";
import "pretendard/dist/web/static/pretendard.css";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "XNEX COMPANY",
  description: "XNEX COMPANY 프로젝트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${sora.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col font-sans">
        <GNB />
        {children}
        <Footer />
      </body>
    </html>
  );
}
