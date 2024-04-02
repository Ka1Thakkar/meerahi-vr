'use client'
import Image from 'next/image';
import Illustration from '@/public/Home Page/Header-Illustration.png'
import { useRouter } from 'next/navigation';

const Main = () => {
    const router = useRouter()
    const onClick = () => {
        const randomNum = Math.floor(Math.random() * 3 + 1)
        if (randomNum === 1) {
            router.push('/vasara')
        } else if (randomNum === 2) {
            router.push('/soma')
        } else {
            router.push('/vritti')
        }
    }
    return (
        <div className='flex flex-col lg:flex-row justify-center items-center min-h-screen gap-20 py-24 lg:py-0 2xl:px-40 sm:px-20 px-10'>
            <div className='lg:w-5/12 h-fit'>
                <Image src={Illustration} alt="Illustration" quality={100} className='w-fit h-fit object-contain' />
            </div>
            <div className='flex flex-col gap-2 items-center lg:items-start'>
                <h1 className='lg:text-8xl text-6xl font-semibold text-center lg:text-left'>
                    Find your <span className='text-[#5BB483]'>RAAH.</span>
                </h1>
                <p className='lg:text-4xl text-2xl text-center lg:text-left font-extralight'>
                    Accessible & Seamless Well-being.
                </p>
                <div role='button' onClick={() => {onClick()}} className='mt-7 py-2 px-5 bg-[#CCE4B4]/0 hover:bg-[#CCE4B4] hover:rounded-full ease-in-out transition-all duration-150 delay-0 border-4 border-[#CCE4B4] w-fit rounded-xl font-medium'>
                    More Info
                </div>
            </div>
        </div>
    );
}
 
export default Main;