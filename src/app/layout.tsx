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
import GeoRedirect from "./geo-redirect";

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
      <script
        dangerouslySetInnerHTML={{
          __html: `
      (function () {
        // read prefix
        const prefix = localStorage.getItem("countryPrefix");
        if (!prefix) return;

        function updateLinks() {
          const links = document.querySelectorAll("a[href]");
          links.forEach(link => {
            const href = link.getAttribute("href");

            // Skip external links
            if (!href || href.startsWith("http")) return;

            // Skip phone and email
            if (href.startsWith("tel:") || href.startsWith("mailto:")) return;

            // Skip already-prefixed
            if (href.startsWith(prefix + "/") || href === prefix) return;

            // Skip if it already contains a country (like /in/...)
            const firstSeg = href.split("/")[1];
            const validCountries = ["in","us","de","ae","uk","ca","fr","au","sa","nl","my","qa","pl","it"];
            if (validCountries.includes(firstSeg)) return;

            // rewrite
            link.setAttribute("href", prefix + href);
          });
        }

        // Run on load
        document.addEventListener("DOMContentLoaded", updateLinks);

        // Run again if hydration changes DOM
        setTimeout(updateLinks, 1000);
        setTimeout(updateLinks, 3000);

      })();
    `,
        }}
      />
      <body className={archivo.className}>
        <GeoRedirect/>
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
