// layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Getting started with Next.js and Tailwind CSS",
  description: "A simple starter template to get started with Next.js and Tailwind CSS. This template includes a custom 404 page, a custom document layout, and a custom app layout.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark text-foreground bg-background"> {/* dark theme */}
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
