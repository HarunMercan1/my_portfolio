import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

// Font configurations
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

// SEO Metadata
export const metadata: Metadata = {
  title: {
    default: "Harun Reşit Mercan | Bilgisayar Mühendisi",
    template: "%s | Harun Reşit Mercan",
  },
  description:
    "Harun Reşit Mercan - Bilgisayar Mühendisi. Modern web teknolojileri, mobil uygulama geliştirme ve Full Stack yazılım projeleri.",
  keywords: [
    "Bilgisayar Mühendisi",
    "Frontend Developer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Flutter",
    "Portfolyo",
  ],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://yourwebsite.com",
    siteName: "Portfolyo",
    title: "Portfolyo | Bilgisayar Mühendisi",
    description: "Bilgisayar Mühendisi portfolyo sitesi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolyo | Bilgisayar Mühendisi",
    description: "Bilgisayar Mühendisi portfolyo sitesi",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          themes={["light", "dark"]}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
