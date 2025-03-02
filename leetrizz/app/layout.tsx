import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "LeetRizz | Level Up Your Texting Game",
  description: "Practice your texting skills, get instant feedback, and climb the leaderboard to become the ultimate Rizz Master.",
  keywords: ["rizz", "texting", "dating", "gen z", "practice", "skills", "leaderboard", "competitive"],
  authors: [{ name: "LeetRizz Team" }],
  openGraph: {
    title: "LeetRizz | Level Up Your Texting Game",
    description: "Practice your texting skills, get instant feedback, and climb the leaderboard to become the ultimate Rizz Master.",
    url: "https://leetrizz.com",
    siteName: "LeetRizz",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LeetRizz - Level Up Your Texting Game",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LeetRizz | Level Up Your Texting Game",
    description: "Practice your texting skills, get instant feedback, and climb the leaderboard to become the ultimate Rizz Master.",
    images: ["/twitter-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
