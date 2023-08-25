import "./globals.css";
import type { Metadata } from "next";
import { Golos_Text, Montserrat } from "next/font/google";
import { GlobalContextProvider } from "./context/store";
import Footer from "@/components/Footer/Footer";
import Script from "next/script";

const golos_text = Golos_Text({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: "normal",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "optional",
  weight: ["500"],
  style: "normal",
});

export const metadata: Metadata = {
  title: "Reduza a conta de Luz com Energia Solar | EcoPower",
  description:
    "Use a nossa calculadora da EcoPower para saber o quanto você pode economizar. EcoPower é a energia que move o futuro. Energia Solar ao seu alcance!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <Script
        id="BreadcrumbList"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "item": {
                "@id": "https://www.ecopower.com.br/blog/",
                "name": "Blog"
              }
            },
            {
              "@type": "ListItem",
              "position": 2,
              "item": {
                "@id": "https://www.ecopower.com.br/unidades/",
                "name": "Nossas Unidades"
              }
            },
            {
              "@type": "ListItem",
              "position": 3,
              "item": {
                "@id": "Nossos Clientes",
                "name": "https://www.ecopower.com.br/cases/"
              }
            }
          ]
        }
    `,
        }}
      />
      <Script
        id="Organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `[
            {
                "@context": "http://schema.org",
                "@type": "Organization",
                "name": "EcoPower",
                "legalName": "EcoPower Energia Solar",
                "logo": "https://www.ecopower.com.br/wp-content/uploads/2023/05/Logo-Branca.png.webp",
                "image": "https://www.ecopower.com.br/wp-content/uploads/2023/05/Logo-Branca.png.webp",
                "description": "Use a nossa calculadora para saber o quanto você pode economizar em sua conta de luz. EcoPower é a energia que move o futuro. Somos Eco. Somos Power.",
                "url": "https://www.ecopower.com.br/",
                "sameAs": [
                    "https://www.instagram.com/ecopowerenergia/",
                    "https://www.facebook.com/ecopowerenergia",
                    "https://twitter.com/ecopowerenergia",
                    "https://linkedin.com/company/ecopowerenergia",
                    "https://www.youtube.com/EcoPowerEnergiaSolar",
                    "https://tiktok.com/@ecopowerenergia"
                ],
                "knowsLanguage": [
                    {
                        "@type": "Language",
                        "name": "Português Brasileiro",
                        "alternateName": "pt-BR"
                    }
                ],
                "foundingDate": "1946-07-25",
                "foundingLocation": [
                    {
                        "@type": "Place",
                        "name": "São Paulo - SP"
                    }
                ],
                "funder": [
                    "EcoPower Energia Solar"
                ]
            },
            {
                "@context": "http://schema.org",
                "@type": "WebSite",
                "name": "EcoPower",
                "image": "https://www.ecopower.com.br/wp-content/uploads/2023/05/Logo-Branca.png.webp",
                "description": "Use a nossa calculadora para saber o quanto você pode economizar em sua conta de luz. EcoPower é a energia que move o futuro. Somos Eco. Somos Power.",
                 "url": "https://www.ecopower.com.br/",
                "sameAs": [
                    "https://www.instagram.com/ecopowerenergia/",
                    "https://www.facebook.com/ecopowerenergia",
                    "https://twitter.com/ecopowerenergia",
                    "https://linkedin.com/company/ecopowerenergia",
                    "https://www.youtube.com/EcoPowerEnergiaSolar",
                    "https://tiktok.com/@ecopowerenergia"
                ],
                "inLanguage": [
                    {
                        "@type": "Language",
                        "name": "Português brasileiro",
                        "alternateName": "pt-BR"
                    }
                ],
                "dateCreated": "2016-01-01",
                "copyrightYear": "2022",
                "funder": [
                    "EcoPower Energia Solar"
                ]
            }
        ]
    
    `,
        }}
      />
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${golos_text.className} ${montserrat.className}`}>
        <GlobalContextProvider>{children}</GlobalContextProvider>
        <Footer />
      </body>
    </html>
  );
}
