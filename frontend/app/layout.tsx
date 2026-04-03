import "@/app/globals.css"
import type { ReactNode } from "react";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
export const metadata = {
  title: "ComfortBelt",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}