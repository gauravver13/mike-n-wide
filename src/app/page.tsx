import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import ProductSlider from "@/components/ProductSection";
import ProductSection from "@/components/ProductSection";
import Banner1 from "@/components/ui/Banner";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <div className="h-screen w-full text-7xl bg-white text-black justify-center items-center flex ">MIKE N WIDE
        <Banner1/>
        </div> */}
        <Banner1 />
        <ProductSlider />
        <HeroSection />
        
        <div className="bg-color-primary w-full">
          HELLO
        </div>
        <Footer />


      {/* TODO: 
        Fix the typography and color pallete by default name in v4,- figure out
        Make Components 
        UI-Flow */}
      
    </>
  );
}
