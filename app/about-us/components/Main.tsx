'use Client'

import Lenis from "@studio-freight/lenis"
import Image from "next/image"
import { useEffect } from "react"
import Team from '@/public/About Us/Team.png'
import {Calligraffitti, Cedarville_Cursive, Charmonman, Dancing_Script, Dawning_of_a_New_Day } from "next/font/google"
import { cn } from "@/lib/utils"

const decorativeFont = Dawning_of_a_New_Day({subsets: ['latin'], weight: '400'})

const Main = () => {
    useEffect(() => {
        const lenis = new Lenis()
    
        function raf(time : any) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        
        requestAnimationFrame(raf)
      })
    return (
        <div className="min-h-screen 2xl:px-40 py-24">
            <div className=" flex items-center justify-center">
                <div className=" flex flex-col lg:flex-row gap-20">
                    <div className="lg:w-7/12 px-10">
                        <h1 className="lg:text-8xl text-7xl font-semibold">
                            About Us
                        </h1>
                        <h2 className="lg:text-3xl text-2xl font-medium">
                        We Hear You. We've Been There.
                        </h2>
                        <p className="font-extralight text-lg lg:text-xl mt-10">
                        We all know the feeling. Exams got you down? Relationships stressing you out?  Just trying to figure out who you are, can be a battle.  Mental health challenges are real. 
                        <br />
                        <br/>
                        Here's the truth: millions in India face these same struggles. But getting quality help can feel impossible. Stigma and cost create huge barriers. 
                        <br/>
                        <br/>
                        <span className=" font-normal">
                            That's why we created Meerahi.
                        </span> 
                        <br/>
                        <br/>
                        We're a passionate team who believes mental health support shouldn't be a fight. We're revolutionizing mental healthcare in India with VR-powered therapy. It's simple, accessible, and affordable.
                        <br />
                        <br/>
                        Your well-being matters. You deserve to feel your best. We're here to make the journey to a brighter you effortless.
                        Join Meerahi. Take a simple step towards a healthier, happier you.
                        </p>
                    </div>
                    <div className="lg:w-5/12">
                        <Image src={Team} alt="About Us" quality={100} className="lg:rounded-3xl"/>
                    </div>
                </div>
            </div>
            <div className="w-full mt-20">
                <h1 className={cn(" lg:text-6xl text-4xl text-center lg:text-left font-medium text-[#5BB483]", decorativeFont.className)}>
                Simplifying Mental Care
                </h1>
            </div>
        </div>
    );
}
 
export default Main;