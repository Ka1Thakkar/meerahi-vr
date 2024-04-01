import Image from "next/image";
import Illustration from '@/public/Vasara/Illustration.png'

const Main = () => {
    return (
        <div className="min-h-screen flex items-center gap-20 px-40">
            <div className="w-5/12">
                <Image src={Illustration} alt="illustration" quality={100} />
            </div>
            <div>
                <h1 className="text-8xl font-semibold">
                    Vasara
                </h1>
                <p className="text-4xl font-extralight">
                    Companion for <span className="text-[#FFA65B] font-normal">inner balance</span>
                </p>
            </div>
        </div>
    );
}
 
export default Main;