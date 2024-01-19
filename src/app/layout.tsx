// types
import type { Metadata } from "next";

// utils
import clsx from "clsx";

// styling
import "@/styles/globals.css";
import { Inter } from "next/font/google";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sellmore | Home",
  description: "A portfolio project created by Tommy Byrne",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx("scrollbar-none", font)}>{children}</body>
    </html>
  );
}
