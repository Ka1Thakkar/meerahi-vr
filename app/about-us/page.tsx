'use client'

import Navbar from "@/components/Navbar";
import { useScroll } from "framer-motion";
import Main from "./components/Main";
import Members from "./components/Members";
import Team from "./components/data/team";
import Footer from "@/components/Footer";
import Advisors from "./components/data/advisors";

const Home = () => {
    const {scrollYProgress} = useScroll()
    return (
        <main>
            <Navbar progress={scrollYProgress} buttonColor="#CCE4B4" />
            <Main />
            <Members data={Team} category="Founders" />
            <Members data={Advisors} category="Advisors" />
            <Footer />
        </main>
    );
}
 
export default Home;