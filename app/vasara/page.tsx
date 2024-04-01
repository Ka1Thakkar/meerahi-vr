'use client'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Lenis from "@studio-freight/lenis";
import { useScroll } from "framer-motion";
import { useEffect } from "react";
import Main from "./components/Main";

const Vasara = () => {
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
        <main className="min-h-screen">
            <Navbar progress={scrollYProgress} />
            <Main />
            <Footer />
        </main>
    );
}
 
export default Vasara;