import { Roboto } from "next/font/google";
import type { Metadata } from "next";

import "./globals.css";
import { NavbarComponent } from "@/components/Navbar";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "Fixant",
  description: "Construimos tu idea web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={roboto.className}>
        <NavbarComponent></NavbarComponent>

        {children}
      </body>
    </html>
  );
}
