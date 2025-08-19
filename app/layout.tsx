import type React from "react";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import "@/components/landing-page/styles.css";
import { Suspense } from "react";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Gafah - AI-Powered Solutions for Tomorrow",
  description:
    "Transform your business with cutting-edge AI solutions. We deliver predictive analytics, natural language processing, computer vision, and intelligent automation platforms that drive real-world impact.",
  icons: {
    icon: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/light-logo-9qPvRfO9XkzZMzM3tBGbxbOQbQGzzQ.png",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/light-logo-9qPvRfO9XkzZMzM3tBGbxbOQbQGzzQ.png",
      },
    ],
  },
  generator: "gafah",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <Suspense fallback={null}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
