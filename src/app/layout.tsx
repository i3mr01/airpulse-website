import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroller } from "@/components/smooth-scroller";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AirPulse - The Universal PC Remote",
  description:
    "Control your PC. Any phone. Anywhere in the house. AirPulse turns your phone into a powerful trackpad and media controller for your Windows computer.",
  metadataBase:
    typeof window === "undefined" ? new URL("https://airpulse.app") : undefined,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "AirPulse - The Universal PC Remote",
    description:
      "Control your PC from any phone. Touchpad, media control, and volume - all in your pocket.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AirPulse - The Universal PC Remote",
    description:
      "Control your Windows PC from iPhone, Android, or iPad. No downloads needed for web version.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-airpulse-950 text-zinc-50`}
      >
        <SmoothScroller>
          <div className="flex min-h-screen flex-col">
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </SmoothScroller>
      </body>
    </html>
  );
}

