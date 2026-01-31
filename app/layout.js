import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bodie",
  description: "AI consultancy",
  metadataBase: new URL("https://getbodie.ai"),
  openGraph: {
    title: "Bodie",
    description: "AI consultancy",
    url: "https://getbodie.ai",
    siteName: "Bodie",
    images: ["/og.png"],
    type: "website",
  },
};

export default function RootLayout({ children }) {
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
