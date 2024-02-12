import Hero from "@/components/home/Hero";
import "./common.css";
import Nuestra from "@/components/home/Nuestra";
import Marca from "@/components/home/Marca";
import Slots from "@/components/home/Slots";
import Jackpot from "@/components/home/Jackpot";
import Plataforma from "@/components/home/Plataforma";
import Vivo from "@/components/home/Vivo";
import CasinoNight from "@/components/home/CasinoNight";
import Elegirnos from "@/components/home/Elegirnos";
import NuestrasOfertas from "@/components/home/NuestrasOfertas";
import Luxury from "@/components/home/Luxury";
import Platinum from "@/components/home/Platinum";
import Nosotros from "@/components/home/Nosotros";
import Faqs from "@/components/home/Faqs";
import Lanza from "@/components/home/Lanza";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Nuestra />
      <Marca />
      <Slots />
      <div className="bg-dark-green">
        <Jackpot />
        <Plataforma />
        <Vivo />
      </div>
      <CasinoNight />
      <div className="bg-dark-green">
        <Elegirnos />
        <NuestrasOfertas />
        <Luxury />
        <Platinum />
        <Nosotros />
        <Faqs />
        <Lanza />
      </div>
      <Footer />
    </>
  );
}
