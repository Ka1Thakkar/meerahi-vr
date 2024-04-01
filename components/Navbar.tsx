'use client'
import Image from "next/image";
import Logo from '@/public/Navbar/Logo.svg'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { MotionValue, useTransform, motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface NavbarProps{
    progress : MotionValue<number>;
    buttonColor : string
}

const headingFont = Poppins({subsets: ['latin'], weight:['100','200','300','400','500','600','700','800','900']})
const subheadingFont = Poppins({subsets: ['latin'], weight:['100','200','300','400','500','600','700','800','900']})

const navList = [0,1,2,3,4,5,6,7,8]


const Navbar = ({progress, buttonColor} : NavbarProps) => {
    const opacity = useTransform(progress, [0,0.025], [0,1])

    const [isHam, setIsHam] = useState(false)
    const onClick = () => {
        setIsHam(!isHam)
    }
    useEffect(()=>{
        const main = document.getElementById('main')

        const onMouseClick = () => {
            setIsHam(false)
        }

        main?.addEventListener('click', onMouseClick)
    })

    return (
        <nav className="flex fixed top-0 z-[999] w-full h-fit">
            <motion.div style={{opacity: opacity}} className="absolute w-full h-full bg-[#FDFFFC] z-[99]"></motion.div>
            <div className="flex gap-10 z-[9999] items-center px-10 lg:justify-center justify-between w-full py-4">
                <Link href={'/about-us'} className="hidden lg:block">
                    <div role="button" className=" font-light text-lg">
                        About Us
                    </div>
                </Link>
                <div className="hidden lg:block">
                    <DropdownMenu>
                        <DropdownMenuTrigger className='text-lg font-light'>Our Raahs</DropdownMenuTrigger>
                        <DropdownMenuContent className="z-[9999] mt-5">
                            <Link href={'/vasara'}>
                                <DropdownMenuItem>Vasara</DropdownMenuItem>
                            </Link>
                            <Link href={'/soma'}>
                                <DropdownMenuItem>Soma</DropdownMenuItem>
                            </Link>
                            <Link href={'/vritti'}>
                                <DropdownMenuItem>Vritti</DropdownMenuItem>
                            </Link>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <Link href={'/'} className="">
                    <Image src={Logo} alt="logo" className="lg:w-[125px] w-[90px]" />
                </Link>
                <Link href={'/contact-us'}>
                <div role="button" className=" font-light text-lg hidden lg:block">
                    Contact Us
                </div>
                </Link>
                <Link href={'/join-waitlist'}>
                <div role="button" style={{backgroundColor : buttonColor}} className="text-lg px-4 py-1 rounded-xl hidden lg:block">
                    Join Waitlist
                </div>
                </Link>
                    <div role="button" onClick={()=> onClick()} className={cn("cursor-none grid grid-cols-3 gap-y-1 gap-x-1 z-[99999] lg:hidden")}>
                        {navList.map((circle, id) => {
                            return (
                                <div className={ cn('w-[5px] h-[5px] rounded-full bg-[#222725]', isHam === true && id % 2 === 0 ? 'bg-[#CCE4B4]' : 'bg-[#222725]')}></div>
                            )
                        })}
                    </div>
                    <AnimatePresence>
                        {isHam && <Ham setIsHam={setIsHam} />}
                    </AnimatePresence>
                </div>
        </nav>
    );
}
 
export default Navbar;

interface HamProps{
    setIsHam : (isHam : boolean) => void
}

const Ham = ({setIsHam} : HamProps) => {

    const router = useRouter()

    const onClick = (path : string) => {
        setIsHam(false)
        setTimeout(() => {
            router.push(path)
        }, 500)
    }

    return (
        <motion.div
        initial ={{x:'100%'}}
        animate ={{x:0, opacity: 100}}
        exit={{x:'100%'}}
        transition={{duration : 0.25, ease: 'easeInOut'}}
        className="h-screen w-screen lg:w-[40vw] xl:w-[30vw] bg-[#222725] absolute top-0 right-0 flex flex-col justify-between px-10 lg:px-20 py-20 lg:py-20">
            <div className=" flex flex-col items-center justify-center gap-5 h-full">
                <div role='button' onClick={()=> onClick('/')} className={subheadingFont.className + " text-3xl text-[#E4E6C3] z-[99999] font-semibold"}>Home</div>
                <div role='button' onClick={()=> onClick('/about-us')} className={subheadingFont.className + " text-3xl text-[#E4E6C3] z-[99999] font-semibold"}>About Us</div>
                <div>
                    <p className="text-3xl text-[#E4E6C3] z-[99999] font-semibold">Our Raahs</p>
                    <div className=" list-none text-[#EAF0E4] text-2xl font-extralight flex flex-col items-center justify-center mt-2">
                        <div role={'button'} onClick={() => onClick('/varasa')}>Vasara</div>
                        <div role={'button'} onClick={() => onClick('/soma')}>Soma</div>
                        <div role={'button'} onClick={() => onClick('/vritti')}>Vritti</div>
                    </div>
                </div>
                <div role='button' onClick={()=> onClick('/contact-us')} className={subheadingFont.className + " text-3xl text-[#E4E6C3] z-[99999] font-semibold"}>Contact Us</div>
                <div role='button' onClick={()=> onClick('/join-waitlist')} className={subheadingFont.className + " text-3xl text-[#E4E6C3] z-[99999] font-semibold mt-20"}>Join WaitList</div>
            </div>
        </motion.div>
    );
}