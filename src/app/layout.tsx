import "./globals.css";
import type { Metadata } from "next";
import { Golos_Text } from "next/font/google";
import { GlobalContextProvider } from "./context/store";
import Footer from "@/components/Footer/Footer";

const golos_text = Golos_Text({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: "normal",
});

export const metadata: Metadata = {
  title: "Eco Power",
  description: "Energia Solar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={golos_text.className}>
        <GlobalContextProvider>{children}</GlobalContextProvider>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
