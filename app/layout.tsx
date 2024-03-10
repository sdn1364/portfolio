import type { Metadata } from "next";
import { Orbitron,Comfortaa } from "next/font/google";
import "./globals.css";

const comfortaa = Comfortaa({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Soheyl Delshadnamini | Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${comfortaa.className} text-white bg-gradient-to-bl from-gray-100 to-neutral-100 dark:from-gray-900 dark:to-neutral-900`}>{children}</body>
    </html>
  );
}
