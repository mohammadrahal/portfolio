import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Mohammad Rahal - Frontend Developer",
  description:
    "Frontend Developer specializing in React.js, Next.js, and WordPress. Creating modern, responsive web applications that drive results.",
  keywords: "Frontend Developer, React.js, Next.js, WordPress, Web Development, Lebanon",
  authors: [{ name: "Mohammad Rahal" }],
  creator: "Mohammad Rahal",
  openGraph: {
    title: "Mohammad Rahal - Frontend Developer",
    description: "Frontend Developer specializing in React.js, Next.js, and WordPress",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}
