'use client'

import Navbar from "@/components/Navbar";
import Statistics from "@/components/Statistics";
import { useScroll } from "framer-motion";
import stats from "./components/data.js";
import Footer from "@/components/Footer";
import Main from "./components/Main";
import Text from "@/app/soma/components/AboutText";

const Home = () => {
    const {scrollYProgress} = useScroll()
    return (
        <main className="min-h-screen">
            <Navbar progress={scrollYProgress} buttonColor="#A0C7CA" />
            <Main />
            <Text />
            <Statistics data={stats} bgColor="#A0C7CA" barColor="#455A64" />
            <Footer />
        </main>
    );
}
 
export default Home;