
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AdvBanner from "@/components/AdvBanner";

export const metadata = {
  title: "Notiva | Aesthetic Stationery & Notebooks for Gen Z",
  description: "Your go-to destination for aesthetic notebooks, planners, stickers, and stationery. Perfect for Gen Z creatives and planners in Egypt.",
  keywords: "notebooks, planners, stickers, stationery, aesthetic, Gen Z, Egypt, creative, journaling",
  authors: [{ name: "Notiva" }],
  creator: "Notiva",
  publisher: "Notiva",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Notiva - Aesthetic Stationery & Notebooks",
    description: "Your go-to destination for aesthetic notebooks, planners, stickers, and stationery.",
    url: "https://notiva.com",
    siteName: "Notiva",
    images: [
      {
        url: "/logo-txt.png",
        width: 1200,
        height: 630,
        alt: "Notiva - Aesthetic Stationery",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Notiva - Aesthetic Stationery & Notebooks",
    description: "Your go-to destination for aesthetic notebooks, planners, stickers, and stationery.",
    images: ["/logo-txt.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50">
        <AdvBanner />
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
