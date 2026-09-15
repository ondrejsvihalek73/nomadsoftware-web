import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import Problems from "@/components/Problems";
import SquadModel from "@/components/SquadModel";
import Services from "@/components/Services";
import AIDelivery from "@/components/AIDelivery";
import Principles from "@/components/Principles";
import Engagements from "@/components/Engagements";
import Network from "@/components/Network";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Industries />
        <Problems />
        <SquadModel />
        <Services />
        <AIDelivery />
        <Principles />
        <Engagements />
        <Network />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
