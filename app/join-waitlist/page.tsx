'use client'

import Image from "next/image";
import Logo from '@/public/Navbar/Logo.svg'
import Link from "next/link";
import { BsClipboard2, BsClipboard2Check, BsInstagram, BsLinkedin } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Clipboard, ClipboardCheck } from "lucide-react";
import Form from "@/components/WaitlistForm";
import Navbar from "@/components/Navbar";
import { useScroll } from "framer-motion";

const Home = () => {
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
        <main className="w-full min-h-screen px-10 lg:px-40 py-24 flex flex-col justify-center">
            <Navbar progress={scrollYProgress} buttonColor="#CCE4B4" />
            <h1 className="text-7xl font-semibold mb-10">Ready to embark on the way to better mental health?</h1>
            <div className="flex flex-col lg:flex-row justify-center gap-20">
                <div className="lg:w-6/12">
                    <p className="font-light text-xl mt-5">
                        Our mission is to revolutionize mental health industry by improving effectiveness of traditional treatments, covering issues ranging from mild cravings to disorders like ADHD. Also providing immersive simulations for soft skill development, safety training, and employee well-being to empower organizations.
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
                        <div className="flex gap-2 items-center group font-light w-fit">
                            <span className="font-medium">
                                Address :
                            </span> Rakesh Kapoor Innovation Centre (RKIC), BITS Pilani, Pilani 333031, Rajasthan
                            <div role="button" className="hidden group-hover:block" onClick={() => {onNumClick('Rakesh Kapoor Innovation Centre (RKIC), BITS Pilani, Pilani 333031, Rajasthan')}}>
                                {!isNumCopied ? <BsClipboard2 /> : <BsClipboard2Check />}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <Form api={'xwkgradn'} />
                </div>
            </div>
        </main>
    );
}
 
export default Home;