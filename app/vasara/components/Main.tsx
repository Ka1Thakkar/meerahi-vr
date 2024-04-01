import Image from "next/image";
import Illustration from '@/public/Vasara/Illustration.png'

const Main = () => {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:gap-20 px-10 lg:px-40">
            <Image src={Illustration} alt="illustration" quality={100} className="w-full lg:w-5/12" />
            <div className="flex flex-col items-center lg:items-start">
                <h1 className="lg:text-8xl text-7xl font-semibold">
                    Vasara
                </h1>
                <p className="lg:text-4xl text-2xl font-extralight text-center lg:text-left">
                    Companion for <span className="text-[#FFA65B] font-normal">inner balance</span>
                </p>
                <div role='button' onClick={() => {document.getElementById('vasaraText')?.scrollIntoView({behavior : 'smooth'})}} className='mt-7 py-2 px-5 lg:bg-transparent lg:hover:bg-[#FFA65B] lg:hover:rounded-full ease-in-out transition-all duration-150 delay-0 lg:border-4 bg-[#FFA65B] lg:border-[#FFA65B] w-fit rounded-xl font-medium'>
                    More Info
                </div>
            </div>
        </div>
    );
}
 
export default Main;