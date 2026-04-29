import type { Metadata, Viewport } from "next"
import { Manrope, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Protegrity Insurance | Protection With Integrity",
  description:
    "Independent insurance guidance for home, auto, and life. Personal advisory service from Protegrity Insurance Brokerage.",
  generator: "v0.app",
  icons: {
    icon: "/protegrity-shield.png",
    apple: "/protegrity-shield.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#0b1a2e",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} bg-background`}>
      <body className="font-sans antialiased text-foreground">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
