import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Heritage from "@/components/Heritage";
import Models from "@/components/Models";
import Performance from "@/components/Performance";
import Interior from "@/components/Interior";
import Gallery from "@/components/Gallery";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-carbon-950 text-zinc-100 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Heritage />
        <Models />
        <Performance />
        <Interior />
        <Gallery />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
