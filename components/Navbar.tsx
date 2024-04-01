import Image from "next/image";
import Logo from '@/public/Navbar/Logo.svg'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { MotionValue, useTransform, motion } from "framer-motion";
import Link from "next/link";

interface NavbarProps{
    progress : MotionValue<number>
}

const Navbar = ({progress} : NavbarProps) => {
    const opacity = useTransform(progress, [0,0.025], [0,1])

    return (
        <nav className="flex fixed top-0 z-[999] w-full items-center lg:justify-center justify-between gap-10 h-fit py-4">
            <motion.div style={{opacity: opacity}} className="absolute w-full h-full bg-[#FDFFFC] z-[99]"></motion.div>
            <div className="flex gap-10 z-[9999] items-center px-10">
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
                            <DropdownMenuItem>Soma</DropdownMenuItem>
                            <DropdownMenuItem>Sparsh</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <Link href={'/'} className="">
                    <Image src={Logo} alt="logo" className="lg:w-[125px] w-[90px]" />
                </Link>
                <div role="button" className=" font-light text-lg hidden lg:block">
                    Contact Us
                </div>
                <div role="button" className="text-lg px-4 py-1 bg-[#CCE4B4] rounded-xl hidden lg:block">
                    Join Waitlist
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;