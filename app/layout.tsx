import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://witi.cl"
const gtmId = process.env.NEXT_PUBLIC_GTM_ID

export const metadata: Metadata = {
  title: "Fondo Inicia 2025 | Hasta $17M con WiTI | Consultoría CORFO",
  description:
    "Postula al Fondo Inicia 2025 con acompañamiento experto de WiTI. Hasta $17M, asesoría CORFO, focalización y trámite completo.",
  generator: "v0.app",
  keywords: ["Fondo Inicia 2025", "financiamiento CORFO", "postulación CORFO", "WiTI", "consultoría CORFO", "subsidio"],
  icons: {
    icon: [
      {
        url: "/favicon-32.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/favicon-192.png",
        type: "image/png",
        sizes: "192x192",
      },
    ],
    apple: "/favicon-192.png",
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Fondo Inicia 2025 | Hasta $17M con WiTI",
    description:
      "Acompañamiento experto para postular al Fondo Inicia 2025. Gestión completa, focalización y asesoría CORFO.",
    url: siteUrl,
    siteName: "WiTI",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fondo Inicia 2025 | Hasta $17M con WiTI",
    description:
      "Postula al Fondo Inicia 2025 con WiTI: consultoría CORFO, focalización y gestión integral para tu proyecto.",
  },
  themeColor: "#050c3d",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        {gtmId && (
          <>
            <Script id="gtm-base" strategy="afterInteractive">
              {`
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtmId}');
              `}
            </Script>
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              />
            </noscript>
          </>
        )}
        {children}
        <Analytics />
      </body>
    </html>
  )
}
