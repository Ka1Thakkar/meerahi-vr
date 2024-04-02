import Image from "next/image";
import Illustration from '@/public/Soma/Illustration.svg'
import { useEffect } from "react";

const Main = () => {
    useEffect(() => {
        const button = document.getElementById('somaButton')
        button?.addEventListener('click', () => {
            document.getElementById('somaText')?.scrollIntoView({behavior : 'smooth'})
        })
    
    })
    return (
        <div className="min-h-screen relative flex flex-col items-center justify-center">
            <div className="absolute w-full h-[100%] flex items-end bottom-0 justify-center">
                <Image src={Illustration} alt="Illustration" quality={100} className="bottom-0 lg:w-8/12" />
            </div>
            <div className="z-[99] justify-center items-center flex flex-col px-10 py-24 lg:mb-60">
                <h1 className="lg:text-8xl text-7xl font-semibold">
                    Soma
                </h1>
                <p className="lg:text-4xl text-2xl font-extralight text-center">
                    Industry leading solution for
                    <br />
                    <span className="font-normal">Insomnia.</span>
                </p>
                <div id="somaButton" role='button' className='mt-7 py-2 px-5 lg:bg-transparent lg:hover:bg-[#BAE8EB] lg:hover:rounded-full bg-[#BAE8EB] ease-in-out transition-all duration-150 delay-0 border-4 border-[#BAE8EB] w-fit rounded-xl font-medium'>
                    More Info
                </div>
            </div>
        </div>
    );
}
 
export default Main;