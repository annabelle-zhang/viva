import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import DesignedAroundYou from "@/components/DesignedAroundYou";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";
import React, { useEffect, useState } from "react";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 800); // Adjust threshold as needed
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/*background*/}
      <div className="fixed top-0 left-0 w-full h-screen pointer-events-none z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500"
          style={{
            backgroundImage: isScrolled
              ? "none"
              : "url('/viva.png')",
            backgroundColor: isScrolled ? "black" : "transparent",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>

      {/*content*/}
      <div className="min-h-screen relative z-10">
        <Hero />
        <Mission />
        <DesignedAroundYou />
        <WaitlistForm />
        <Footer />
      </div>
    </>
  );
};

export default Index;
