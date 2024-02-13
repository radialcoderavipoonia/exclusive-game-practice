"use client";
import { useEffect } from "react";
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
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  // Initialize AOS library on component mount
  useEffect(() => {
    AOS.init({
        duration: 1000,
        once: true,
      }); // Initialize AOS
  }, []);

  return (
    <>
      {/* Hero section */}
      <Hero />
      {/* Nuestra section */}
      <Nuestra />
      {/* Marca section */}
      <Marca />
      {/* Slots section */}
      <Slots />
      {/* Jackpot section */}
      <div className="bg-[url('/assets/images/background/jackpot_image.webp')] md:bg-100 bg-cover bg-no-repeat xl:py-60 lg:py-40 md:py-32 pt-20 pb-44">
        <Jackpot />
        <Plataforma />
        <Vivo />
      </div>
      {/* Casino Night section */}
      <CasinoNight />
      {/* Elegirnos section */}
      <div className="bg-[url('/assets/images/background/elegirnos_image.webp')] lg:bg-100 bg-cover bg-no-repeat xl:pt-40 lg:pt-32 md:pt-20 pt-10">
        <Elegirnos />
      </div>
      {/* Other sections */}
      <div className="bg-dark-green mt-[-1px]">
        <NuestrasOfertas />
        <Luxury />
        <Platinum />
        <Nosotros />
        <Faqs />
        <Lanza />
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
}
