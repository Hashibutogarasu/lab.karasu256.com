import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AppMetaSetter from "@/componetns/ui/app-meta-setter";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Karasu Lab",
  description: "Karasu Lab site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <AppMetaSetter props={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </AppMetaSetter>
    </html>
  );
}
