import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Know More...",
  description:
    "Welcome to Know More..., where curiosity meets knowledge! Dive into a world of informative and engaging articles covering a myriad of topics. From the latest trends to timeless wisdom, our blog is your go-to source for expanding your understanding. Join us on a journey of discovery, exploration, and enlightenment. Stay informed, stay inspired, and Know More...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className + "bg-[#17181c] flex flex-col min-h-screen"}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
