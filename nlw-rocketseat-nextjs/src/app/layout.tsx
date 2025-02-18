import type { Metadata } from "next";
import "./globals.css";
import { Montserrat, Oxanium } from 'next/font/google'

export const metadata: Metadata = {
  title: "devstage",
};

const oxanium = Oxanium({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-oxanium'
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-montserrat'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oxanium.variable} ${montserrat.variable}`}>
      <body className="bg-gray-900 text-gray-100 antialiased">
        {children}
      </body>
    </html>
  );
}
