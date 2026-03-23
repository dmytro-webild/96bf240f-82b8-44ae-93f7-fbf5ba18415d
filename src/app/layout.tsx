import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Inter_Tight } from "next/font/google";



export const metadata: Metadata = {
  title: 'ББ Маркет - Вашият квартален магазин за качествени храни и пици',
  description: 'Открийте свежи хранителни стоки, автентични италиански пици, принцеси, сандвичи и професионални кафета в ББ Маркет, Пазарджик. Качество и удобство на едно място.',
  keywords: ["ББ Маркет, хранителен магазин, пици, италиански пици, принцеси, сандвичи, кафе, професионално кафе, Пазарджик, ул. Георги Бенковски 27, магазин"],
  openGraph: {
    "title": "ББ Маркет - Качествени храни и пици в Пазарджик",
    "description": "Посетете ББ Маркет за свежи хранителни стоки, вкусни пици, сандвичи и кафе. гр. Пазарджик, ул. Георги Бенковски 27. Обадете се на 089 503 8323.",
    "url": "https://bbmarket.bg",
    "siteName": "ББ Маркет",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/man-woman-keeping-social-distance_23-2148626201.jpg",
        "alt": "BB Market store interior"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "ББ Маркет - Качествени храни и пици в Пазарджик",
    "description": "Посетете ББ Маркет за свежи хранителни стоки, вкусни пици, сандвичи и кафе. гр. Пазарджик, ул. Георги Бенковски 27. Обадете се на 089 503 8323.",
    "images": [
      "http://img.b2bpic.net/free-photo/man-woman-keeping-social-distance_23-2148626201.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${interTight.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
