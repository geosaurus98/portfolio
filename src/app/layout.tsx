import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { ThemeProvider } from "@/components/ThemeProvider";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { siteUrl } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "George Johnson — Mechatronics Engineer",
    template: "%s — George Johnson",
  },
  description:
    "Final-year Mechatronics Engineering student at the University of Canterbury. Embedded systems, robotics, and control engineering.",
  openGraph: {
    type: "website",
    siteName: "George Johnson",
    title: "George Johnson — Mechatronics Engineer",
    description:
      "Final-year Mechatronics Engineering student at the University of Canterbury. Embedded systems, robotics, and control engineering.",
  },
  twitter: {
    card: "summary_large_image",
    title: "George Johnson — Mechatronics Engineer",
    description:
      "Final-year Mechatronics Engineering student at the University of Canterbury. Embedded systems, robotics, and control engineering.",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "George Johnson",
  url: siteUrl,
  jobTitle: "Mechatronics Engineering Student",
  email: "mailto:george.johnson@outlook.co.nz",
  address: { "@type": "PostalAddress", addressLocality: "Christchurch", addressCountry: "NZ" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "University of Canterbury" },
  sameAs: ["https://github.com/geosaurus98", "https://www.linkedin.com/in/george-johnson-nz"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t='dark';try{t=localStorage.getItem('theme')||'dark';}catch(e){}document.documentElement.setAttribute('data-theme',t);})();`,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <Nav />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
