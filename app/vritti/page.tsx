'use client'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Statistics from "@/components/Statistics";
import { useScroll } from "framer-motion";
import stats from "./data/stats.js";
import Text from "./components/AboutText";
import Main from "./components/Main";

const Home = () => {
    const {scrollYProgress} = useScroll()
    return (
        <main>
            <Navbar progress={scrollYProgress} buttonColor="#FFD80D" />
            <Main />
            <Text />
            <Statistics bgColor="#FFF9E4" barColor="#FFD80D" data={stats} />
            <Footer />
        </main>
    );
}
 
export default Home;