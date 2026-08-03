import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Karibu Academy | Transforming People. Strengthening Businesses.",
  description:
    "Karibu Academy provides practical online and physical training for individuals and organizations. Professional development in customer service, leadership, workplace skills, and more across multiple industries.",
  keywords: [
    "Karibu Academy",
    "professional training",
    "workforce development",
    "customer service training",
    "leadership development",
    "hospitality training",
    "restaurant training",
    "corporate training",
    "Kenya training",
    "online courses",
  ],
  authors: [{ name: "Karibu Academy" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Karibu Academy | Transforming People. Strengthening Businesses.",
    description:
      "Professional training and workforce development for individuals and organizations across multiple industries.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
