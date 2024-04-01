'use client'
import Image from "next/image";
import Main from "./components/main";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { useScroll } from "framer-motion";
import Footer from "@/components/Footer";
import Experience from "./components/Timeline";
import Backing from "./components/Backing";

export default function Home() {
  const {scrollYProgress} = useScroll()
 
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time : any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
  })
  return (
    <main className="">
      <Navbar progress={scrollYProgress} />
      <Main />
      <Backing />
      <Experience />
      <Footer />
    </main>
  );
}