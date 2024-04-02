'use client'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Lenis from "@studio-freight/lenis";
import { useScroll } from "framer-motion";
import { useEffect } from "react";
import Main from "./components/Main";
import Text from "./components/AboutText";
import Statistics from "@/components/Statistics";
import stats from '@/app/vasara/components/stats'
import Journey from "./components/Journey";

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
            <Navbar progress={scrollYProgress} buttonColor="#FFA65B" />
            <Main />
            <Text />
            <Statistics data={stats} bgColor="#F7E0BD" barColor='#EF8D43' />
            <Journey />
            <Footer />
        </main>
    );
}
 
export default Vasara;