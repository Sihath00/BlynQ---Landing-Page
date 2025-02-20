"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { Navigation } from "../components/navigation/Navigation";
import { PageTransition } from "../components/PageTransition";
import { Home } from "./home/page";
import { About } from "./about/page";
import { Services } from "./services/page";
import { Contact } from "./contact/page";
import  Footer from "../components/footer/Footer";
import { FAQSection } from "./faq/page";

export default function AppContent() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <AnimatePresence mode="wait">
        {pathname === "/" && (
          <PageTransition>
            <Home />
          </PageTransition>
        )}
        {pathname === "/about" && (
          <PageTransition>
            <About />
          </PageTransition>
        )}
        {pathname === "/services" && (
          <PageTransition>
            <Services />
          </PageTransition>
        )}
        {pathname === "/contact" && (
          <PageTransition>
            <Contact />
          </PageTransition>
        )}
        {pathname === "/FAQ" && (
          <PageTransition>
            <FAQSection />
          </PageTransition>
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
}
