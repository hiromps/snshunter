import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SNSHunter — Run your creator marketing on autopilot",
  description:
    "AI agents find, research and reach out to viral creators that fit your app or brand — so you never scroll for good creators again.",
  openGraph: {
    title: "SNSHunter — Run your creator marketing on autopilot",
    description:
      "AI agents find, research and reach out to viral creators that fit your app or brand.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} antialiased`}
    >
      <body>
        {/* デモ動画CDNへ早期接続してポスター表示後の再生開始を短縮（SSRでheadへホイスト） */}
        <link
          rel="preconnect"
          href="https://framerusercontent.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="//framerusercontent.com" />
        {children}
      </body>
    </html>
  );
}
