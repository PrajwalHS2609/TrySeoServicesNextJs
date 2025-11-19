"use client";
import "./globals.css";
import Navbar from "./../components/Navbar/Navbar";
import { Archivo } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./../components/Footer/Footer";
import WhatsApp from "./../components/WhatsApp/WhatsApp";
import PopUp from "./../components/PopUp/PopUp";
import "@/components/style.css";
import { usePathname } from "next/navigation";
import LpMedicalNavbar from "./../components/LandingPage/LpMedical/LpMedicalNavbar/LpMedicalNavbar";
import LpPetsNavbar from "./../components/LandingPage/LpPetsClinic/LpPetsNavbar/LpPetsNavbar";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isMedicalLanding = pathname.startsWith("/lp-medical");
  const isPetsLanding = pathname.startsWith("/lp-petclinic");
  return (
    <html lang="en">
      <head>
         <link rel="icon" type="image/png" href="/faviconPerfect.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body className={archivo.className}>
        {/* Correct Navbar Logic */}
        {isMedicalLanding ? (
          <LpMedicalNavbar />
        ) : isPetsLanding ? (
          <LpPetsNavbar />
        ) : (
          <Navbar />
        )}

        {children}
        {/* Footers only on non-landing pages */}
        {!isMedicalLanding && !isPetsLanding && <Footer />}
        {!isMedicalLanding && !isPetsLanding && <WhatsApp />}
        <PopUp />
      </body>
    </html>
  );
}
