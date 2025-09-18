import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Démarches Gabon - Simplifiez vos démarches administratives",
  description: "Plateforme officielle pour simplifier vos démarches administratives au Gabon. Informations à jour, processus clairs, gain de temps garanti.",
  keywords: [
    "démarches administratives",
    "Gabon",
    "passeport",
    "carte d'identité",
    "création entreprise",
    "bourse",
    "impôts",
    "DGDI",
    "ANPI",
    "DGFiP"
  ],
  authors: [{ name: "Démarches Gabon" }],
  creator: "Démarches Gabon",
  publisher: "Démarches Gabon",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ]
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://demarches-gabon.ga"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Démarches Gabon - Simplifiez vos démarches administratives",
    description: "Plateforme officielle pour simplifier vos démarches administratives au Gabon. Informations à jour, processus clairs, gain de temps garanti.",
    url: "https://demarches-gabon.ga",
    siteName: "Démarches Gabon",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Démarches Gabon - Plateforme de démarches administratives",
      },
    ],
    locale: "fr_GA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Démarches Gabon - Simplifiez vos démarches administratives",
    description: "Plateforme officielle pour simplifier vos démarches administratives au Gabon.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/demarches-simplifiees-logo/demarches-simplifiees-logo.png" type="image" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
