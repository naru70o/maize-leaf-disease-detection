import About from "@/components/About";
import { FAQs } from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Subcription } from "@/components/Subcription";
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <FAQs />
      <Subcription />
      {/* <Footer /> */}
    </>
  );
}
