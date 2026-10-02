import Navbar from "@/src/components/Navbar";
import WhatsAppButton from "@/src/components/WhatsAppButton";
import About from "@/src/components/About";
import Catalog from "@/src/components/Catalog";
import Sustainability from "@/src/components/Sustainability";
import Contact from "@/src/components/Contact"; 
import Footer from "@/src/components/Footer";
import HeroHeader from "../components/HeroHeader";
import ServicesSection from "../components/ServicesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <WhatsAppButton />
      <HeroHeader/>
      <About />
      <ServicesSection />
      <Catalog />
      <Sustainability />
      <Contact />
      <Footer />
    </main>
  );
}