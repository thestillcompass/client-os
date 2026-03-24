import CTA from "@/components/home/CTA";
import Founder from "@/components/home/Founder";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Problem from "@/components/home/Problem";
import Proof from "@/components/home/Proof";
import Solution from "@/components/home/Solution";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import WhatsAppPopup from "@/components/ui/WhatsAppPopup";
import MobileCTA from "@/components/ui/MobileCTA";


export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Proof />
      <Founder />
      <CTA />
      <Footer />
      <WhatsAppPopup />
      <MobileCTA />
      
    </main>
  );
}