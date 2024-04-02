'use client'

import Image from "next/image";
import Logo from '@/public/Navbar/Logo.svg'
import Link from "next/link";
import { BsClipboard2, BsClipboard2Check, BsInstagram, BsLinkedin } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Clipboard, ClipboardCheck } from "lucide-react";
import Form from "@/components/Form";
import Navbar from "@/components/Navbar";
import { useScroll } from "framer-motion";

const Footer = () => {
    const {scrollYProgress} = useScroll()
    const [isNumCopied, setIsNumCopied] = useState(false)
    const [isMailCopied, setIsMailCopied] = useState(false)

    const onNumClick = (content : string) => {
        navigator.clipboard.writeText(content)
        setIsNumCopied(true);
        setTimeout(() => {
            setIsNumCopied(false);
        }, 2000)
    }

    const onMailClick = (content : string) => {
        navigator.clipboard.writeText(content)
        setIsMailCopied(true);
        setTimeout(() => {
            setIsMailCopied(false);
        }, 2000)
    }

    return (
        <main className="w-full min-h-screen px-10 sm:px-20 2xl:px-40 py-24 flex flex-col  justify-center">
            <Navbar progress={scrollYProgress} buttonColor="#CCE4B4" />
            <h1 className="text-8xl font-semibold mb-10">
                Get in Touch                
            </h1>
            <div className=" flex flex-col lg:flex-row justify-center gap-20">
                <div className="lg:w-6/12">
                    <p className="font-light text-xl mt-5">
                    Rooted in the belief that everyone deserves to thrive, Meerahi crafts immersive VR experiences to empower individuals and organizations on their journeys to well-being. Imagine a world where mental health is a journey, not a destination. Meerahi is your guide, crafting personalized experiences that empower you to overcome challenges, big or small. From taming cravings to mastering focus, we use innovative tools to unlock your full potential.
                    </p>
                    <div className="flex mt-10 gap-7 text-[#686868] text-3xl items-center">
                        <Link href="https://www.instagram.com/meerahi_vr?igsh=cDk1YXJ6NGVhNjgw" target="_blank">
                            <BsInstagram />
                        </Link>
                        <Link href={"https://www.linkedin.com/company/meerahi/"} target="_blank">
                            <BsLinkedin />
                        </Link>
                    </div>
                    <div className="mt-16 flex flex-col gap-2">
                        <h1 className="text-2xl font-semibold mb-2">
                            Contact Us:
                        </h1>
                        <div className="flex items-center gap-2 group font-light w-fit">
                            <span className="font-medium">
                                Mail :
                            </span> contact@meerahivr.com
                            <div role="button" className="hidden group-hover:block" onClick={() => {onMailClick('contact@meerahivr.com')}}>
                                {!isMailCopied ? <BsClipboard2 /> : <BsClipboard2Check />}
                            </div>
                        </div>
                        <div className="flex gap-2 items-center group font-light w-fit">
                            <span className="font-medium">
                                Phone :
                            </span> +91 72959 84959
                            <div role="button" className="hidden group-hover:block" onClick={() => {onNumClick('+91 72959 84959')}}>
                                {!isNumCopied ? <BsClipboard2 /> : <BsClipboard2Check />}
                            </div>
                        </div>
                        <div className="flex gap-2 group font-light w-fit">
                            <span className="font-medium">
                                Address:
                            </span> Rakesh Kapoor Innovation Centre (RKIC), BITS Pilani, Pilani 333031, Rajasthan
                            <div role="button" className="hidden group-hover:block" onClick={() => {onNumClick('Rakesh Kapoor Innovation Centre (RKIC), BITS Pilani, Pilani 333031, Rajasthan')}}>
                                {!isNumCopied ? <BsClipboard2 /> : <BsClipboard2Check />}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <Form api={'mwkgrajn'} />
                </div>
            </div>
        </main>
    );
}
 
export default Footer;