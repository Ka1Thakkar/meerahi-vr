import Image from "next/image";
import Illustration from '@/public/Vritta/Illustration.png'
import { useEffect } from "react";

const Main = () => {
    useEffect(() => {
        const button = document.getElementById('vrittiButton')
        button?.addEventListener('click', () => {
            document.getElementById('vrittiText')?.scrollIntoView({behavior : 'smooth'})
        })
    
    })
    return (
        <div className="min-h-screen flex flex-col lg:flex-row-reverse justify-center items-center lg:gap-20 px-10 sm:px-20 2xl:px-40">
            <Image src={Illustration} alt="illustration" quality={100} className="w-full lg:w-5/12" />
            <div className="flex flex-col items-center lg:items-start">
                <h1 className="lg:text-8xl text-7xl font-semibold">
                    Vritti
                </h1>
                <p className="lg:text-4xl text-2xl font-extralight text-center lg:text-left">
                The only evidence-based digital program for people feeling Burned-out
                </p>
                <div id="vrittiButton" role='button' className='mt-7 py-2 px-5 lg:bg-transparent lg:hover:bg-[#FFD80D] lg:hover:rounded-full ease-in-out transition-all duration-150 delay-0 lg:border-4 bg-[#FFD80D] lg:border-[#FFD80D] w-fit rounded-xl font-medium'>
                    More Info
                </div>
            </div>
        </div>
    );
}
 
export default Main;