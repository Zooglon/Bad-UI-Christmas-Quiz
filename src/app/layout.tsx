import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./styles/main.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OS Christmas Quiz",
  description: "Bad UX Quiz",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
