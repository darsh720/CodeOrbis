import type { Metadata } from "next";
// 1. Import the font
import { Space_Grotesk } from "next/font/google"; 
import "./globals.css";

// 2. Configure the font
const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space", // Define a CSS variable
});

export const metadata: Metadata = {
  title: "CodeOrbis Technologies",
  description: "The Future of Tech Solutions",
  icons: {
    icon: [
      {
        url: 'public/new.png',
        href: '/new.png',
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 3. Apply the font class to the body */}
      <body className={spaceGrotesk.className}>
        {children}
      </body>
    </html>
  );
}