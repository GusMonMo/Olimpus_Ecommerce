import type { Metadata } from "next";
import "./globals.css";
import DraggableFAB from './Components/FAB'
import Footer from "./Components/footer";
import Header from "./Components/header";

import { hepta_slab } from "./Components/fonts";

export const metadata: Metadata = {
  title: "Projeto Demonstrativo",
  description: "Projeto demonstrativo para portfólio, apresentando habilidades em desenvolvimento de e-commerce. Site fictício e sem fins comerciais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={hepta_slab.className}>
        <DraggableFAB/>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
